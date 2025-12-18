# CONCEPTS YOU NEED TO KNOW BEFORE BUILDING YOUR REACT PROJECT:

# What is NPM

### npm (Node Package Manager) is the default package manager for Node.js, a vast online repository for JavaScript code and tools, allowing developers to easily install, share, and manage reusable code libraries (packages) and their dependencies for building applications. It includes a command-line tool (CLI) for interacting with the registry, managing project dependencies (like React or Express), running scripts, and handling versions, making it central to modern JavaScript development. npm is installed with Node.js, this means that you have to install Node.js to get npm installed on your computer.
---
# What is package.json?
### package.json is a special file that describes your Node.js project. It contains information about your app, such as its name, version, dependencies, scripts, and more.This file is essential for managing and sharing Node.js projects, especially when using npm (Node Package Manager).
### The package.json file is a manifest file in Node.js projects and npm packages, typically located in the root directory. It contains crucial metadata about the project and it is essential for managing dependencies, defining scripts, and providing information for publishing to the npm registry.The content of package.json must be written in JSON.At least two fields must be present in the definition file: name and version.
---
### package.json provides a structured way to describe a project and its dependencies, while npm is the tool used to manage those dependencies and interact with the broader JavaScript package ecosystem.
---

# What is Vite? 
### Vite is a next-generation frontend build tool that provides a blazing-fast development experience for modern web projects, significantly improving startup times and Hot Module Replacement (HMR) compared to older tools. It leverages native ES modules in the browser and uses tools like esbuild for dependency pre-bundling and Rollup for production builds, making development smoother for frameworks like Vue, React, and Svelte. 
###  React refers to using Vite as the build tool and development server for a React application. It is a modern, fast, and lightweight front-end build tool that offers significant improvements in development experience compared to older bundlers like Webpack, especially for modern web projects.



# FUNDAMENTALS OF REACT

## React is defined as a JavaScript library for building user interfaces.
## Frameworks serve a great purpose, with frameworks, many smart design decisions are already made for you, which gives you a clear path to focus on writing good application-level logic. However, frameworks come with some disadvantages. For experienced developers working on large codebases, these disadvantages are sometimes a deal breaker. 

## React follows the Unix philosophy because it is a small library that focuses on just one thing and on doing that thing extremely well; which is building user interfaces. When you hear the statement that "React is declarative" this is exactly what it means. We describe UIs with React and tell it what we want (not how to do it). React will take care of the "how" and translate our declarative descriptions (which we write in the React language) to actual UIs in the browser. React shares this simple declarative power with HTML itself, but with React we get to be declarative for HTML UIs that represent dynamic data, not just static data. React introduced the smart idea of a virtual DOM that can be used to reconcile the actual DOM.  DOM is "Document Object Model". It’s the browsers' programming interface for HTML (and XML) documents that treats them as tree structures. The DOM API can be used to change a document structure, style, and content.

# VIRTUAL DOM
## Before React, there was need to work with a browser’s API, which is known as the DOM API, traversing the DOM tree was avoided as much as possible because all operation on the DOM is done in the same single thread that’s responsible for everything else that’s happening in the browser, including reactions to user events like typing, scrolling, resizing, etc.
## Any expensive operation on the DOM means a slow and janky experience for the user. It is extremely important that all applications do the absolute minimum operations and batch them where possible. React came up with a unique concept to help us do exactly that! When we tell React to render a tree of elements in the browser, it first generates a virtual representation of that tree and keeps it around in memory for later. Then it’ll proceed to perform the DOM operations that will make the tree show up in the browser.
## When we tell React to update the tree of elements it previously rendered, it generates a new virtual representation of the updated tree. Now React has 2 versions of the tree in memory!
## To render the updated tree in the browser, React does not discard what has already been rendered. Instead, it will compare the 2 virtual versions of the tree that it has in memory, compute the differences between them, figure out what sub-trees in the main tree need to be updated, and only update these sub-trees in the browser.
## This process is called the tree reconciliation algorithm and it is what makes React a very efficient way to work with a browser’s DOM tree. 

# Tree Recouncilliation Process
## In order too see the practical benefit of the tree reconciliation process and the big difference it makes, here is a simple example focused on just that concept. Let’s generate and update a tree of HTML elements twice, once using the native Web API and then using the React API (and its reconciliation work) without using components or JSX. Here is a simple HTML element is rendered to the display using 2 methods: 



