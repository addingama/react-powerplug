(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/Introduction.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"introduction"}},"Introduction"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"React PowerPlug is a set of pluggable renderless components and utils")," that provides\ndifferent types of state and logics so you can use with your dumb components. It creates\na state and pass down the logic to the children, so you can handle your data.\nRead about ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/docs/render-props.html"}},"Render Props")," pattern."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Dependency free"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Super tiny (~3kb)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Plug and play"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Tree shaking friendly (ESM, no side effects)"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Well documented"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Bunch of awesome utilities")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"quick-examples"}},"Quick Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import { State, Toggle } from 'react-powerplug'\nimport { Pagination, Tabs, Checkbox } from './MyDumbComponents'\n")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<State initial={{ offset: 0, limit: 10, totalCount: 200 }}>\n  {({ state, setState }) => (\n    <Pagination {...state} onChange={(offset) => setState({ offset })} />\n  )}\n</State>\n")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Toggle initial={true}>\n  {({ on, toggle }) => (\n    <Checkbox checked={on} onChange={toggle} />\n  )}\n</Toggle>\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can also use a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"render")," prop instead"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Toggle\n  initial={false}\n  render={({ on, toggle }) => (\n    <Checkbox checked={on} onChange={toggle} />\n  )}\n/>\n")))}}}]);