(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,a){t.exports={wrapper:"Tictactoe_wrapper__2vrMt",table:"Tictactoe_table__1-AOh",row:"Tictactoe_row__1azLT",cell:"Tictactoe_cell__2oQK7",btn:"Tictactoe_btn__23Qbm",message:"Tictactoe_message__mN3Fq",cross:"Tictactoe_cross__lF-MI",zero:"Tictactoe_zero__GPqan"}},,,,,,function(t,e,a){t.exports={wrapper:"Main_wrapper__1YPAv",title:"Main_title__3GtJ7"}},,,function(t,e,a){t.exports=a(18)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),i=(a(16),a(17),a(2)),l=a(3),s=a(5),u=a(4),h=a(6),f=a(7),v=a.n(f),d=a(1),m=a.n(d),w=function t(){var e=this;Object(i.a)(this,t),this.size=3,this.data=[],this.gameStarted=!1,this.whoWalkNow=null,this.createNullData=function(){if(e.size)for(var t=0;t<e.size;t++){e.data[t]=[];for(var a=0;a<e.size;a++)e.data[t][a]=null}},this.getNullData=function(){var t=[];if(e.size){for(var a=0;a<e.size;a++){t[a]=[];for(var r=0;r<e.size;r++)t[a][r]=null}return t}},this.handlerStroke=function(t,a,r){var n=function t(e){if(e instanceof Array){for(var a=[],r=0;r<e.length;r++)a[r]=t(e[r]);return a}return e}(r);return e.gameStarted?e.whoWalkNow="cross"===e.whoWalkNow?"zero":"cross":(e.gameStarted=!0,e.whoWalkNow="cross"),n[t][a]=e.whoWalkNow,n},this.deadHeat=function(t){if(!t.length)return!1;for(var e=0;e<t.length;e++)for(var a=t[e],r=0;r<a.length;r++)if(!a[r])return!1;return!0},this.isVictory=function(t){var a=!1;if(!t.length)return!1;for(var r=[],n=0;n<t.length;n++)r.push(t[n][n]);e.checkRow(r)&&(a=!0);for(var o=[],c=0;c<t.length;c++)o.push(t[t.length-1-c][c]);e.checkRow(o)&&(a=!0);var i=[[],[],[]];t.forEach(function(t,e){for(var a=0;a<t.length;a++)i[a][e]=t[a]});for(var l=0;l<i.length;l++)e.checkRow(i[l])&&(a=!0);for(var s=0;s<t.length;s++)e.checkRow(t[s])&&(a=!0);return a},this.checkRow=function(t){if(!t.length)return!1;var e=t[0];if(!e)return!1;for(var a=0;a<t.length;a++)if(t[a]!==e)return!1;return!0},this.findWinner=function(t){var a=null;if(!t.length)return!1;for(var r=[],n=0;n<t.length;n++)r.push(t[n][n]);if(e.checkRow(r))return a=r[0];for(var o=[],c=0;c<t.length;c++)o.push(t[t.length-1-c][c]);if(e.checkRow(o))return a=o[0];var i=[[],[],[]];t.forEach(function(t,e){for(var a=0;a<t.length;a++)i[a][e]=t[a]});for(var l=0;l<i.length;l++)if(e.checkRow(i[l]))return a=i[l][0];for(var s=0;s<t.length;s++)if(e.checkRow(t[s]))return a=t[s][0];return a},this.createNullData()};var g=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).store=new w,a.setNullData=function(){a.setState({data:a.store.getNullData()})},a.handlerStroke=function(t,e){a.state.data[t][e]||a.gameOver()||a.setState(function(r,n){var o=r.data;return{data:a.store.handlerStroke(t,e,o)}})},a.getStyle=function(t,e){var r=a.state.data[t][e];return r?m.a[r]:""},a.gameOver=function(){var t=a.state.data;return!!a.store.deadHeat(t)||!!a.store.isVictory(t)},a.state={data:[]},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setNullData()}},{key:"render",value:function(){var t=this,e=this.state.data;return r.createElement("div",{className:m.a.wrapper},r.createElement("div",{className:m.a.table},this.store.data.length?this.state.data.map(function(e,a){return r.createElement("div",{className:m.a.row,key:"row"+a},e.map(function(e,n){return r.createElement("div",{key:"cell"+n,className:"".concat(m.a.cell," ").concat(t.getStyle(a,n)),onClick:function(){return t.handlerStroke(a,n)}})}))}):null),function(){var a=t.store.findWinner(e);return t.store.deadHeat(e)?r.createElement("p",{className:m.a.message},"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430! \u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u0445\u043e\u0434\u044b."):a?r.createElement("p",{className:m.a.message},"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430! \u041f\u043e\u0431\u0435\u0434\u0438\u043b ","cross"===a?"\u043a\u0440\u0435\u0441\u0442\u0438\u043a":"\u043d\u043e\u043b\u0438\u043a","!"):null}(),r.createElement("button",{className:m.a.btn,onClick:this.setNullData},"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"))}}]),e}(r.Component),p=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.createElement("div",{className:v.a.wrapper},r.createElement("h1",{className:v.a.title},"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),r.createElement(g,null))}}]),e}(r.Component);var _=function(){return n.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.bb474376.chunk.js.map