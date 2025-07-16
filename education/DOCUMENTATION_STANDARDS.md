# Documentation Standards for Contract Library

## Overview

This document defines the documentation standards for the FlowLingo Contract Library. All contracts must follow these standards to ensure consistency and educational value.

## Directory Structure

Each contract must follow this structure:

```
contracts/[level]/[contract-name]/
├── contract.cdc          # Main contract code
├── README.md            # Educational documentation
├── metadata.json        # Structured metadata
├── transactions/        # Example transactions
│   ├── setup.cdc
│   ├── mint.cdc
│   └── transfer.cdc
├── scripts/            # Query scripts
│   ├── get_balance.cdc
│   └── get_metadata.cdc
└── tests/              # Test files
    └── contract_test.cdc
```

## Contract Code Standards

### File Header
Every contract must start with a comprehensive header:

```cadence
// [Contract Name] - [Brief Description]
// 
// This contract demonstrates [key concepts]
// Level: [Beginner/Intermediate/Advanced/Fluent]
//
// Learning Objectives:
// - [Objective 1]
// - [Objective 2]
// - [Objective 3]
```

### Code Comments
- **Inline Comments**: Explain complex logic and Cadence-specific concepts
- **Function Comments**: Document parameters, return values, and purpose
- **Section Comments**: Separate major sections (Events, Resources, Functions)

### Naming Conventions
- **Contracts**: PascalCase (e.g., `BasicNFT`, `SimpleToken`)
- **Functions**: camelCase (e.g., `mintNFT`, `getBalance`)
- **Variables**: camelCase (e.g., `totalSupply`, `ownerAddress`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_SUPPLY`, `CONTRACT_VERSION`)

## README.md Standards

### Required Sections

1. **Title and Description**
   - Clear, descriptive title
   - Brief explanation of contract purpose

2. **Conceptos Clave (Key Concepts)**
   - List of Cadence concepts demonstrated
   - Brief explanation of each concept

3. **Código Explicado (Code Explained)**
   - Breakdown of important code sections
   - Explanation of Cadence-specific patterns

4. **Casos de Uso (Use Cases)**
   - Real-world applications
   - When to use this pattern

5. **Cómo Usar (How to Use)**
   - Deployment instructions
   - Example transactions and scripts

6. **Ejercicios (Exercises)**
   - Suggested modifications
   - Learning challenges

7. **Metadata**
   - Difficulty level
   - Estimated time
   - Prerequisites

### Writing Style
- **Language**: Spanish (primary) with English technical terms
- **Tone**: Educational and encouraging
- **Complexity**: Appropriate for the contract level
- **Examples**: Include practical, runnable code examples

## metadata.json Standards

### Required Fields

```json
{
  "name": "string",
  "level": "beginner|intermediate|advanced|fluent",
  "concepts": ["array", "of", "concepts"],
  "dependencies": ["array", "of", "dependencies"],
  "estimatedTime": "number (minutes)",
  "prerequisites": ["array", "of", "prerequisites"],
  "tags": ["array", "of", "tags"],
  "description": "string",
  "learningObjectives": ["array", "of", "objectives"],
  "difficulty": {
    "conceptual": "1-5",
    "technical": "1-5", 
    "practical": "1-5"
  },
  "version": "semver",
  "author": "string",
  "created": "YYYY-MM-DD",
  "updated": "YYYY-MM-DD"
}
```

### Field Descriptions

- **name**: Contract name (PascalCase)
- **level**: Difficulty level (beginner, intermediate, advanced, fluent)
- **concepts**: Cadence concepts demonstrated
- **dependencies**: Other contracts this depends on
- **estimatedTime**: Time to complete in minutes
- **prerequisites**: Contracts that should be studied first
- **tags**: Searchable keywords
- **description**: Brief description for search/discovery
- **learningObjectives**: What students will learn
- **difficulty**: Granular difficulty ratings (1-5 scale)

## Transaction and Script Standards

### Transaction Files
- **Purpose**: Clear comment explaining what the transaction does
- **Parameters**: Document all parameters with types
- **Error Handling**: Include appropriate error handling
- **Logging**: Add helpful log statements

### Script Files
- **Purpose**: Clear comment explaining what the script queries
- **Return Type**: Document return type and format
- **Parameters**: Document any input parameters
- **Examples**: Include example usage in comments

## Test Standards

### Test Coverage
- **Initialization**: Test contract deployment and initialization
- **Core Functions**: Test all public functions
- **Edge Cases**: Test boundary conditions and error cases
- **Integration**: Test interactions between functions

### Test Structure
```cadence
import Test
import ContractName from "../contract.cdc"

pub fun setup() {
    // Setup test environment
}

pub fun testFunctionName() {
    // Test specific functionality
    Test.assert(condition, message: "Descriptive message")
}
```

## Quality Checklist

Before submitting a contract, verify:

- [ ] Contract compiles with Flow CLI
- [ ] All required documentation files present
- [ ] README.md follows template structure
- [ ] metadata.json has all required fields
- [ ] Code has appropriate comments
- [ ] Transactions and scripts are functional
- [ ] Tests cover main functionality
- [ ] Naming conventions followed
- [ ] Educational value is clear
- [ ] Appropriate for stated difficulty level

## Level-Specific Requirements

### Beginner Level
- **Comments**: Extensive explanations of basic concepts
- **Complexity**: Single contract, linear flow
- **Concepts**: One primary concept per contract
- **Examples**: Simple, clear use cases

### Intermediate Level
- **Comments**: Focus on intermediate patterns
- **Complexity**: Multiple functions, some interactions
- **Concepts**: Combination of 2-3 concepts
- **Examples**: More realistic scenarios

### Advanced Level
- **Comments**: Explain complex patterns and optimizations
- **Complexity**: Multiple contracts, complex interactions
- **Concepts**: Advanced Cadence features
- **Examples**: Production-like scenarios

### Fluent Level
- **Comments**: Focus on best practices and architecture
- **Complexity**: Enterprise-grade implementations
- **Concepts**: Expert-level patterns
- **Examples**: Real-world production cases

## Validation

All contracts are automatically validated using:
- Flow CLI compilation check
- Documentation completeness check
- Metadata validation
- Test execution
- Style guide compliance

Use the validation scripts:
```bash
# Node.js version
node scripts/validate-contracts.js

# PowerShell version
./scripts/validate-contracts.ps1
```