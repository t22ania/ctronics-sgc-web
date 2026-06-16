# 📊 Plan de Capacidad · C-TRONICS SGC

**Versión del sistema:** v1.1.0 · **Avance 3 / Sprint 6**

Describe **qué se vigila** del rendimiento y los **límites** del sistema C-TRONICS SGC, usando un
esquema de **semáforo** (🟢 verde / 🟡 ámbar / 🔴 rojo) que indica cuándo actuar.

> Particularidad del sistema: corre 100 % en el navegador y guarda todo en **`localStorage`**
> (clave `ctronics_data_v2`), cuyo límite práctico es de **~5 MB** por dominio. La capacidad
> principal a cuidar es ese almacenamiento y el crecimiento de los datos.

---

## 1. Qué se vigila

- **Uso de `localStorage`** (tamaño total del JSON guardado).
- **Crecimiento de la Bitácora de Actividad** (es *append-only*: solo crece).
- **Cantidad de registros** (ventas, productos, clientes, movimientos de inventario).
- **Tiempo de carga y respuesta** de la interfaz (render de tablas y vistas).
- **Disponibilidad de `localStorage`** (modo incógnito o navegador sin soporte).

## 2. Tablero de semáforo

| Indicador | 🟢 Verde | 🟡 Ámbar | 🔴 Rojo | Acción al llegar a rojo |
|-----------|----------|----------|---------|--------------------------|
| Uso de `localStorage` | < 2 MB | 2 – 4 MB | > 4 MB (~80 % del límite) | Crear respaldo y depurar/archivar datos antiguos |
| Registros de Bitácora | < 1 000 | 1 000 – 5 000 | > 5 000 | Exportar respaldo y purgar bitácora antigua |
| Ventas registradas | < 2 000 | 2 000 – 8 000 | > 8 000 | Archivar histórico y respaldar |
| Productos en catálogo | < 300 | 300 – 800 | > 800 | Revisar rendimiento de tablas/filtros |
| Tiempo de carga inicial | < 1 s | 1 – 3 s | > 3 s | Optimizar render / revisar tamaño de datos |
| Disponibilidad de `localStorage` | Disponible | Disponible con avisos | No disponible | Usar respaldo `.json` y otro navegador/perfil |

## 3. Riesgo identificado: crecimiento de la Bitácora

La Bitácora **solo agrega registros** (no se borran para preservar la trazabilidad). En uso
intensivo puede convertirse en el mayor consumidor de `localStorage`.

**Mitigación propuesta (próximos sprints):**
- Política de **retención** (p. ej. conservar los últimos *N* meses).
- **Exportación periódica** de la bitácora antes de purgarla.
- Opción de **archivado** dentro del respaldo `.json`.

## 4. Rutina de monitoreo

- **Frecuencia:** revisión **semanal** por parte del Administrador.
- **Cómo medir el uso aproximado** (consola del navegador):

  ```js
  // Tamaño aproximado en KB de la base guardada
  Math.round((localStorage.getItem('ctronics_data_v2') || '').length / 1024)
  ```

- **Evidencia:** registrar el valor del semáforo en la bitácora del equipo y crear un respaldo
  antes de cualquier depuración.

## 5. Límites de diseño conocidos

- Aplicación **monousuario por navegador**: los datos no se comparten entre equipos
  (cada navegador tiene su propio `localStorage`).
- **Sin servidor**: no hay backups automáticos en la nube; el respaldo es **manual** (`.json`).
- El despliegue en GitHub Pages sirve la **interfaz**, no los datos (estos viven en cada cliente).

---

🔗 Relacionado: [Catálogo de Solicitudes](catalogo-solicitudes.md) · [Gestión de Cambios](gestion-cambios.md) · [Retrospectiva Sprint 6](retrospectiva.md)
