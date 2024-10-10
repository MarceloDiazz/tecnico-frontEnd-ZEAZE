# Tecnico Front End ZEAZE

Esta aplicación es una **Single Page Application (SPA)** que muestra la información de un fotógrafo y sus trabajos. Está diseñada para ser completamente responsiva y ofrece una experiencia de usuario fluida.

## Descripción

La aplicación permite a los usuarios:
- **Explorar el trabajo del fotógrafo** y agregar productos (fotos) al carrito.
- **Cambiar la vista de los trabajos** hasta en 4 filas, con un diseño adaptable que se ajusta según el tamaño de la pantalla. A medida que la ventana se reduce, el número de filas disminuye hasta 3 para asegurar una visualización adecuada.
- **Ver el estado del carrito** a través de un pequeño contador en la esquina de la pantalla que muestra cuántos elementos ha añadido el usuario.

El carrito está gestionado utilizando **Redux** para manejar el estado global de la aplicación.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript utilizado para la construcción de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para el empaquetado del proyecto.
- **Redux**: Librería para la gestión del estado global de la aplicación, utilizada para manejar el estado del carrito de compras.

## Funcionalidades

- **Agregar al carrito**: Los usuarios pueden añadir los trabajos del fotógrafo a su carrito de compras.
- **Cambio de vista**: Los usuarios pueden cambiar la vista de los trabajos del fotógrafo entre 1 y 4 filas.
- **Carrito de compras**: Aunque el carrito no es visible, un pequeño contador (`span`) indica la cantidad de artículos agregados.
Funciona el botón "Añadir todo" en la seccion de CardAlbum.jsx
- **Responsividad**: El diseño es completamente adaptativo, ajustándose desde 4 filas de trabajos hasta 3 en pantallas más pequeñas.
En la sección de "Fotógrafos destacados" implementé una funcionalidad responsiva de revelacion para una mejor adaptación y un scrol horizontal.
 

## Instalación

Sigue los pasos a continuación para ejecutar la aplicación localmente:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/MarceloDiazz/tecnico-frontEnd-ZEAZE.git

2. Accede al directorio del proyecto
   cd tecnico-frontEnd-ZEAZE

3. Instala las dependencias necesarias
   pnpm install

4. Ejecuta el servidor de desarrollo:
   pnpm run dev

## Distribución de Carpetas

/tecnico-frontEnd-ZEAZE
  /public         
  /src
    /assets        # Imágenes descargadas desde el drive proporcionado
    /components    # Componentes React reutilizables
    /styles        # Archivos de estilos CSS
    /store         # Configuración de Redux para el estado global
    App.jsx        # Componente principal de la aplicación
    main.jsx       # Punto de entrada de la aplicación
  package.json     # Dependencias y scripts


## Uso
1. Explora los trabajos del fotógrafo.
2. Haz clic en los trabajos que te interesan para añadirlos al carrito.
3. Cambia la vista de los trabajos para verlos en distintas cantidades de filas (1-4 filas).
4. Observa el contador en la esquina superior que indica cuántos artículos has añadido al carrito.

## Créditos

Desarrollado por [Marcelo Diaz]