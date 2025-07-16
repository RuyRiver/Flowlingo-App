# Errores Comunes - HelloWorld Contract

## 🚨 Errores Frecuentes y Sus Soluciones

Este documento recopila los errores más comunes que pueden ocurrir al trabajar con contratos básicos de Cadence, especialmente durante la migración de versiones anteriores o al aprender por primera vez.

### 1. Error: `pub` is no longer a valid access keyword

**❌ Código Incorrecto (Cadence Antiguo):**
```cadence
pub contract HelloWorld {
    pub var greeting: String
    pub fun hello(): String {
        return self.greeting
    }
}
```

**✅ Código Correcto (Cadence Moderno):**
```cadence
access(all) contract HelloWorld {
    access(all) var greeting: String
    access(all) fun hello(): String {
        return self.greeting
    }
}
```

**📝 Explicación:**
- En Cadence 1.0+, `pub` fue reemplazado por `access(all)`
- `access(all)` es más explícito sobre el nivel de acceso
- Otros niveles de acceso: `access(self)`, `access(contract)`, `access(account)`

**🔧 Solución Rápida:**
Reemplazar todas las instancias de `pub` con `access(all)` en contratos básicos.

---

### 2. Error: cannot find type in this scope: `AuthAccount`

**❌ Código Incorrecto (Cadence Antiguo):**
```cadence
transaction {
    prepare(signer: AuthAccount) {
        // código aquí
    }
}
```

**✅ Código Correcto (Cadence Moderno):**
```cadence
transaction {
    prepare(signer: &Account) {
        // código aquí
    }
}
```

**📝 Explicación:**
- `AuthAccount` fue reemplazado por `&Account` en Cadence 1.0+
- El nuevo sistema de referencias es más seguro y claro
- `&Account` representa una referencia autorizada a una cuenta

**🔧 Solución Rápida:**
Reemplazar `AuthAccount` con `&Account` en todas las transacciones.

---

### 3. Error: value of type `Bool` has no member `toString`

**❌ Código Incorrecto:**
```cadence
let isPositive = true
log("Resultado: ".concat(isPositive.toString())) // ❌ Error
```

**✅ Código Correcto:**
```cadence
let isPositive = true
let resultString = isPositive ? "true" : "false"
log("Resultado: ".concat(resultString)) // ✅ Funciona
```

**📝 Explicación:**
- Los valores `Bool` en Cadence no tienen método `toString()`
- Se debe usar el operador ternario `? :` para convertir a String
- Los tipos `Int` sí tienen `toString()`, pero `Bool` no

**🔧 Solución Rápida:**
Para convertir Bool a String: `let stringValue = boolValue ? "true" : "false"`

---

### 4. Error: Importación con Dirección Incorrecta

**❌ Código Incorrecto:**
```cadence
import HelloWorld from 0x01 // ❌ Dirección genérica
```

**✅ Código Correcto:**
```cadence
import HelloWorld from 0xf8d6e0586b0a20c7 // ✅ Dirección real del emulador
```

**📝 Explicación:**
- Las direcciones de contratos deben coincidir con donde están desplegados
- En el emulador, la dirección por defecto es `0xf8d6e0586b0a20c7`
- Verificar siempre la dirección después del despliegue

**🔧 Solución Rápida:**
Usar `flow project deploy` y copiar la dirección mostrada en el output.

---

### 5. Error: Sintaxis de Argumentos en Flow CLI

**❌ Comando Incorrecto:**
```bash
flow scripts execute script.cdc --arg String:"valor" # ❌ Flag incorrecto
```

**✅ Comando Correcto:**
```bash
flow scripts execute script.cdc "valor" # ✅ Argumentos directos
```

**📝 Explicación:**
- Flow CLI toma argumentos directamente después del nombre del archivo
- No se necesita especificar el tipo explícitamente para tipos básicos
- Los argumentos se pasan en orden según la función `main()`

---

## 🎯 Patrones de Migración Rápida

### Migración de Cadence Antiguo a Moderno

| Cadence Antiguo | Cadence Moderno | Contexto |
|----------------|-----------------|----------|
| `pub` | `access(all)` | Contratos, variables, funciones |
| `AuthAccount` | `&Account` | Transacciones |
| `PublicAccount` | `&Account` | Scripts (cuando sea necesario) |
| `boolValue.toString()` | `boolValue ? "true" : "false"` | Conversión Bool a String |

### Checklist de Validación

Antes de desplegar un contrato, verificar:

- [ ] ✅ No hay palabras clave `pub` (usar `access(all)`)
- [ ] ✅ No hay `AuthAccount` (usar `&Account`)
- [ ] ✅ No hay `.toString()` en valores Bool
- [ ] ✅ Las direcciones de importación son correctas
- [ ] ✅ La sintaxis de Flow CLI es correcta

---

## 🤖 Para la IA Educativa

### Detección Automática de Errores

La IA puede buscar estos patrones problemáticos:

```regex
# Patrones a detectar y corregir automáticamente:
pub\s+(contract|var|let|fun|event)  # Reemplazar con access(all)
AuthAccount                         # Reemplazar con &Account
\.toString\(\).*Bool               # Sugerir operador ternario
import.*from\s+0x01               # Sugerir dirección real
```

### Sugerencias Contextuales

Cuando la IA detecte estos errores, puede ofrecer:

1. **Corrección automática** con explicación
2. **Contexto histórico** (por qué cambió)
3. **Mejores prácticas** actuales
4. **Ejemplos comparativos** (antes/después)

---

## 📚 Recursos Adicionales

- [Cadence 1.0 Migration Guide](https://cadence-lang.org/docs/cadence-migration-guide)
- [Flow CLI Documentation](https://developers.flow.com/tools/flow-cli)
- [Cadence Language Reference](https://cadence-lang.org/docs/language)

---

**Nota**: Este documento se actualiza regularmente con nuevos errores comunes identificados durante el desarrollo y uso educativo de FlowLingo.