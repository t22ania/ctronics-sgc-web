# 🔧 Gestión de Cambios · C-TRONICS SGC

**Versión del sistema:** v1.1.0 · **Avance 3 / Sprint 6**

Define **cómo se solicitan, aprueban, implementan y registran** los cambios del sistema
C-TRONICS SGC, para que evolucione de forma controlada y sin romper lo que ya funciona.

---

## 1. Objetivo

Asegurar que todo cambio al código (`c-tronics.html`) o a la documentación pase por una
**aprobación** y quede **registrado**, con un camino claro de **reversión** si algo falla.

## 2. Tipos de cambio

| Tipo | Descripción | Aprobación | Ejemplos |
|------|-------------|------------|----------|
| **Estándar** | Cambio de bajo riesgo, repetible y preautorizado | No requiere CAB | Actualizar textos, ajustar estilos menores, corregir un *typo* |
| **Normal** | Cambio que agrega o modifica funcionalidad | Requiere revisión y aprobación | Anulación de ventas, módulo de categorías, bitácora |
| **Urgente** | Corrección crítica que no puede esperar | Aprobación express del responsable | Falla que impide iniciar sesión o registrar ventas |

## 3. Roles (RACI simplificado)

| Actividad | Solicitante | Revisor / Aprobador | Implementador |
|-----------|:----------:|:-------------------:|:-------------:|
| Proponer el cambio | **R** | C | I |
| Evaluar riesgo e impacto | C | **R** | C |
| Aprobar | I | **A** | I |
| Implementar y desplegar | I | C | **R** |
| Verificar y cerrar | I | **A** | R |

> En el contexto académico, el **rol Aprobador** lo asume el responsable del equipo (líder del
> proyecto); el **Implementador** es quien hace el `commit`/`push`.

---

## 4. Flujo del cambio

1. **Solicitud:** se describe el cambio (qué, por qué, impacto) en un *issue* o ticket.
2. **Evaluación:** se clasifica el tipo (estándar/normal/urgente) y se identifican riesgos.
3. **Aprobación:** el Aprobador da el visto bueno (en cambios estándar, ya está preautorizado).
4. **Implementación:** se trabaja sobre una rama y se hace **Pull Request** hacia `main`.
5. **Validación automática:** al hacer `push`/PR, GitHub Actions ejecuta
   `validate-html.js`. **Si el HTML/JS tiene errores, el cambio NO se publica.**
6. **Despliegue:** si la validación pasa, el flujo publica automáticamente en **GitHub Pages**.
7. **Registro y cierre:** se actualiza el historial y el registro de cambios; se verifica en línea.

```
Solicitud → Evaluación → Aprobación → PR a main → Validación CI → Despliegue → Registro
                                            │
                                  (si falla la validación, se detiene)
```

## 5. Cómo se registran los cambios

- **Historial de commits / Pull Requests** en GitHub (quién, qué y cuándo).
- **Registro de cambios (changelog)** en el `README.md` y en **Configuración → Registro de
  cambios** dentro de la app.
- **Versionado semántico** del sistema (p. ej. `v1.1.0`), visible en el login y en el PDF.
- **Bitácora de Actividad**: registra los cambios de *datos en tiempo de ejecución* (ventas,
  productos, categorías, contraseñas) con usuario y fecha-hora.

## 6. Criterios de aprobación

- La validación automática (CI) está en verde ✅.
- No rompe funcionalidades existentes (login, ventas, inventario, respaldos).
- Respeta el estilo del proyecto (HTML/CSS/JS puro, sin frameworks, persistencia en `localStorage`).
- Incluye actualización del changelog cuando corresponde.

## 7. Plan de reversión

- **Código:** revertir el *commit*/PR en GitHub; el despliegue anterior se vuelve a publicar.
- **Datos:** **restaurar un respaldo `.json`** previo desde *Configuración → Restaurar respaldo*,
  o reiniciar a datos de demostración.

---

🔗 Relacionado: [Catálogo de Solicitudes](catalogo-solicitudes.md) · [Plan de Capacidad](plan-capacidad.md) · [Retrospectiva Sprint 6](retrospectiva.md)
