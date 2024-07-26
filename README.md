# React-Series

## React is a javascript library mostly used to design the front end, is developed by facebook in 2011 for internal use, rejected by developers community in 2013 upon its open source release but gain popularity as more developers started experimenting with it.

## It is developed to create user interfaces with UI components. Can be used for both mobile as well as web development.

## Allows for the creation of reusable components
    In react, a component is a small reusable piece of code that represents a UI element or group of UI elements.
    Components can be easily reused throughout an application, making it easy to maintain and update code.

## Enhance performance by minimizing DOM changes (virtual DOM Concept)

    Don't change entire real dom during development, create a virtual dom, compare it with actual dom and only update the differences.

    For example if we had a list of 100 items and we have to change only one item, react would update that one item in the real dom instead of re-rendering the entire list.

    This approach reduces the number of dom mutations, making our app faster and more scalable.

## In react Props are how you pass the data from a parent component to a child component.

    Props stands for properties, props is nothing but objects containing the passed data.


    ```js
    // passing props to a component
    <MyComponent name="john" age="30" />

    react automatically creates a prop object from the passed attributes and passes it to the component.

    {
        name:"ohn",
        age:'30'
    }
    ```

    `````` javascript
    // accessing props in component
    function MyComponent(props){
        return <h1>Name is :{props.name} and age is {props.age} </h1>
    }
    ``````
