import{S as O,i as R,s as z,k as d,q,a as k,l as g,m,r as H,h as u,c as E,n as h,b as x,G as f,M as L,y as S,z as V,A,g as $,d as w,B as j,v as Z,f as ee,H as te}from"../chunks/index.c0d3fcd5.js";import{B as se}from"../chunks/Button.f45cd995.js";/* empty css                                                                 */import{S as ae}from"../chunks/Socials.6ea725f9.js";import{I as ne}from"../chunks/Image.22f516f1.js";import{C as re,B as le}from"../chunks/ContentSection.911f5ee9.js";function oe(i){let e,a,t,s,l,n,o,r,c,C;return{c(){e=d("section"),a=d("div"),t=d("h1"),s=q("Punn"),l=k(),n=d("h1"),o=q("Lertjaturaphat's"),r=k(),c=d("h2"),C=q("Portfolio"),this.h()},l(y){e=g(y,"SECTION",{id:!0,class:!0});var p=m(e);a=g(p,"DIV",{class:!0});var b=m(a);t=g(b,"H1",{class:!0});var B=m(t);s=H(B,"Punn"),B.forEach(u),l=E(b),n=g(b,"H1",{class:!0});var _=m(n);o=H(_,"Lertjaturaphat's"),_.forEach(u),b.forEach(u),r=E(p),c=g(p,"H2",{class:!0});var I=m(c);C=H(I,"Portfolio"),I.forEach(u),p.forEach(u),this.h()},h(){h(t,"class","svelte-dg3h4t"),h(n,"class","svelte-dg3h4t"),h(a,"class","name svelte-dg3h4t"),h(c,"class","hello svelte-dg3h4t"),h(e,"id","hero"),h(e,"class","svelte-dg3h4t")},m(y,p){x(y,e,p),f(e,a),f(a,t),f(t,s),f(a,l),f(a,n),f(n,o),f(e,r),f(e,c),f(c,C)},p:L,i:L,o:L,d(y){y&&u(e)}}}class ie extends O{constructor(e){super(),R(this,e,null,oe,z,{})}}function ce(i){let e,a,t,s,l,n,o,r,c,C,y,p,b,B,_,I,G,M,D,N;return t=new ne({props:{src:"/images/profile.jpeg",alt:"Punn with a cat"}}),D=new ae({}),{c(){e=d("section"),a=d("div"),S(t.$$.fragment),s=k(),l=d("div"),n=d("h2"),o=q("Hi! I'm Punn Lertjaturaphat."),r=k(),c=d("p"),C=q(`A designer who loves to create meaningful interaction. I always keep looking for a way to mix
			fun physical experience into an otherwise mundane digital task we perform everyday.`),y=k(),p=d("p"),b=q(`I keep my days going with small talks with cafeteria ladies, songs on cracked speakers, and
			the romance of handwritten letters.`),B=k(),_=d("div"),I=d("span"),G=q("Socials:"),M=k(),S(D.$$.fragment),this.h()},l(v){e=g(v,"SECTION",{id:!0,class:!0});var T=m(e);a=g(T,"DIV",{class:!0});var J=m(a);V(t.$$.fragment,J),J.forEach(u),s=E(T),l=g(T,"DIV",{class:!0});var P=m(l);n=g(P,"H2",{class:!0});var K=m(n);o=H(K,"Hi! I'm Punn Lertjaturaphat."),K.forEach(u),r=E(P),c=g(P,"P",{class:!0});var Q=m(c);C=H(Q,`A designer who loves to create meaningful interaction. I always keep looking for a way to mix
			fun physical experience into an otherwise mundane digital task we perform everyday.`),Q.forEach(u),y=E(P),p=g(P,"P",{class:!0});var U=m(p);b=H(U,`I keep my days going with small talks with cafeteria ladies, songs on cracked speakers, and
			the romance of handwritten letters.`),U.forEach(u),B=E(P),_=g(P,"DIV",{class:!0});var F=m(_);I=g(F,"SPAN",{class:!0});var W=m(I);G=H(W,"Socials:"),W.forEach(u),M=E(F),V(D.$$.fragment,F),F.forEach(u),P.forEach(u),T.forEach(u),this.h()},h(){h(a,"class","image svelte-1q6ttid"),h(n,"class","svelte-1q6ttid"),h(c,"class","svelte-1q6ttid"),h(p,"class","svelte-1q6ttid"),h(I,"class","svelte-1q6ttid"),h(_,"class","socials svelte-1q6ttid"),h(l,"class","info svelte-1q6ttid"),h(e,"id","about"),h(e,"class","svelte-1q6ttid")},m(v,T){x(v,e,T),f(e,a),A(t,a,null),f(e,s),f(e,l),f(l,n),f(n,o),f(l,r),f(l,c),f(c,C),f(l,y),f(l,p),f(p,b),f(l,B),f(l,_),f(_,I),f(I,G),f(_,M),A(D,_,null),N=!0},p:L,i(v){N||($(t.$$.fragment,v),$(D.$$.fragment,v),N=!0)},o(v){w(t.$$.fragment,v),w(D.$$.fragment,v),N=!1},d(v){v&&u(e),j(t),j(D)}}}class fe extends O{constructor(e){super(),R(this,e,null,ce,z,{})}}function X(i,e,a){const t=i.slice();return t[1]=e[a],t}function Y(i){let e,a;return e=new le({props:{slug:i[1].slug,title:i[1].title,excerpt:i[1].excerpt,tags:i[1].tags,readingTime:i[1].readingTime,coverImage:i[1].coverImage}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,s){const l={};s&1&&(l.slug=t[1].slug),s&1&&(l.title=t[1].title),s&1&&(l.excerpt=t[1].excerpt),s&1&&(l.tags=t[1].tags),s&1&&(l.readingTime=t[1].readingTime),s&1&&(l.coverImage=t[1].coverImage),e.$set(l)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ue(i){let e,a,t=i[0],s=[];for(let n=0;n<t.length;n+=1)s[n]=Y(X(i,t,n));const l=n=>w(s[n],1,1,()=>{s[n]=null});return{c(){e=d("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=g(n,"DIV",{class:!0});var o=m(e);for(let r=0;r<s.length;r+=1)s[r].l(o);o.forEach(u),this.h()},h(){h(e,"class","grid svelte-8prerd")},m(n,o){x(n,e,o);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);a=!0},p(n,o){if(o&1){t=n[0];let r;for(r=0;r<t.length;r+=1){const c=X(n,t,r);s[r]?(s[r].p(c,o),$(s[r],1)):(s[r]=Y(c),s[r].c(),$(s[r],1),s[r].m(e,null))}for(Z(),r=t.length;r<s.length;r+=1)l(r);ee()}},i(n){if(!a){for(let o=0;o<t.length;o+=1)$(s[o]);a=!0}},o(n){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)w(s[o]);a=!1},d(n){n&&u(e),te(s,n)}}}function he(i){let e;return{c(){e=q("View All")},l(a){e=H(a,"View All")},m(a,t){x(a,e,t)},d(a){a&&u(e)}}}function de(i){let e,a,t;return a=new se({props:{href:"/projects",$$slots:{default:[he]},$$scope:{ctx:i}}}),{c(){e=d("div"),S(a.$$.fragment),this.h()},l(s){e=g(s,"DIV",{slot:!0});var l=m(e);V(a.$$.fragment,l),l.forEach(u),this.h()},h(){h(e,"slot","button")},m(s,l){x(s,e,l),A(a,e,null),t=!0},p(s,l){const n={};l&16&&(n.$$scope={dirty:l,ctx:s}),a.$set(n)},i(s){t||($(a.$$.fragment,s),t=!0)},o(s){w(a.$$.fragment,s),t=!1},d(s){s&&u(e),j(a)}}}function ge(i){let e,a;return e=new re({props:{id:"recent-posts",title:"Proudly Presents",description:"Here are some of the highlights of my projects.",align:"top",$$slots:{button:[de],default:[ue]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,[s]){const l={};s&17&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function me(i,e,a){let{posts:t}=e;return i.$$set=s=>{"posts"in s&&a(0,t=s.posts)},[t]}class pe extends O{constructor(e){super(),R(this,e,me,ge,z,{posts:0})}}function $e(i){let e,a;return e=new pe({props:{posts:i[0]}}),{c(){S(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p:L,i(t){a||($(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function _e(i){let e,a,t,s,l,n;a=new ie({}),s=new fe({});let o=i[0]&&i[0].length>0&&$e(i);return{c(){e=d("div"),S(a.$$.fragment),t=k(),S(s.$$.fragment),l=k(),o&&o.c(),this.h()},l(r){e=g(r,"DIV",{class:!0});var c=m(e);V(a.$$.fragment,c),t=E(c),V(s.$$.fragment,c),l=E(c),o&&o.l(c),c.forEach(u),this.h()},h(){h(e,"class","container")},m(r,c){x(r,e,c),A(a,e,null),f(e,t),A(s,e,null),f(e,l),o&&o.m(e,null),n=!0},p(r,[c]){r[0]&&r[0].length>0&&o.p(r,c)},i(r){n||($(a.$$.fragment,r),$(s.$$.fragment,r),$(o),n=!0)},o(r){w(a.$$.fragment,r),w(s.$$.fragment,r),w(o),n=!1},d(r){r&&u(e),j(a),j(s),o&&o.d()}}}function ve(i,e,a){let{data:t}=e,{features:s,posts:l}=t;return i.$$set=n=>{"data"in n&&a(1,t=n.data)},[l,t]}class Pe extends O{constructor(e){super(),R(this,e,ve,_e,z,{data:1})}}export{Pe as default};
