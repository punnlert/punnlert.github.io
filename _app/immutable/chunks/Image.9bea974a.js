import{S as q,i as E,s as S,k as m,a as C,l as h,m as k,c as F,h as _,n as o,O as B,L as d,b as y,G as b,M as I,q as M,r as N,u as O}from"./index.74bd25d1.js";function v(s){let l,e;return{c(){l=m("figcaption"),e=M(s[1])},l(a){l=h(a,"FIGCAPTION",{});var c=k(l);e=N(c,s[1]),c.forEach(_)},m(a,c){y(a,l,c),b(l,e)},p(a,c){c&2&&O(e,a[1])},d(a){a&&_(l)}}}function j(s){let l,e,a,c,i=s[4]&&v(s);return{c(){l=m("figure"),e=m("img"),c=C(),i&&i.c(),this.h()},l(n){l=h(n,"FIGURE",{});var f=k(l);e=h(f,"IMG",{srcset:!0,src:!0,alt:!0,loading:!0,decoding:!0,class:!0}),c=F(f),i&&i.l(f),f.forEach(_),this.h()},h(){o(e,"srcset",s[5]()),B(e.src,a=s[0])||o(e,"src",a),o(e,"alt",s[1]),o(e,"loading","lazy"),o(e,"decoding","async"),o(e,"class","svelte-1ykl0dj"),d(e,"full-bleed",s[2]),d(e,"show_nobg",s[3])},m(n,f){y(n,l,f),b(l,e),b(l,c),i&&i.m(l,null)},p(n,[f]){f&1&&!B(e.src,a=n[0])&&o(e,"src",a),f&2&&o(e,"alt",n[1]),f&4&&d(e,"full-bleed",n[2]),f&8&&d(e,"show_nobg",n[3]),n[4]?i?i.p(n,f):(i=v(n),i.c(),i.m(l,null)):i&&(i.d(1),i=null)},i:I,o:I,d(n){n&&_(l),i&&i.d()}}}function z(s,l,e){let a,{src:c}=l,{alt:i}=l,{fullBleed:n=void 0}=l,{noBg:f=void 0}=l,{caption:w=void 0}=l,{formats:g=["avif","webp","png"]}=l,{widths:u=void 0}=l;function G(){let t="";if(u)for(let r=0;r<u.length;r++)t+=`${a}-${u[r]}.${g[0]} ${u[r]}w`,r<u.length-1&&(t+=", ");else for(let r=0;r<g.length;r++)t+=`${a}.${g[r]}`,r<g.length-1&&(t+=", ");return t}return s.$$set=t=>{"src"in t&&e(0,c=t.src),"alt"in t&&e(1,i=t.alt),"fullBleed"in t&&e(2,n=t.fullBleed),"noBg"in t&&e(3,f=t.noBg),"caption"in t&&e(4,w=t.caption),"formats"in t&&e(6,g=t.formats),"widths"in t&&e(7,u=t.widths)},s.$$.update=()=>{s.$$.dirty&1&&(a=c.split(".")[0])},[c,i,n,f,w,G,g,u]}class L extends q{constructor(l){super(),E(this,l,z,j,S,{src:0,alt:1,fullBleed:2,noBg:3,caption:4,formats:6,widths:7})}}export{L as I};
