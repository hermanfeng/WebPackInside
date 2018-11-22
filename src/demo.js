import React from 'react'
import ReactDom from 'react-dom'
//import lodash from 'lodash';
//import toolkit from 'toolkit';
//import seismicMyTestModule from 'seismicMyTestModule'

ReactDom.render(
    <h1>hello world!</h1>
    , document.getElementById('root')
);

// window.__seismicLoadPackage__
//     (
//     "toolkit"
//     ).then(toolkitComp => {
//         this.setState({
//             toolkitComp,
//             loadingToolkit: false
//         });
//     });

// window.__seismicLoadPackage__
//     (
//     "fullBoudle"
//     ).then(toolkitComp => {
//         this.setState({
//             toolkitComp,
//             loadingToolkit: false
//         });
//     });

//console.log(lodash);
//console.log(toolkit);
//console.log(seismicMyTestModule);

// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');

//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//         return element;

//     }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// })