import{S as O,i as R,s as z,k as m,q as j,a as I,l as g,m as p,r as H,h as u,c as E,n as h,b as L,G as f,M as N,y as S,z as V,A,g as $,d as y,B as C,v as Z,f as ee,H as te}from"../chunks/index.963f39ba.js";import{B as se}from"../chunks/Button.c88cc32a.js";/* empty css                                                                 */import{S as ae}from"../chunks/Socials.7c63e6ad.js";import{I as ne}from"../chunks/Image.e6056bbf.js";import{C as re,B as le}from"../chunks/ContentSection.617e251f.js";function oe(i){let e,a,t,s,l,n,o,r,c,D;return{c(){e=m("section"),a=m("div"),t=m("h1"),s=j("Punn"),l=I(),n=m("h1"),o=j("Lertjaturaphat's"),r=I(),c=m("h2"),D=j("Portfolio"),this.h()},l(w){e=g(w,"SECTION",{id:!0,class:!0});var d=p(e);a=g(d,"DIV",{class:!0});var b=p(a);t=g(b,"H1",{class:!0});var T=p(t);s=H(T,"Punn"),T.forEach(u),l=E(b),n=g(b,"H1",{class:!0});var _=p(n);o=H(_,"Lertjaturaphat's"),_.forEach(u),b.forEach(u),r=E(d),c=g(d,"H2",{class:!0});var k=p(c);D=H(k,"Portfolio"),k.forEach(u),d.forEach(u),this.h()},h(){h(t,"class","svelte-kryipj"),h(n,"class","svelte-kryipj"),h(a,"class","name svelte-kryipj"),h(c,"class","hello svelte-kryipj"),h(e,"id","hero"),h(e,"class","svelte-kryipj")},m(w,d){L(w,e,d),f(e,a),f(a,t),f(t,s),f(a,l),f(a,n),f(n,o),f(e,r),f(e,c),f(c,D)},p:N,i:N,o:N,d(w){w&&u(e)}}}class ie extends O{constructor(e){super(),R(this,e,null,oe,z,{})}}function ce(i){let e,a,t,s,l,n,o,r,c,D,w,d,b,T,_,k,G,M,B,q;return t=new ne({props:{src:"/images/profile.jpeg",alt:"Punn with a cat"}}),B=new ae({}),{c(){e=m("section"),a=m("div"),S(t.$$.fragment),s=I(),l=m("div"),n=m("h2"),o=j("Hi! I'm Punn Lertjaturaphat."),r=I(),c=m("p"),D=j(`A designer who loves to create meaningful interaction. I always keep looking for a way to mix
			fun physical experience into an otherwise mundane digital task we perform everyday.`),w=I(),d=m("p"),b=j(`I keep my days going with small talks with cafeteria ladies, songs on cracked speakers, and
			the romance of handwritten letters.`),T=I(),_=m("div"),k=m("span"),G=j("Socials:"),M=I(),S(B.$$.fragment),this.h()},l(v){e=g(v,"SECTION",{id:!0,class:!0});var x=p(e);a=g(x,"DIV",{class:!0});var J=p(a);V(t.$$.fragment,J),J.forEach(u),s=E(x),l=g(x,"DIV",{class:!0});var P=p(l);n=g(P,"H2",{class:!0});var K=p(n);o=H(K,"Hi! I'm Punn Lertjaturaphat."),K.forEach(u),r=E(P),c=g(P,"P",{class:!0});var Q=p(c);D=H(Q,`A designer who loves to create meaningful interaction. I always keep looking for a way to mix
			fun physical experience into an otherwise mundane digital task we perform everyday.`),Q.forEach(u),w=E(P),d=g(P,"P",{class:!0});var U=p(d);b=H(U,`I keep my days going with small talks with cafeteria ladies, songs on cracked speakers, and
			the romance of handwritten letters.`),U.forEach(u),T=E(P),_=g(P,"DIV",{class:!0});var F=p(_);k=g(F,"SPAN",{class:!0});var W=p(k);G=H(W,"Socials:"),W.forEach(u),M=E(F),V(B.$$.fragment,F),F.forEach(u),P.forEach(u),x.forEach(u),this.h()},h(){h(a,"class","image svelte-15nehu9"),h(n,"class","svelte-15nehu9"),h(c,"class","svelte-15nehu9"),h(d,"class","svelte-15nehu9"),h(k,"class","svelte-15nehu9"),h(_,"class","socials svelte-15nehu9"),h(l,"class","info svelte-15nehu9"),h(e,"id","about"),h(e,"class","svelte-15nehu9")},m(v,x){L(v,e,x),f(e,a),A(t,a,null),f(e,s),f(e,l),f(l,n),f(n,o),f(l,r),f(l,c),f(c,D),f(l,w),f(l,d),f(d,b),f(l,T),f(l,_),f(_,k),f(k,G),f(_,M),A(B,_,null),q=!0},p:N,i(v){q||($(t.$$.fragment,v),$(B.$$.fragment,v),q=!0)},o(v){y(t.$$.fragment,v),y(B.$$.fragment,v),q=!1},d(v){v&&u(e),C(t),C(B)}}}class fe extends O{constructor(e){super(),R(this,e,null,ce,z,{})}}function X(i,e,a){const t=i.slice();return t[1]=e[a],t}function Y(i){let e,a;return e=new le({props:{slug:i[1].slug,title:i[1].title,excerpt:i[1].excerpt,tags:i[1].tags,readingTime:i[1].readingTime,coverImage:i[1].coverImage}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,s){const l={};s&1&&(l.slug=t[1].slug),s&1&&(l.title=t[1].title),s&1&&(l.excerpt=t[1].excerpt),s&1&&(l.tags=t[1].tags),s&1&&(l.readingTime=t[1].readingTime),s&1&&(l.coverImage=t[1].coverImage),e.$set(l)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function ue(i){let e,a,t=i[0],s=[];for(let n=0;n<t.length;n+=1)s[n]=Y(X(i,t,n));const l=n=>y(s[n],1,1,()=>{s[n]=null});return{c(){e=m("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=g(n,"DIV",{class:!0});var o=p(e);for(let r=0;r<s.length;r+=1)s[r].l(o);o.forEach(u),this.h()},h(){h(e,"class","grid svelte-8prerd")},m(n,o){L(n,e,o);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);a=!0},p(n,o){if(o&1){t=n[0];let r;for(r=0;r<t.length;r+=1){const c=X(n,t,r);s[r]?(s[r].p(c,o),$(s[r],1)):(s[r]=Y(c),s[r].c(),$(s[r],1),s[r].m(e,null))}for(Z(),r=t.length;r<s.length;r+=1)l(r);ee()}},i(n){if(!a){for(let o=0;o<t.length;o+=1)$(s[o]);a=!0}},o(n){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)y(s[o]);a=!1},d(n){n&&u(e),te(s,n)}}}function he(i){let e;return{c(){e=j("View All")},l(a){e=H(a,"View All")},m(a,t){L(a,e,t)},d(a){a&&u(e)}}}function me(i){let e,a,t;return a=new se({props:{href:"/projects",$$slots:{default:[he]},$$scope:{ctx:i}}}),{c(){e=m("div"),S(a.$$.fragment),this.h()},l(s){e=g(s,"DIV",{slot:!0});var l=p(e);V(a.$$.fragment,l),l.forEach(u),this.h()},h(){h(e,"slot","button")},m(s,l){L(s,e,l),A(a,e,null),t=!0},p(s,l){const n={};l&16&&(n.$$scope={dirty:l,ctx:s}),a.$set(n)},i(s){t||($(a.$$.fragment,s),t=!0)},o(s){y(a.$$.fragment,s),t=!1},d(s){s&&u(e),C(a)}}}function ge(i){let e,a;return e=new re({props:{id:"recent-posts",title:"Proudly Presents",description:"Here are some of the highlights of my projects.",align:"top",$$slots:{button:[me],default:[ue]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,[s]){const l={};s&17&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function pe(i,e,a){let{posts:t}=e;return i.$$set=s=>{"posts"in s&&a(0,t=s.posts)},[t]}class de extends O{constructor(e){super(),R(this,e,pe,ge,z,{posts:0})}}function $e(i){let e,a;return e=new de({props:{posts:i[0]}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p:N,i(t){a||($(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function _e(i){let e,a,t,s,l,n;a=new ie({}),s=new fe({});let o=i[0]&&i[0].length>0&&$e(i);return{c(){e=m("div"),S(a.$$.fragment),t=I(),S(s.$$.fragment),l=I(),o&&o.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var c=p(e);V(a.$$.fragment,c),t=E(c),V(s.$$.fragment,c),l=E(c),o&&o.l(c),c.forEach(u),this.h()},h(){h(e,"class","container")},m(r,c){L(r,e,c),A(a,e,null),f(e,t),A(s,e,null),f(e,l),o&&o.m(e,null),n=!0},p(r,[c]){r[0]&&r[0].length>0&&o.p(r,c)},i(r){n||($(a.$$.fragment,r),$(s.$$.fragment,r),$(o),n=!0)},o(r){y(a.$$.fragment,r),y(s.$$.fragment,r),y(o),n=!1},d(r){r&&u(e),C(a),C(s),o&&o.d()}}}function ve(i,e,a){let{data:t}=e,{features:s,posts:l}=t;return i.$$set=n=>{"data"in n&&a(1,t=n.data)},[l,t]}class Pe extends O{constructor(e){super(),R(this,e,ve,_e,z,{data:1})}}export{Pe as default};
