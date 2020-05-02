"use strict";
/**
 * @module ReactToAngularJs
 * @author Guima Ferreira
 * @description Helps you to migrate yours AngularJs Application to React component by component
 */

const React = require("react");
const reactDom = require("react-dom");

export const name = "ReactToAngularJs";

/**
 * Generate AngularJs Components
 * @name R2AComponents
 * @param {String} mod AngularJs Module name
 * @param {Array} components collection of AngularJs Components to be generated
 * @example
 * [
 *  //  <my-component name="'Roger'" on-change="vm.onChange"></my-component>
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
 */
export default function R2AComponents(mod, components) {
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
 */
export function R2AComponent(component, bindingNames) {
    bindingNames = [].concat(bindingNames);

    const controller = class ReactComponent {
        constructor($element) {
            this.$element = $element;
            this.props = {};
        }

        $onInit() {
            const props = this._propsGet();
            this.render(props);
        }

        _propsGet() {
            return bindingNames.reduce((r, key) => {
                const value = this[key];

                r[key] =
                    typeof value == "function"
                        ? () => this[key](...arguments)
                        : value;

                return r;
            }, {});
        }

        _propsCompare(props) {
            return JSON.stringify(props) == JSON.stringify(this.props);
        }

        $doCheck(changes) {
            const props = this._propsGet();

            if (!this._propsCompare(props)) this.render(props);
        }

        $onDestroy() {
            this.isDestroyed = true;
            reactDom.unmountComponentAtNode(this.$element[0]);
        }

        render(props) {
            console.log("render");
            this.props = props;

            if (!this.isDestroyed)
                reactDom.render(
                    React.createElement(component, this.props),
                    this.$element[0]
                );
        }
    };

    const _bindings = () =>
        bindingNames.reduce((r, key) => {
            r[key] = "=";
            return r;
        }, {});

    return {
        bindings: _bindings(),
        controller: ["$element", controller],
    };
}
