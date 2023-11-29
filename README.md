
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
"deploy": "gh-pages -d dist",
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

## **MÓDULO SOBRE REACT JS**

### **1. ¿Qué es React Context y para qué se utiliza en el desarrollo web con React?**

React Context es una característica de React que permite pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Proporciona una forma de compartir valores como temas, preferencias de usuario o información de autenticación con todos los componentes de una aplicación React.

### **2. Describir cómo se crea un contexto en React y cómo se proporciona y consume información a través de él.**

**Creación de un Contexto en React:**
1. Importar createContext: Primero, debes importar la función createContext de React.
```bash
import { createContext } from 'react';
```
2. Crear el Contexto: Utiliza createContext para crear un nuevo contexto. Puedes proporcionar un valor inicial opcional.
```bash
const MiContexto = createContext();
```
Si deseas proporcionar un valor inicial, puedes hacerlo de la siguiente manera:
```bash
const MiContexto = createContext('Valor por defecto');
```
**Proporcionar Información a través del Contexto:**
1. Utilizar el Proveedor del Contexto: Alrededor de los componentes que desean consumir el contexto, utiliza el componente Provider del contexto. Este componente acepta un prop llamado value que define el valor que estará disponible para los componentes descendientes.
```bash
import React, { createContext, useState } from 'react';
const MiContexto = createContext();
const App = () => {
  const [valor, setValor] = useState('Nuevo valor');
  return (
    <MiContexto.Provider value={valor}>
      {/* Componentes que consumirán el contexto */}
    </MiContexto.Provider>
  );
};
export default App;
```
2. Cambiar el Valor del Contexto: Puedes cambiar dinámicamente el valor del contexto utilizando el estado local o cualquier otra lógica que necesites.
```bash
const App = () => {
  const [valor, setValor] = useState('Nuevo valor');
  const handleClick = () => {
    setValor('Otro nuevo valor');
  };
  return (
    <MiContexto.Provider value={valor}>
      {/* Componentes que consumirán el contexto */}
      <button onClick={handleClick}>Cambiar Valor</button>
    </MiContexto.Provider>
  );
};
```
**Consumir Información a través del Contexto:**
1. Utilizar useContext: Dentro de los componentes que desean consumir el contexto, utiliza el hook useContext para acceder al valor del contexto.
```bash
import React, { useContext } from 'react';
const ComponenteConsumidor = () => {
  const valorContexto = useContext(MiContexto);
  return <p>Valor del contexto: {valorContexto}</p>;
};
```
El componente ComponenteConsumidor ahora tiene acceso al valor del contexto.
2. Renderizar el Consumidor del Contexto:
```bash
const App = () => {
  const [valor, setValor] = useState('Nuevo valor');
  return (
    <MiContexto.Provider value={valor}>
      <ComponenteConsumidor />
    </MiContexto.Provider>
  );
};
```
### **3. ¿Cuál es la ventaja de utilizar React Context en lugar de pasar props a través de múltiples componentes?**

La ventaja más destacada y importante de utilizar React Context en lugar de pasar props a través de múltiples componentes es la reducción de la "prop drilling" o "perforación de propiedades". Prop drilling es el proceso de pasar datos a través de múltiples niveles de componentes como props, incluso cuando algunos de esos componentes intermedios no necesitan esos datos.

### **4. Explicar el propósito de useReducer en React y cómo se diferencia de useState.**

**Propósito de useReducer:**

Cuando el estado de un componente es más complejo y tiene múltiples subvalores o se requiere una lógica más avanzada para gestionar los cambios de estado, useReducer se vuelve útil. Para casos donde la lógica de cambio de estado implica múltiples transiciones y estados, useReducer puede hacer que el código sea más claro y legible al separar la lógica de cambio de estado en un solo lugar.

**Diferencias con useState:**

- UseState es útil para manejar estados simples, pero a medida que la lógica de cambio de estado se vuelve más compleja, useReducer puede ser preferible. useReducer permite definir una función reductora que toma el estado actual y una acción, y devuelve el nuevo estado.

