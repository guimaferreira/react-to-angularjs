<a name="module_ReactToAngularJs"></a>

## ReactToAngularJs

Helps you to migrate yours AngularJs Application to React component by component

**Author**: Guima Ferreira

-   [ReactToAngularJs](#module_ReactToAngularJs)
    -   _static_
        -   [.R2AComponent(component, bindingNames)](#module_ReactToAngularJs.R2AComponent)
    -   _inner_
        -   [~R2AComponents](#module_ReactToAngularJs..R2AComponents)

<a name="module_ReactToAngularJs.R2AComponent"></a>

### ReactToAngularJs.R2AComponent(component, bindingNames)

Returns AngularJs Component config object that renders a React Component

**Kind**: static method of [<code>ReactToAngularJs</code>](#module_ReactToAngularJs)

| Param        | Type               | Description                    |
| ------------ | ------------------ | ------------------------------ |
| component    | <code>Class</code> | React Component Class          |
| bindingNames | <code>Array</code> | AngularJs Component Attributes |

<a name="module_ReactToAngularJs..R2AComponents"></a>

### ReactToAngularJs~R2AComponents

Generate AngularJs Components

**Kind**: inner property of [<code>ReactToAngularJs</code>](#module_ReactToAngularJs)

| Param      | Type                | Description                                        |
| ---------- | ------------------- | -------------------------------------------------- |
| mod        | <code>String</code> | AngularJs Module name                              |
| components | <code>Array</code>  | collection of AngularJs Components to be generated |

**Example**

```js
[
    //  <my-component name="'Roger'" on-change="vm.onChange"></my-component>
    {
        name: "myComponent",
        react: MyComponent, // a React Component imported
        props: ["name", "onChange"],
    },
    //  <simple-component></simple-component>
    {
        name: "simpleComponent",
        react: SimpleComponent, // a React Component imported
    },
];
```
