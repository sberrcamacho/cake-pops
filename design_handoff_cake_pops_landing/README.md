# Handoff: Landing page de cake pops artesanales

## Overview
Landing page comercial de una sola página para un emprendimiento de cake pops artesanales (tres socios, Colombia). Objetivo: que un visitante que llega desde redes sociales entienda qué se vende, compare los tres sabores y sus precios, y pida por WhatsApp en pocos segundos. Prioridad absoluta: experiencia móvil.

Secciones, en orden: Navbar · Hero · Nuevo sabor (destacado Oreo) · Sabores · ¿Por qué elegirnos? · Nosotros · Pedidos (CTA) · Footer.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML** — prototipos que muestran la apariencia y el comportamiento previstos, no código de producción para copiar tal cual. `Cake Pops Landing.dc.html` usa un runtime propio de prototipado (plantilla con `{{ }}`, `<sc-if>`, estilos inline) y un web component `<image-slot>` para las fotos.

La tarea es **recrear este diseño en el entorno del proyecto destino** (Next.js/React, Astro, Vue, HTML+CSS estático, etc.) usando sus patrones y librerías. Si aún no existe un entorno, elegir el más apropiado; para una landing de una página, HTML+CSS estático o Astro/Next con export estático es suficiente. Los estilos inline del prototipo deben convertirse a la convención del proyecto (CSS modules, Tailwind, styled-components…).

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciados, radios, sombras y copys son finales. Recréese la UI con fidelidad pixel a pixel. Las fotografías son provisionales (referencias tomadas de internet) y deben reemplazarse por fotos propias del emprendimiento antes de publicar.

## Screens / Views
Una sola vista, ancho de contenido máximo **1160px**, padding horizontal **20px**, fondo crema `#FBF5EE`. Todas las secciones usan padding vertical fluido `clamp(48px,7vw,92px)` salvo donde se indique.

### 1. Navbar
- **Propósito**: navegación interna y acceso permanente a Pedidos.
- **Layout**: `position:sticky; top:0; z-index:50`, alto **64px**, fondo `rgba(251,245,238,0.94)` con `backdrop-filter:blur(10px)`, borde inferior `1px solid #EADFD1`. Contenido en flex, `justify-content:space-between`.
- **Logo**: "CAKE POPS" en DM Serif Display 21px + "artesanales" 9px, `letter-spacing:0.22em`, uppercase, `#9A8574`.
- **Links desktop** (≥760px): Inicio · Sabores · Nosotros en Jost 14.5px `#4A3327`, `gap:34px`, hover `#8A2A3B`. "Pedidos" es pill `#3A2317`, texto blanco 14px, `padding:10px 20px`, `border-radius:999px`; hover `background:#8A2A3B; transform:translateY(-1px)`, transición `.25s ease`.
- **Móvil (<760px)**: botón hamburguesa 46×46px, borde `1px solid #E3D5C4`, radio 14px, tres barras 18×1.5px `#3A2317`; hover `background:#F3E9DC`. Al abrir, panel vertical debajo del navbar: links con `min-height:48px`, 17px, separador `1px solid #F0E6DA`, y al final pill oscuro "Hacer un pedido" (`min-height:52px`). El menú se cierra al pulsar cualquier link.
- **Navegación**: anchors internos (`#inicio`, `#sabores`, `#nosotros`, `#pedidos`) con `html{scroll-behavior:smooth}`.

### 2. Hero (`#inicio`)
- **Layout**: flex con `flex-wrap:wrap`, `gap:clamp(28px,4vw,56px)`, `align-items:center`; dos columnas `flex:1 1 320px` (se apilan en móvil). Padding `clamp(28px,6vw,72px) 20px clamp(40px,6vw,80px)`.
- **Eyebrow**: "Cake pops artesanales", 11px, uppercase, `letter-spacing:0.2em`, color `#8A2A3B`, fondo `#F6E7E6`, pill `padding:7px 14px`.
- **H1**: "Cake pops que hacen especial cualquier momento." — DM Serif Display 400, `clamp(34px,7.5vw,60px)`, `line-height:1.06`, `letter-spacing:-0.015em`, `#3A2317`, `text-wrap:pretty`.
- **Subtítulo**: "Pequeños, deliciosos y hechos para disfrutar." — `clamp(16px,2.1vw,19px)`, `line-height:1.55`, peso 300, `#6B5245`, `max-width:44ch`.
- **Botones** (`gap:12px`, `min-height:52px`, `border-radius:999px`, 16px/500):
  - "Ver sabores" → `#sabores`: fondo `#3A2317`, texto `#FFF`, sombra `0 8px 22px -14px rgba(58,35,23,0.7)`; hover fondo `#8A2A3B` + `translateY(-2px)`.
  - "Hacer un pedido" → `#pedidos`: fondo `#FFF`, texto `#3A2317`, borde `1px solid #E3D5C4`; hover borde y texto `#8A2A3B` + `translateY(-2px)`.
