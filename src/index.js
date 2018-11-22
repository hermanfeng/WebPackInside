import React from 'react';
import ReactDom from 'react-dom';
import myHello from './hellworld';
//import mytest from 'react-dom/server';
// import merge from 'lodash/merge'
// import lodash from 'lodash';
//import lodash from 'lodash';
//import seismicMyTestModule from 'seismicMyTestModule'

ReactDom.render(
    <h1>hello world!</h1>
    , document.getElementById('root')
);
myHello();
//console.log(toolkit);
//console.log(merge);
//console.log(mytest);

window.__seismicLoadPackage__("toolkit^1.1.0").then(toolkitComp => {
    this.setState({
        toolkitComp,
        loadingToolkit: false
    });
});