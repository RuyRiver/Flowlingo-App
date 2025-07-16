// change_greeting.cdc
// Transacción para cambiar el saludo en el contrato HelloWorld

import HelloWorld from 0xf8d6e0586b0a20c7

transaction(newGreeting: String) {
    
    prepare(signer: &Account) {
        // En este caso no necesitamos preparar nada especial
        // pero la fase prepare es requerida en todas las transacciones
        log("Preparando transacción para cambiar saludo")
    }
    
    execute {
        // Llamar a la función changeGreeting del contrato
        HelloWorld.changeGreeting(newGreeting: newGreeting)
        
        log("Saludo cambiado a: ".concat(newGreeting))
    }
    
    post {
        // Verificar que el cambio se realizó correctamente
        HelloWorld.greeting == newGreeting: "El saludo no se actualizó correctamente"
    }
}