// contract_test.cdc
// Pruebas unitarias para el contrato HelloWorld

import Test
import HelloWorld from "../contract.cdc"

access(all) fun testInitialGreeting() {
    // Verificar que el saludo inicial es correcto
    let expectedGreeting = "¡Hola, mundo desde Cadence!"
    let actualGreeting = HelloWorld.hello()
    
    Test.expect(actualGreeting, Test.equal(expectedGreeting))
}

access(all) fun testChangeGreeting() {
    // Cambiar el saludo
    let newGreeting = "¡Hola, Flow!"
    HelloWorld.changeGreeting(newGreeting: newGreeting)
    
    // Verificar que el cambio se realizó
    let actualGreeting = HelloWorld.hello()
    Test.expect(actualGreeting, Test.equal(newGreeting))
}

access(all) fun testPersonalizedGreeting() {
    // Probar saludo personalizado
    let name = "Alice"
    let personalizedGreeting = HelloWorld.personalizedGreeting(name: name)
    let currentGreeting = HelloWorld.hello()
    let expectedGreeting = currentGreeting.concat(" ").concat(name).concat("!")
    
    Test.expect(personalizedGreeting, Test.equal(expectedGreeting))
}

access(all) fun testAddNumbers() {
    // Probar suma de números
    let result = HelloWorld.addNumbers(a: 5, b: 3)
    Test.expect(result, Test.equal(8))
    
    // Probar con números negativos
    let result2 = HelloWorld.addNumbers(a: -2, b: 7)
    Test.expect(result2, Test.equal(5))
    
    // Probar con cero
    let result3 = HelloWorld.addNumbers(a: 0, b: 10)
    Test.expect(result3, Test.equal(10))
}

access(all) fun testIsPositive() {
    // Probar con número positivo
    let result1 = HelloWorld.isPositive(number: 5)
    Test.expect(result1, Test.equal(true))
    
    // Probar con número negativo
    let result2 = HelloWorld.isPositive(number: -3)
    Test.expect(result2, Test.equal(false))
    
    // Probar con cero
    let result3 = HelloWorld.isPositive(number: 0)
    Test.expect(result3, Test.equal(false))
}

access(all) fun runAllTests() {
    testInitialGreeting()
    testChangeGreeting()
    testPersonalizedGreeting()
    testAddNumbers()
    testIsPositive()
    
    log("Todas las pruebas del contrato HelloWorld completadas")
}