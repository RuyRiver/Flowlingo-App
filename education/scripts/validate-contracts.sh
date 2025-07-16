#!/bin/bash

# Contract Library Validation Script
# Validates all contracts in the library for compilation and standards compliance

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Counters
TOTAL_CONTRACTS=0
PASSED_CONTRACTS=0
FAILED_CONTRACTS=0
ERRORS=()

log_message() {
    local message="$1"
    local type="${2:-INFO}"
    local timestamp=$(date +"%H:%M:%S")
    
    case $type in
        "SUCCESS")
            echo -e "[$timestamp] ${GREEN}✅ $message${NC}"
            ;;
        "ERROR")
            echo -e "[$timestamp] ${RED}❌ $message${NC}"
            ;;
        "WARNING")
            echo -e "[$timestamp] ${YELLOW}⚠️  $message${NC}"
            ;;
        "INFO")
            echo -e "[$timestamp] ${CYAN}🔍 $message${NC}"
            ;;
        *)
            echo "[$timestamp] $message"
            ;;
    esac
}

check_flow_cli() {
    # Try different ways to find flow command (Windows compatibility)
    local flow_cmd=""
    
    if command -v flow &> /dev/null; then
        flow_cmd="flow"
    elif command -v flow.exe &> /dev/null; then
        flow_cmd="flow.exe"
    elif [[ -n "$PROGRAMFILES" ]] && [[ -f "$PROGRAMFILES/Flow/flow.exe" ]]; then
        flow_cmd="$PROGRAMFILES/Flow/flow.exe"
    else
        # Try to use PowerShell to run flow (Windows fallback)
        if powershell.exe -Command "flow version" &> /dev/null; then
            flow_cmd="powershell.exe -Command flow"
        else
            log_message "Flow CLI not found. Please install Flow CLI first." "ERROR"
            exit 1
        fi
    fi
    
    local flow_version=$($flow_cmd version 2>/dev/null | head -1 || echo "unknown")
    log_message "Using Flow CLI: $flow_version" "INFO"
    
    # Export the flow command for use in other functions
    export FLOW_CMD="$flow_cmd"
}

find_contracts() {
    local contracts_dir="$1"
    local contracts=()
    
    for level in beginner intermediate advanced fluent shared; do
        local level_dir="$contracts_dir/$level"
        if [[ -d "$level_dir" ]]; then
            while IFS= read -r -d '' file; do
                contracts+=("$file")
            done < <(find "$level_dir" -name "*.cdc" -type f -print0)
        fi
    done
    
    echo "${contracts[@]}"
}

validate_contract() {
    local contract_path="$1"
    local contract_name=$(basename "$contract_path")
    local relative_path=${contract_path#*contracts/}
    
    log_message "Validating $relative_path..." "INFO"
    
    # Check if file exists
    if [[ ! -f "$contract_path" ]]; then
        log_message "$relative_path - FAILED: Contract file not found" "ERROR"
        ((FAILED_CONTRACTS++))
        ERRORS+=("$relative_path: Contract file not found")
        return 1
    fi
    
    # Basic syntax check
    if ! grep -q "contract\|pub contract" "$contract_path"; then
        log_message "$relative_path - FAILED: No contract declaration found" "ERROR"
        ((FAILED_CONTRACTS++))
        ERRORS+=("$relative_path: No contract declaration found")
        return 1
    fi
    
    # Try to compile with Flow CLI
    if ! $FLOW_CMD cadence parse "$contract_path" &>/dev/null; then
        local error_output=$($FLOW_CMD cadence parse "$contract_path" 2>&1)
        log_message "$relative_path - FAILED: Flow CLI compilation failed" "ERROR"
        ((FAILED_CONTRACTS++))
        ERRORS+=("$relative_path: Flow CLI compilation failed - $error_output")
        return 1
    fi
    
    log_message "$relative_path - PASSED" "SUCCESS"
    ((PASSED_CONTRACTS++))
    return 0
}

show_summary() {
    echo
    log_message "Validation Summary:" "INFO"
    echo "Total contracts: $TOTAL_CONTRACTS"
    echo -e "Passed: ${GREEN}$PASSED_CONTRACTS${NC}"
    echo -e "Failed: ${RED}$FAILED_CONTRACTS${NC}"
    
    if [[ ${#ERRORS[@]} -gt 0 ]]; then
        echo
        echo -e "${RED}❌ Errors:${NC}"
        for error in "${ERRORS[@]}"; do
            echo -e "  ${RED}- $error${NC}"
        done
    fi
    
    if [[ $FAILED_CONTRACTS -eq 0 ]]; then
        echo
        echo -e "${GREEN}🎉 All contracts passed validation!${NC}"
    else
        echo
        echo -e "${YELLOW}⚠️  $FAILED_CONTRACTS contracts failed validation.${NC}"
        exit 1
    fi
}

main() {
    log_message "Starting contract validation..." "INFO"
    
    # Check Flow CLI
    check_flow_cli
    
    # Find contracts
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    local contracts_dir="$script_dir/../contracts"
    
    if [[ ! -d "$contracts_dir" ]]; then
        log_message "Contracts directory not found: $contracts_dir" "ERROR"
        exit 1
    fi
    
    local contracts=($(find_contracts "$contracts_dir"))
    TOTAL_CONTRACTS=${#contracts[@]}
    
    if [[ $TOTAL_CONTRACTS -eq 0 ]]; then
        log_message "No contracts found to validate." "WARNING"
        exit 0
    fi
    
    log_message "Found $TOTAL_CONTRACTS contracts to validate" "INFO"
    
    # Validate each contract
    for contract in "${contracts[@]}"; do
        validate_contract "$contract"
    done
    
    # Show summary
    show_summary
}

# Run main function
main "$@"