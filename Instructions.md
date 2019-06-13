# React Hooks Example

This project demonstrates the use of React hooks as a way to manage state in your single page application.

React hooks requires the newest version (version 16.8) of React to use. 

## Create React App

The easiest way to get started with React is to use create-react-app provided by the npx package runner. Get started by running this command in the project directory.

```
$ npx create-react-app .
```

This will scaffold out the project files and directory structure.

## Refactor App.js to use Functions

Inside the `App.js` file, refactor the code to use functions instead of classes.

The file should looks like this: 

```javascript
import React from 'react';

function App(){

  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

export default App;
```

This is what a regular functional component looks like in React. Lets now add the new `useState` hook.

Change the import to the following:

```javascript
import React, { useState } from 'react';
```

The new `useState` hook will allow us to create state in our functional component. No longer is state limited to just classes in React.

When you call `useState`, it will return back to you two things: the current value of the state, and a function that allows you to change it.

Lets go over a simple example listed in the official React documentation.

First we create some state by adding this line before the return statement.

```javascript
const [count, setCount] = useState(0);
```

This silly syntax is [Javascript array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) at work. `useState()` returns an array where the first element contains the value of the state you're tracking and the second is the function that sets the value.

In this example our state is named `count` and the setter function is named `setCount`. Instead of calling `setState`  and passing in an object, we will simply call `setCount` and pass in the value we want to set it as.

Also this line initializes `count` to `0`, but we could choose to initialize it to many other things including some other hooks. 

Finally in our return statement we want to render and change the results.

Replace the contents in the return statement with this.

```html
<div>
  <p>Current Count: {count}</p>
  <button onClick={()=> setCount(count + 1)}>Change Count</button>
</div>
```

If you run `npm start` you should see the following show up in the browser:

![Example state](./docs/basic_state.png)

## Lifecycle Methods
Included in each class component are a myriad of lifecycle methods that you can define that allow you to fire off tasks and respond to external events. In order to use certain event listeners or make API requests many of these methods become necessary. Functional components replace all of them with a single hook, `useEffect()`. This one function takes all of the code duplication out of the lifecycle methods -- very much on purpose.

Lets take a look at this function in depth.

## `useEffect()`
First `import` it.

```
import { useEffect } from 'react';
```

Here is a simple example for how it's used in your functional component.

```javascript
useEffect(function(){
  // This will log 'Foo!' to the console 
  // every time the component is re-rendered
  console.log("Foo!")
})
```

This function will be called every single time react renders the component. If instead you want to increase performance and run this function only when certain things change then you can pass in an array of these states.

```javascript
useEffect(function(){
  // This will log 'Foo!' to the console 
  // only when props.stateOne or props.stateTwo change
  console.log("Foo!")
}, [props.stateOne, props.stateTwo])
```

Be sure that the all necessary state is passed in or you cannot be guanteed that is accurate.

## Cleanup After Unmounting

```javascript
useEffect(function(){
  const handleResize = () => {console.log(window.innerWidth)}
  window.addEventListener('resize', handleResize});

  return function(){
    window.removeEventListener('resize', handleResize);
  }
})
```

In order to remove listeners and do any other cleanup `useEffect` allows you to return a callback that will be called when the component unmounts. Nothing else can be returned from `useEffect`.

## Reducers

The beauty of React is that it manages the state of your application for you. Unfortunatly it becomes unwieldy when you have state spread out across multiple components. Redux gives us tools that move state to a central repository, or Store. 

## Create a New Component

Lets create a `Timer` component that will count down from our timer.

```
import React, { useState } from 'react';

function Timer(){

}

export default Timer;
```
