(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{167:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Widgets are buttons / entities that live on your MBP TouchBar - they can autorefresh on your demand and display images or text. You can customize the actions that happen upon clicking/holding the widget and its appearance (such as background or font color)")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("BetterTouchTool allows you to use the TouchBar in two separate modes - with MacOS control strip and without it (full control).")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("You can create a Touchbar widget on the fly")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),a("p",[a("em",[t._v("You can "),a("a",{attrs:{href:"https://github.com/Worie/btt/blob/master/docs/guide/widgets.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("edit this page on GitHub"),a("OutboundLink")],1),t._v(".")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"widgets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#widgets","aria-hidden":"true"}},[this._v("#")]),this._v(" Widgets")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[this._v("#")]),this._v(" Basics")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"what-s-possible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-possible","aria-hidden":"true"}},[this._v("#")]),this._v(" What's possible")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"creating-touchbar-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-touchbar-widget","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating Touchbar widget")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" widget "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Touchbar widget name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'node'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// if you use the package on the frontend, you may need to provide path option manually, ex. with nvm:")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// path: '/Users/UserName/.nvm/versions/node/v9.2.0/bin/node'")]),t._v("\n  alwaysShow"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// whether this widget should always be visible")]),t._v("\n  script"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`console.log('Hello world!')`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// node.js compilant code")]),t._v("\n  appearance"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    iconHeight "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("22")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    iconWidth "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("22")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    padding "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    freeSpaceAfterButton "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5.000000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    buttonColor "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.000000, 0.000000, 0.000000, 255.000000"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alternateBackgroundColor "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"128.829533, 128.829533, 128.829533, 255.000000"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// you can now check its id")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// => '07CA71DD-A3F9-4CF0-8340-9285373399EC'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"updating-the-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-widget","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating the widget")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To update the widget you need to pass a callback function to the "),s("code",[this._v("update")]),this._v(" method of this particular widget instance.\nThe callback should return an object of values that you want to update.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" widget "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwidget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// will show current date each time this callback is run")]),t._v("\n    text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLocaleTimeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    background_color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0,0,0,1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult> ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You may also use "),s("code",[this._v("update")]),this._v(" method without callback parameter, if you set the default callback function with "),s("code",[this._v("setDefaultCallback")]),this._v(" method:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("callback")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// will show current date each time this callback is run")]),t._v("\n    text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLocaleTimeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    background_color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0,0,0,1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwidget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setDefaultCallback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => void")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// each call will invoke the `callback` function ")]),t._v("\nwidget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult> ")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"refreshing-a-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refreshing-a-widget","aria-hidden":"true"}},[this._v("#")]),this._v(" Refreshing a widget")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("If you pass default script to your touchbar widget you can use "),a("code",[t._v("refresh")]),t._v(" method to run it again. It may aquire same resuts as using "),a("code",[t._v("update")]),t._v(" method, but "),a("code",[t._v("refresh")]),t._v(" is more performant due it's implementation. Using "),a("code",[t._v("refresh")]),t._v(" will just send the "),a("code",[t._v("UUID")]),t._v(" of the Touchbar widget that'd need to be updated, whereas "),a("code",[t._v("update")]),t._v(" will send all the data explicitly. "),a("code",[t._v("update")]),t._v(" is intended to update certian values of the widget and "),a("code",[t._v("refresh")]),t._v(" just runs the passed script again. Also, "),a("code",[t._v("update")]),t._v(" may be "),a("strong",[t._v("slightly")]),t._v(" more expensive in terms of performance and "),a("code",[t._v("refresh")]),t._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" widget "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  script"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`console.log(new Date().toISOString())`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// node.js compilant code")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<Widget> ")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// the script will run once, showing the current date")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// after some time, you might call:")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("refresh")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult> ")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// and it'll update the value, running the script again")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"deleting-a-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-widget","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting a widget")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" widget "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" btt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  uuid"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Your UUID'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" widget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Promise<CallResult> ")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="widgets.md";s.default=e.exports}}]);