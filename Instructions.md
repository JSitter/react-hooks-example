# React Hooks Example

This project demonstrates the use of React hooks as a way to manage state in your single page application.

React hooks requires the newest version (version 16.7) of React to use. 

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

The new useState hook will allow us to import state into our functional component. No longer is state limited to just classes in React.

When you call useState, it will return back to you two things: the current value of state, and a function that allows you to change it.

Lets go over the simple counter example listed in the official React hooks example.

Lets create some state by adding this line before the return statement.

```javascript
const [count, setCount] = useState(0);
```

Here `count` is initialized to `0` as that's the value that is passed into useState. We are also given a reference to a setter that will be responsible for updating the value of our count.

Finally  in our return statement we want to render and change the results.

Replace the contents in the return statement with this.

```html
<div>
  <p>Current Count: {count}</p>
  <button onClick={()=> setCount(count + 1)}>Change Count</button>
</div>
```

If you run `npm start` you'll see the following show up in the browser:

![Example state](./docs/basic_state.png)

## Using state in another component

The beauty of React hooks is that it simplifies the process of using and setting state as well as expanding the number of options that you have -- such as using functional components with state. 

Unfortunately even though there is a new way to interact with state, the same rules apply for managing state. Typically in React you would want to "lift state" up to a parent component and have it flow to each of the children that need access to it using props.

Lets take a look at how multiple components may share state. Lets make a timer app that uses the count that we have to set a timer.

## Create a New Component

Lets create a `Timer` component that will count down from our timer.

```
import React, { useState } from 'react';

function Timer(){

}

export default Timer;
```
