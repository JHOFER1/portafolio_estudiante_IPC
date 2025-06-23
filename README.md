# Nombre del Estudiante:
## Johnny  Fernando Palaguachi Jerez



# Portafolio Creado con REACT-Tailwindcss

Link a Figma: https://www.figma.com/design/Neo2zB6pnZ7VMxS2udfzlN/pPORTFOLIO?node-id=0-1&p=f
Link de la pagina ya publicada: https://jhofer1.github.io/portafolio_estudiante_IPC/
# 

# Mejoras de Accesibilidad y Diseño Inclusivo Aplicadas

A continuación se detallan los cambios realizados en el proyecto para mejorar la accesibilidad y la experiencia inclusiva, indicando en qué archivos se aplicaron:

---

## Cambios realizados

### 1. Uso de etiquetas semánticas HTML5  
**Archivo:** `src/App.js`  
- Se usaron por etiquetas semánticas como `<header>`, `<nav>`, `<main>`, y `<footer>` para mejorar la estructura y comprensión 

### 2. Contraste adecuado entre texto y fondo  
**Archivo:** `tailwind.config.js` y estilos generales  
- Se revisaron y ajustaron los colores para asegurar suficiente contraste 

### 3. Inclusión de atributos `alt` descriptivos en imágenes  
**Archivos:** Componentes con imágenes como  `Banner.js` `Work.js` 
- Se agregaron descripciones claras y específicas en los atributos `alt` de todas las imágenes.

### 4. Uso de etiquetas de formulario adecuadas (`label`)  
**Archivo:** `src/components/Contact.js`  
- Se añadieron etiquetas `<label>` asociadas a cada campo de formulario para mejorar la accesibilidad de usuarios con lectores de pantalla.

### 5. Navegación con teclado funcional  
**Archivos:** Componentes con botones y enlaces  
- Se verificó que todos los elementos interactivos sean accesibles mediante el teclado y tengan foco visible (`focus:ring`).

### 6. Jerarquía explícita en títulos  
**Archivos:** Todos los componentes de sección (por ejemplo, `Experience.js`)  
- Se corrigió la jerarquía de títulos usando `<h1>`, `<h2>`, `<h3>`, etc., de forma lógica y secuencial.

### 7. Descripción clara en enlaces y botones  
**Archivos:** Componentes con enlaces y botones  
- Se mejoraron los textos de enlaces y botones para que sean descriptivos y no ambiguos.



## Mejoras de diseño inclusivo

### 1. Tamaños de fuente ajustables  
- Se utilizaron unidades relativas (`rem`, `em`) en los tamaños de fuente y espaciados para permitir la escalabilidad según la configuración del usuario.

### 2. Foco visible para navegación por teclado  
- Se añadieron estilos de foco visible (`focus:outline-none focus:ring-2`) en elementos interactivos.

### 3.  atributos ARIA  
- Se agregaron atributos `aria-label` y roles en listas y secciones para mejorar la experiencia con lectores de pantalla.

---
