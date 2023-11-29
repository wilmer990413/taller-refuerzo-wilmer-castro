
# **Taller de Nivelación Curso Desarrollo Web Frontend**

El presente taller tiene el propósito de evaluar la comprensión y aplicación de conceptos fundamentales del desarrollo web Frontend desde los conceptos de lógica de programación, HTML, CSS, JavaScript, React Js, los diferentes tipos de Hooks, su uso adecuado y cómo utilizar React Router DOM v6 para la navegación en una aplicación React. Se busca nivelar y asegurar la apropiación de los conceptos vistos hasta el momento en el curso de desarrollo web frontend, la implementación de ReactJS y sus tecnologías asociadas.

## **MÓDULO SOBRE REACT JS**

### **1. Explicar brevemente el concepto de ReactJS y sus principales características.**

ReactJS es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y eficientes para aplicaciones web. Aquí hay una breve explicación de sus principales características:

- React organiza la interfaz de usuario en componentes reutilizables.
- React utiliza un Virtual DOM para mejorar el rendimiento.
- React utiliza JSX (JavaScript XML) como una extensión de JavaScript que permite escribir código HTML dentro de archivos JavaScript.
- React sigue el principio de unidireccionalidad de datos, lo que significa que el flujo de datos se mueve en una sola dirección, desde el componente principal hacia sus componentes hijos.
- Para gestionar la navegación en aplicaciones de una sola página, React proporciona React Router, una biblioteca que permite la navegación declarativa y basada en componentes.
- React gestiona el estado de los componentes, permitiendo que estos reaccionen a cambios en los datos y actualicen la interfaz de usuario de manera eficiente.

### **2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que existen.**

Un componente es la unidad fundamental de construcción de interfaces de usuario. Puede considerarse como un bloque de construcción reutilizable que encapsula una parte específica de la interfaz de usuario y su lógica asociada.

**Componentes Funcionales:**
- Definidos como funciones de JavaScript.
Introducidos en React con la llegada de los "Hooks" en la versión 16.8.
- Carecen de estado interno y métodos del ciclo de vida.
- Ideales para componentes simples y presentacionales.
- Con el uso de Hooks, los componentes funcionales pueden gestionar estado y efectos secundarios.
Ejemplo de un componente funcional:
```bash
import React from 'react';
const FuncionalComponent = () => {
  return <div>¡Hola, soy un componente funcional!</div>;
};
export default FuncionalComponent;
```
**Componentes Basados en Clases:**


### **3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?**

- Definidos como clases de JavaScript que extienden React.Component.
- Pueden tener estado interno y métodos del ciclo de vida.
- Adecuados para componentes más complejos que requieren gestionar su propio estado.
- Han sido utilizados antes de la introducción de los Hooks.
Ejemplo de un componente basado en clase:
```bash
import React, { Component } from 'react';
class ClaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: '¡Hola, soy un componente basado en clase!'
    };
  }
  render() {
    return <div>{this.state.mensaje}</div>;
  }
}
export default ClaseComponent;
```
### **4. ¿Qué es JSX en ReactJS y porqué es importante?**

JSX (JavaScript XML) es una extensión de JavaScript utilizada en ReactJS para describir la estructura de las interfaces de usuario. En lugar de utilizar métodos como React.createElement para crear elementos de interfaz de usuario, JSX permite escribir código similar a HTML directamente en archivos JavaScript.

Aquí hay algunas razones por las cuales JSX es importante en ReactJS:

- Sintaxis Concisa: Facilita la creación de interfaces de usuario de manera más legible y concisa que el uso de métodos React.createElement.

- Integración con JavaScript: Permite la incorporación sencilla de expresiones y lógica de JavaScript directamente en el código de la interfaz de usuario.

- Creación de Componentes: Es fundamental para la definición de componentes en React, facilitando la creación y reutilización de elementos de interfaz.

- Compatibilidad con Herramientas de Desarrollo: Compatible con herramientas que facilitan la depuración y el análisis del código fuente de React.

- Legibilidad del Código: Mejora la legibilidad del código al adoptar una sintaxis similar a HTML, facilitando la comprensión del código para los desarrolladores.

### **5. ¿Qué es un Hook en ReactJS y cuál es su propósito?**

Un Hook en ReactJS es una función especial que permite a los componentes funcionales de React tener características que previamente solo estaban disponibles en componentes basados en clases. El propósito principal de los Hooks es proporcionar una manera de compartir lógica entre componentes, especialmente en el contexto de componentes funcionales. 

