// personalized_greeting.cdc
// Transacción que demuestra cómo llamar funciones que retornan valores

import HelloWorld from 0xf8d6e0586b0a20c7

transaction(userName: String) {
    
    prepare(signer: &Account) {
        log("Preparando saludo personalizado para: ".concat(userName))
    }
    
    execute {
        // Obtener el saludo personalizado
        let personalizedMessage = HelloWorld.personalizedGreeting(name: userName)
        
        // Mostrar el resultado
        log("Saludo personalizado: ".concat(personalizedMessage))
        
        // También podemos obtener el saludo básico
        let basicGreeting = HelloWorld.hello()
        log("Saludo básico: ".concat(basicGreeting))
        
        // Demostrar operaciones matemáticas
        let sum = HelloWorld.addNumbers(a: 5, b: 3)
        log("5 + 3 = ".concat(sum.toString()))
        
        // Demostrar condicionales
        let isPos = HelloWorld.isPositive(number: 10)
        let isPosString = isPos ? "true" : "false"
        log("¿Es 10 positivo? ".concat(isPosString))
    }
}