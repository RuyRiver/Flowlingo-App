// get_greeting.cdc
// Script para obtener el saludo actual del contrato HelloWorld
// Los scripts son de solo lectura y no modifican el estado

import HelloWorld from 0xf8d6e0586b0a20c7

access(all) fun main(): String {
    // Llamar a la función hello() del contrato
    let currentGreeting = HelloWorld.hello()
    
    // Los scripts pueden hacer log para debugging
    log("Saludo actual: ".concat(currentGreeting))
    
    // Retornar el saludo
    return currentGreeting
}