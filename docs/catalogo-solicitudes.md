# 📨 Catálogo de Solicitudes · C-TRONICS SGC

**Versión del sistema:** v1.1.0 · **Avance 3 / Sprint 6**

Este catálogo define las **solicitudes de acceso e información** que los usuarios pueden pedir al
sistema **C-TRONICS SGC**, junto con su canal, el responsable de atenderlas y su **tiempo de
atención objetivo (SLA)**.

> Como el sistema es local (una sola página, datos en `localStorage` del navegador), la mayoría de
> solicitudes las resuelve el **Administrador** directamente desde la aplicación. Toda acción
> relevante queda registrada en la **Bitácora de Actividad**.

---

## 1. Clasificación de solicitudes

- **Acceso:** entrar al sistema, recuperar credenciales o habilitar permisos.
- **Información:** obtener datos, reportes o respaldos del sistema.

## 2. Horario de atención

- **Lunes a sábado, 09:00 – 18:00 (hora de Lima).**
- Fuera de horario las solicitudes se atienden el siguiente día hábil.

---

## 3. Catálogo

| Código | Solicitud | Tipo | Canal | Atiende | Prioridad | Tiempo de atención (SLA) |
|--------|-----------|------|-------|---------|-----------|--------------------------|
| SOL-A1 | Ingreso al sistema (login con `admin`/contraseña) | Acceso | Aplicación | Usuario | — | Inmediato |
| SOL-A2 | Restablecimiento de contraseña | Acceso | Configuración → Seguridad | Administrador | Alta | ≤ 15 min |
| SOL-A3 | Cambio de contraseña del usuario | Acceso | Configuración → Seguridad | Administrador | Media | ≤ 15 min |
| SOL-A4 | Desbloqueo tras restablecimiento (cambio obligatorio en el próximo inicio) | Acceso | Pantalla de login | Usuario | Alta | Inmediato |
| SOL-I1 | Generar reporte de gestión (PDF) | Información | Reportes → Exportar PDF | Usuario | Media | ≤ 5 min |
| SOL-I2 | Crear respaldo de la base (`.json`) | Información | Configuración → Crear respaldo | Administrador | Media | ≤ 5 min |
| SOL-I3 | Restaurar respaldo existente | Información | Configuración → Restaurar respaldo | Administrador | Alta | ≤ 15 min |
| SOL-I4 | Consultar la Bitácora de Actividad | Información | Bitácora | Administrador | Baja | ≤ 10 min |
| SOL-I5 | Consultar historial de compras de un cliente | Información | Clientes → Historial | Usuario | Baja | ≤ 5 min |
| SOL-I6 | Anular una venta (solo Administrador) | Información/Operativa | Ventas → Anular | Administrador | Alta | ≤ 15 min |
| SOL-I7 | Alta/edición de categoría o producto | Información/Operativa | Productos / Categorías | Administrador | Media | ≤ 30 min |

---

## 4. Registro de la solicitud

Cada solicitud atendida que modifica datos (acceso, contraseña, venta, producto, categoría) queda
registrada automáticamente en la **Bitácora de Actividad** con **fecha y hora, usuario, tipo y
descripción**, dando trazabilidad completa.

## 5. Indicadores de cumplimiento

- **% de solicitudes atendidas dentro del SLA** (objetivo ≥ 90 %).
- **Tiempo medio de atención** por tipo de solicitud.
- Fuente de verificación: Bitácora de Actividad y respaldos generados.

---

🔗 Relacionado: [Gestión de Cambios](gestion-cambios.md) · [Plan de Capacidad](plan-capacidad.md)
