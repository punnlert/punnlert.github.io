import{S as q,i as E,s as F,k as b,a as S,l as w,m as y,c as N,h,n as u,F as I,P as m,b as G,G as B,a2 as O,O as v,q as P,r as z,u as A,ad as M}from"./index.0b493096.js";function C(t){let l,e;return{c(){l=b("figcaption"),e=P(t[1])},l(n){l=w(n,"FIGCAPTION",{});var f=y(l);e=z(f,t[1]),f.forEach(h)},m(n,f){G(n,l,f),B(l,e)},p(n,f){f&2&&A(e,n[1])},d(n){n&&h(l)}}}function R(t){let l,e,n,f,d,_,a=t[4]&&C(t);return{c(){l=b("figure"),e=b("img"),f=S(),a&&a.c(),this.h()},l(o){l=w(o,"FIGURE",{});var s=y(l);e=w(s,"IMG",{srcset:!0,src:!0,alt:!0,loading:!0,decoding:!0,class:!0}),f=N(s),a&&a.l(s),s.forEach(h),this.h()},h(){u(e,"srcset",t[6]()),I(e.src,n=t[0])||u(e,"src",n),u(e,"alt",t[1]),u(e,"loading","lazy"),u(e,"decoding","async"),u(e,"class","svelte-123i3se"),m(e,"full-bleed",t[2]),m(e,"show_nobg",t[3])},m(o,s){G(o,l,s),B(l,e),B(l,f),a&&a.m(l,null),d||(_=O(e,"load",function(){M(t[5])&&t[5].apply(this,arguments)}),d=!0)},p(o,[s]){t=o,s&1&&!I(e.src,n=t[0])&&u(e,"src",n),s&2&&u(e,"alt",t[1]),s&4&&m(e,"full-bleed",t[2]),s&8&&m(e,"show_nobg",t[3]),t[4]?a?a.p(t,s):(a=C(t),a.c(),a.m(l,null)):a&&(a.d(1),a=null)},i:v,o:v,d(o){o&&h(l),a&&a.d(),d=!1,_()}}}function T(t,l,e){let n,{src:f}=l,{alt:d}=l,{fullBleed:_=void 0}=l,{noBg:a=void 0}=l,{caption:o=void 0}=l,{loadCall:s=void 0}=l,{formats:g=["avif","webp","png"]}=l,{widths:r=void 0}=l;function k(){let i="";if(r)for(let c=0;c<r.length;c++)i+=`${n}-${r[c]}.${g[0]} ${r[c]}w`,c<r.length-1&&(i+=", ");else for(let c=0;c<g.length;c++)i+=`${n}.${g[c]}`,c<g.length-1&&(i+=", ");return i}return t.$$set=i=>{"src"in i&&e(0,f=i.src),"alt"in i&&e(1,d=i.alt),"fullBleed"in i&&e(2,_=i.fullBleed),"noBg"in i&&e(3,a=i.noBg),"caption"in i&&e(4,o=i.caption),"loadCall"in i&&e(5,s=i.loadCall),"formats"in i&&e(7,g=i.formats),"widths"in i&&e(8,r=i.widths)},t.$$.update=()=>{t.$$.dirty&1&&(n=f.split(".")[0])},[f,d,_,a,o,s,k,g,r]}class j extends q{constructor(l){super(),E(this,l,T,R,F,{src:0,alt:1,fullBleed:2,noBg:3,caption:4,loadCall:5,formats:7,widths:8})}}export{j as I};
