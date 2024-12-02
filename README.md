# Angular

*tsconfig.json*

Propósito: Configuración general para TypeScript en todo el proyecto.
Define opciones como el estándar de JavaScript a usar (ES2020), rutas de importación, y configuración base para TypeScript.
Este archivo es extendido por otros archivos tsconfig específicos (como tsconfig.app.json y tsconfig.spec.json).
*tsconfig.app.json*

Propósito: Configuración de TypeScript específica para la aplicación principal.

Es una extensión de tsconfig.json y se utiliza exclusivamente para el código fuente del proyecto (excluyendo pruebas o configuraciones del servidor).
Define qué archivos y carpetas deben ser incluidos/excluidos al compilar la aplicación.

*tsconfig.spec.json*

Propósito: Configuración de TypeScript para pruebas unitarias.

Similar a tsconfig.app.json, pero específico para los archivos de prueba (normalmente terminan en .spec.ts).
Incluye configuraciones adicionales necesarias para usar herramientas de testing como Jasmine o Karma.

*package.json*

Propósito: Archivo de configuración de npm que lista las dependencias del proyecto.

Contiene:Dependencias necesarias para ejecutar la aplicación (dependencies).
Dependencias necesarias para desarrollo (devDependencies), como herramientas de compilación, testing, etc.
Scripts comunes para tareas como ng serve, ng build, o pruebas (scripts).

*package-lock.json*

Propósito: Registro detallado de las dependencias instaladas.

Asegura que se instalen las mismas versiones exactas de las dependencias en cualquier máquina donde se ejecute npm install.
Generado automáticamente por npm.

*angular.json*

Propósito: Archivo de configuración principal para Angular CLI.
Contiene configuraciones para:
Cómo construir el proyecto (ng build).
Cómo servir el proyecto (ng serve).
Configuraciones de testing, estilos, y más.
También gestiona múltiples proyectos en un monorepo (si es el caso).

*.editorconfig*

Propósito: Archivo de configuración para editores de texto.
Define reglas básicas de formato de código, como el tamaño de tabulación, el final de línea, y si usar espacios o tabs.
Asegura consistencia en el formato del código entre diferentes colaboradores y editores.

*server.ts*

Propósito: Archivo de configuración para el servidor en aplicaciones Angular Universal (renderizado en el servidor, SSR).
Este archivo define la lógica del servidor, como manejar rutas y servir la aplicación Angular renderizada en el servidor.
Es usado por frameworks como Express o similares para gestionar la parte del backend.

*main.server.ts*

Propósito: Punto de entrada para el renderizado del lado del servidor (SSR) en Angular Universal.
Contiene la lógica para inicializar la aplicación Angular en el servidor, utilizando la plataforma @angular/platform-server.
Se encarga de "bootstrapping" (inicializar) la aplicación Angular en un entorno del servidor.
Relación entre archivos
Los archivos tsconfig.*.json definen configuraciones específicas para diferentes partes del proyecto.
angular.json es la configuración principal para Angular CLI.
server.ts y main.server.ts son relevantes solo si usas Angular Universal para SSR.
package.json y package-lock.json gestionan dependencias y scripts del proyecto.
.editorconfig asegura consistencia en la escritura del código.
