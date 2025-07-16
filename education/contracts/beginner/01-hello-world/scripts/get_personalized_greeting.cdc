// get_personalized_greeting.cdc
// Script para obtener un saludo personalizado

import HelloWorld from 0xf8d6e0586b0a20c7

access(all) fun main(name: String): String {
    // Obtener saludo personalizado
    let personalizedGreeting = HelloWorld.personalizedGreeting(name: name)
    
    log("Saludo personalizado para ".concat(name).concat(": ").concat(personalizedGreeting))
    
    return personalizedGreeting
}