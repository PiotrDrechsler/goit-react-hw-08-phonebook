"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[267],{6411:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(2791),a=t(9434),i=t(4270),s=function(e){return e.contacts.items},o=function(e){return e.filter},c=function(e){return e.contacts.isLoading},l=t(3634),u=t(176),d=t(2701),h=t(4585),m=t(7886),x=t(4224),f=t(3329),j=function(){var e=(0,a.v9)(s),n=(0,a.I0)();return(0,f.jsx)(u.k,{direction:"column",align:"center",m:"4",children:(0,f.jsxs)(d.NI,{as:"form",onSubmit:function(t){t.preventDefault();var r=t.target,a=t.target.name.value,i=t.target.number.value,s=e.some((function(e){return e.name.toLowerCase()===a.toLowerCase()})),o={name:a,number:i};s?alert("".concat(a," is in use. Try another name.")):(n((0,l.uK)(o)),r.reset())},children:[(0,f.jsx)(h.l,{htmlFor:"name",children:"Name"}),(0,f.jsx)(m.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"e.g. John Doe",required:!0,mb:"4"}),(0,f.jsx)(h.l,{htmlFor:"number",children:"Number"}),(0,f.jsx)(m.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"e.g. 123-456-789",required:!0,mb:"4"}),(0,f.jsx)(x.z,{type:"submit",bg:"blue.500",color:"white",children:"Add contact"})]})})},b=t(9229),v=t(4087),p=t(1413),g=t(4925),w=t(7872),C=["icon","children","isRound","aria-label"],y=(0,w.G)((function(e,n){var t=e.icon,a=e.children,i=e.isRound,s=e["aria-label"],o=(0,g.Z)(e,C),c=t||a,l=(0,r.isValidElement)(c)?(0,r.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return(0,f.jsx)(x.z,(0,p.Z)((0,p.Z)({padding:"0",borderRadius:i?"full":void 0,ref:n,"aria-label":s},o),{},{children:l}))}));y.displayName="IconButton";var I=t(8843),k=function(){var e=(0,a.v9)(s),n=(0,a.v9)(o),t=(0,a.v9)(c),r=(0,a.I0)(),i=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,f.jsx)(f.Fragment,{children:t?(0,f.jsx)(b.x,{children:"Loading..."}):(0,f.jsx)(u.k,{flexDirection:"column",alignItems:"center",justifyContent:"center",mt:"5",children:i.length>0?i.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,f.jsxs)(v.xu,{w:{base:"80vw",sm:"50vw",md:"30vw",lg:"20vw"},borderWidth:"1px",borderRadius:"lg",overflow:"hidden",my:"2",children:[(0,f.jsxs)(u.k,{alignItems:"center",justifyContent:"space-between",p:"2",children:[(0,f.jsx)(b.x,{children:t}),(0,f.jsx)(y,{icon:(0,f.jsx)(I.P,{}),onClick:function(){return function(e){return r((0,l.GK)(e))}(n)}})]}),(0,f.jsx)(v.xu,{p:"2",children:(0,f.jsx)(b.x,{children:a})})]},n)})):(0,f.jsx)(b.x,{children:"No contacts found"})})})},_=t(3165),L=function(){var e=(0,a.I0)();return(0,f.jsxs)(d.NI,{id:"filter",children:[(0,f.jsx)(h.l,{children:"Find contacts by name"}),(0,f.jsx)(m.I,{type:"text",name:"filter",value:(0,a.v9)(o),onChange:function(n){var t=n.target.value.toLowerCase();e((0,_.T)(t))}})]})},N=function(){var e=(0,a.I0)(),n=(0,a.v9)(c);return(0,r.useEffect)((function(){e((0,l.yF)())}),[e]),(0,f.jsxs)("div",{children:[(0,f.jsx)(i.q,{children:(0,f.jsx)("h1",{children:"Phonebook"})}),(0,f.jsx)(j,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)("div",{children:n&&"Request in progress..."}),n?null:(0,f.jsx)(L,{}),(0,f.jsx)(k,{})]})}}}]);
//# sourceMappingURL=267.b7d8dbdb.chunk.js.map