# Method #1: Using the Web DOM API directly 

## document.getElementById('mountNode').innerHTML = `
<div>
   #Hello HTML
</div>
`;

# Method #2: Using React’s API 

ReactDOM.render(React.createElement(
'div',

null,

'Hello React',

),

document.getElementById('mountNode2'),

);

## The ReactDOM.render method and React.createElementmethod are the core API methods in a React application. A React web application cannot exist without using both of these methods. 

# Nesting React elements
## We have two nodes in React; one being controlled with the DOM API directly and the other being controlled with the React API (which in turn uses the DOM API). The only major difference between the ways  these two nodes are built in the browser is that in the HTML version we used a string to represent the DOM tree, while in the React version we used pure JavaScript calls to represent the DOM tree with an object instead of a string.
## No matter how complicated the HTML UI is going to get, when using React every HTML element will be represented with a React element.

## Updating React elements
## We can easily repeat a JavaScript function call in a browser using the setInterval Web timer API .
  ReactDOM.render(
    React.createElement(
      'div',
      null,
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, new Date().toLocaleTimeString())
    ),
    document.getElementById('mountNode2')
  );


setInterval(render, 1000);

## In React, UIs are described using components that are reusable, composable, and stateful.
## Small components are defined and then put together to form bigger ones. All components small or big are reusable, even across different projects.You can think of components as simple functions (in any programming language). We call functions with some input and they give us some output. We can reuse functions as needed and compose bigger functions from smaller ones.React components are exactly the same; their input is a set of "props" and their output is a description of a UI. We can reuse a single component in multiple UIs and components can contain other components. The basic form of a React component is actually a plain-old JavaScript function.

## Some React components are pure but you can also introduce side effects in a component. For example, a component might change the HTML "title" of a web page when it gets mounted in the browser or it might scroll the browser view into a certain position.Most importantly, a React component can have a private state to hold data that may change over the lifecycle of the component. This private state is an implicit part of the input that drives the component’s output and that’s actually what gives React its name! When the state of a React component (which is part of its input) changes, the UI it represents (its output) changes as well. This change in the description of the UI has to be reflected in the device we are working with. In a browser, we need to update the DOM tree. In a React application we don’t do that manually. React will simply react to the state changes and automatically (and efficiently) update the DOM when needed. 

## A React component in its simplest form is a plain-old JavaScript function.
## It’s an extension to JavaScript that allows us write function calls in an HTML-like syntax. JSX is not understood by browsers. What browsers understand (given the React library is included) is the React.createElement API calls.
## JSX is basically a compromise, Instead of writing React components using the React.createElement syntax, we use a syntax very similar to HTML and then use a compiler to translate it into React.createElement calls.
## A compiler that translates one form of syntax into another is known as a "transpiler". To translate JSX we can use transpilers like Babel or TypeScript. For example, the jsComplete playground uses TypeScript to transpile any JSX you put into it. When you use create-react-app, the generated app will internally use Babel to transpile your JSX.
## The first letter being a capital one is actually a requirement since we will be dealing with a mix of HTML elements and React elements. A JSX compiler (like Babel) will consider all names that start with a lowercase letter as names of HTML elements. This is important because HTML elements are passed as strings to React.createElement calls while React elements need to be passed as variables .

## The first argument is an object of "props"
## Just like HTML elements can be assigned attributes like id or title, a React element can also receive a list of attributes when it gets rendered. In React, the list of attributes received by a React element is known as props. A React function component receives this list as its first argument. The list is passed as an object with keys representing the attributes names and values representing the values assigned to them. When using a function component, you don’t have to name the object holding the list of attributes as "props" but that is the standard practice. When using class components,  the same list of attributes is always presented with a special instance property named props. 
## Creating components using classes
React supports creating components through the JavaScript class syntax as well. Here is an example written with the class syntax:

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

ReactDOM.render(<Button label="Save" />, mountNode);

## The class component extends React.Component, which is one of the main classes in the React top-level API. A class-based React component has to at least define an instance method named render. The render  method returns the element that represents the output of an object instantiated from the component. 

# Functions Components vs classes Componenets
## Components created with functions used to be limited in React. The only way to make a component "stateful" was to use the class syntax. This has changed with the release of "React Hooks" beginning with React version 16.8, which was released in early 2019. The React hooks release introduced a new API to make a function component stateful (and give it many other features).With this new API, most of what is usually done with React can be done with functions. The class-based syntax is only needed for advanced and very rare cases.
# What exactly are hooks?
## A hook in a React component is a call to a special function. All hooks functions begin with the word "use". Some of them can be used to provide a function component with stateful elements (like useState), others can be used to manage side effects (like useEffect) or to cache functions and objects (like useCallback).
## React hook functions can only be used in function components. You can’t use them in class components. 
## Below is an example of the basic useState hook, let’s make a Button component to respond to a click event. Let’s maintain the number of times it gets clicked in a "count" variable and display the value of that variable as the label of the button it renders. 





const Button = () => {
  let count = 0;
return (
   <button>{count}</button>
 );
};
ReactDOM.render(<Button />, mountNode);

# REACT HOOKS
# 1. useState Hook
## The useState hook allows us to create state variables in a React function component. States allows to access and update certain values in our components over time. When we create a state variable, we must provide it a default value (which can be any data type).We get that state variable as the first value in an array, which we can destructure and declare with const. To update our state variable, we pass the setter function the new value we want our state to be. When you declare your setter function, in most cases you will prefix it with the word "set" 

## Managing State with an Object
You can use an object with useState, which allows you manage individual values as key-value pairs. when you are updating state with an object, you need to spread in the previous state, because any properties other than the one you are updating will not be included in the new state.

# 2. useEffect Hook

UseEffect lets us perform side effects in function components. Side effects are actions that can change our component state in an unpredictable way (that have caused 'side effects'), such as fetching data from an API or working with the DOM.
useEffect accepts a callback function (called the 'effect' function), which will by default run every time the component re-renders.  useEffect is the hook to use when you want to make an HTTP request (namely, a GET request when the component mounts). Note that handling promises with the more concise async/await syntax requires creating a separate function.
This is because the effect callback function cannot be async.

# 3. useRef Hook

useRefs are a special attribute that are available on all React components. They allow us to create a reference to a given element / component when the component mounts. useRef allows us to easily use React refs. They are helpful when we want to directly interact with an element, such as to clear its value or focus on it, as with an input.
We call useRef (at the top of a component) and attach the returned value to the element's ref attribute to refer to it.

# 4. useCallback Hook
useCallback Prevents Callbacks from Being Recreated, it is a hook that is used for improving our component performance. callback functions are the name of functions that are “called back” wthin a parent component. useCallback memoizes our callback functions, so they not recreated on every re-render 



# 5. useMemo Hook

useMemo is very similar to useCallback and helps improve performance. But instead of being for callbacks, it is for storing the results of expensive operations. UseMemo allows us to memoize or remember the result of expensive operations when they have already been made for certain inputs. Memoization means that if a calculation has been done before with a given input, there's no need to do it again, because we already have the stored result of that operation. useMemo returns a value from the computation, which is then stored in a variable.

# 6. useContext Hook
useContext Helps Us Avoid Prop Drilling. In React, we want to avoid the problem of creating multiple props to pass data down two or more levels from a parent component. In some cases, it is fine to pass props through multiple components, but it is redundant to pass props through components which do not need it.

# 7. useReducer Hook
useReducer is another Powerful State Management Tool, it is a hook for state management, much like useState, and relies upon a kind of function called a reducer. Reducers are simple, predictable functions that take a previous state object and an action object and return a new state object. useReducer can be used in many of the same ways that useState can, but is more helpful for managing state across multiple components that may involve different operations or "actions".

# JavaScript HTML DOM Document
The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. Below are some examples of how one can use the document object to access and manipulate HTML.
FINDING HTML ELEMENTS
Methods                                                                        Description
document.getElementById(id)                                         To find an element by ID
document.getElementsByTagName(name)                      To find element by ID
document.getElementsByClassName(name)                   To find element by classname

# CHANGING HTML ELEMENTS
Properties                                                                          Description
element.innerHTML = new html content                              changes the inner Html of an element
element.attribute = new value                                              changes the attribute value of an HTML element
element.style.property = new style                                      changes the style of an HTML element 




# ADDING AND DELETING ELEMENTS

Properties                                                                                          Description
document.createElement(element)                                                         creates an HTML Element
document.removeChild(element)                                                          Removes an HTML Element
document.appendChild(element)                                                          Adds an HTML Element
document.replaceChild(new, old)                                                         Replaces an HTML Element
document.write(text)                                                                            Write into the HTML output stream 






