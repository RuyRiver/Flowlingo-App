# Hello World - Contrato Básico de Cadence

## Descripción

Este es el primer contrato en nuestra biblioteca de aprendizaje de Cadence. El contrato HelloWorld demuestra los conceptos más fundamentales del lenguaje Cadence y la estructura básica de un contrato inteligente en Flow.

## Conceptos Clave

### 1. Estructura de un Contrato
```cadence
access(all) contract HelloWorld {
    // Contenido del contrato
}
```
- `access(all)` hace que el contrato sea público y accesible desde cualquier lugar
- `contract` es la palabra clave para definir un contrato
- Las llaves `{}` contienen toda la lógica del contrato

### 2. Variables de Estado
```cadence
access(all) var greeting: String
```
- `access(all) var` define una variable pública y mutable
- `String` es el tipo de dato para texto
- Las variables de estado mantienen información entre transacciones

### 3. Función de Inicialización
```cadence
init() {
    self.greeting = "¡Hola, mundo desde Cadence!"
}
```
- `init()` se ejecuta una sola vez cuando se despliega el contrato
- `self` se refiere al contrato actual
- Aquí inicializamos el estado del contrato

### 4. Funciones Públicas
```cadence
access(all) fun hello(): String {
    return self.greeting
}
```
- `access(all) fun` define una función pública
- `: String` especifica el tipo de retorno
- `return` devuelve un valor

### 5. Eventos
```cadence
access(all) event GreetingChanged(newGreeting: String)
emit GreetingChanged(newGreeting: newGreeting)
```
- Los eventos notifican cambios a aplicaciones externas
- `emit` dispara el evento con los datos especificados

## Código Explicado

### Variables y Tipos de Datos
El contrato demuestra varios tipos básicos de Cadence:
- `String`: Para texto ("¡Hola, mundo!")
- `Int`: Para números enteros (1, 2, 3...)
- `Bool`: Para valores verdadero/falso

### Funciones Principales

1. **hello()**: Retorna el saludo actual
2. **changeGreeting()**: Cambia el saludo y emite un evento
3. **personalizedGreeting()**: Demuestra concatenación de strings
4. **addNumbers()**: Muestra operaciones matemáticas básicas
5. **isPositive()**: Ejemplifica el uso de condicionales

## Casos de Uso

Este patrón es útil para:
- Almacenar configuraciones simples
- Mantener estado básico en blockchain
- Aprender la sintaxis fundamental de Cadence
- Entender el ciclo de vida de un contrato

## Ejercicios Sugeridos

1. **Modificar el saludo inicial**: Cambia el mensaje en la función `init()`
2. **Agregar más funciones**: Crea una función que cuente caracteres
3. **Experimentar con tipos**: Agrega variables de tipo `Int` o `Bool`
4. **Crear más eventos**: Define eventos para diferentes acciones

## Próximos Pasos

Después de entender este contrato, puedes avanzar a:
- Simple Storage (almacenamiento más complejo)
- Basic Counter (manejo de estado numérico)
- Simple Calculator (operaciones matemáticas)

## Notas Importantes

- Este contrato es solo para aprendizaje
- En producción, considera validaciones adicionales
- Los eventos son importantes para la integración con aplicaciones
- Siempre inicializa las variables en `init()`
## 
Cómo Probar el Contrato

### Prerequisitos
1. Tener Flow CLI instalado
2. Ejecutar el emulador de Flow: `flow emulator`

### Desplegar el Contrato
```bash
flow project deploy --network emulator
```

### Ejecutar Scripts (Solo Lectura)
```bash
# Obtener el saludo actual
flow scripts execute contracts/beginner/01-hello-world/scripts/get_greeting.cdc --network emulator

# Obtener saludo personalizado
flow scripts execute contracts/beginner/01-hello-world/scripts/get_personalized_greeting.cdc "TuNombre" --network emulator

# Probar todas las funciones
flow scripts execute contracts/beginner/01-hello-world/scripts/test_functions.cdc --network emulator
```

### Ejecutar Transacciones (Modifican Estado)
```bash
# Cambiar el saludo
flow transactions send contracts/beginner/01-hello-world/transactions/change_greeting.cdc "Nuevo saludo" --network emulator --signer emulator-account

# Demostrar múltiples funciones
flow transactions send contracts/beginner/01-hello-world/transactions/personalized_greeting.cdc "Usuario" --network emulator --signer emulator-account
```

### Resultados de Pruebas Exitosas

✅ **Despliegue**: El contrato se despliega correctamente en `0xf8d6e0586b0a20c7`
✅ **Lectura de Estado**: Los scripts pueden leer el saludo inicial
✅ **Modificación de Estado**: Las transacciones pueden cambiar el saludo
✅ **Eventos**: Se emiten eventos correctamente cuando cambia el estado
✅ **Funciones Múltiples**: Todas las funciones (matemáticas, strings, lógicas) funcionan
✅ **Sintaxis Moderna**: Usa la sintaxis más reciente de Cadence (access(all), &Account)