- Mientras que useState actualiza el estado directamente, useReducer delega la lógica de cambio de estado a una función separada llamada reductor. Esto facilita la gestión y comprensión de la lógica relacionada con el estado.

- En algunos casos, useReducer puede ofrecer un rendimiento ligeramente mejor que useState, especialmente cuando el cálculo del nuevo estado depende del estado anterior. Esto se debe a que useReducer permite optimizaciones más avanzadas en algunos escenarios.

### **5. Describe los argumentos que toma la función useReducer.**

**Reducer (Función reductora):**
- Propósito: El reductor es una función que especifica cómo el estado de un componente debería cambiar en respuesta a una acción. Esta función toma dos argumentos: el estado actual y una acción, y devuelve el nuevo estado.
- Sintaxis: (state, action) => newState
- Ejemplo:
```bash
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

**Estado Inicial (Initial State):**
- Propósito: Este es el segundo argumento que recibe useReducer y representa el estado inicial del componente antes de que se realice cualquier acción.
- Tipo: Puede ser de cualquier tipo, dependiendo de la estructura del estado que necesitas manejar en tu componente.
- Ejemplo:
```bash
const initialState = { count: 0 };
```

**Función opcional de inicialización (Optional Initialization Function):**
- Propósito: Este es un tercer argumento opcional que se puede proporcionar a useReducer. Es una función que acepta el estado inicial y devuelve el estado inicial después de realizar alguna lógica de inicialización.
- Sintaxis: (initialState) => modifiedInitialState
- Ejemplo:
```bash
const init = (initialCount) => {
  return { count: initialCount * 2 };
};
```

**Uso de useReducer:**
```bash
const [state, dispatch] = useReducer(reducer, initialState, init);
```
- reducer: La función reductora que especifica cómo el estado debe cambiar en respuesta a una acción.
- initialState: El estado inicial del componente.
- init (opcional): Una función opcional de inicialización que permite realizar lógica personalizada en el estado inicial.

La función useReducer devuelve un array con dos elementos:

- state: El estado actual del componente.
- dispatch: Una función que se utiliza para despachar acciones al reductor, lo que provoca cambios en el estado según lo definido en la lógica del reductor.


### **6. ¿Por qué es útil utilizar useReducer para gestionar el estado en aplicaciones más complejas?**

En aplicaciones más complejas, el estado a menudo se vuelve más sofisticado y puede implicar lógica más compleja para gestionar cambios. useReducer facilita la gestión de esta lógica al permitir definir un reductor (reducer) separado que especifica cómo el estado debe cambiar en respuesta a diferentes acciones.

### **7. ¿Cómo se puede utilizar React Context junto con useReducer para gestionar el estado global en una aplicación de React?**
1. Crear el Contexto:
Define tu contexto utilizando React.createContext(). Esto devolverá un objeto con dos componentes: Provider y Consumer
```bash
// En un archivo, por ejemplo, "AppContext.js"
import React, { createContext, useReducer } from 'react';
const AppContext = createContext();
export default AppContext;
```
2. Definir el Reductor:
Define el reductor que se utilizará para gestionar el estado global. Este reductor se encargará de manejar las acciones que modifican el estado.
```bash
// En el mismo archivo, "AppContext.js"
const initialState = { /* tu estado inicial */ };
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      // Manejar la acción 1 y actualizar el estado en consecuencia
      return { ...state, /* nueva información */ };
    // Otros casos para diferentes acciones
    default:
      return state;
  }
};
export { AppContext, initialState, reducer };
```
3. Configurar el Provider:
Utiliza el Provider del contexto para envolver tu aplicación y proporcionar el estado global a los componentes hijos.
```bash
// En tu componente principal, por ejemplo, "App.js"
import React, { useReducer } from 'react';
import { AppContext, initialState, reducer } from './AppContext';
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {/* Tu aplicación y sus componentes hijos */}
    </AppContext.Provider>
  );
};
export default App;
```
4. Consumir el Contexto en Componentes Hijos:
En los componentes donde necesitas acceder al estado global, utiliza el Consumer del contexto o el hook useContext para consumir el contexto y acceder al estado y la función de despacho.
```bash
// En cualquier componente hijo
import React, { useContext } from 'react';
import AppContext from './AppContext';
const ExampleComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  // Utiliza state y dispatch según sea necesario
  // ...
  return (
    // Renderizado del componente
  );
};
export default ExampleComponent;
```
### **8. ¿Por qué es importante tener un sistema de gestión de estado global en aplicaciones React más grandes?**

La razón más importante para tener un sistema de gestión de estado global en aplicaciones React más grandes es evitar la prop drilling. La prop drilling se refiere a la necesidad de pasar props a través de múltiples niveles de componentes, lo cual puede volverse tedioso y complicado a medida que la aplicación crece en complejidad. Con un sistema de gestión de estado global, puedes acceder al estado desde cualquier componente sin tener que pasar manualmente las props a través de cada nivel de la jerarquía.

### **9. Menciona al menos tres ventajas de utilizar una combinación de React Context y useReducer en comparación con el manejo de estado local en componentes.**

-  Una combinación de React Context y useReducer permite gestionar el estado de manera global, eliminando la necesidad de pasar props a través de múltiples niveles de componentes (prop drilling). 

- Al utilizar useReducer, la lógica de cambio de estado se centraliza en una función reductora. Esta función define cómo el estado debe cambiar en respuesta a diferentes acciones. Al combinarla con React Context, puedes acceder a esta lógica desde cualquier componente conectado al contexto. 

- React Context proporciona un mecanismo para compartir el estado global entre componentes sin importar la relación entre ellos en la jerarquía de componentes. useReducer facilita la gestión de cambios en este estado. Esto simplifica el acceso y la actualización del estado global desde cualquier componente conectado al contexto, sin necesidad de pasar datos a través de props. 

### **10. ¿En qué situaciones podría ser beneficioso migrar de un enfoque de manejo de estado local a un enfoque de estado global utilizando React Context y useReducer?**

- Compartir estado entre componentes profundos: Si tiene varios componentes anidados y necesita compartir estado entre ellos sin pasar propiedades a través de múltiples niveles, el uso de un estado global puede simplificar la comunicación entre componentes.
- Reducción de la prop drilling: Evitar pasar props a través de múltiples capas de componentes (prop drilling) puede mejorar la legibilidad y mantenimiento del código. Usar un estado global con React Context puede ayudar a evitar este problema.
- Gestión centralizada del estado: Cuando la gestión del estado se vuelve compleja y difícil de rastrear, tener un estado global permite centralizar la lógica del estado en un solo lugar, facilitando la comprensión y el mantenimiento del código.
- Manejo de múltiples fuentes de datos: Si su aplicación necesita acceder y manejar múltiples fuentes de datos desde diferentes partes de la interfaz de usuario, tener un estado global puede facilitar la coordinación y la gestión de esos datos.
- Mejora del rendimiento: En algunos casos, mover el estado a un contexto global puede mejorar el rendimiento, ya que puede evitar la necesidad de renderizaciones innecesarias al actualizar el estado en componentes que no están directamente relacionados.
- Implementación de lógica de acciones complejas: Cuando las acciones que afectan al estado son complejas y necesitan ser manejadas de manera más estructurada, useReducer proporciona una manera de encapsular la lógica de las acciones en un solo lugar.
- Pruebas unitarias más sencillas: La gestión del estado global a través de useReducer puede facilitar las pruebas unitarias, ya que puede probar la lógica del estado de manera más aislada al tener un solo lugar donde ocurren las actualizaciones de estado.
- Integración con herramientas de desarrollo: El uso de un estado global con useReducer puede facilitar la integración con herramientas de desarrollo como React DevTools, lo que facilita el seguimiento y la depuración del estado de la aplicación.

