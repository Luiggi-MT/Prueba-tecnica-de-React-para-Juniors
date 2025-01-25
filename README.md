# Prueba técnica para Juniors y Trainers en live coding
APIS: 
- Facts Random: https://catfact.ninja/fact
- Imagen Random: https://api.thecatapi.com/v1/images/search
  
Lo que hay que hacer 

- Recupera un hecho aleatorio de gatos de la primera API
- Recupera la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra

Pasos: 

	1) Crear un proyecto de react usando vite "npm create vite@latest". 
	2) Crearemos un endpoint para cargar el React. 
	3) Existen plugins de vite como babel. "npm install @vitejs/plugin-react -E".
	4) En el packaje json no tenemos react por lo que tendremos que instalar las dependencias. "npm install react react-dom -E". 
	5) Crearemos el archivo vite.config.js
		Tenemos que importar defineconfig y tambien react 
	6) Como el main.js es el primer archivo que se va a cargar en la aplicacion de react. Lo que vamos 
		a hacer es importar del react-dom el createRoot
	7) Habrá que cambiar el archivo main.js por main.jsx y también en el index.html
	8) Una vez hecho esto, tenemos que evitar que la página este en blanco. Instalar el linter
		npm install standard -D 
