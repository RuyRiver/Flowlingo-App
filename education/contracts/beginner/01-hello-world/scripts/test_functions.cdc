// test_functions.cdc
// Script para probar todas las funciones del contrato HelloWorld

import HelloWorld from 0xf8d6e0586b0a20c7

access(all) fun main(): {String: AnyStruct} {
    // Crear un diccionario para almacenar los resultados
    let results: {String: AnyStruct} = {}
    
    // Probar función hello()
    let greeting = HelloWorld.hello()
    results["greeting"] = greeting
    
    // Probar función personalizedGreeting()
    let personalizedGreeting = HelloWorld.personalizedGreeting(name: "Cadence")
    results["personalizedGreeting"] = personalizedGreeting
    
    // Probar función addNumbers()
    let sum = HelloWorld.addNumbers(a: 10, b: 5)
    results["sum"] = sum
    
    // Probar función isPositive() con número positivo
    let isPositiveTest1 = HelloWorld.isPositive(number: 7)
    results["isPositive_7"] = isPositiveTest1
    
    // Probar función isPositive() con número negativo
    let isPositiveTest2 = HelloWorld.isPositive(number: -3)
    results["isPositive_-3"] = isPositiveTest2
    
    // Probar función isPositive() con cero
    let isPositiveTest3 = HelloWorld.isPositive(number: 0)
    results["isPositive_0"] = isPositiveTest3
    
    log("Resultados de las pruebas:")
    log(results)
    
    return results
}