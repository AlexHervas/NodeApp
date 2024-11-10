# Nodepop

**Nodepop** es una aplicación de venta de artículos de segunda mano. Esta aplicación utiliza **Node.js** con **Express** para el servidor y **MongoDB** como base de datos, proporcionando una experiencia de renderizado del lado del servidor (SSR) con **ejs**. La autenticación de usuarios se gestiona de forma segura usando **bcrypt** para la encriptación de contraseñas y manejo de sesiones.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de ejecución del servidor.
- **Express**: Framework para la gestión de rutas y solicitudes HTTP.
- **MongoDB**: Base de datos NoSQL para almacenar la información de usuarios y productos.
- **Mongoose**: ODM (Object Data Modeling) que facilita la interacción con MongoDB.
- **bcrypt**: Librería para encriptación y comparación segura de contraseñas.
- **express-session y connect-mongo**: Manejo de sesiones para la autenticación persistente del usuario.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/): Entorno de tiempo de ejecución de JavaScript.
- [MongoDB Community Server](https://www.mongodb.com/try/download/community): Base de datos para almacenar usuarios y artículos.

## Instalación

Sigue estos pasos para configurar e iniciar el proyecto localmente:

1. **Clona el repositorio:**
   ```
   git clone https://github.com/AlexHervas/NodeApp
   cd NodeApp
   ```

2. **Instala las dependencias:**
    ```
    npm install
    ```

3. **Inicializa la base de datos:**
    ```
    npm run initDB
    ```

4. **Inicia la aplicacion:**
    ```
    npm run start
    ```
    En modo desarrollador
    ```
    npm run dev
    ```
    En modo debug
    ```
    npm run debug
    ```
5. **Abre tu navegador y accede a http://localhost:3000.**