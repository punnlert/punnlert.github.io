import{S as w,i as B,s as b,k as I,l as S,n as f,R as h,L as c,b as k,M as m,h as q}from"./index.7e9edd4a.js";/* empty css                                            */function v(s){let e,i;return{c(){e=I("img"),this.h()},l(l){e=S(l,"IMG",{srcset:!0,src:!0,alt:!0,loading:!0,decoding:!0,class:!0}),this.h()},h(){f(e,"srcset",s[4]()),h(e.src,i=s[0])||f(e,"src",i),f(e,"alt",s[1]),f(e,"loading","lazy"),f(e,"decoding","async"),f(e,"class","svelte-1ykl0dj"),c(e,"full-bleed",s[2]),c(e,"show_nobg",s[3])},m(l,n){k(l,e,n)},p(l,[n]){n&1&&!h(e.src,i=l[0])&&f(e,"src",i),n&2&&f(e,"alt",l[1]),n&4&&c(e,"full-bleed",l[2]),n&8&&c(e,"show_nobg",l[3])},i:m,o:m,d(l){l&&q(e)}}}function y(s,e,i){let l,{src:n}=e,{alt:g}=e,{fullBleed:o=void 0}=e,{noBg:d=void 0}=e,{formats:u=["avif","webp","png"]}=e,{widths:r=void 0}=e;function _(){let t="";if(r)for(let a=0;a<r.length;a++)t+=`${l}-${r[a]}.${u[0]} ${r[a]}w`,a<r.length-1&&(t+=", ");else for(let a=0;a<u.length;a++)t+=`${l}.${u[a]}`,a<u.length-1&&(t+=", ");return t}return s.$$set=t=>{"src"in t&&i(0,n=t.src),"alt"in t&&i(1,g=t.alt),"fullBleed"in t&&i(2,o=t.fullBleed),"noBg"in t&&i(3,d=t.noBg),"formats"in t&&i(5,u=t.formats),"widths"in t&&i(6,r=t.widths)},s.$$.update=()=>{s.$$.dirty&1&&(l=n.split(".")[0])},[n,g,o,d,_,u,r]}class z extends w{constructor(e){super(),B(this,e,y,v,b,{src:0,alt:1,fullBleed:2,noBg:3,formats:5,widths:6})}}export{z as I};
