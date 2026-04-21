# Plan de Desarrollo — Landing Page DataDay 2026

Este documento sirve como el plan arquitectónico y de ejecución para desarrollar la página web del evento **DataDay 2026** de la Universidad del Caribe. Está diseñado para que cualquier desarrollador (o modelo de IA) pueda tomarlo y comenzar a programar de inmediato.

## 1. Visión General
El objetivo es construir una **Single Page Application (SPA)** informativa, interactiva y con un diseño estético y moderno ("wow factor"). Deberá transmitir una sensación *premium*, *tech* y futurista.

## 2. Stack Tecnológico
Siguiendo las mejores prácticas de rendimiento y desarrollo moderno:
- **Inicializador de Proyecto:** Vite (`npx -y create-vite@latest . --template vanilla`).
- **Estructura y Semántica:** HTML5.
- **Estilos:** Vanilla CSS puro (Uso extensivo de variables CSS y Flexbox/Grid). *No se utilizará TailwindCSS para asegurar máxima personalización.*
- **Lógica e Interactividad:** Vanilla JavaScript.
- **Despliegue Objetivo:** Firebase Hosting o similar (exportación estática).

## 3. Sistema de Diseño (UI/UX)
El diseño debe basarse en el material promocional existente.

### 3.1. Paleta de Colores
| Uso | Variable CSS | Valor Hex |
| :--- | :--- | :--- |
| **Fondo Principal** | `--color-bg-deep` | `#0A1628` |
| **Fondo Secundario (Tarjetas/Hexágonos)** | `--color-bg-mid` | `#0D2445` |
| **Acento Principal (Brillos/Botones)** | `--color-accent-cyan` | `#00E5FF` |
| **Acento Secundario (Subtítulos)** | `--color-accent-teal` | `#00BCD4` |
| **Texto General** | `--color-text-white` | `#FFFFFF` |
| **Gris Tech (Patrones/Líneas)** | `--color-hex-gray` | `#1E3A5F` |

### 3.2. Tipografía
Se deben importar mediante Google Fonts:
- **Titulares y Logo (Display):** `Orbitron` (Pesos: 400, 700, 900).
- **Cuerpo de texto e Información:** `Exo 2` (Pesos: 300, 400, 600).

### 3.3. Estilos UI / Micro-Interacciones
- **Glassmorphism:** Uso de `backdrop-filter: blur(10px)` con fondos rgba(13, 36, 69, 0.6) para la barra de navegación y tarjetas de ponentes.
- **Neon Glow:** Sombras de caja (`box-shadow`) en `#00E5FF` suaves al hacer *hover* sobre botones interactivos y tarjetas.
- **Animaciones al hacer scroll:** Elementos que aparecen con *fade-in* o se deslizan hacia arriba (usando `IntersectionObserver` en JS).
- **Patrón de Fondo:** Uso de CSS o SVG incrustado para dibujar un fondo sutil con patrón de hexágonos estáticos o con ligera animación.

## 4. Arquitectura de Secciones (One-Page Scroll)
La página se estructurará con una navegación anclada (`#id`).

1. **`<nav>` Sticky Navbar:**
   - Logo textual estético a la izquierda.
   - Enlaces (`#horario`, `#conferencias`, `#talleres`, `#patrocinadores`).
   - Botón CTA prominente ("Ver Programa" o "Registro").
2. **`#inicio` Hero Section:**
   - Altura mínima `100vh`.
   - **Placeholder** grande en el centro para el Logo del DataDay.
   - Fecha y lugar destacados con estilo de "píldoras" o *chips*.
   - Carrusel de imágenes en la parte inferior para flyers de eventos (usar placeholders).
3. **`#sobre-evento` Info Strip:**
   - 3 tarjetas en layout de columnas: Conferencias (🎤), Talleres (🛠️), Networking (🤝).
4. **`#horario` Timeline:**
   - Línea de tiempo vertical detallando hora, nombre de actividad, y sala.
   - Colores diferenciados por tipo (Charla vs Taller).
5. **`#conferencias` Grid de Ponencias:**
   - Tarjetas con **Placeholder** para foto de perfil, nombre, cargo, empresa.
   - Hover effect con glow cyan.
6. **`#talleres` Grid de Talleres:**
   - Similar a conferencias, agregando "badges" (etiquetas) para nivel (Básico/Avanzado) y requerimientos (Ej. "Llevar Laptop").
7. **`#feria` Feria de Proyectos:**
   - Banner de ancho completo (Spotlight).
   - Espacio grande de **Placeholder** para el flyer específico de la feria.
8. **`#comunidades` y `#patrocinadores`:**
   - Grids responsivos con **Placeholders** estilizados para los logos correspondientes.
9. **`<footer>` Footer:**
   - **Placeholder** para el logo de la Universidad del Caribe. Redes sociales y créditos.

## 5. Estrategia de Imágenes "Placeholders" (Espacios Designados)
Dado que las imágenes (fotos de ponentes, logos de patrocinadores, flyers) **aún no están listas**, se deben construir contenedores de posición (*placeholders*) que:
1. Respeten las proporciones esperadas (Ej. aspecto 1:1 para fotos de perfil, 16:9 para flyers).
2. Estén estilizados para no desentonar con el diseño.
   - *Técnica recomendada:* Fondo `#0D2445`, borde punteado en `#1E3A5F` o `#00BCD4`, y un ícono sutil en el centro (usando SVGs o una clase CSS) que diga "Logo", "Foto", o "Flyer".
3. Tengan una etiqueta `<img>` lista donde solo falte cambiar el `src` a futuro.

## 6. Pasos de Ejecución para el Modelo Desarrollador
Cuando inicies el desarrollo, sigue estrictamente este orden:

1. **Inicialización y Limpieza:**
   - Ejecuta `npx -y create-vite@latest . --template vanilla` en el directorio actual.
   - Borra el contenido de demostración (`style.css` y `main.js`).
2. **Definición Base (CSS):**
   - Configura las variables CSS (`:root`), tipografías, el `reset` básico y las clases utilitarias (`.glass`, `.glow-btn`, `.section-title`, `.placeholder-box`).
3. **Estructuración Semántica (HTML):**
   - Construye el esqueleto de todas las secciones en `index.html` usando etiquetas `<section id="...">`.
   - Implementa los placeholders de imagen dentro del HTML donde corresponda.
4. **Estilización por Sección (CSS):**
   - Aplica Grid y Flexbox a los contenedores.
   - Diseña el Navbar, el Timeline interactivo del horario y el Grid de tarjetas.
5. **Comportamiento (JS):**
   - Añade la lógica del scroll suave (`scroll-behavior: smooth` o JS).
   - Implementa el `IntersectionObserver` para añadir clases `.visible` a los elementos que entran en pantalla, activando animaciones CSS.
   - Programa la lógica visual para el carrusel en la sección Hero.
6. **Revisión Final:**
   - Comprueba la responsividad en móviles (menú hamburguesa o layout fluido).
   - Asegura la accesibilidad (atributos `alt`, estructura de encabezados `h1`, `h2`).
