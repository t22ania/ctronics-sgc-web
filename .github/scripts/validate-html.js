/* ============================================================
   Validador de c-tronics.html (usado por GitHub Actions)
   Comprueba estructura HTML mínima, balance de <script> y
   la sintaxis del JavaScript embebido. No requiere dependencias.
   ============================================================ */
const fs = require('fs');

const FILE = 'c-tronics.html';

if (!fs.existsSync(FILE)) {
  console.error(`❌ No se encontró ${FILE}`);
  process.exit(1);
}

const html = fs.readFileSync(FILE, 'utf8');
let errores = 0;
const fallar = (msg) => { console.error('❌ ' + msg); errores++; };

// 1) Estructura HTML mínima
['<!DOCTYPE html>', '<html', '</html>', '<head', '</head>', '<body', '</body>'].forEach(tag => {
  if (!html.includes(tag)) fallar(`Falta la etiqueta obligatoria: ${tag}`);
});

// 2) Bloque <script> principal presente y bien cerrado + sintaxis del JavaScript
//    (la app incrusta un <script> literal dentro de una cadena para el PDF, así que
//     extraemos el primer bloque real y comprobamos que su JS sea válido)
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (m) {
  const js = m[1].replace(/<\\\/script>/g, '</script>');
  try {
    new Function(js);
  } catch (e) {
    fallar('Error de sintaxis en el JavaScript embebido: ' + e.message);
  }
} else {
  fallar('No se encontró un bloque <script> ... </script> bien formado');
}

if (errores > 0) {
  console.error(`\nValidación fallida con ${errores} error(es).`);
  process.exit(1);
}
console.log('✅ Validación correcta: estructura HTML y JavaScript sin errores de sintaxis.');
