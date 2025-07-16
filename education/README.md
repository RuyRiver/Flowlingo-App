# FlowLingo Contract Library

Una biblioteca completa de contratos inteligentes de Cadence organizados por niveles de complejidad para la plataforma educativa FlowLingo.

## Estructura del Proyecto

```
contracts/
├── beginner/       # Contratos para principiantes (20 contratos)
├── intermediate/   # Contratos intermedios (18 contratos)
├── advanced/       # Contratos avanzados (17 contratos)
├── fluent/         # Contratos nivel experto (16 contratos)
└── shared/         # Utilidades y estándares compartidos
    ├── interfaces/ # Interfaces comunes
    ├── utilities/  # Contratos de utilidad
    └── standards/  # Implementaciones de estándares
```

## Niveles de Dificultad

### 🟢 Beginner (20 contratos)
Contratos básicos que enseñan conceptos fundamentales de Cadence:
- Variables y funciones básicas
- Recursos simples
- NFTs básicos
- Tokens simples

### 🟡 Intermediate (18 contratos)
Contratos que combinan múltiples conceptos:
- Interfaces y eventos
- Colecciones complejas
- Marketplaces básicos
- Sistemas de votación

### 🟠 Advanced (17 contratos)
Contratos con patrones avanzados:
- Protocolos DeFi
- Sistemas de governance
- Contratos upgradeables
- Optimizaciones de gas

### 🔴 Fluent (16 contratos)
Contratos de nivel experto:
- Arquitecturas enterprise
- Cross-chain bridges
- Sistemas de seguridad avanzados
- Protocolos complejos

## Instalación y Configuración

### Prerrequisitos

1. **Flow CLI**: Instalar desde [Flow CLI Installation](https://docs.onflow.org/flow-cli/install/)
2. **Node.js**: Versión 14 o superior
3. **Git**: Para control de versiones

### Configuración

```bash
# Clonar el repositorio
git clone https://github.com/flowlingo/contract-library.git
cd contract-library

# Instalar dependencias
npm install

# Verificar instalación de Flow CLI
flow version
```

## Validación de Contratos

### Validación Automática

```bash
# Validar todos los contratos
npm run validate

# Validar por nivel
npm run validate:beginner
npm run validate:intermediate
npm run validate:advanced
npm run validate:fluent
```

### Validación Manual

```bash
# Usando Node.js
node scripts/validate-contracts.js

# Usando PowerShell (Windows)
./scripts/validate-contracts.ps1

# Validar un nivel específico
./scripts/validate-contracts.ps1 -Level beginner
```

## Desarrollo

### Crear un Nuevo Contrato

1. Copiar la plantilla:
```bash
cp -r templates/contract-template contracts/[level]/[contract-name]
```

2. Editar los archivos:
   - `contract.cdc`: Código principal
   - `README.md`: Documentación educativa
   - `metadata.json`: Metadatos estructurados
   - `transactions/`: Scripts de transacción
   - `scripts/`: Scripts de consulta
   - `tests/`: Pruebas del contrato

3. Validar el contrato:
```bash
npm run validate
```

### Estándares de Documentación

Consultar [DOCUMENTATION_STANDARDS.md](./DOCUMENTATION_STANDARDS.md) para:
- Estructura de directorios
- Estándares de código
- Formato de documentación
- Metadatos requeridos
- Guías de estilo

## Testing

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas específicas
flow test contracts/beginner/01-hello-world/tests/

# Desplegar en emulador para pruebas
npm run deploy:emulator
```

## Despliegue

### Emulador Local

```bash
# Iniciar emulador
flow emulator start

# Desplegar contratos
npm run deploy:emulator
```

### Testnet

```bash
# Configurar cuenta de testnet en flow.json
# Desplegar a testnet
npm run deploy:testnet
```

## Contribución

1. Fork el repositorio
2. Crear una rama para tu feature: `git checkout -b feature/nuevo-contrato`
3. Seguir los estándares de documentación
4. Validar tu código: `npm run validate`
5. Commit y push: `git commit -m "Add: nuevo contrato básico"`
6. Crear Pull Request

### Checklist de Contribución

- [ ] El contrato compila con Flow CLI
- [ ] Documentación completa (README.md)
- [ ] Metadatos correctos (metadata.json)
- [ ] Transacciones y scripts de ejemplo
- [ ] Pruebas incluidas
- [ ] Validación automática pasa
- [ ] Nivel de dificultad apropiado

## Estructura de Archivos

```
├── contracts/                 # Contratos organizados por nivel
├── scripts/                   # Scripts de validación
├── templates/                 # Plantillas para nuevos contratos
├── flow.json                  # Configuración de Flow
├── package.json              # Configuración de Node.js
├── README.md                 # Este archivo
└── DOCUMENTATION_STANDARDS.md # Estándares de documentación
```

## Recursos

- [Flow Documentation](https://docs.onflow.org/)
- [Cadence Language Reference](https://docs.onflow.org/cadence/)
- [Flow CLI Reference](https://docs.onflow.org/flow-cli/)
- [FlowLingo Platform](https://flowlingo.com)

## Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

## Contacto

- **Equipo FlowLingo**: team@flowlingo.com
- **Issues**: [GitHub Issues](https://github.com/flowlingo/contract-library/issues)
- **Documentación**: [FlowLingo Docs](https://docs.flowlingo.com)