import{S as E,i as M,s as D,k as w,J as b,l as C,m,K as I,h,n as u,p as y,b as z,G as S,M as A,C as N,a as O,c as P,v as R,X,f as Y,D as T,E as Z,F as $,g as d,d as v,o as j,Y as L,e as B,y as q,z as F,A as J,B as K,Z as Q,V as H}from"./index.059e923a.js";/* empty css                                                         */function U(a){let e,l,s;return{c(){e=w("div"),l=b("svg"),s=b("path"),this.h()},l(r){e=C(r,"DIV",{class:!0,style:!0});var t=m(e);l=I(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var o=m(l);s=I(o,"path",{d:!0,fill:!0}),m(s).forEach(h),o.forEach(h),t.forEach(h),this.h()},h(){u(s,"d","M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"),u(s,"fill",a[0]),u(l,"width",a[1]),u(l,"height",a[1]),u(l,"viewBox","0 0 160 160"),u(l,"fill","none"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"class","svelte-sixv8c"),u(e,"class","wrapper svelte-sixv8c"),y(e,"top",a[2].top),y(e,"left",a[2].left)},m(r,t){z(r,e,t),S(e,l),S(l,s)},p(r,[t]){t&1&&u(s,"fill",r[0]),t&2&&u(l,"width",r[1]),t&2&&u(l,"height",r[1]),t&4&&y(e,"top",r[2].top),t&4&&y(e,"left",r[2].left)},i:A,o:A,d(r){r&&h(e)}}}function W(a,e,l){let{color:s}=e,{size:r}=e,{style:t}=e;return a.$$set=o=>{"color"in o&&l(0,s=o.color),"size"in o&&l(1,r=o.size),"style"in o&&l(2,t=o.style)},[s,r,t]}class x extends E{constructor(e){super(),M(this,e,W,U,D,{color:0,size:1,style:2})}}function V(a,e,l){const s=a.slice();return s[7]=e[l],s}function G(a,e){let l,s,r;return s=new x({props:{color:e[7].color,size:e[7].size,style:e[7].style}}),{key:a,first:null,c(){l=B(),q(s.$$.fragment),this.h()},l(t){l=B(),F(s.$$.fragment,t),this.h()},h(){this.first=l},m(t,o){z(t,l,o),J(s,t,o),r=!0},p(t,o){e=t;const f={};o&1&&(f.color=e[7].color),o&1&&(f.size=e[7].size),o&1&&(f.style=e[7].style),s.$set(f)},i(t){r||(d(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&h(l),K(s,t)}}}function ee(a){let e,l=[],s=new Map,r,t,o,f=a[0];const g=n=>n[7].id;for(let n=0;n<f.length;n+=1){let i=V(a,f,n),_=g(i);s.set(_,l[n]=G(_,i))}const p=a[3].default,c=N(p,a,a[2],null);return{c(){e=w("div");for(let n=0;n<l.length;n+=1)l[n].c();r=O(),t=w("span"),c&&c.c(),this.h()},l(n){e=C(n,"DIV",{class:!0});var i=m(e);for(let k=0;k<l.length;k+=1)l[k].l(i);r=P(i),t=C(i,"SPAN",{class:!0});var _=m(t);c&&c.l(_),_.forEach(h),i.forEach(h),this.h()},h(){u(t,"class","slot-wrapper svelte-exdx8u"),u(e,"class","sparkle-wrapper svelte-exdx8u")},m(n,i){z(n,e,i);for(let _=0;_<l.length;_+=1)l[_]&&l[_].m(e,null);S(e,r),S(e,t),c&&c.m(t,null),o=!0},p(n,[i]){i&1&&(f=n[0],R(),l=X(l,i,g,1,n,f,s,e,Q,G,r,V),Y()),c&&c.p&&(!o||i&4)&&T(c,p,n,n[2],o?$(p,n[2],i,null):Z(n[2]),null)},i(n){if(!o){for(let i=0;i<f.length;i+=1)d(l[i]);d(c,n),o=!0}},o(n){for(let i=0;i<l.length;i+=1)v(l[i]);v(c,n),o=!1},d(n){n&&h(e);for(let i=0;i<l.length;i+=1)l[i].d();c&&c.d(n)}}}function te(a,e,l){let{$$slots:s={},$$scope:r}=e;const t=(c,n)=>Math.floor(Math.random()*(n-c))+c;let{color:o="default"}=e;const f=()=>({id:String(t(1e4,99999)),createdAt:Date.now(),color:o==="primary"?"var(--color--primary)":o==="secondary"?"var(--color--secondary)":"var(--color--yellow",size:t(10,20),style:{top:t(-10,80)+"%",left:t(0,100)+"%"}});let g=[],p;return j(()=>{p=setInterval(()=>{const c=Date.now(),n=f(),i=g.filter(_=>c-_.createdAt<1500);i.push(n),l(0,g=i)},400)}),L(()=>{clearInterval(p)}),a.$$set=c=>{"color"in c&&l(1,o=c.color),"$$scope"in c&&l(2,r=c.$$scope)},[g,o,r,s]}class le extends E{constructor(e){super(),M(this,e,te,ee,D,{color:1})}}function se(a){let e,l,s;const r=a[2].default,t=N(r,a,a[3],null);return{c(){e=w("strong"),t&&t.c(),this.h()},l(o){e=C(o,"STRONG",{class:!0});var f=m(e);t&&t.l(f),f.forEach(h),this.h()},h(){u(e,"class",l=H(a[0])+" svelte-8f8x6d")},m(o,f){z(o,e,f),t&&t.m(e,null),s=!0},p(o,f){t&&t.p&&(!s||f&8)&&T(t,r,o,o[3],s?$(r,o[3],f,null):Z(o[3]),null),(!s||f&1&&l!==(l=H(o[0])+" svelte-8f8x6d"))&&u(e,"class",l)},i(o){s||(d(t,o),s=!0)},o(o){v(t,o),s=!1},d(o){o&&h(e),t&&t.d(o)}}}function oe(a){let e,l;return e=new le({props:{color:a[1],$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,r){J(e,s,r),l=!0},p(s,[r]){const t={};r&2&&(t.color=s[1]),r&9&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){l||(d(e.$$.fragment,s),l=!0)},o(s){v(e.$$.fragment,s),l=!1},d(s){K(e,s)}}}function re(a,e,l){let{$$slots:s={},$$scope:r}=e,{color:t="default"}=e,{sparkleColor:o="default"}=e;return a.$$set=f=>{"color"in f&&l(0,t=f.color),"sparkleColor"in f&&l(1,o=f.sparkleColor),"$$scope"in f&&l(3,r=f.$$scope)},[t,o,s,r]}class ie extends E{constructor(e){super(),M(this,e,re,oe,D,{color:0,sparkleColor:1})}}export{ie as S};
