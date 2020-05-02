<a name="module_ReactToAngularJs"></a>

## ReactToAngularJs
Helps you to migrate yours AngularJs Application to React component by component

**Author**: Guima Ferreira  

* [ReactToAngularJs](#module_ReactToAngularJs)
    * [module.exports(mod, components)](#exp_module_ReactToAngularJs--module.exports) ⏏
        * [.R2AComponent(component, bindingNames)](#module_ReactToAngularJs--module.exports.R2AComponent)

<a name="exp_module_ReactToAngularJs--module.exports"></a>

### module.exports(mod, components) ⏏
Generate AngularJs Components

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| mod | <code>String</code> | AngularJs Module name |
| components | <code>Array</code> | collection of AngularJs Components to be generated |

**Example**  
```js
[
 //  <my-component name="'Roger'" on-change="vm.onChange"></my-component>
 {
     name: 'myComponent',
     react: MyComponent,         // a React Component imported
     props: ['name', 'onChange']
 },
 //  <simple-component></simple-component>
 {
     name: 'simpleComponent',
     react: SimpleComponent      // a React Component imported
 }
]
```
<a name="module_ReactToAngularJs--module.exports.R2AComponent"></a>

#### module.exports.R2AComponent(component, bindingNames)
Returns AngularJs Component config object that renders a React Component

**Kind**: static method of [<code>module.exports</code>](#exp_module_ReactToAngularJs--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| component | <code>Class</code> | React Component Class |
| bindingNames | <code>Array</code> | AngularJs Component Attributes |

