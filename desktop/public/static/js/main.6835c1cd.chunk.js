(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{38:function(t,e,n){t.exports=n(50)},43:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),i=n(25),u=n(26),l=n(34),s=n(33),h=(n(43),n(67)),d=n(65),p=n(66),g=n(68),m=(n(44),function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this))._handleKeyDown=function(e){"Enter"===e.key?t.createAccount(t.state.account):"Backspace"===e.key?t.setState((function(t){return{result:"",account:t.account.substring(0,t.account.length-1)}})):"Delete"===e.key&&t.setState({result:"",account:""}),["1","2","3","4","5","6","7","8","9","0","+","-","*","/"].includes(e.key)&&t.setState((function(t){return{account:t.account+e.key}}))},t.state={account:"",result:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"createAccount",value:function(t){try{this.setState({result:Object(h.a)(t)})}catch(e){this.setState({result:"Error"})}}},{key:"clearAccount",value:function(){this.setState({account:"",result:""})}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"App"},c.a.createElement(d.a,{style:{boxShadow:"0px 10px 39px 0px rgba(0,0,0,0.75)"}},c.a.createElement("div",{className:"account"},c.a.createElement(p.a,{variant:"h3",component:"h6",style:{color:"white",padding:10,textAlign:"center",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}},this.state.account.replace(/\*/g,"\xd7").replace(/\//g,"\xf7"))),c.a.createElement(p.a,{variant:"h5",component:"h5",style:{color:"white",textAlign:"center"}},this.state.result)),c.a.createElement(d.a,{style:{marginTop:30,marginRight:"auto",marginLeft:"auto",paddingLeft:"15px",paddingRight:"15px",textAlign:"center",alignContent:"center"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},c.a.createElement(g.a,{style:{width:"25%",height:"50px",color:"white",backgroundColor:"#404040",margin:3},onClick:function(){return t.setState((function(t){return{account:t.account+"+"}}))}},"+"),c.a.createElement(g.a,{style:{width:"25%",height:"50px",color:"white",backgroundColor:"#404040",margin:3},onClick:function(){return t.setState((function(t){return{account:t.account+"-"}}))}},"-"),c.a.createElement(g.a,{style:{width:"25%",height:"50px",color:"white",backgroundColor:"#404040",margin:3},onClick:function(){return t.setState((function(t){return{account:t.account+"*"}}))}},"\xd7"),c.a.createElement(g.a,{style:{width:"25%",height:"50px",color:"white",backgroundColor:"#404040",margin:3},onClick:function(){return t.setState((function(t){return{account:t.account+"/"}}))}},"\xf7")),["1","2","3","4","5","6","7","8","9","0"].map((function(e,n){return c.a.createElement(g.a,{style:{width:"30%",height:"50px",color:"white",backgroundColor:"#404040",padding:5,margin:4},key:n,onClick:function(){return t.setState((function(t){return{account:t.account+e}}))}},e)})),c.a.createElement(g.a,{style:{width:"30%",height:"50px",color:"white",backgroundColor:"#404040",padding:5,margin:4},onClick:function(){t.clearAccount()}},"CE"),c.a.createElement(g.a,{style:{width:"30%",height:"50px",color:"white",backgroundColor:"#404040",padding:5,margin:4},onClick:function(){t.createAccount(t.state.account)}},"=")),c.a.createElement("p",null))}}]),n}(a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6835c1cd.chunk.js.map