- **Imagen**: slot `aspect-ratio:4/5`, `border-radius:28px`, sombra `0 30px 60px -34px rgba(58,35,23,0.45)`. Contenido: varios cake pops juntos.

### 3. Nuevo sabor — destacado Oreo
Sección oscura, fondo `#3A2317`, padding `clamp(44px,6.5vw,88px) 0`. Va **antes** de la sección de sabores.
- **Layout**: flex `flex-wrap:wrap-reverse`, `gap:clamp(26px,4vw,56px)`; texto `flex:1 1 300px`, imagen `flex:1 1 320px` con `aspect-ratio:1/1`, radio 28px, sombra `0 30px 60px -30px rgba(0,0,0,0.6)`.
- **Badge**: "Nuevo sabor" — 10.5px uppercase, `letter-spacing:0.2em`, texto `#3A2317` sobre `#F4C95D`, pill `padding:6px 13px`.
- **H2**: "Oreo" — DM Serif Display, `clamp(32px,5.6vw,50px)`, `#FDF6EE`.
- **Texto**: "Lo último que sumamos a la carta: galleta Oreo bajo una cobertura de chocolate blanco." — `clamp(16px,2vw,19px)`, peso 300, `#E2CDBB`.
- **Precio**: "$3.500" DM Serif Display 34px `#FDF6EE` + "COP" 12px uppercase `#B9A08F`.
- **CTA**: "Probar Oreo" → `#pedidos`; fondo `#F6EDE2`, texto `#3A2317`, `min-height:52px`, pill; hover fondo `#F4C95D` + `translateY(-2px)`.

### 4. Sabores (`#sabores`)
Fondo `#FFFDFA`, bordes superior/inferior `1px solid #F0E6DA`.
- **Encabezado centrado**: H2 "Nuestros sabores" (DM Serif Display, `clamp(28px,4.6vw,44px)`) + "Elige tu favorito." (16.5px, peso 300, `#6B5245`), `max-width:520px`.
- **Grid**: `repeat(auto-fit,minmax(min(100%,268px),1fr))`, `gap:clamp(18px,2.4vw,28px)` → 3 columnas en desktop, apiladas en móvil.
- **Tarjeta**: fondo `#FFF`, borde `1px solid #EFE4D6` (Red Velvet y Oreo usan `#E7D6BF`), radio 24px, `overflow:hidden`; hover `translateY(-5px)` + sombra `0 26px 44px -28px rgba(58,35,23,0.4)`, transición `.28s ease`.
  - Foto `aspect-ratio:1/1` arriba, a sangre.
  - Cuerpo `padding:22px 22px 24px`, `gap:10px`.
  - Nombre: DM Serif Display 24px `#3A2317`; a su derecha la etiqueta (9.5px, uppercase, `letter-spacing:0.16em`, pill, `white-space:nowrap`).
  - Descripción 14.5px `line-height:1.55` peso 300 `#6B5245`, `flex:1` (alinea precios).
  - Fila inferior: precio DM Serif Display 26px `#3A2317` + botón "Pedir" (`min-height:44px`, pill `#3A2317`, texto `#FFF` 14.5px; hover `#8A2A3B`) → `#pedidos`.
- **Contenido exacto de las tres tarjetas**:
  1. **Red Velvet** — etiqueta `Premium` (texto `#FFF` sobre `#8A2A3B`) + cinta superior izquierda "El favorito de la casa" (texto `#3A2317` sobre `#F4C95D`, 9.5px uppercase, pill, `top:14px; left:14px`). "Nuestro sabor distintivo, con el característico sabor Red Velvet y cobertura de chocolate negro." — **$3.500**
  2. **Vainilla** — etiqueta `Económico` (texto `#5E4433`, fondo `#F3E7D6`, borde `#E7D6BF`). "El clásico de vainilla, sencillo, delicioso y perfecto para cualquier ocasión." — **$3.000**
  3. **Oreo** — etiqueta `Nuevo sabor` (texto `#6B4A12`, fondo `#FCF1D6`, borde `#F0DCA8`). "Oreo con cobertura de chocolate blanco, la combinación que más gusta." — **$3.500**

