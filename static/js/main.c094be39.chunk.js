(this["webpackJsonpvk-test"]=this["webpackJsonpvk-test"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/remove.b36a3633.svg"},,,,,,,,function(e,t,n){e.exports=n.p+"static/media/add.78cc8215.svg"},,function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),l=n.n(r),i=(n(22),n(23),n(4)),o=(n(30),n(31),function(e){var t=e.children;return a.createElement("div",{className:"card"},t)}),d=n(12),s=(n(32),function(e){var t=e.children,n=e.onClick;return a.createElement("button",{onClick:n,className:"button"},t)}),u=n(7),m=n.n(u),E=n(15),f=n.n(E),p=(n(33),function(e){var t=e.isEmptyPanel,n=e.onAddPanel,c=e.onAddCard,r=e.panelIndex,l=Object(a.useState)(!1),i=Object(d.a)(l,2),u=i[0],E=i[1],p=Object(a.useState)(""),b=Object(d.a)(p,2),v=b[0],O=b[1],_=Object(a.useRef)(null),j=Object(a.useCallback)((function(){E(!0)}),[]),N=Object(a.useCallback)((function(){E(!1)}),[]);return Object(a.useEffect)((function(){_.current&&_.current.focus()}),[u]),a.createElement(a.Fragment,null,u?a.createElement("div",{className:"add-form"},a.createElement("div",{className:"add-form__input"},a.createElement(o,null,a.createElement("textarea",{placeholder:t?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438",onChange:function(e){return O(e.target.value)},value:v,ref:_,rows:"3"})),a.createElement("div",{className:"add-form__bottom"},a.createElement(s,{onClick:function(){return function(e,a){t?c(e,a):n(a),O(""),E(!1)}(r,v)}},t?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443"),a.createElement("img",{onClick:N,className:"add-form__bottom-clear",src:m.a,alt:"Clear svg icon"})))):a.createElement("div",{className:"panel__bottom"},a.createElement("div",{className:"panel__bottom-add-btn"},a.createElement("img",{onClick:j,src:f.a,alt:"Add svg icon"}),a.createElement("span",null,t?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"))))}),b=n(16),v=n.n(b),O=function(e){var t=e.cards,n=e.title,c=e.addPanel,r=e.addCard,l=e.panelIndex,i=e.deletePanel;return a.createElement("div",{className:v()("panel",{"panel--empty":!t})},t&&a.createElement("div",{className:"panel__remove"},a.createElement("img",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c?")&&i(l)},src:m.a,alt:"remove svg"})),n&&a.createElement("div",{className:"panel__title"},a.createElement("b",null,n)),t&&a.createElement("div",{className:"panel__items"},t&&t.map((function(e,t){return a.createElement(o,{key:t},e)}))),a.createElement(p,{isEmptyPanel:t,panelIndex:l,onAddPanel:c,onAddCard:r}))},_=function(e){return{type:"PANELS:ADD",payload:e}},j=function(e){return{type:"PANELS:DELETE",payload:e}},N=function(e,t){return{type:"CARDS:ADD",payload:{text:t,index:e}}},y=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.panels})).items,n=function(t){e(_(t))},c=function(t,n){e(N(t,n))},r=function(t){e(j(t))};return a.createElement(a.Fragment,null,t&&t.map((function(e,t){return a.createElement(O,Object.assign({panelIndex:t,deletePanel:r,addPanel:n,addCard:c},e,{key:t}))})),a.createElement(O,{addPanel:n,addCard:c}))};var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null))},g=n(2),A=n(11),D=n(1),k={items:[{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",cards:["\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React"]},{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",cards:["\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React"]}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PANELS:ADD":return Object(D.a)(Object(D.a)({},e),{},{items:[].concat(Object(A.a)(e.items),[{title:t.payload,cards:[]}])});case"CARDS:ADD":return Object(D.a)(Object(D.a)({},e),{},{items:e.items.map((function(e,n){return n===t.payload.index?Object(D.a)(Object(D.a)({},e),{},{cards:[].concat(Object(A.a)(e.cards),[t.payload.text])}):e}))});case"PANELS:DELETE":return Object(D.a)(Object(D.a)({},e),{},{items:e.items.filter((function(e,n){return t.payload!==n}))})}return e},S=Object(g.b)({panels:P}),x=Object(g.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(i.a,{store:x},c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null))),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.c094be39.chunk.js.map