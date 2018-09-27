(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./docs/components/State.mdx":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/react/index.js"),o=a.n(n),r=a("./node_modules/@mdx-js/tag/dist/index.js"),s=a("./docs/_ui/PropsTable.js");a("./dist/react-powerplug.esm.js");function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}t.default=function(e){var t=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"state"}},"State"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A generic component for storing arbitrary object state.",o.a.createElement(r.MDXTag,{name:"br",components:t,parentName:"p"}),"Equals to React.Component state/setState."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},"import { State } from 'react-powerplug'\n")),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<State initial={{ loading: false, data: null }}>\n  {({ state, setState }) => {\n    const onStart = data => setState({ loading: true })\n    const onFinish = data => setState({ data, loading: false })\n\n    return (\n      <DataReceiver data={state.data} onStart={onStart} onFinish={onFinish} />\n    )\n  }}\n</State>\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(s.d,null,o.a.createElement(s.c,{name:"initial",type:"object",default:{}},"Specifies the initial `state`"),o.a.createElement(s.c,{name:"onChange",type:"function"},"The onChange event of the State is called whenever the state changes"),o.a.createElement(s.c,{name:"children",type:"function"},"Receive state as function. It can also be `render` prop.")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"children-props"}},"Children Props"),o.a.createElement(s.b,null,o.a.createElement(s.a,{name:"value",type:"object"},"Your `state` value"),o.a.createElement(s.a,{name:"setState",type:"function"},"State setter. Acts equals to the"," ",o.a.createElement("a",{href:"https://facebook.github.io/react/docs/react-component.html#setstate",target:"_blank"},"setState")," from React.Component."),o.a.createElement(s.a,{name:"resetState",type:"function"},"Reset to initial state")))}}}]);