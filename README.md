# CRUD EN ANGULAR CON SPRING TOOLS Y SQL


# Instalación de XAMPP

XAMPP es un entorno de desarrollo que incluye Apache, MySQL, PHP y Perl para configurar un servidor local.

## Paso 1: Descargar XAMPP
1. Ve a [Apache Friends](https://www.apachefriends.org/es/index.html).
2. Descarga el instalador de XAMPP para tu sistema operativo (Windows, macOS o Linux).

## Paso 2: Ejecutar el Instalador
1. **Windows**: Ejecuta `xampp-win32-x.x.x-installer.exe` y sigue las instrucciones.
2. **macOS**: Abre el archivo `.dmg` y arrastra XAMPP a la carpeta **Aplicaciones**.
3. **Linux**: Abre la terminal y ejecuta:
   ```bash
   chmod +x xampp-linux-x.x.x-installer.run
   sudo ./xampp-linux-x.x.x-installer.run
   
## Paso 3: Configuración de Instalación:
1. Selecciona los componentes que deseas (Apache, MySQL, PHP, etc.).
2. Elige la carpeta de instalación (por defecto: C:\xampp en Windows, /Applications/XAMPP en macOS, /opt/lampp en Linux).
3. Sigue las instrucciones hasta finalizar.

## Paso 4: Iniciar XAMPP
1. Panel de Control:
   Windows: Abre xampp-control.exe.
   macOS y Linux: Ejecuta:
   sudo /opt/lampp/manager-linux-x64.run

2. Iniciar Servicios:
   En el Panel de Control, haz clic en Start en Apache y MySQL.
3. Verificar la Instalación: Abre http://localhost en tu navegador.

## Paso 5: Acceder a phpMyAdmin
  Abre http://localhost/phpmyadmin para gestionar tus bases de datos MySQL.

## Solución de Problemas Comunes
1. Puerto Ocupado: Cambia el puerto en httpd.conf a 8080 si el puerto 80 está en uso.
2. Permisos en Linux/macOS: Ejecuta XAMPP como superusuario (sudo).

# link de videos de instalacion
  WINDOWS:
  https://www.youtube.com/watch?v=IQ22Nme9t0M
  LINUX:
  https://www.youtube.com/watch?v=-Nsorv6WmSU

# Instalación de Angular

Angular es un framework para construir aplicaciones web modernas y escalables. Aquí te explico paso a paso cómo instalarlo.

## Paso 1: Instalar Node.js y npm
Angular requiere **Node.js** y **npm**.

1. Descarga Node.js desde [Node.js](https://nodejs.org/) (elige la versión LTS).
2. Instala Node.js y npm.
3. Verifica la instalación en la terminal:

   ```bash
   node -v   # Muestra la versión de Node.js
   npm -v    # Muestra la versión de npm

## Paso 2: Instalar Angular CLI
Angular CLI es una herramienta de línea de comandos para crear y gestionar proyectos Angular.

1. Instala Angular CLI globalmente en tu sistema:
   npm install -g @angular/cli
2. Verifica la instalación de Angular CLI:
   ng version

