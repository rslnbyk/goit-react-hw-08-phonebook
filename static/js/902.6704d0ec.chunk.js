"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{1902:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(181);var a,o,i,l=n(7195),s=n(3736),u=n(9434),c=n(3634),d=n(6916),m=function(e){return e.contacts.items},f=function(e){return e.contacts.isLoading},h=(0,d.P1)([m,function(e){return e.filter}],(function(e,t){if(t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}return e})),p=n(168),v=n(7691),x=v.ZP.form(a||(a=(0,p.Z)(["\n  width: 320px;\n  padding: 5px 10px;\n"]))),b=n(3494),y=n(184),g=function(){var e=(0,u.I0)(),t=(0,u.v9)(m);return(0,y.jsxs)(x,{onSubmit:function(n){n.preventDefault();var a,o=n.currentTarget.elements.name.value,i=n.currentTarget.elements.number.value,l=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}(t);try{for(l.s();!(a=l.n()).done;){if(a.value.name.toLowerCase()===o.toLowerCase())return void alert("".concat(o," is already in contacts"))}}catch(s){l.e(s)}finally{l.f()}e((0,c.uK)({name:o,number:i})),n.target.reset()},children:[(0,y.jsx)("h2",{style:{color:"#2a363b"},children:"Add new contact"}),(0,y.jsx)(l.Z,{type:"text",name:"name",label:"Name",variant:"outlined",color:"error",size:"small",sx:{marginBottom:"15px",width:"300px"},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,y.jsx)(l.Z,{type:"tel",name:"number",label:"Number",variant:"outlined",color:"error",size:"small",sx:{marginBottom:"15px",width:"300px"},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,y.jsx)("br",{}),(0,y.jsx)(s.Z,{type:"submit",startIcon:(0,y.jsx)(b.Z,{}),variant:"outlined",color:"error",children:"Add contact"})]})},j=v.ZP.li(o||(o=(0,p.Z)(["\n  font-weight: 500;\n  color: #2a363b;\n\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),Z=v.ZP.ul(i||(i=(0,p.Z)(["\n  list-style: none;\n  margin-top: 0;\n  padding-left: 10px;\n"]))),w=n(9505),z=function(){var e=(0,u.I0)(),t=(0,u.v9)(h);return(0,y.jsx)(Z,{children:t.map((function(t){return(0,y.jsxs)(j,{children:[t.name,": ",t.number,(0,y.jsx)(s.Z,{type:"button",onClick:function(){e((0,c.GK)(t.id))},startIcon:(0,y.jsx)(w.Z,{}),variant:"outlined",color:"error",sx:{marginLeft:"10px",height:"30px",width:"95px"},children:"Delete"})]},t.id)}))})},C=n(4808),L=function(){var e=(0,u.I0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{style:{marginLeft:"10px",color:"#2a363b"},children:"Find contacts by name"}),(0,y.jsx)(l.Z,{type:"text",name:"filter",onChange:function(t){e((0,C.T)(t.target.value))},label:"Filter",variant:"outlined",color:"error",size:"small",sx:{marginBottom:"15px",width:"300px",marginLeft:"10px"}})]})},A=n(2791);function I(){var e=(0,u.I0)(),t=(0,u.v9)(f);return(0,A.useEffect)((function(){e((0,c.yF)())}),[e]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{}),(0,y.jsx)("div",{children:t&&"Request in progress..."}),(0,y.jsx)(L,{}),(0,y.jsx)(z,{})]})}},3494:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutlineOutlined");t.Z=i},9505:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}),"DeleteForeverOutlined");t.Z=i}}]);
//# sourceMappingURL=902.6704d0ec.chunk.js.map