---
title: React
date: 2020-03-08
category: React
---

<!-- more -->

# what is React?

# Setting Up the Development Environment

## install create-react-app package

> npm i -g create-react-app@version

# First React App

run the command to install

> create-react-app react-app

- React
- development server
- webpack
- babel
- others third party tools

# hello world in React

edit index.js

```javaScript
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>hello world</h1>;

ReactDOM.render(element, document.getElementById("root"));

```

# Custom Configs

> npm eject

可以使用 npm eject 自己进行 package 的 config

# Full-stack Architecture

# setting up a project

## using creat-react-app

in the ternimal use command:

> create-react-app appName

## install bootstrap

> npm install bootstrap@version

go to index.js import bootstrap

```javaScript
import 'bootstrap/dist/css/bootstrap.css';
```

# First component

using simple react snippets

1. To import react and component module

> imrc

2. To generate a class

> cc

checkout Simple React Snippets extension for more info.

3. import your component in index.js

```javaScript
import Counter from "./components/counter"; // Counter is a default export, so we don't need {}
```

# Specifying Children

put your child elements inside React.Fragment

```javaScript
    <React.Fragment>
        <h1>hello world</h1>
        <button>Increment</button>
    </React.Fragment>
```

# state

state includes the data you'll need inside this class

```javaScript
  state = {
      count: 0,
      address: {
          street: 'xxx'
      }
  };

```

# embedding expression

similar to Angular, we can aslo pus js expression inside {}

```javaScript
render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
```

# setting attributes

class --> className

```javaScript
style= {
    fontSize: 10,
    fontWeight: 'bold'
}
// or inline style
<button style={this.style.fontSize}className="btn btn-secondary btn-sm">Increment</button>

```

# Redering class dynamically

```javaScript

render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }


```

# Rendering Lists of items(Loop)

unlike Angular, we dont have ngFor directive in React,
instead, we use map() to loop through properties and do the elements redering.

> Warning: Each child in a list should have a unique "key" prop.

the reason React is yelling at us here, is because it needs uniquely identify each item in the list. If the state of this react element in the virtual DOM changes, react needs to know which element has changed and where in the DOM it should make changes accordingly, so a unique "key" is required here.

```javaScript
state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
```

# Conditional Rendering

what if u want to render lists of items conditionally, say if there's no item, we want to give a message:"there are no items".

solution: using plain js to do this. unlike Angular, we don't have **NgIf**.

1. conditional expression

```javaScript
{this.state.tags.length === 0 && "please create some tags"} // consider truthy
```

# Handling events

React elements have all kinds of events handler, such as **onClick**, **onDoubleClick** etc.

- case sensitive
- similar to js attibute

what's the different between this.hanldeIncrement and this.hanldeIncrement()?

passing a reference and passing a function.

```javaScript
 handleIncrement () {
    console.log("increment button clicked!", this);
  }; // this will be undefined cuz of object rebind
  //using arrow function would avoid this problem
  handleIncrement = () => {
    console.log("increment button clicked!", this);
  };
```

# updating state

we cannot mutate the state directly, we need to use setState method like the following code:

```javaScript
this.setState({ count: this.state.count + 1 });

```

# Passing Event arguments

sometimes, we want to pass arguments through events, such as product id or sth, we can use inline expression to do this.

```javaScript
<button onClick={() => this.handleIncrement(product)}>increment</button>;

handleIncrement = product => {
    console.log("increment button clicked!", product);
    this.setState({ count: this.state.count + 1 });
  };
```

# Composing component

## passing data to Component

we add more attributes from the parents component, using Props to pass the value.

```javaScript

<Counter key={counter.id} value={counter.value} shit={counter.id}/>
```

then we can use this.props to get the value.

```javaScript
this.props.value
this.props.shit
```

## passing children

we can also pass children elements directly in between the tags

```javaScript
<Counter key={counter.id} value={counter.value} shit={counter.id}>
            <h4>Title</h4>
</Counter>

```

then we can use this.props.children to get the elements.

```javaScript
{this.props.children}

```

## Debugging React apps

we can install extension called **React Developer Tools**

## Prop VS State

State: private to the local component, internal
invisible to other component

Props: read-only, cannot be changed.

## Rasing and Handling events

Rasing events from children to parents, such as delete sth.
principle is
**whoever owns the piece of state, should be the one modifying it**.

for example, a delete event,

the data we want to modify is inside the parent component, so **handleDelete** method should be aslo in this class.

the connection is that from the parent component, we use props to pass the **onDelete** property to children.

```javaScript

handleDelete(...)

 <Counter
            key={counter.id}
            value={counter.value}
            shit={counter.id}
            onDelete={this.handleDelete}
          >
            <h4>Title1</h4>
          </Counter>
```

child component: we use onClick event to trigger the onDelete property in props.

````javaScript
<button
          className="btn btn-danger m-2 btn-sm"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
        ```
````
