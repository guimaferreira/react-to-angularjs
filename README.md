<a name="module_ReactToAngularjs"></a>

## ReactToAngularjs
Helps you to migrate yours AngularJs Application to React component by component

**Author**: Guima Ferreira  

* [ReactToAngularjs](#module_ReactToAngularjs)
    * [~R2AComponents(mod, components, [theme])](#module_ReactToAngularjs..R2AComponents)
    * [~R2AComponent(component, bindingNames, [theme])](#module_ReactToAngularjs..R2AComponent)

<a name="module_ReactToAngularjs..R2AComponents"></a>

### ReactToAngularjs~R2AComponents(mod, components, [theme])
Generate AngularJs Components

**Kind**: inner method of [<code>ReactToAngularjs</code>](#module_ReactToAngularjs)  

| Param | Type | Description |
| --- | --- | --- |
| mod | <code>String</code> | AngularJs Module name |
| components | <code>Array</code> | collection of AngularJs Components to be generated |
| [theme] | <code>ReactComponent</code> | a react component that returns <ThemeProvider>{children}</ThemProvider> |

**Example**  
```js
[
 //  <my-component name="vm.name" on-change="vm.onChange"></my-component>
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
**Example**  
```js
// Attention!
// When passing functions that change its scope,
// you need to do bind(this) as following:
class MyController {
     constructor() {
         this.name = "William";
         this.onChange = this.onChange.bind(this);
     }

     onChange() {
         this.name = "Bill";
     }
}
// Or do this:
class MyController {
     constructor() {
         this.name = "William";
     }

     onChange = () => {
         this.name = "Bill";
     }
}
```
<a name="module_ReactToAngularjs..R2AComponent"></a>

### ReactToAngularjs~R2AComponent(component, bindingNames, [theme])
Returns AngularJs Component config object that renders a React Component

**Kind**: inner method of [<code>ReactToAngularjs</code>](#module_ReactToAngularjs)  

| Param | Type | Description |
| --- | --- | --- |
| component | <code>Class</code> | React Component Class |
| bindingNames | <code>Array</code> | AngularJs Component Attributes |
| [theme] | <code>ReactComponent</code> | a react component that returns <ThemeProvider>{children}</ThemProvider> |

**Example**  
```js
R2AComponent("myComponent", ['name', 'onChange']);
```