### **6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan.**

**useState:**

- Propósito: Permite a un componente funcional tener estado local.
- Uso: Se utiliza para declarar variables de estado y funciones para actualizar ese estado en componentes funcionales.

```bash
import React, { useState } from 'react';
function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

**useEffect:**

- Propósito: Permite realizar efectos secundarios en componentes funcionales, como la suscripción a datos externos o la manipulación del DOM.
- Uso: Se utiliza para ejecutar código después de que el componente se monta, actualiza o desmonta.

```bash
import React, { useState, useEffect } from 'react';
function DatosEnTiempoReal() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    // Lógica para obtener datos en tiempo real
    // (se ejecuta después de cada renderizado)
  }, []); // El segundo argumento indica las dependencias, [] significa que se ejecuta solo una vez al montar el componente
  return <div>{/* Renderizar los datos */}</div>;
}
```
**useContext:**

- Propósito: Permite a un componente funcional consumir un contexto de React.
- Uso: Se utiliza para acceder a valores proporcionados por un Context.Provider en componentes descendientes, evitando la necesidad de pasar props a través de múltiples niveles.

```bash
import React, { useContext } from 'react';
const MiContexto = React.createContext();
function ComponenteConsumidor() {
  const valorContexto = useContext(MiContexto);
  return <p>Valor del contexto: {valorContexto}</p>;
}
```
### **7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?**

- **Solo usar Hooks en componentes de función:** Los Hooks solo deben usarse en componentes de función de React y no en componentes de clase. 
- **Usar Hooks solo en el nivel superior:** No uses Hooks dentro de bucles, condiciones o funciones anidadas.
- **Usar Hooks dentro de componentes de React:** Asegúrate de que los Hooks se utilicen dentro de componentes de React y no en funciones JavaScript regulares.
- **Nombrar correctamente los Hooks personalizados:** Si creas tu propio Hook personalizado, asegúrate de que su nombre comience con "use" para seguir la convención de nombres de Hooks.
- **Seguir el orden de los Hooks:** Cuando uses múltiples Hooks en un componente, sigue siempre el mismo orden.

### **8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.**

React Router DOM es una biblioteca que facilita la navegación en aplicaciones React al permitir que los desarrolladores gestionen la navegación y las URL en la aplicación. 

React Router DOM se utiliza para manejar la navegación en aplicaciones React, permitiendo la creación de rutas y la renderización de componentes asociados con esas rutas.

**Principales Componentes:**

- <BrowserRouter>: Este componente envuelve la aplicación y proporciona la funcionalidad de enrutamiento utilizando el historial del navegador.

- <Route>: Este componente renderiza un componente o una vista asociada a una ruta específica.

- <Link>: Se utiliza para crear enlaces entre diferentes rutas en la aplicación.

- <Switch>: Renderiza el primer <Route> o <Redirect> que coincida con la ubicación actual.

**Principales Hooks:**

- useParams: Este hook envuelve un objeto clave/valor con los parámetros dinámicos de la URL.

- useLocation: Este hook devuelve el objeto location, que contiene información importante sobre la URL actual.

- useNavigate: Este hook devuelve la función navigate, que podemos utilizar para realizar redirecciones programáticas. Con esta función podemos hacer lo mismo que con el componente navigate.

- useSearchParams: Con este hook podemos trabajar con la cadena de consulta de la URL. El hook useSearchParams devuelve un par de searchParams en forma de URLSearchParams y una función para actualizarlos.

### **9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.**

Asegúrate de tener instalada la biblioteca React Router DOM en tu proyecto. Puedes instalarla usando npm o yarn:

```bash
npm install react-router-dom
# o
yarn add react-router-dom
```

En el componente principal de tu aplicación, envuelve tus componentes con el componente BrowserRouter. Este componente proporciona un contexto para que los componentes hijos puedan acceder al estado de la ubicación actual.

```bash
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
```

### **10.¿Cómo se definen rutas en React Router DOM?**

En React Router DOM, las rutas se definen mediante el uso de componentes proporcionados por la biblioteca, como Route, Switch, y otros. Aquí hay una descripción básica de cómo se definen las rutas:

- BrowserRouter
El componente BrowserRouter envuelve toda tu aplicación y proporciona el contexto necesario para que los componentes puedan interactuar con el historial de navegación.

```bash
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      {/* Tu aplicación y rutas van aquí */}
    </Router>
  );
}
```

- Route
El componente Route es fundamental para definir rutas. Se utiliza para emparejar una ruta específica con un componente particular que debería renderizarse cuando la URL coincide con esa ruta.

```bash
import { Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route path="/ruta" component={MiComponente} />
    </Router>
  );
}
```

- Switch
El componente Switch se utiliza para renderizar el primer Route que coincide con la ubicación actual. Esto es útil cuando tienes varias rutas y solo quieres que se renderice la primera que coincide.
```bash
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inicio" component={Inicio} />
        <Route path="/acerca-de" component={AcercaDe} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}
