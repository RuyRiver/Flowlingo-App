#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Contract Library Validation Script
 * Validates all contracts in the library for compilation and standards compliance
 */

class ContractValidator {
  constructor() {
    this.contractsDir = path.join(__dirname, '..', 'contracts');
    this.results = {
      total: 0,
      passed: 0,
      failed: 0,
      errors: []
    };
  }

  /**
   * Find all .cdc files in the contracts directory
   */
  findContracts() {
    const contracts = [];
    const levels = ['beginner', 'intermediate', 'advanced', 'fluent', 'shared'];
    
    levels.forEach(level => {
      const levelDir = path.join(this.contractsDir, level);
      if (fs.existsSync(levelDir)) {
        this.findContractsInDir(levelDir, contracts, level);
      }
    });
    
    return contracts;
  }

  /**
   * Recursively find contracts in a directory
   */
  findContractsInDir(dir, contracts, level) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        this.findContractsInDir(itemPath, contracts, level);
      } else if (item.endsWith('.cdc')) {
        contracts.push({
          path: itemPath,
          relativePath: path.relative(this.contractsDir, itemPath),
          level: level,
          name: path.basename(item, '.cdc')
        });
      }
    });
  }

  /**
   * Validate a single contract
   */
  validateContract(contract) {
    console.log(`Validating ${contract.relativePath}...`);
    
    try {
      // Check if contract file exists and is readable
      if (!fs.existsSync(contract.path)) {
        throw new Error('Contract file not found');
      }

      // Read contract content
      const content = fs.readFileSync(contract.path, 'utf8');
      
      // Basic syntax checks
      this.validateSyntax(content, contract);
      
      // Try to compile with Flow CLI
      this.compileContract(contract);
      
      // Validate documentation
      this.validateDocumentation(contract);
      
      console.log(`✅ ${contract.relativePath} - PASSED`);
      this.results.passed++;
      
    } catch (error) {
      console.log(`❌ ${contract.relativePath} - FAILED: ${error.message}`);
      this.results.failed++;
      this.results.errors.push({
        contract: contract.relativePath,
        error: error.message
      });
    }
  }

  /**
   * Basic syntax validation
   */
  validateSyntax(content, contract) {
    // Check for basic Cadence structure
    if (!content.includes('contract') && !content.includes('pub contract')) {
      throw new Error('No contract declaration found');
    }
    
    // Check for balanced braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    
    if (openBraces !== closeBraces) {
      throw new Error('Unbalanced braces detected');
    }
  }

  /**
   * Compile contract with Flow CLI
   */
  compileContract(contract) {
    try {
      // Use Flow CLI to check syntax
      execSync(`flow cadence parse ${contract.path}`, { 
        stdio: 'pipe',
        cwd: path.join(__dirname, '..')
      });
    } catch (error) {
      throw new Error(`Flow CLI compilation failed: ${error.message}`);
    }
  }

  /**
   * Validate contract documentation
   */
  validateDocumentation(contract) {
    const contractDir = path.dirname(contract.path);
    const readmePath = path.join(contractDir, 'README.md');
    const metadataPath = path.join(contractDir, 'metadata.json');
    
    // Check for README.md (optional for shared contracts)
    if (!contract.level.includes('shared') && !fs.existsSync(readmePath)) {
      console.warn(`⚠️  Missing README.md for ${contract.relativePath}`);
    }
    
    // Check for metadata.json (optional for shared contracts)
    if (!contract.level.includes('shared') && !fs.existsSync(metadataPath)) {
      console.warn(`⚠️  Missing metadata.json for ${contract.relativePath}`);
    }
  }

  /**
   * Run validation for all contracts
   */
  async run() {
    console.log('🔍 Starting contract validation...\n');
    
    const contracts = this.findContracts();
    this.results.total = contracts.length;
    
    if (contracts.length === 0) {
      console.log('No contracts found to validate.');
      return;
    }
    
    console.log(`Found ${contracts.length} contracts to validate\n`);
    
    // Validate each contract
    contracts.forEach(contract => {
      this.validateContract(contract);
    });
    
    // Print summary
    this.printSummary();
  }

  /**
   * Print validation summary
   */
  printSummary() {
    console.log('\n📊 Validation Summary:');
    console.log(`Total contracts: ${this.results.total}`);
    console.log(`Passed: ${this.results.passed}`);
    console.log(`Failed: ${this.results.failed}`);
    
    if (this.results.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.results.errors.forEach(error => {
        console.log(`  - ${error.contract}: ${error.error}`);
      });
    }
    
    if (this.results.failed === 0) {
      console.log('\n🎉 All contracts passed validation!');
    } else {
      console.log(`\n⚠️  ${this.results.failed} contracts failed validation.`);
      process.exit(1);
    }
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new ContractValidator();
  validator.run().catch(error => {
    console.error('Validation failed:', error);
    process.exit(1);
  });
}

module.exports = ContractValidator;