### 5. ¿Por qué elegirnos?
Fondo `#FBF5EE`. H2 centrado "Un pequeño detalle, un gran antojo." (`max-width:18ch`).
- **Grid**: `repeat(auto-fit,minmax(min(100%,220px),1fr))`, `gap:clamp(16px,2.2vw,24px)`.
- **Tarjeta**: fondo `#FFFDFA`, borde `1px solid #EFE4D6`, radio 20px, `padding:26px 22px`; hover borde `#D9C2AC`. Icono: cuadro 38×38px radio 12px fondo `#F3E7D6` con una figura geométrica simple (círculo `#8A2A3B`; tres puntos `#8A2A3B/#3A2317/#C9A227`; signo "$" en serif; cuadrado rotado 45° con borde `#8A2A3B`). Título 17px/500, descripción 14px peso 300 `#6B5245`.
- **Contenido**: Artesanales — "Hechos uno por uno, a mano." · Sabores para todos — "Tres opciones en la carta." · Precios accesibles — "Desde $3.000 por unidad." · Perfectos para compartir — "Del tamaño justo para un antojo."

### 6. Nosotros (`#nosotros`)
Fondo `#FFFDFA` con bordes `#F0E6DA`. Dos columnas flex (`gap:clamp(28px,4vw,64px)`): foto `flex:1 1 300px` `aspect-ratio:4/3` radio 26px sombra `0 24px 48px -32px rgba(58,35,23,0.5)`; texto `flex:1 1 340px`.
- Eyebrow "Nosotros" (10.5px uppercase `#9A8574`), H2 "Conoce nuestro emprendimiento", párrafo: "Somos un emprendimiento creado por tres socios con el objetivo de ofrecer cake pops deliciosos, accesibles y pensados para disfrutar en cualquier ocasión."
- **Socios**: tres filas, fondo `#FBF5EE`, borde `1px solid #EFE4D6`, radio 16px, `padding:14px 16px`, `gap:10px` entre filas; hover borde `#D9C2AC` + `translateX(3px)`. Cada fila: monograma circular 38px (SO sobre `#8A2A3B` texto `#FFF7F2`; SF sobre `#3A2317` texto `#FDF6EE`; SB sobre `#C9A227` texto `#3A2317`, DM Serif Display 15px) + nombre 16px/500 `#3A2317`: Sara Ospina Sanchez · Simon Florez Ramirez · Samuel Berrio Camacho. Sin cargos ni biografías.

### 7. Pedidos (`#pedidos`)
Fondo de sección `#FBF5EE`, padding `clamp(52px,7.5vw,100px) 20px`. Tarjeta `max-width:860px`, fondo `#8A2A3B`, radio 30px, `padding:clamp(32px,5vw,60px) clamp(22px,4vw,52px)`, sombra `0 30px 60px -34px rgba(138,42,59,0.65)`.
- Eyebrow "Pedidos" (pill con borde `rgba(255,247,242,0.4)`, texto `#FBE4E4`), H2 "¿Cuál vas a probar?" `clamp(30px,5.4vw,48px)` `#FFF7F2`, texto "Elige tu sabor favorito y haz tu pedido." `#FBE4E4`.
- **Resumen de sabores**: grid `repeat(auto-fit,minmax(min(100%,200px),1fr))`, `gap:12px`; cada celda fondo `rgba(255,247,242,0.1)`, borde `rgba(255,247,242,0.28)`, radio 18px, `padding:16px 18px`; hover fondo `rgba(255,247,242,0.18)`. Contenido: etiqueta (Favorito de la casa `#F4C95D` / Económico `#FBE4E4` / Nuevo sabor `#F4C95D`), nombre 17px/500 `#FFF7F2`, precio DM Serif Display 22px.
- **CTA principal**: "Hacer pedido por WhatsApp" → `https://wa.me/573013038919` (`target="_blank" rel="noopener"`); `max-width:400px`, `min-height:58px`, pill `#FFF7F2`, texto `#8A2A3B` 17px/600; hover fondo `#FFF`, texto `#631E2B`, `translateY(-2px)`.
- **Nota**: "Escríbenos a +57 301 303 8919 con el sabor y la cantidad, y te confirmamos tu pedido." (13.5px `#F0C4C9`, número en `#FFF7F2` con `white-space:nowrap`).
- **Transferencias**: bloque centrado `max-width:420px`, fondo `rgba(255,247,242,0.1)`, borde `rgba(255,247,242,0.28)`, radio 18px, `padding:14px 20px`: etiqueta "Transferencias" (10.5px uppercase `#FBE4E4`) + "Nequi 314 587 7853" (16px/500 `#FFF7F2`, `nowrap`).
- Sin carrito ni formulario: el único camino de conversión es WhatsApp.

