// HelloWorld.cdc
// Este es un contrato básico de Cadence que demuestra conceptos fundamentales
// como variables públicas, funciones, y el patrón básico de un contrato inteligente

access(all) contract HelloWorld {
    
    // Variable pública que almacena el saludo
    // 'access(all)' significa que es accesible desde fuera del contrato
    // 'var' significa que es mutable (puede cambiar)
    access(all) var greeting: String
    
    // Evento que se emite cuando el saludo cambia
    // Los eventos son útiles para notificar cambios a aplicaciones externas
    access(all) event GreetingChanged(newGreeting: String)
    
    // Función de inicialización del contrato
    // Se ejecuta una sola vez cuando el contrato se despliega
    init() {
        self.greeting = "¡Hola, mundo desde Cadence!"
    }
    
    // Función pública para obtener el saludo actual
    // 'access(all)' significa que cualquiera puede llamar esta función
    // ': String' especifica que retorna un String
    access(all) fun hello(): String {
        return self.greeting
    }
    
    // Función pública para cambiar el saludo
    // Toma un parámetro 'newGreeting' de tipo String
    access(all) fun changeGreeting(newGreeting: String) {
        // Actualiza la variable de estado
        self.greeting = newGreeting
        
        // Emite un evento para notificar el cambio
        emit GreetingChanged(newGreeting: newGreeting)
    }
    
    // Función que demuestra concatenación de strings
    access(all) fun personalizedGreeting(name: String): String {
        return self.greeting.concat(" ").concat(name).concat("!")
    }
    
    // Función que demuestra operaciones básicas con números
    access(all) fun addNumbers(a: Int, b: Int): Int {
        return a + b
    }
    
    // Función que demuestra el uso de condicionales
    access(all) fun isPositive(number: Int): Bool {
        if number > 0 {
            return true
        } else {
            return false
        }
    }
}