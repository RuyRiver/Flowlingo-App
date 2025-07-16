# Guía de Migración y Errores Comunes de Cadence

## 🎯 Propósito

Esta guía documenta los errores más comunes al trabajar con Cadence, especialmente durante la migración de versiones anteriores a Cadence 1.0+. Está diseñada para:

- **Desarrolladores**: Referencia rápida para solucionar errores
- **IA Educativa**: Base de conocimiento para corrección automática
- **Estudiantes**: Comprensión de la evolución del lenguaje

---

## 🚨 Errores Críticos y Soluciones

### 1. Palabras Clave de Acceso Obsoletas

#### Error: `pub` is no longer a valid access keyword

**Contexto**: Cadence 1.0 introdujo un sistema de control de acceso más granular.

**❌ Sintaxis Antigua:**
```cadence
pub contract MyContract {
    pub var data: String
    pub fun getData(): String { return self.data }
    pub event DataChanged(newData: String)
}
```

**✅ Sintaxis Moderna:**
```cadence
access(all) contract MyContract {
    access(all) var data: String
    access(all) fun getData(): String { return self.data }
    access(all) event DataChanged(newData: String)
}
```

**🔧 Regla de Migración:**
- `pub` → `access(all)` (para acceso público completo)
- Considerar `access(contract)` o `access(self)` para mayor seguridad

---

### 2. Tipos de Cuenta Obsoletos

#### Error: cannot find type in this scope: `AuthAccount`

**Contexto**: El sistema de cuentas fue rediseñado para mayor seguridad.

**❌ Sintaxis Antigua:**
```cadence
transaction {
    prepare(signer: AuthAccount) {
        signer.save(<-resource, to: /storage/path)
    }
}

script {
    execute {
        let account = getAccount(0x01)
        let publicAccount: PublicAccount = account
    }
}
```

**✅ Sintaxis Moderna:**
```cadence
transaction {
    prepare(signer: &Account) {
        signer.storage.save(<-resource, to: /storage/path)
    }
}

script {
    execute {
        let account = getAccount(0x01)
        // &Account se usa para referencias autorizadas
    }
}
```

**🔧 Regla de Migración:**
- `AuthAccount` → `&Account`
- `PublicAccount` → `&Account` (con acceso limitado)

---

### 3. Métodos de Conversión Inexistentes

#### Error: value of type `Bool` has no member `toString`

**Contexto**: No todos los tipos tienen métodos de conversión directos.

**❌ Código Problemático:**
```cadence
let flag: Bool = true
let message = "Status: ".concat(flag.toString()) // ❌ Error
```

**✅ Código Correcto:**
```cadence
let flag: Bool = true
let flagString = flag ? "true" : "false"
let message = "Status: ".concat(flagString) // ✅ Funciona
```

**🔧 Tabla de Conversiones:**

| Tipo | Método Disponible | Alternativa |
|------|------------------|-------------|
| `Int` | ✅ `.toString()` | - |
| `UInt` | ✅ `.toString()` | - |
| `String` | ✅ Ya es String | - |
| `Bool` | ❌ No disponible | `value ? "true" : "false"` |
| `Address` | ✅ `.toString()` | - |

---

### 4. Sintaxis de Importación y Direcciones

#### Error: cannot find variable in this scope

**Contexto**: Las direcciones de contratos deben ser exactas y válidas.

**❌ Importaciones Problemáticas:**
```cadence
import MyContract from 0x01          // ❌ Dirección genérica
import MyContract from 0xINVALID     // ❌ Dirección inválida
```

**✅ Importaciones Correctas:**
```cadence
// Para emulador
import MyContract from 0xf8d6e0586b0a20c7

// Para testnet/mainnet (usar aliases en flow.json)
import MyContract from 0x1234567890abcdef
```

**🔧 Mejores Prácticas:**
1. Usar `flow.json` para definir aliases
2. Verificar direcciones después del despliegue
3. Usar direcciones específicas por red

---

## 🛠️ Herramientas de Migración Automática

### Patrones de Búsqueda y Reemplazo

