"use strict";(self.webpackChunkreact_pc=self.webpackChunkreact_pc||[]).push([[485],{3485:function(e,n,t){t.r(n);var r=t(1413),a=t(5987),c=t(4165),i=t(5861),s=t(9439),l=t(7689),u=t(6731),d=t(3734),o=t(7123),h=t(7528),p=t(3099),Z=t(7309),f=t(2283),m=t(8164),x=t(3784),y=t(940),j=t(3231),g=t(1357),k=(t(2173),t(2072)),_=t(1752),w=t(2622),v=t(7363),I=t(2530),b=t(2643),Y=t(5122),S=t(3329),C=["date"],N=d.Z.Option,R=o.Z.RangePicker;n.default=(0,b.$j)((function(e){return{channelReducer:e.channelReducer}}),{get_channel_async:Y.d})((function(e){var n=(0,v.useState)([]),t=(0,s.Z)(n,2),o=t[0],b=t[1];(0,v.useEffect)((function(){e.get_channel_async(),b(e.channelReducer.channel)}),[]);var Y=(0,v.useState)([{key:"null",name:"\u5168\u90e8"},{key:"0",name:"\u8349\u7a3f"},{key:"1",name:"\u5f85\u5ba1\u6838"},{key:"2",name:"\u5ba1\u6838\u901a\u8fc7"},{key:"3",name:"\u5ba1\u6838\u5931\u8d25"}]),z=(0,s.Z)(Y,1)[0],D=(0,v.useState)({list:[],count:0}),E=(0,s.Z)(D,2),M=E[0],A=E[1],F=(0,v.useState)({page:1,size:10,keywords:""}),O=(0,s.Z)(F,2),P=O[0],B=O[1];(0,v.useEffect)((function(){(0,i.Z)((0,c.Z)().mark((function e(){var n,t,r,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.dJ.get("/article/search",{params:P});case 2:n=e.sent,t=n.data,r=t.count,a=t.rows,A({list:a,count:r});case 5:case"end":return e.stop()}}),e)})))()}),[P]);var J=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.dJ.delete("/mp/articles/".concat(n.id));case 2:B((0,r.Z)((0,r.Z)({},P),{},{page:1}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=(0,l.s0)(),U=[{title:"\u6807\u9898",dataIndex:"title",width:220},{title:"\u680f\u76ee",dataIndex:"categoryRows",width:220,render:function(e){return e&&e.category_name}},{title:"\u72b6\u6001",dataIndex:"type",render:function(e){return n=e,{1:(0,S.jsx)(h.Z,{color:"red",children:"\u5ba1\u6838\u6210\u529f"}),2:(0,S.jsx)(h.Z,{color:"green",children:"\u5ba1\u6838\u5931\u8d25"})}[n];var n}},{title:"\u53d1\u5e03\u65f6\u95f4",dataIndex:"creat_time"},{title:"\u64cd\u4f5c",render:function(e){return(0,S.jsxs)(p.Z,{size:"middle",children:[(0,S.jsx)(Z.Z,{type:"primary",shape:"circle",icon:(0,S.jsx)(_.Z,{}),onClick:function(){return function(e){L("/publish?id=".concat(e.id))}(e)}}),(0,S.jsx)(Z.Z,{type:"primary",danger:!0,shape:"circle",icon:(0,S.jsx)(w.Z,{}),onClick:function(){return J(e)}})]})},fixed:"right"}];return(0,S.jsxs)("div",{children:[(0,S.jsx)(f.Z,{title:(0,S.jsxs)(m.Z,{separator:">",children:[(0,S.jsx)(m.Z.Item,{children:(0,S.jsx)(u.rU,{to:"/home",children:"\u9996\u9875"})}),(0,S.jsx)(m.Z.Item,{children:"\u5185\u5bb9\u7ba1\u7406"})]}),style:{marginBottom:20},children:(0,S.jsxs)(x.Z,{onFinish:function(e){var n=e.date,t=(0,a.Z)(e,C),c={};n&&(c.begin_pubdate=n[0].format("YYYY-MM-DD"),c.end_pubdate=n[1].format("YYYY-MM-DD")),B((0,r.Z)((0,r.Z)((0,r.Z)({},P),t),c))},children:[(0,S.jsx)(x.Z.Item,{label:"\u5173\u952e\u5b57",name:"keywords",style:{width:"310px"},children:(0,S.jsx)(y.Z,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"})}),(0,S.jsx)(x.Z.Item,{label:"\u72b6\u6001",name:"status",children:(0,S.jsx)(j.ZP.Group,{children:z.map((function(e){return(0,S.jsx)(j.ZP,{value:e.key,children:e.name},e.key)}))})}),(0,S.jsx)(x.Z.Item,{label:"\u9891\u9053",name:"channel_id",children:(0,S.jsx)(d.Z,{placeholder:"\u8bf7\u9009\u62e9\u6587\u7ae0\u9891\u9053",style:{width:"265px"},children:o.map((function(e){return(0,S.jsx)(N,{value:e.id,children:e.category_name},e.id)}))})}),(0,S.jsx)(x.Z.Item,{label:"\u65e5\u671f",name:"date",children:(0,S.jsx)(R,{locale:k.Z})}),(0,S.jsx)(x.Z.Item,{children:(0,S.jsx)(Z.Z,{type:"primary",htmlType:"submit",style:{marginLeft:80},children:"\u7b5b\u9009"})})]})}),(0,S.jsx)(f.Z,{title:"\u6839\u636e\u7b5b\u9009\u6761\u4ef6\u5171\u67e5\u8be2\u5230 ".concat(M.count," \u6761\u7ed3\u679c\uff1a"),children:(0,S.jsx)(g.Z,{rowKey:"id",columns:U,dataSource:M.list,pagination:{pageSize:P.size,total:M.count,onChange:function(e){B((0,r.Z)((0,r.Z)({},P),{},{page:e}))},current:P.page},bordered:!0})})]})}))},5122:function(e,n,t){t.d(n,{B:function(){return r},d:function(){return a}});var r=function(){return{type:"ASYNC_USER_INFO"}},a=function(){return{type:"ASYNC_CHANNEL_INFO"}}}}]);
//# sourceMappingURL=485.7ea857e5.chunk.js.map