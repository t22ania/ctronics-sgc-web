# ⚡ C-TRONICS SOLUCIONES · Sistema de Gestión Comercial (SGC)

Sistema de gestión comercial para una tienda de electrónica, desarrollado como proyecto académico
del **Curso Integrador II (UTP)**. Es una aplicación web de **una sola página**, escrita en
**HTML, CSS y JavaScript puro** (sin frameworks ni herramientas de compilación). Toda la
información se guarda en el **`localStorage`** del navegador, por lo que funciona **sin servidor
ni base de datos externa**.

> Versión actual: **v1.1.0**

<!-- Reemplaza TU-USUARIO y TU-REPOSITORIO por los reales para que las insignias funcionen -->
![CI](https://github.com/TU-USUARIO/TU-REPOSITORIO/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/TU-USUARIO/TU-REPOSITORIO/actions/workflows/cd.yml/badge.svg)

---

## 📋 Características

- **Login** con control de roles (rol Administrador).
- **Dashboard** con KPIs y gráficos en CSS/SVG puro.
- **Productos**: catálogo con altas, ediciones y bajas, y alertas de stock.
- **Categorías**: gestión completa (crear/editar/eliminar) persistida en `localStorage`.
- **Inventario**: registro de entradas de mercadería y movimientos de stock.
- **Ventas (POS)**: carrito con cálculo de IGV (18 %), descuento de stock y **anulación de ventas**
  con devolución de stock (solo Administrador).
- **Clientes**: gestión e historial de compras.
- **Reportes**: gráficos y **exportación a PDF** (vía el diálogo de impresión del navegador).
- **Seguridad**: cambio y restablecimiento de contraseña del usuario.
- **Bitácora de actividad**: trazabilidad de los eventos importantes del sistema.
- **Respaldo**: crear y restaurar toda la base de datos en formato `.json`.
- **Esquema de la base de datos** (diagrama entidad-relación) y **visor de tablas**.
- **Modo oscuro**.

---

## 🚀 Cómo abrir el sistema

### Opción A — En línea (GitHub Pages)
Una vez publicado (ver más abajo), simplemente visita la URL del sitio:

```
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

### Opción B — Local (sin servidor)
1. Descarga o clona este repositorio.
2. Abre el archivo **`c-tronics.html`** con doble clic en cualquier navegador moderno
   (Chrome, Edge, Firefox).

No requiere instalación, servidor ni conexión a internet.

---

## 🔑 Datos de acceso de prueba

| Usuario | Contraseña | Rol           |
|---------|------------|---------------|
| `admin` | `admin123` | Administrador |

> La primera vez que se abre, el sistema carga datos de demostración (productos, clientes y ventas).
> Si cambias la contraseña, recuerda la nueva: las credenciales de arriba son solo el valor inicial.
> Puedes restaurar los datos de demo desde **Configuración → Reiniciar base de datos**.

---

## 🛠️ Tecnología

- HTML5 + CSS3 + JavaScript (ES6+), **todo en un único archivo**: `c-tronics.html`.
- Persistencia con `localStorage` (clave `ctronics_data_v2`).
- Sin dependencias, sin `npm install`, sin paso de compilación.

---

## 🌐 Publicar en GitHub Pages (paso a paso)

El repositorio usa **dos flujos de GitHub Actions** encadenados (CI → CD):

- **`.github/workflows/ci.yml` — CI · Validación:** en cada `push` o Pull Request a **`main`**,
  valida que `c-tronics.html` no tenga errores de estructura ni de sintaxis en su JavaScript.
- **`.github/workflows/cd.yml` — CD · Despliegue:** cuando la CI **termina con éxito** en `main`,
  **publica automáticamente** el sitio en GitHub Pages. Si la CI falla, **no despliega**.

### Activar GitHub Pages la primera vez

1. Sube el proyecto a un repositorio de GitHub (haz `push` a la rama `main`).
2. En el repositorio, entra a **Settings** (Configuración).
3. En el menú lateral, abre **Pages**.
4. En **Build and deployment → Source**, selecciona **GitHub Actions**
   (⚠️ *no* selecciones "Deploy from a branch").
5. Vuelve a hacer `push` a `main`. Primero corre **CI · Validación** y, al pasar, se dispara
   **CD · Despliegue**. (También puedes lanzar el despliegue a mano en
   **Actions → "CD · Despliegue a GitHub Pages" → Run workflow**.)
6. Espera a que ambos flujos terminen en verde ✅ (pestaña **Actions**).
7. La URL pública aparecerá en **Settings → Pages** y en el resultado del flujo **CD**.
   Tendrá este formato:

   ```
   https://TU-USUARIO.github.io/TU-REPOSITORIO/
   ```

> Con este método **no** necesitas una rama `gh-pages`: el sitio se sirve directamente desde el
> artefacto que genera GitHub Actions.

### ¿Qué hacen los flujos por dentro?

| Flujo (archivo) | Qué hace                                                                            |
|-----------------|-------------------------------------------------------------------------------------|
| `ci.yml`        | Ejecuta `node .github/scripts/validate-html.js` para revisar el HTML y el JS.       |
| `cd.yml`        | Tras una CI exitosa, copia `c-tronics.html` como `index.html` y lo publica en Pages. |

Si la validación de CI falla, **el despliegue no se realiza** y verás el error en la pestaña *Actions*.

---

## 📦 Respaldo de datos

Como la información vive en el navegador, conviene respaldarla:

- **Crear respaldo**: *Configuración → 💾 Crear respaldo*. Descarga un `.json` con **todos** los
  datos (productos, clientes, ventas, usuarios, categorías, inventario, reportes y bitácora). El
  archivo incluye la fecha y hora en su nombre, por ejemplo:
  `ctronics_respaldo_2026-06-16_14-30-05.json`.
- **Restaurar respaldo**: *Configuración → 📤 Restaurar respaldo* y selecciona el `.json` guardado.

---

## 🗒️ Registro de cambios

### v1.1.0
- Anulación de ventas con devolución de stock (solo Administrador).
- Gestión de categorías (crear, editar y eliminar) persistida en `localStorage`.
- Cambio y restablecimiento de contraseña del usuario.
- Bitácora de actividad para trazabilidad de los eventos del sistema.

### v1.0.0
- Login, dashboard, CRUD de productos, inventario, ventas/POS con IGV, clientes con historial,
  reportes con exportación a PDF, exportar/importar la base en JSON, modo oscuro y visor de
  esquema/tablas.

---

## 📚 Documentación (Avance 3)

Documentos de gestión y gobernanza del sistema, en la carpeta [`/docs`](docs):

- 📨 [Catálogo de Solicitudes](docs/catalogo-solicitudes.md) — pedidos de acceso e información con
  su tiempo de atención (SLA).
- 🔧 [Gestión de Cambios](docs/gestion-cambios.md) — cómo se aprueban, implementan y registran los
  cambios.
- 📊 [Plan de Capacidad](docs/plan-capacidad.md) — qué se vigila del rendimiento y los límites
  (esquema de semáforo).
- 🔁 [Retrospectiva Sprint 6](docs/retrospectiva.md) — qué salió bien y qué mejorar.

---

## 📄 Licencia y créditos

Proyecto académico — **C-TRONICS SOLUCIONES**, Curso Integrador II, Universidad Tecnológica del
Perú (UTP). Uso educativo.
