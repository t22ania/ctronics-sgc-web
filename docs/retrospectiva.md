# 🔁 Retrospectiva · Sprint 6 (Avance 3)

**Sistema:** C-TRONICS SGC · **Versión entregada:** v1.1.0
**Periodo del sprint:** 02 – 16 de junio de 2026
**Equipo:** Proyecto Integrador II — UTP

---

## 1. Objetivo del sprint

Reforzar la **operación y la gobernanza** del sistema: control de ventas, gestión de catálogo,
seguridad de acceso, trazabilidad y publicación en la web.

## 2. Entregables completados

- ✅ **Anulación de ventas** con devolución de stock (solo Administrador) y exclusión de totales.
- ✅ **Gestión de categorías** (crear/editar/eliminar) persistida, con bloqueo de borrado si hay
  productos asignados.
- ✅ **Cambio y restablecimiento de contraseña**, con cambio obligatorio en el próximo inicio.
- ✅ **Bitácora de Actividad** con buscador (trazabilidad de eventos).
- ✅ **Respaldos** renombrados (*Crear/Restaurar respaldo*) con fecha-hora en el nombre del archivo.
- ✅ **Publicación web** con GitHub Pages + validación automática (GitHub Actions).
- ✅ Documentación de gobernanza (catálogo de solicitudes, gestión de cambios, plan de capacidad).

---

## 3. ✅ Qué salió bien

- Las nuevas funciones **respetaron el estilo del proyecto** (un solo archivo, sin frameworks,
  persistencia en `localStorage`); no se rompió lo existente.
- El **login ahora valida contra `usuarios[]`** en lugar de credenciales fijas, habilitando la
  gestión real de contraseñas.
- La **validación automática en CI** dio confianza para publicar sin miedo a subir errores.
- La **bitácora** mejoró notablemente la trazabilidad y facilita auditar quién hizo qué.
- Buen ritmo de entrega: todos los objetivos del sprint se cumplieron.

## 4. 🔧 Qué mejorar

- La **bitácora crece sin límite** (no hay retención ni purga); puede saturar `localStorage`
  → ver [Plan de Capacidad](plan-capacidad.md).
- Las **contraseñas se guardan en texto plano** en `localStorage` (aceptable para demo académica,
  pero conviene documentarlo como limitación de seguridad).
- El sistema sigue siendo **monousuario / un solo rol real**; faltan más usuarios y permisos
  granulares.
- Textos de **demo desactualizados** (la pista "admin/admin123" y el campo precargado ya no
  reflejan una contraseña cambiada).
- Algunos KPIs de Reportes usan **valores simulados** (proyecciones); conviene aclararlo o
  calcularlos con datos reales.

## 5. 🎯 Acciones acordadas (próximo sprint)

| # | Acción | Responsable | Fecha objetivo |
|---|--------|-------------|----------------|
| 1 | Definir política de **retención/purga** de la bitácora con exportación previa | Administrador | Sprint 7 |
| 2 | Documentar (y planear mitigación de) **contraseñas en texto plano** | Equipo | Sprint 7 |
| 3 | Diseñar **gestión de usuarios y roles** (más allá de admin) | Equipo | Sprint 7 |
| 4 | Actualizar **pistas/labels de login** para no exponer credenciales fijas | Implementador | Sprint 7 |
| 5 | Revisar KPIs de Reportes para usar **datos reales** donde sea posible | Equipo | Sprint 7 |

## 6. Métricas del sprint

- **Objetivos completados:** 7 / 7 (100 %).
- **Incidencias que rompieron funcionalidad:** 0.
- **Validaciones de CI fallidas detectadas a tiempo:** 1 (falso positivo de balance de `<script>`,
  corregido en el propio validador).

---

🔗 Relacionado: [Catálogo de Solicitudes](catalogo-solicitudes.md) · [Gestión de Cambios](gestion-cambios.md) · [Plan de Capacidad](plan-capacidad.md)
