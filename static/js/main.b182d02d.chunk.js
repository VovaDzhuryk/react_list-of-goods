(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,c=n(4),r=n.n(c),i=n(5),a=n(6),o=n(9),l=n(7),u=n(8),h=n(1),d=(n(14),n(15),n(2)),b=n.n(d),p=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var y=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isReversed:!1,sortType:s.NONE},e.handleSortAlphabeticallyClick=function(){e.setState({sortType:s.ALPHABET})},e.handleSortByLengthClick=function(){return e.setState({sortType:s.LENGTH})},e.handleReverseClick=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleResetClick=function(){e.setState({isReversed:!1,sortType:s.NONE})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.sortType,n=e.isReversed,c=t!==s.NONE||n,r=function(e,t){var n=t.sortType,c=t.isReversed,r=Object(u.a)(e);return r.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),c&&r.reverse(),console.log(n,c),r}(j,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":t!==s.ALPHABET}),onClick:this.handleSortAlphabeticallyClick,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":t!==s.LENGTH}),onClick:this.handleSortByLengthClick,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!n}),onClick:this.handleReverseClick,children:"Reverse"}),c&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleResetClick,children:"Reset"})]}),Object(p.jsx)("ul",{children:r.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(h.Component);r.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b182d02d.chunk.js.map