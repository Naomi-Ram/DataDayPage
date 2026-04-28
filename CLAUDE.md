# CLAUDE.md

## Proyecto
- Nombre: `DataDayPage`
- Tipo: landing page estática para `DataDay 2026` de la Universidad del Caribe.
- Stack real actual: `HTML + CSS + JavaScript` vanilla.
- Entrada principal: `index.html`.
- Assets y utilidades auxiliares: `src/`.

## Objetivo del sitio
- Promocionar el evento `DataDay 2026`.
- Mostrar programa, conferencias, talleres, feria, rally y comunidades.
- Dirigir a registros externos con Google Forms.
- Mantener una estética futurista/tech con glassmorphism, neón cyan y tipografías display.

## Estado actual de la arquitectura
- No hay framework frontend activo.
- El sitio funciona como una sola página con navegación por anclas (`#inicio`, `#horario`, etc.).
- `index.html` contiene prácticamente toda la estructura y el contenido.
- `style.css` concentra todo el diseño visual y responsivo.
- `main.js` maneja interacciones UI simples.
- Existe una carpeta `src/node_modules` con dependencias instaladas para tareas auxiliares, no para una app SPA activa.

## Archivos clave
- `index.html`: contenido del evento, secciones, CTAs, cards, timeline y enlaces.
- `style.css`: sistema visual completo, variables CSS, layout, animaciones y responsive.
- `main.js`: navbar sticky, menú móvil, resaltado de secciones, observer de scroll, carrusel, partículas, modal, tilt y botón flotante de regreso.
- `src/package.json`: dependencia auxiliar mínima (`jimp`).
- `agent/Plan_Desarrollo_DataDay.md`: plan original de diseño/arquitectura.
- `agent/InfoActual/`: información operativa del evento y links de registro.

## Estructura de carpetas útil
- `agent/`
  - Material de contexto del proyecto.
  - Incluye plan, prompt inicial, PDF del rally y textos con info vigente.
- `src/`
  - Imágenes del evento, logos, ponentes y flyers.
  - También contiene `package.json`, `package-lock.json` y `node_modules`.
- Raíz
  - `index.html`
  - `style.css`
  - `main.js`

## Diseño y estilo ya establecidos
- Paleta principal:
  - `--bg-deep: #0A1628`
  - `--bg-mid: #0D2445`
  - `--accent-cyan: #00E5FF`
  - `--accent-teal: #00BCD4`
- Tipografías:
  - `Orbitron` para títulos/display.
  - `Exo 2` para cuerpo.
- Lenguaje visual:
  - look tech/futurista
  - fondos oscuros
  - glassmorphism
  - glow cyan
  - patrones hexagonales
  - animaciones de entrada al scroll

## Secciones detectadas en `index.html`
- `#inicio`
- `#sobre-evento`
- `#horario`
- `#conferencias`
- `#talleres`
- `#feria`
- `#rally`
- `#comunidades`
- También hay footer y elementos auxiliares como carrusel, modal y botón flotante.

## Comportamiento implementado en `main.js`
- Navbar cambia al hacer scroll.
- Menú móvil con toggle.
- Highlight automático de link activo según sección visible.
- Animaciones al entrar en viewport con `IntersectionObserver`.
- Carrusel automático en hero con dots.
- Partículas decorativas generadas por JS.
- Sistema de modal basado en `data-*`.
- Efecto tilt 3D para tarjetas en desktop.
- Botón flotante para regresar a la sección de timeline.
- Ocultamiento del indicador de scroll cuando el usuario avanza.

## Fuentes de verdad para contenido
- Programa y contenido visible actual: `index.html`.
- Plan original y lineamientos visuales: `agent/Plan_Desarrollo_DataDay.md`.
- Información operativa del rally: `agent/InfoActual/RallyInfo.txt`.
- Links de formularios:
  - general: `https://forms.gle/2RY7MvEENbRVBCnx9`
  - feria: `https://forms.gle/eu8ERwEHZB5fWsEo9`
  - rally: `https://forms.gle/RBmacwRdBR7HbLCA6`
  - asistencia virtual: `https://forms.gle/LMyeN5b4fwCTpzJe6`

## Observaciones importantes
- El proyecto parece haber empezado con idea de Vite, pero la implementación vigente es una landing estática en raíz.
- `src/package.json` está dentro de `src/`, no en la raíz.
- `src/node_modules` está versionado/localmente presente; conviene evitar tocarlo salvo necesidad explícita.
- Hay texto con problemas de codificación visibles (`â€”`, `Ã³`, etc.). Si se trabaja contenido, revisar encoding UTF-8 de los archivos.
- Hay bastante contenido y estilos inline en `index.html`; si se hacen cambios grandes, puede valer la pena extraerlos a CSS/JS.

## Convenciones recomendadas para futuras conversaciones
- Preservar el estilo visual actual salvo que se pida un rediseño.
- Tratar `index.html`, `style.css` y `main.js` como la superficie principal de edición.
- Usar `agent/InfoActual/` como referencia antes de modificar agenda, textos o formularios.
- No asumir que `src/` es código fuente de app; en este repo funciona más como carpeta de assets y utilidades.
- Antes de agregar tooling nuevo, validar si de verdad hace falta porque el sitio ya corre como estático simple.

## Tareas candidatas de mejora
- Corregir encoding/carácteres corruptos en HTML, CSS y textos visibles.
- Reubicar o documentar mejor `package.json` si se va a usar Node de forma recurrente.
- Separar contenido repetido/inline styles para facilitar mantenimiento.
- Agregar un README de uso/preview si el equipo lo necesita.
- Verificar accesibilidad semántica y consistencia de headings/enlaces.

## Cómo retomar trabajo rápido
1. Leer este archivo.
2. Revisar `index.html` para el contenido actual.
3. Revisar `agent/InfoActual/` si el cambio toca agenda, rally o registros.
4. Editar principalmente `index.html`, `style.css` y `main.js`.
5. Si aparecen caracteres raros, revisar encoding antes de hacer cambios masivos.

## Resumen corto para otro agente
- Proyecto web estático promocional de `DataDay 2026`.
- Core del proyecto está en raíz: `index.html`, `style.css`, `main.js`.
- `src/` contiene assets del evento y una instalación local de Node con `jimp`.
- `agent/` contiene contexto útil y datos operativos del evento.
- Mantener la estética futurista cyan/tech y usar como fuente de verdad el contenido ya cargado en la landing y los archivos de `agent/InfoActual/`.
