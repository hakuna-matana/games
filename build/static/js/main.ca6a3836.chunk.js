(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){t.exports={wrapper:"Tictactoe_wrapper__2vrMt",title:"Tictactoe_title__PFeID",table:"Tictactoe_table__1-AOh",row:"Tictactoe_row__1azLT",cell:"Tictactoe_cell__2oQK7",btn:"Tictactoe_btn__23Qbm",message:"Tictactoe_message__mN3Fq",cross:"Tictactoe_cross__lF-MI",zero:"Tictactoe_zero__GPqan",winner:"Tictactoe_winner__S5mvC"}},,,,,,,,function(t,e,n){t.exports={wrapper:"Main_wrapper__1YPAv",title:"Main_title__3GtJ7"}},function(t,e,n){t.exports={timer:"Timer_timer__2KmgB"}},function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),c=(n(17),n(18),n(2)),s=n(3),l=n(5),u=n(4),h=n(6),m=n(9),f=n.n(m),v=n(1),p=n.n(v),d=function t(){var e=this;Object(c.a)(this,t),this.size=3,this.gameStarted=!1,this.whoWalkNow=null,this.getNullData=function(){var t=[];if(e.size){for(var n=0;n<e.size;n++){t[n]=[];for(var r=0;r<e.size;r++)t[n][r]={}}return t}},this.handlerStroke=function(t,n,r){console.log("data",r);var a=function t(e){if(null===e||"object"!==typeof e)return e;if(e instanceof Array&&e.length){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r]);return n}if(e instanceof Object){var a={};for(var o in e)e.hasOwnProperty(o)&&(a[o]=t(e[o]));return a}}(r);return e.gameStarted?e.whoWalkNow="cross"===e.whoWalkNow?"zero":"cross":(e.gameStarted=!0,e.whoWalkNow="cross"),a[t][n].name=e.whoWalkNow,a},this.deadHeat=function(t){if(!t.length)return!1;for(var e=0;e<t.length;e++)for(var n=t[e],r=0;r<n.length;r++)if(!n[r].name)return!1;return!0},this.isVictory=function(t){var n=!1;if(!t.length)return!1;for(var r=[],a=0;a<t.length;a++)r.push(t[a][a]);e.checkRow(r)&&(n=!0);for(var o=[],i=0;i<t.length;i++)o.push(t[t.length-1-i][i]);e.checkRow(o)&&(n=!0);var c=[[],[],[]];t.forEach(function(t,e){for(var n=0;n<t.length;n++)c[n][e]=t[n]});for(var s=0;s<c.length;s++)e.checkRow(c[s])&&(n=!0);for(var l=0;l<t.length;l++)e.checkRow(t[l])&&(n=!0);return n},this.checkRow=function(t){if(!t.length)return!1;var e=t[0].name;if(!e)return!1;for(var n=0;n<t.length;n++)if(t[n].name!==e)return!1;return!0},this.isWinner=function(t,n,r){var a=!1;if(!r.length)return!1;for(var o=!1,i=[],c=0;c<r.length;c++)t===c&&n===c&&(o=!0),i.push(r[c][c]);e.checkRow(i)&&o&&(a=!0);for(var s=!1,l=[],u=0;u<r.length;u++)t===r.length-1-u&&n===u&&(s=!0),l.push(r[r.length-1-u][u]);e.checkRow(l)&&s&&(a=!0);for(var h=!1,m=0;m<r.length;m++)if(e.checkRow(r[m])){for(var f=0;f<r[m].length;f++)t===m&&n===f&&(h=!0);h&&(a=!0)}return a},this.findWinner=function(t){var n=null;if(!t.length)return!1;for(var r=[],a=0;a<t.length;a++)r.push(t[a][a]);if(e.checkRow(r))return n=r[0].name;for(var o=[],i=0;i<t.length;i++)o.push(t[t.length-1-i][i]);if(e.checkRow(o))return n=o[0].name;var c=[[],[],[]];t.forEach(function(t,e){for(var n=0;n<t.length;n++)c[n][e]=t[n]});for(var s=0;s<c.length;s++)if(e.checkRow(c[s]))return n=c[s][0].name;for(var l=0;l<t.length;l++)if(e.checkRow(t[l]))return n=t[l][0].name;return n}};var g=n(10),w=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).timerWasStoped=!1,n.clearTimer=function(){clearInterval(n.timer),n.setState({time:0})},n.setTimer=function(){n.props.onChange&&"function"===typeof n.props.onChange?n.timer=setInterval(n.props.onChange,1e3):n.timer=setInterval(function(){return n.setState(function(t){return{time:parseInt(t.time)+1}})},1e3)},n.getTime=function(t){var e,n,r;return e=t,t>=60&&(e=t-60*(n=parseInt(t/60))),n>=60&&(n-=60*(r=parseInt(n/60))),r?"".concat(r,":").concat(n>9?n:"0"+n,":").concat(e>9?e:"0"+e):n?"".concat(n,":").concat(e>9?e:"0"+e):"".concat(e)},n.state={time:0},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"shouldComponentUpdate",value:function(t,e){return t.stop?(clearInterval(this.timer),!1):(!1===t.stop&&!0===this.props.stop&&this.setTimer(),!0)}},{key:"render",value:function(){return r.createElement("div",{className:g.timer},"\u0412\u0440\u0435\u043c\u044f: ",this.getTime(this.props.value?this.props.value:this.state.time))}}]),e}(r.Component),_=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).store=new d,n.timerStoped=!1,n.setNullData=function(){n.setState({data:n.store.getNullData()})},n.handlerStroke=function(t,e){n.state.data[t][e].name||n.gameOver()||n.setState(function(r,a){var o=r.data;return{data:n.store.handlerStroke(t,e,o)}})},n.getStyle=function(t,e){var r=n.state.data[t][e].name;return r?p.a[r]:""},n.gameOver=function(){var t=n.state.data;return!!n.store.deadHeat(t)||!!n.store.isVictory(t)},n.startNewGame=function(){n.setNullData(),n.store.gameStarted=!1,n.store.whoWalkNow=null,n.clearTimer()},n.clearTimer=function(){n.timerStoped=!1,n.setState({time:0})},n.setTimer=function(){n.setState(function(t){return{time:parseInt(t.time)+1}})},n.state={data:[],time:0},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setNullData()}},{key:"render",value:function(){var t=this,e=this.state.data;return r.createElement("div",{className:p.a.wrapper},r.createElement("h1",{className:p.a.title},"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"),r.createElement("div",{className:p.a.table},this.state.data.length?this.state.data.map(function(e,n){return r.createElement("div",{className:p.a.row,key:"row"+n},e.map(function(e,a){return r.createElement("div",{key:"cell"+a,className:"".concat(p.a.cell," ").concat(t.getStyle(n,a)," ").concat(t.store.isWinner(n,a,t.state.data)?p.a.winner:""),onClick:function(){return t.handlerStroke(n,a)}})}))}):null),r.createElement(w,{value:this.state.time,onChange:this.setTimer,stop:this.timerStoped}),function(){var n=t.store.findWinner(e);return n?(t.timerStoped=!0,r.createElement("p",{className:p.a.message},"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430! \u041f\u043e\u0431\u0435\u0434\u0438\u043b ","cross"===n?"\u043a\u0440\u0435\u0441\u0442\u0438\u043a":"\u043d\u043e\u043b\u0438\u043a","!")):t.store.deadHeat(e)?(t.timerStoped=!0,r.createElement("p",{className:p.a.message},"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430! \u0417\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u0445\u043e\u0434\u044b.")):null}(),r.createElement("button",{className:p.a.btn,onClick:this.startNewGame},"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"))}}]),e}(r.Component),k=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.createElement("div",{className:f.a.wrapper},r.createElement(_,null))}}]),e}(r.Component);var b=function(){return a.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.ca6a3836.chunk.js.map