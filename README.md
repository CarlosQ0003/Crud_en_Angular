![captura1](https://github.com/user-attachments/assets/bfb6037a-0568-43b5-89d3-21430bfc7456)
# CRUD EN ANGULAR CON SPRING TOOLS Y SQL


##OBJETIVO

Crear un servicio en spring tools y se puede consumir en angular es crear la interfaz grafica

# instalacion del proyecto paso a paso
## Paso1:
1. ingresas al phpMyadmin:
   ![datos1](https://github.com/user-attachments/assets/9ed5fed1-bd4d-429d-8b72-936b283cd752)

3. creamos la base de datos con el nombre db_ejemplo
   ![datos1](https://github.com/user-attachments/assets/2e067186-e4f4-4d97-a77b-905d89556b0e)

4. importamos la base de datos
   ![datos2](https://github.com/user-attachments/assets/d3cfb350-73c4-4d9a-a30c-bb4133987b07)

5. ingresamos a la estructura de usuario
   ![datos3](https://github.com/user-attachments/assets/fbe22027-0612-42f2-8571-704107db0409)

6. debe aparecerte el id de usuario como AUTO_INCREMENT
   ![datos4](https://github.com/user-attachments/assets/2c884dac-088d-48b6-ac0c-cc198aee4635)

7. en dado caso no te aparezca en AUTO_INCREMENT de las a cambiar y lo activas
   ![datos5](https://github.com/user-attachments/assets/65abc41e-e890-48f6-918e-19a9576de54c)


#  Paso 2:
1. ingremos al al spring tools, le damos a file y luego a open proyect.
   ![spring1](https://github.com/user-attachments/assets/530c5a81-5606-4514-8256-e6e0d4ee196a)

2. al ingresar al open proyect directory.
   ![spring2](https://github.com/user-attachments/assets/0e5a6945-726a-43d1-bfc0-ad4e94d2d720)

3. buscas el proyecto.
   ![spring3](https://github.com/user-attachments/assets/aee71243-328b-4b10-81ea-19523faeed3e)

4. asi te deberia salir.
   ![spring4](https://github.com/user-attachments/assets/0d9a37df-a312-4454-b62e-219283dc0574)

5. luego buscas el folder o packeg "src/main/resources" y seleccionas el Application.properties y en la linea 5 cambias el localhost:**** al cual salga tu xampp
   ![spring5](https://github.com/user-attachments/assets/e6a25891-a39f-4baa-9754-8cc4102e6e7b)

7. asi es como deberias ejecutar el proyecto
   ![spring6](https://github.com/user-attachments/assets/69e63100-ce22-47ad-8be9-f23bd13dc9c7)


## Paso 3:
1. ingresas al archivo, haces clic derecho, selecionas la terminar y pones el comando "code ."
   ![angular](https://github.com/user-attachments/assets/5e31babb-a40f-4fd7-a330-308798ace137)

2. una vez ingresado al proyecto "ejemplo_09" le das a los "..." seleccionas la terminal.
   ![angular1](https://github.com/user-attachments/assets/a5eff408-9977-4fa2-a7fe-67cf6a519e03)

3. luego colocas el siguiente comando en la terminal "ng server -o" debe aparecerte asi
   ![angular2](https://github.com/user-attachments/assets/1ebd6ea8-8935-4bd9-bcc2-8f9252ba3b5e)

4. asi deberia aparecer mi interfaz
   ![angular3](https://github.com/user-attachments/assets/06466bae-2076-4ba6-9a27-665ddf1e2386)


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

#instalar el Spring tools

link de descarga: https://spring.io/tools
link video paso a paso: https://www.youtube.com/watch?v=89Mr-dYcHxA
