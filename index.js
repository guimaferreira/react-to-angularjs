"use strict";
/**
 * @module ReactToAngularjs
 * @author Guima Ferreira
 * @description Helps you to migrate yours AngularJs Application to React component by component
 */

const React = require("react");
const reactDom = require("react-dom");

/**
 * Generate AngularJs Components
 * @param {String} mod AngularJs Module name
 * @param {Array} components collection of AngularJs Components to be generated
 * @example
 * [
 *  //  <my-component name="vm.name" on-change="vm.onChange"></my-component>
 *  {
 *      name: 'myComponent',
 *      react: MyComponent,         // a React Component imported
 *      props: ['name', 'onChange']
 *  },
 *  //  <simple-component></simple-component>
 *  {
 *      name: 'simpleComponent',
 *      react: SimpleComponent      // a React Component imported
 *  }
 * ]
 * @example
 * // Attention!
 * // When passing functions that change its scope,
 * // you need to do bind(this) as following:
 * class MyController {
 *      constructor() {
 *          this.name = "William";
 *          this.onChange = this.onChange.bind(this);
 *      }
 *
 *      onChange() {
 *          this.name = "Bill";
 *      }
 * }
 * // Or do this:
 * class MyController {
 *      constructor() {
 *          this.name = "William";
 *      }
 *
 *      onChange = () => {
 *          this.name = "Bill";
 *      }
 * }
 */
function R2AComponents(mod, components) {
    components = [].concat(components);

    components.forEach((component) => {
        const reactComponent = R2AComponent(component.react, component.props);

        angular.module(mod).component(component.name, reactComponent);
    });
}

/**
 * Returns AngularJs Component config object that renders a React Component
 * @param {Class} component React Component Class
 * @param {Array} bindingNames AngularJs Component Attributes
 * @example
 * R2AComponent("myComponent", ['name', 'onChange']);
 */
function R2AComponent(component, bindingNames) {
    bindingNames = [].concat(bindingNames);

    const controller = class ReactComponent {
        constructor($element) {
            this.$element = $element;
            this.props = {};
        }

        $onChanges(changes) {
            this.props = this._propsGet();
            this.render();
        }

        _propsGet() {
            return bindingNames.reduce((r, key) => {
                r[key] = this[key];

                return r;
            }, {});
        }

        $onDestroy() {
            this.isDestroyed = true;
            reactDom.unmountComponentAtNode(this.$element[0]);
        }

        render() {
            if (!this.isDestroyed)
                reactDom.render(
                    React.createElement(component, this.props),
                    this.$element[0]
                );
        }
    };

    const _bindings = () =>
        bindingNames.reduce((r, key) => {
            r[key] = "<";
            return r;
        }, {});

    return {
        bindings: _bindings(),
        controller: ["$element", controller],
    };
}

module.exports.R2AComponents = R2AComponents;
module.exports.R2AComponent = R2AComponent;
