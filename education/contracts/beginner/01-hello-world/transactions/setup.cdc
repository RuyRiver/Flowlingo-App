// setup.cdc
// Transacción para desplegar el contrato HelloWorld
// Esta transacción debe ser ejecutada por el propietario de la cuenta

transaction {
    prepare(signer: &Account) {
        // Verificar si el contrato ya existe
        if signer.contracts.get(name: "HelloWorld") != nil {
            log("El contrato HelloWorld ya está desplegado")
            return
        }
        
        // Código del contrato (normalmente se leería de un archivo)
        let contractCode = "/* Aquí iría el código del contrato */"
        
        // Desplegar el contrato
        signer.contracts.add(name: "HelloWorld", code: contractCode.utf8)
        
        log("Contrato HelloWorld desplegado exitosamente")
    }
    
    execute {
        log("Transacción de setup completada")
    }
}