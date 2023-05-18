(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{417:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("在看一道面试题：讲解一下js中this的时候衍生出的关于作用域链和执行上下文的思考。")]),t._v(" "),s("h2",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),s("p",[t._v("this是一个对象，是函数调用过程中保存的特殊对象。"),s("br"),t._v("\n当普通函数被直接调用的时候，this指向全局(严格模式下undefined)"),s("br"),t._v("\n当被当作对象的方法时this指向对象"),s("br"),t._v("\n当被new调用时this指向对象实例"),s("br"),t._v("\n可以被apply，bind，call改变指向"),s("br"),t._v("\n箭头函数没有自己的this，所以在箭头函数中使用this其实是上层的this")]),t._v(" "),s("h2",{attrs:{id:"关于作用域链和上下文的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于作用域链和上下文的理解"}},[t._v("#")]),t._v(" 关于作用域链和上下文的理解")]),t._v(" "),s("h3",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),s("p",[t._v("执行上下文是js代码被解析和执行时所在的环境的概念抽象，js中运行的代码都是在执行上下文中运行的。每个上下文都有一个关联的变量对象，这个上下文中定义的所有变量和函数都存在于这个对象上 > 来自于红宝书第四版p87"),s("br"),t._v("\n执行上下文分为：全局执行上下文、函数执行上下文、块级执行上下文"),s("br"),t._v("\n执行上下文创建过程中会完成几件事情:1.创建变量对象:初始化函数参数arguments,提升函数声明变量声明。2.创建作用域链，在执行上下文创建阶段，作用域链是在变量对象之后创建(我的理解是因为作用域链是通过执行上下文栈中的一个个执行上下文内部包含的包含变量的对象组成的，所以当这个包含变量的对象生成的时候也就是创建了作用域链)。3.确定this的值。")]),t._v(" "),s("h3",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("p",[t._v("作用域就是变量和函数可访问的范围，控制这个变量或者函数可访问行和生命周期。")]),t._v(" "),s("h2",{attrs:{id:"关于整体的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于整体的理解"}},[t._v("#")]),t._v(" 关于整体的理解")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                上下文执行栈   \n函数-------------\x3e0 --------------------\x3e函数活动对象   \nscope             1 --------------------\x3e全局对象   \n")])])]),s("p",[t._v("我的理解是代码被解析和执行的时候创建函数的执行上下文确定内部this指向，然后将这个执行上下文放到上下文执行栈的顶端也就是0的位置，然后由于每个上下文都有一个活动对象包含这个上下文中定义的所有变量和函数，当运行到下一个函数的时候重复上述操作，这些一个个函数活动对象就形成了作用域链。当寻找变量的时候就可以一层一层向外寻找了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);