### 8. Footer
Fondo `#3A2317`, texto `#E2CDBB`, padding `clamp(40px,5.5vw,72px) 20px 28px`.
- Grid `repeat(auto-fit,minmax(min(100%,220px),1fr))`, `gap:clamp(26px,4vw,48px)`: (a) marca "CAKE POPS" DM Serif Display 24px `#FDF6EE` + "Pequeños bocados, grandes momentos." 14.5px peso 300; (b) Navegación (Inicio, Sabores, Nosotros, Pedidos, 14.5px `#E2CDBB`, hover `#E8A9B4`); (c) Contacto: "WhatsApp: +57 301 303 8919" (link wa.me) y "Nequi: 314 587 7853". Encabezados de columna 10.5px uppercase `letter-spacing:0.2em` `#B9A08F`.
- Barra inferior: `border-top:1px solid #55392A`, 12.5px `#B9A08F`, alineada a la derecha: "© <año actual> CAKE POPS. Todos los derechos reservados." El año se calcula en runtime.

## Interactions & Behavior
- **Navegación**: solo anchors internos + scroll suave. Ningún enrutado.
- **Menú móvil**: estado booleano; se muestra bajo el umbral de 760px y se cierra al pulsar un link. El navbar es sticky en todos los tamaños.
- **Breakpoint del navbar**: 760px, medido con `window.innerWidth` en el prototipo; en producción usar media queries CSS (`min-width:760px` muestra la nav horizontal, por debajo el hamburguesa) para evitar JS innecesario.
- **Hover**: todas las tarjetas y botones descritos arriba; transiciones `.25s–.28s ease` sobre `transform`, `background`, `border-color`, `box-shadow`. Sin animaciones de entrada ni parallax.
- **Enlaces externos**: los de WhatsApp abren en pestaña nueva con `rel="noopener"`.
- **Estados de carga/error**: no aplican (sitio estático).
- **Responsive**: correcto desde 320px. Todas las tipografías principales usan `clamp()`; los grids usan `auto-fit`/`minmax` y las dos columnas `flex:1 1 <base>` para apilarse solas. Objetivos táctiles ≥44px. Números de teléfono siempre con `white-space:nowrap`.

## State Management
Prácticamente inexistente:
- `menuOpen: boolean` — menú hamburguesa.
- `viewportWidth: number` — solo si se replica el cambio desktop/móvil en JS; preferible resolverlo con CSS.
- `year` — `new Date().getFullYear()` para el copyright.
- Props configurables del prototipo: `brandName` (por defecto "CAKE POPS") y `tagline` (por defecto "Pequeños bocados, grandes momentos."). Mantenerlos como constantes o variables de contenido: el nombre definitivo de la marca aún no está decidido y debe poder cambiarse en un solo lugar.

## Design Tokens
**Colores**
- Fondo crema: `#FBF5EE`
- Fondo alterno/tarjetas claras: `#FFFDFA`, `#FFFFFF`
- Chocolate (texto principal, superficies oscuras): `#3A2317`
- Chocolate medio (texto secundario): `#6B5245`; terciario `#9A8574`; nav links `#4A3327`
- Vino (acento Red Velvet, CTA): `#8A2A3B`; hover `#631E2B`
- Rosados sobre oscuro: `#E8A9B4`, `#FBE4E4`, `#F0C4C9`, `#E9B2B9`, `#F6E7E6`
- Crema sobre oscuro: `#FDF6EE`, `#FFF7F2`, `#F6EDE2`, `#E2CDBB`, `#B9A08F`
- Dorado (destacados/monograma): `#F4C95D`, `#C9A227`, `#FCF1D6`, `#F0DCA8`, `#6B4A12`
- Bordes: `#EADFD1`, `#EFE4D6`, `#E7D6BF`, `#E3D5C4`, `#F0E6DA`, `#D9C2AC`, `#55392A` (sobre oscuro)
- Superficies translúcidas sobre vino: `rgba(255,247,242,0.1)` con borde `rgba(255,247,242,0.28)`