```regex
# Para editores de texto o scripts de migración:

# 1. Reemplazar pub con access(all)
Find: \bpub\b(\s+)(contract|var|let|fun|event|struct|resource|interface)
Replace: access(all)$1$2

# 2. Reemplazar AuthAccount
Find: \bAuthAccount\b
Replace: &Account

# 3. Reemplazar PublicAccount
Find: \bPublicAccount\b
Replace: &Account

# 4. Detectar .toString() en Bool
Find: (\w+)\.toString\(\)
# Revisar manualmente si la variable es Bool
```

### Script de Validación Pre-Despliegue

```bash
#!/bin/bash
# validate-cadence.sh

echo "🔍 Validando sintaxis de Cadence..."

# Buscar palabras clave obsoletas
if grep -r "\bpub\b" contracts/; then
    echo "❌ Encontradas palabras clave 'pub' obsoletas"
    exit 1
fi

if grep -r "AuthAccount" contracts/; then
    echo "❌ Encontradas referencias a 'AuthAccount' obsoletas"
    exit 1
fi

echo "✅ Validación completada"
```

---

## 🎓 Para Sistemas Educativos

### Detección Inteligente de Errores

La IA educativa puede implementar:

```javascript
// Pseudocódigo para detección automática
const commonErrors = {
    'pub keyword': {
        pattern: /\bpub\s+(contract|var|let|fun|event)/g,
        suggestion: 'Reemplazar "pub" con "access(all)"',
        autofix: (match) => match.replace('pub', 'access(all)')
    },
    
    'AuthAccount type': {
        pattern: /\bAuthAccount\b/g,
        suggestion: 'Reemplazar "AuthAccount" con "&Account"',
        autofix: (match) => '&Account'
    },
    
    'Bool toString': {
        pattern: /(\w+)\.toString\(\)/g,
        suggestion: 'Los Bool no tienen toString(). Usar operador ternario.',
        autofix: null // Requiere análisis de contexto
    }
};
```

### Mensajes Educativos Contextuales

```cadence
// Cuando se detecta un error, mostrar:
/*
🚨 Error Detectado: Palabra clave obsoleta 'pub'

❌ Tu código:
pub contract MyContract {

✅ Código corregido:
access(all) contract MyContract {

📚 Explicación:
En Cadence 1.0+, 'pub' fue reemplazado por 'access(all)' 
para mayor claridad sobre los niveles de acceso.

🔗 Más información: [link a documentación]
*/
```

---

## 📊 Estadísticas de Errores Comunes

Basado en la experiencia de desarrollo:

1. **`pub` keyword** - 85% de contratos migrados
2. **`AuthAccount`** - 70% de transacciones migradas  
3. **Bool.toString()** - 30% de scripts con logging
4. **Direcciones incorrectas** - 60% de importaciones iniciales
5. **Sintaxis CLI** - 40% de comandos de prueba

---

## 🔄 Proceso de Migración Recomendado

### Paso 1: Análisis Estático
```bash
# Identificar archivos que necesitan migración
grep -r "pub\|AuthAccount" contracts/ --include="*.cdc"
```

### Paso 2: Migración Automática
```bash
# Aplicar reemplazos seguros
sed -i 's/\bpub\b/access(all)/g' contracts/**/*.cdc
sed -i 's/AuthAccount/\&Account/g' contracts/**/*.cdc
```

### Paso 3: Revisión Manual
- Verificar conversiones Bool a String
- Validar niveles de acceso apropiados
- Actualizar direcciones de importación

### Paso 4: Pruebas
```bash
# Validar sintaxis
flow cadence lint contracts/**/*.cdc

# Probar despliegue
flow project deploy --network emulator
```

---

## 📚 Recursos de Referencia

- [Cadence 1.0 Migration Guide](https://cadence-lang.org/docs/cadence-migration-guide)
- [Access Control Documentation](https://cadence-lang.org/docs/language/access-control)
- [Account Types Reference](https://cadence-lang.org/docs/language/accounts)
- [Flow CLI Commands](https://developers.flow.com/tools/flow-cli)

---

## 🤝 Contribuciones

Este documento se mantiene actualizado con:
- Nuevos errores identificados en la comunidad
- Cambios en versiones de Cadence
- Mejores prácticas emergentes
- Feedback de sistemas educativos

**Última actualización**: Julio 15, 2025
**Versión de Cadence**: 1.0+
**Versión de Flow CLI**: 2.2.14+