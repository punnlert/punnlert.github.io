import{S as z,i as V,s as N,C as K,k as w,l as L,m as E,h,n as d,b as G,I as A,J as H,K as O,g,d as y,o as Q,_ as U,w as P,t as X,y as S,z as F,A as I,B,ab as Y,ac as Z,e as D,v as x,f as ee,L as te,a as M,c as R,G as k}from"../chunks/index.be6ebe99.js";import{C as se}from"../chunks/ContentSection.ef90cd0f.js";import{I as ne}from"../chunks/Image.5aa3edbd.js";function ae(l){let n,r,o,s;const c=l[8].default,e=K(c,l,l[7],null);return{c(){n=w("div"),e&&e.c(),this.h()},l(t){n=L(t,"DIV",{class:!0,style:!0});var a=E(n);e&&e.l(a),a.forEach(h),this.h()},h(){d(n,"class",r=`__grid--masonry ${l[0]?"__stretch-first":""}`),d(n,"style",o=`--grid-gap: ${l[1]}; --col-width: ${l[2]};`)},m(t,a){G(t,n,a),e&&e.m(n,null),l[9](n),s=!0},p(t,[a]){e&&e.p&&(!s||a&128)&&A(e,c,t,t[7],s?O(c,t[7],a,null):H(t[7]),null),(!s||a&1&&r!==(r=`__grid--masonry ${t[0]?"__stretch-first":""}`))&&d(n,"class",r),(!s||a&6&&o!==(o=`--grid-gap: ${t[1]}; --col-width: ${t[2]};`))&&d(n,"style",o)},i(t){s||(g(e,t),s=!0)},o(t){y(e,t),s=!1},d(t){t&&h(n),e&&e.d(t),l[9](null)}}}function re(l,n,r){let{$$slots:o={},$$scope:s}=n,{stretchFirst:c=!1,gridGap:e="0.5em",colWidth:t="minmax(Min(20em, 100%), 1fr)",items:a=[]}=n,u=[],m,{reset:p}=n;const v=async()=>{u.forEach(async i=>{let _=getComputedStyle(i._el).gridTemplateColumns.split(" ").length;i.items.forEach(f=>{let b=f.getBoundingClientRect().height;b!==+f.dataset.h&&(f.dataset.h=b,i.mod++)}),(i.ncol!==_||i.mod)&&(i.ncol=_,i.items.forEach(f=>f.style.removeProperty("margin-top")),i.ncol>1&&i.items.slice(_).forEach((f,b)=>{let q=i.items[b].getBoundingClientRect().bottom,J=f.getBoundingClientRect().top;f.style.marginTop=`${q+i.gap-J}px`}),i.mod=0)})},$=async i=>{await X(),i.length&&getComputedStyle(i[0]).gridTemplateRows!=="masonry"&&(u=i.map(_=>({_el:_,gap:parseFloat(getComputedStyle(_).gridRowGap),items:[..._.childNodes].filter(f=>f.nodeType===1&&+getComputedStyle(f).gridColumnEnd!=-1),ncol:0,mod:0})),v())};let C;Q(()=>{C=window,C.addEventListener("resize",v,!1)}),U(()=>{C&&C.removeEventListener("resize",v,!1)});function j(i){P[i?"unshift":"push"](()=>{m=i,r(3,m),r(5,p),r(4,a)})}return l.$$set=i=>{"stretchFirst"in i&&r(0,c=i.stretchFirst),"gridGap"in i&&r(1,e=i.gridGap),"colWidth"in i&&r(2,t=i.colWidth),"items"in i&&r(4,a=i.items),"reset"in i&&r(5,p=i.reset),"$$scope"in i&&r(7,s=i.$$scope)},l.$$.update=()=>{l.$$.dirty&40&&p&&(r(3,m),r(5,p),r(4,a)),l.$$.dirty&24&&a&&(r(3,m),r(5,p),r(4,a)),l.$$.dirty&8&&m&&$([m])},[c,e,t,m,a,p,v,s,o,j]}class le extends z{constructor(n){super(),V(this,n,re,ae,N,{stretchFirst:0,gridGap:1,colWidth:2,items:4,reset:5,refreshLayout:6})}get refreshLayout(){return this.$$.ctx[6]}}function W(l,n,r){const o=l.slice();return o[5]=n[r],o}function T(l){let n,r,o,s,c,e;return s=new ne({props:{src:l[5].image,alt:l[5].description,loadCall:l[0]}}),{c(){n=w("div"),r=w("a"),o=M(),S(s.$$.fragment),c=M(),this.h()},l(t){n=L(t,"DIV",{class:!0});var a=E(n);r=L(a,"A",{href:!0}),E(r).forEach(h),o=R(a),F(s.$$.fragment,a),c=R(a),a.forEach(h),this.h()},h(){d(r,"href","/"+l[5].slug),d(n,"class","postcard svelte-rjh31b")},m(t,a){G(t,n,a),k(n,r),k(n,o),I(s,n,null),k(n,c),e=!0},p(t,a){const u={};a&1&&(u.loadCall=t[0]),s.$set(u)},i(t){e||(g(s.$$.fragment,t),e=!0)},o(t){y(s.$$.fragment,t),e=!1},d(t){t&&h(n),B(s)}}}function oe(l){let n,r,o=l[1],s=[];for(let e=0;e<o.length;e+=1)s[e]=T(W(l,o,e));const c=e=>y(s[e],1,1,()=>{s[e]=null});return{c(){for(let e=0;e<s.length;e+=1)s[e].c();n=D()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);n=D()},m(e,t){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,t);G(e,n,t),r=!0},p(e,t){if(t&3){o=e[1];let a;for(a=0;a<o.length;a+=1){const u=W(e,o,a);s[a]?(s[a].p(u,t),g(s[a],1)):(s[a]=T(u),s[a].c(),g(s[a],1),s[a].m(n.parentNode,n))}for(x(),a=o.length;a<s.length;a+=1)c(a);ee()}},i(e){if(!r){for(let t=0;t<o.length;t+=1)g(s[t]);r=!0}},o(e){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)y(s[t]);r=!1},d(e){te(s,e),e&&h(n)}}}function ie(l){let n,r,o;function s(e){l[3](e)}let c={stretchFirst:!1,colWidth:"minmax(Min(12em, 100%), 1fr)",$$slots:{default:[oe]},$$scope:{ctx:l}};return l[0]!==void 0&&(c.refreshLayout=l[0]),n=new le({props:c}),P.push(()=>Y(n,"refreshLayout",s)),{c(){S(n.$$.fragment)},l(e){F(n.$$.fragment,e)},m(e,t){I(n,e,t),o=!0},p(e,t){const a={};t&257&&(a.$$scope={dirty:t,ctx:e}),!r&&t&1&&(r=!0,a.refreshLayout=e[0],Z(()=>r=!1)),n.$set(a)},i(e){o||(g(n.$$.fragment,e),o=!0)},o(e){y(n.$$.fragment,e),o=!1},d(e){B(n,e)}}}function ce(l){let n,r,o;return r=new se({props:{title:"Graphic Designs",$$slots:{default:[ie]},$$scope:{ctx:l}}}),{c(){n=w("div"),S(r.$$.fragment),this.h()},l(s){n=L(s,"DIV",{class:!0});var c=E(n);F(r.$$.fragment,c),c.forEach(h),this.h()},h(){d(n,"class","container")},m(s,c){G(s,n,c),I(r,n,null),o=!0},p(s,[c]){const e={};c&257&&(e.$$scope={dirty:c,ctx:s}),r.$set(e)},i(s){o||(g(r.$$.fragment,s),o=!0)},o(s){y(r.$$.fragment,s),o=!1},d(s){s&&h(n),B(r)}}}function fe(l,n,r){let{data:o}=n,{graphics:s}=o,c;function e(t){c=t,r(0,c)}return l.$$set=t=>{"data"in t&&r(2,o=t.data)},[c,s,o,e]}class _e extends z{constructor(n){super(),V(this,n,fe,ce,N,{data:2})}}export{_e as component};