**Tipografía**
- Titulares y precios: **DM Serif Display** 400 (Google Fonts), incluida cursiva.
- Interfaz y cuerpo: **Jost** 300/400/500/600 (Google Fonts).
- Escala: H1 `clamp(34px,7.5vw,60px)` / H2 sección `clamp(28px,4.6vw,44px)` / H2 destacado `clamp(32px,5.6vw,50px)` / nombre de producto 24px / precio tarjeta 26px / precio destacado 34px / cuerpo `clamp(16px,2vw,19px)` / descripción 14.5px / nota 13–13.5px / etiqueta 9.5–11px uppercase con `letter-spacing` 0.16–0.22em.

**Espaciado**
- Padding de sección: `clamp(48px,7vw,92px)` (hero y pedidos algo mayores).
- Ancho máximo: 1160px (contenido), 860px (tarjeta de pedidos), 760px (bloques de texto), padding lateral 20px.
- Gaps: 10 / 12 / 14 / 18 / 22 / 28 / `clamp(26px,4vw,56px)`.

**Radios**: 12px (icono) · 14px (botón hamburguesa) · 16–18px (filas, celdas) · 20–24px (tarjetas) · 26–30px (imágenes grandes, tarjeta CTA) · 999px (pills).

**Sombras**
- Botón oscuro: `0 8px 22px -14px rgba(58,35,23,0.7)`
- Tarjeta hover: `0 26px 44px -28px rgba(58,35,23,0.4)`
- Imagen hero: `0 30px 60px -34px rgba(58,35,23,0.45)`
- Imagen sobre fondo oscuro: `0 30px 60px -30px rgba(0,0,0,0.6)`
- Tarjeta de pedidos: `0 30px 60px -34px rgba(138,42,59,0.65)`

## Assets
- **Fotografías (provisionales)**: en `uploads/`. Son referencias encontradas en internet más una foto real de producción (`cake-original.jpg`). **No son propiedad del emprendimiento**: deben reemplazarse por fotos propias antes de publicar y no deben atribuirse a la marca. Asignación actual:
  - Hero → `hero-actual.png`
  - Destacado "Nuevo sabor" → `cake-oreo-9e9611ea.jpg`
  - Tarjeta Red Velvet → `decorated_chocolate_truffles.jpg`
  - Tarjeta Vainilla → `vainilla-actual.png`
  - Tarjeta Oreo → `cake-oreo-3-bd53962c.jpg`
  - Nosotros → `nosotros-actual.png` (foto real del proceso)
  Cada imagen ocupa un contenedor con `aspect-ratio` fijo y `object-fit:cover`, por lo que sustituirlas no altera el layout.
- **Iconos**: ninguno externo. Los cuatro iconos de "¿Por qué elegirnos?" son formas CSS (círculo, tres puntos, "$" en serif, cuadrado rotado). Pueden sustituirse por un set de iconos del proyecto manteniendo el cuadro 38×38px.
- **Fuentes**: DM Serif Display y Jost desde Google Fonts. En producción conviene autohospedarlas o usar el mecanismo de fuentes del framework.
- **Logo**: no existe. El navbar usa el nombre provisional "CAKE POPS" como wordmark.

## Datos pendientes (no inventar)
- Nombre definitivo de la marca (hoy "CAKE POPS", provisional).
- Redes sociales: **no hay**; se eliminó toda referencia a Instagram a propósito.
- Dirección, horarios, domicilios, combos por 3/6/12 unidades, pedidos personalizados, eventos y promociones: aún sin definir. El diseño deja espacio para añadirlos como nuevas tarjetas/secciones sin rehacer el layout.
- Datos confirmados: precios (Red Velvet $3.500, Vainilla $3.000, Oreo $3.500 COP), WhatsApp +57 301 303 8919, Nequi 314 587 7853, socios Sara Ospina Sanchez, Simon Florez Ramirez, Samuel Berrio Camacho.

## Files
- `Cake Pops Landing.dc.html` — diseño completo (plantilla + lógica). Referencia visual principal.
- `support.js`, `image-slot.js` — runtime del prototipo y componente de imagen. **No portar**: son andamiaje de la herramienta de diseño.
- `uploads/` — fotografías provisionales listadas arriba.
