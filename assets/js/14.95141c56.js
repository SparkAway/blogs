(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{411:function(t,s,e){"use strict";e.r(s);var r=e(2),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("总有人问get和post区别所以记录一下")]),t._v(" "),s("h2",{attrs:{id:"表面区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表面区别"}},[t._v("#")]),t._v(" 表面区别")]),t._v(" "),s("p",[t._v("1.get请求是幂等的post是非幂等的。"),s("br"),t._v("\n2.get请求回退无害，post回退有害。"),s("br"),t._v("\n3.get请求会被浏览器主动cache，post除非设置不然不会。"),s("br"),t._v("\n4.get请求可以被存到收藏夹中，post请求不可以。"),s("br"),t._v("\n5.get请求会存入历史记录，post请求不会。"),s("br"),t._v("\n6.get请求的参数暴露在url上面，post请求参数放在请求体里面。"),s("br"),t._v("\n7.get请求比post请求安全性略高因为👆。"),s("br"),t._v("\n8.get请求的url由于加上参数后长度可能会因为浏览器而有限制一般是2K个字节，而post不会。"),s("br"),t._v("\n9.get请求只接受ASCII编码的参数，而post都能接受。")]),t._v(" "),s("h2",{attrs:{id:"本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本质"}},[t._v("#")]),t._v(" 本质")]),t._v(" "),s("p",[t._v("get请求和post请求本质上都是http协议用来发起请求的方法，http底层是tcp/ip所以get和post的底层都是tcp/ip，而tcp又没啥区分，所以再最下面其实get和post是一样的。所以给get加请求体和给post加参数都是可以的，只不过有可能你的操作人家后台服务器不认，人家不认你的get请求体里的内容给你忽略了，")]),t._v(" "),s("h2",{attrs:{id:"隐藏的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏的区别"}},[t._v("#")]),t._v(" 隐藏的区别")]),t._v(" "),s("p",[t._v("get一次性会把请求头和请求体全都发过去，而post请求会先发请求头返回100后继续发请求体，网络好的时候一次和两次没多大区别，但是网络差的时候，两次请求更能够增加数据传递的准确性。(firefox人家post就发一次咱也没办法)")])])}),[],!1,null,null,null);s.default=a.exports}}]);