```

- Rutas Anidadas
Puedes anidar rutas para representar jerarquías en tu aplicación.
```bash
import { Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Route path="/usuario/:id" component={Usuario}>
        {/* Rutas anidadas para el componente Usuario */}
        <Route path="/usuario/:id/detalles" component={DetallesUsuario} />
      </Route>
    </Router>
  );
}
```

- Rutas con Parámetros
Puedes utilizar parámetros en las rutas para hacerlas dinámicas. Los parámetros se pueden acceder en el componente correspondiente mediante el uso de useParams (React Hooks).
```bash
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Usuario() {
  const { id } = useParams();
  return <div>Usuario ID: {id}</div>;
}
function App() {
  return (
    <Router>
      <Route path="/usuario/:id" component={Usuario} />
    </Router>
  );
}
```

### **11. Describir cómo crear un proyecto ReactJS con Vite**

- Tener instalado Node.js y npm.
- Luego se abre la consola de windows o linux 
- Se ingresa en el siguiente comando
```bash
npm create vite my-react-app --template react
```

### **12. Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección**

**Prerequisitos:**
- Tener implmentado en el repositorio la herramienta json-server para que se pueda desplegar en render.

1. Crear una cuenta en Render
Ve al sitio web de Render (https://render.com/) y crea una cuenta si aún no tienes una.
2. Crear un nuevo servicio
Después de iniciar sesión, haz clic en el botón "Create" (Crear) en tu panel de control.

Selecciona "New Service" (Nuevo Servicio).

3. Configurar el servicio
Elegir el Repositorio: Selecciona el repositorio de tu proyecto (por ejemplo, GitHub, GitLab, etc.).

Configuración básica: Render debería detectar automáticamente el tipo de servicio que estás intentando desplegar. Asegúrate de que esté seleccionada la configuración adecuada para tu aplicación o servicio JSON.

Configuración de build: Especifica los comandos necesarios para construir tu aplicación. Para un servidor JSON simple, podrías no necesitar configurar esta sección si no hay un proceso de construcción complicado.

Configuración de entorno: Configura las variables de entorno necesarias para tu aplicación, si es necesario.

5. Deploy (Desplegar)
Haz clic en el botón "Deploy" (Desplegar) para iniciar el proceso de despliegue.
6. Monitorear el despliegue
Después del despliegue, puedes monitorear el estado de tu servicio desde el panel de control de Render.
7. Acceder a tu servicio
Render proporcionará la URL en la que tu servicio está disponible. Puedes acceder a tu servidor JSON a través de esta URL.

### **13. Describir cómo desplegar una aplicación en cualquier Hosting de su elección.**

Para desplegar una aplicacion con GhPages, lo que se tiene que hacer es:

1. Agregar al archivo de "package.json", las siguientes lineas de codigo dentro de la seccion "scripts":

```bash
"predeploy": "npm run build",
"deploy": "gh pages -d dist",
```

2. En el mismo archivo y en la misma seccion anterior se modifica en la parte de "scripts" la linea de "build" por la siguiente:
```bash
"build": "vite build --base=/nombre-del-proyecto/"
```
Esto es para agregar el path de nuestro proyecto y poder navegar con rutas, el nombre de este debe ser el mismo del repositorio en github:

3. Luego en el archivo "vite.config.ts", dentro de la funcion "defineConfig", agregamos la siguiente linea de codigo:

```bash
base: "/nombre-del-proyecto/"
```
Al igual que el paso anterior el nombre del proyecto debe ser el mismo que esta en github.

4. Luego desde la consola de windows o linux ejecutamos el siguiente comando para hacer deploy del proyecto.

```bash
npm run deploy
```

