import{S as pe,i as ge,s as $e,y as B,z as O,A as J,g as E,d as W,B as G,k as I,l as H,m as U,h as c,n as D,b as T,v as q,f as K,H as ee,C as De,e as Q,a as S,I as Te,c as C,G as F,D as Me,E as be,F as Ne,q as L,r as Y,u as X}from"../chunks/index.7e9edd4a.js";import{H as ke,F as we}from"../chunks/Footer.35381cad.js";import{C as Ee,B as Ie,T as He}from"../chunks/ContentSection.396722fb.js";import{t as R,s as j,k as Ae}from"../chunks/meta.65863fbf.js";import{I as Se}from"../chunks/Image.a9c3572b.js";var Ce=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,Pe=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,Fe=/[^-+\dA-Z]/g;function x(a,e,r,n){if(arguments.length===1&&typeof a=="string"&&!/\d/.test(a)&&(e=a,a=void 0),a=a||a===0?a:new Date,a instanceof Date||(a=new Date(a)),isNaN(a))throw TypeError("Invalid date");e=String(ne[e]||e||ne.default);var t=e.slice(0,4);(t==="UTC:"||t==="GMT:")&&(e=e.slice(4),r=!0,t==="GMT:"&&(n=!0));var i=function(){return r?"getUTC":"get"},l=function(){return a[i()+"Date"]()},o=function(){return a[i()+"Day"]()},s=function(){return a[i()+"Month"]()},d=function(){return a[i()+"FullYear"]()},y=function(){return a[i()+"Hours"]()},_=function(){return a[i()+"Minutes"]()},k=function(){return a[i()+"Seconds"]()},w=function(){return a[i()+"Milliseconds"]()},p=function(){return r?0:a.getTimezoneOffset()},M=function(){return We(a)},g=function(){return Ue(a)},b={d:function(){return l()},dd:function(){return z(l())},ddd:function(){return V.dayNames[o()]},DDD:function(){return re({y:d(),m:s(),d:l(),_:i(),dayName:V.dayNames[o()],short:!0})},dddd:function(){return V.dayNames[o()+7]},DDDD:function(){return re({y:d(),m:s(),d:l(),_:i(),dayName:V.dayNames[o()+7]})},m:function(){return s()+1},mm:function(){return z(s()+1)},mmm:function(){return V.monthNames[s()]},mmmm:function(){return V.monthNames[s()+12]},yy:function(){return String(d()).slice(2)},yyyy:function(){return z(d(),4)},h:function(){return y()%12||12},hh:function(){return z(y()%12||12)},H:function(){return y()},HH:function(){return z(y())},M:function(){return _()},MM:function(){return z(_())},s:function(){return k()},ss:function(){return z(k())},l:function(){return z(w(),3)},L:function(){return z(Math.floor(w()/10))},t:function(){return y()<12?V.timeNames[0]:V.timeNames[1]},tt:function(){return y()<12?V.timeNames[2]:V.timeNames[3]},T:function(){return y()<12?V.timeNames[4]:V.timeNames[5]},TT:function(){return y()<12?V.timeNames[6]:V.timeNames[7]},Z:function(){return n?"GMT":r?"UTC":Ve(a)},o:function(){return(p()>0?"-":"+")+z(Math.floor(Math.abs(p())/60)*100+Math.abs(p())%60,4)},p:function(){return(p()>0?"-":"+")+z(Math.floor(Math.abs(p())/60),2)+":"+z(Math.floor(Math.abs(p())%60),2)},S:function(){return["th","st","nd","rd"][l()%10>3?0:(l()%100-l()%10!=10)*l()%10]},W:function(){return M()},WW:function(){return z(M())},N:function(){return g()}};return e.replace(Ce,function(f){return f in b?b[f]():f.slice(1,f.length-1)})}var ne={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},V={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},z=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(e).padStart(r,"0")},re=function(e){var r=e.y,n=e.m,t=e.d,i=e._,l=e.dayName,o=e.short,s=o===void 0?!1:o,d=new Date,y=new Date;y.setDate(y[i+"Date"]()-1);var _=new Date;_.setDate(_[i+"Date"]()+1);var k=function(){return d[i+"Date"]()},w=function(){return d[i+"Month"]()},p=function(){return d[i+"FullYear"]()},M=function(){return y[i+"Date"]()},g=function(){return y[i+"Month"]()},b=function(){return y[i+"FullYear"]()},f=function(){return _[i+"Date"]()},m=function(){return _[i+"Month"]()},$=function(){return _[i+"FullYear"]()};return p()===r&&w()===n&&k()===t?s?"Tdy":"Today":b()===r&&g()===n&&M()===t?s?"Ysd":"Yesterday":$()===r&&m()===n&&f()===t?s?"Tmw":"Tomorrow":l},We=function(e){var r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);var n=new Date(r.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var t=r.getTimezoneOffset()-n.getTimezoneOffset();r.setHours(r.getHours()-t);var i=(r-n)/(864e5*7);return 1+Math.floor(i)},Ue=function(e){var r=e.getDay();return r===0&&(r=7),r},Ve=function(e){return(String(e).match(Pe)||[""]).pop().replace(Fe,"").replace(/GMT\+0000/g,"UTC")};function le(a,e,r){const n=a.slice();return n[1]=e[r],n}function ae(a){let e,r;return e=new Ie({props:{slug:a[1].slug,title:a[1].title,excerpt:a[1].excerpt,tags:a[1].tags,readingTime:a[1].readingTime,showImage:!1}}),{c(){B(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,t){J(e,n,t),r=!0},p(n,t){const i={};t&1&&(i.slug=n[1].slug),t&1&&(i.title=n[1].title),t&1&&(i.excerpt=n[1].excerpt),t&1&&(i.tags=n[1].tags),t&1&&(i.readingTime=n[1].readingTime),e.$set(i)},i(n){r||(E(e.$$.fragment,n),r=!0)},o(n){W(e.$$.fragment,n),r=!1},d(n){G(e,n)}}}function Ze(a){let e,r,n=a[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=ae(le(a,n,l));const i=l=>W(t[l],1,1,()=>{t[l]=null});return{c(){e=I("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=H(l,"DIV",{class:!0});var o=U(e);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(c),this.h()},h(){D(e,"class","simple-grid svelte-ypk0wh")},m(l,o){T(l,e,o);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);r=!0},p(l,o){if(o&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const d=le(l,n,s);t[s]?(t[s].p(d,o),E(t[s],1)):(t[s]=ae(d),t[s].c(),E(t[s],1),t[s].m(e,null))}for(q(),s=n.length;s<t.length;s+=1)i(s);K()}},i(l){if(!r){for(let o=0;o<n.length;o+=1)E(t[o]);r=!0}},o(l){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)W(t[o]);r=!1},d(l){l&&c(e),ee(t,l)}}}function ze(a){let e,r;return e=new Ee({props:{id:"related-posts",title:"Related Posts",$$slots:{default:[Ze]},$$scope:{ctx:a}}}),{c(){B(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,t){J(e,n,t),r=!0},p(n,[t]){const i={};t&17&&(i.$$scope={dirty:t,ctx:n}),e.$set(i)},i(n){r||(E(e.$$.fragment,n),r=!0)},o(n){W(e.$$.fragment,n),r=!1},d(n){G(e,n)}}}function Le(a,e,r){let{posts:n}=e;return a.$$set=t=>{"posts"in t&&r(0,n=t.posts)},[n]}class Ye extends pe{constructor(e){super(),ge(this,e,Le,ze,$e,{posts:0})}}function ie(a,e,r){const n=a.slice();return n[5]=e[r],n}function se(a,e,r){const n=a.slice();return n[8]=e[r],n}function oe(a){let e,r,n,t,i,l,o,s,d,y,_,k,w,p,M,g,b,f,m,$,h,v,P,Z;document.title=g=a[1].title+" - "+R;let A=a[1].coverImage&&fe(a);return{c(){e=I("meta"),n=S(),t=I("meta"),l=S(),o=I("meta"),d=S(),y=I("meta"),k=S(),w=I("link"),M=S(),b=S(),f=I("meta"),$=S(),h=I("meta"),P=S(),A&&A.c(),Z=Q(),this.h()},l(u){e=H(u,"META",{name:!0,content:!0}),n=C(u),t=H(u,"META",{name:!0,content:!0}),l=C(u),o=H(u,"META",{property:!0,content:!0}),d=C(u),y=H(u,"META",{name:!0,content:!0}),k=C(u),w=H(u,"LINK",{rel:!0,href:!0}),M=C(u),b=C(u),f=H(u,"META",{property:!0,content:!0}),$=C(u),h=H(u,"META",{name:!0,content:!0}),P=C(u),A&&A.l(u),Z=Q(),this.h()},h(){D(e,"name","keywords"),D(e,"content",r=a[0].join(", ")),D(t,"name","description"),D(t,"content",i=a[1].excerpt),D(o,"property","og:description"),D(o,"content",s=a[1].excerpt),D(y,"name","twitter:description"),D(y,"content",_=a[1].excerpt),D(w,"rel","canonical"),D(w,"href",p=j+"/"+a[1].slug),D(f,"property","og:title"),D(f,"content",m=a[1].title+" - "+R),D(h,"name","twitter:title"),D(h,"content",v=a[1].title+" - "+R)},m(u,N){T(u,e,N),T(u,n,N),T(u,t,N),T(u,l,N),T(u,o,N),T(u,d,N),T(u,y,N),T(u,k,N),T(u,w,N),T(u,M,N),T(u,b,N),T(u,f,N),T(u,$,N),T(u,h,N),T(u,P,N),A&&A.m(u,N),T(u,Z,N)},p(u,N){N&1&&r!==(r=u[0].join(", "))&&D(e,"content",r),N&2&&i!==(i=u[1].excerpt)&&D(t,"content",i),N&2&&s!==(s=u[1].excerpt)&&D(o,"content",s),N&2&&_!==(_=u[1].excerpt)&&D(y,"content",_),N&2&&p!==(p=j+"/"+u[1].slug)&&D(w,"href",p),N&2&&g!==(g=u[1].title+" - "+R)&&(document.title=g),N&2&&m!==(m=u[1].title+" - "+R)&&D(f,"content",m),N&2&&v!==(v=u[1].title+" - "+R)&&D(h,"content",v),u[1].coverImage?A?A.p(u,N):(A=fe(u),A.c(),A.m(Z.parentNode,Z)):A&&(A.d(1),A=null)},d(u){u&&c(e),u&&c(n),u&&c(t),u&&c(l),u&&c(o),u&&c(d),u&&c(y),u&&c(k),u&&c(w),u&&c(M),u&&c(b),u&&c(f),u&&c($),u&&c(h),u&&c(P),A&&A.d(u),u&&c(Z)}}}function fe(a){let e,r,n,t,i;return{c(){e=I("meta"),n=S(),t=I("meta"),this.h()},l(l){e=H(l,"META",{property:!0,content:!0}),n=C(l),t=H(l,"META",{name:!0,content:!0}),this.h()},h(){D(e,"property","og:image"),D(e,"content",r=""+(j+a[1].coverImage)),D(t,"name","twitter:image"),D(t,"content",i=""+(j+a[1].coverImage))},m(l,o){T(l,e,o),T(l,n,o),T(l,t,o)},p(l,o){o&2&&r!==(r=""+(j+l[1].coverImage))&&D(e,"content",r),o&2&&i!==(i=""+(j+l[1].coverImage))&&D(t,"content",i)},d(l){l&&c(e),l&&c(n),l&&c(t)}}}function ue(a){var b,f;let e,r=a[1].title+"",n,t,i,l,o=x(a[1].date,"UTC:mmmm yyyy")+"",s,d,y,_,k,w,p=a[1].updated&&me(a),M=((b=a[1].tags)==null?void 0:b.length)&&ce(a),g=((f=a[1].teammates)==null?void 0:f.length)&&_e(a);return{c(){e=I("h1"),n=L(r),t=S(),i=I("div"),l=L("Published in "),s=L(o),d=S(),p&&p.c(),y=S(),M&&M.c(),_=S(),g&&g.c(),k=Q(),this.h()},l(m){e=H(m,"H1",{});var $=U(e);n=Y($,r),$.forEach(c),t=C(m),i=H(m,"DIV",{class:!0});var h=U(i);l=Y(h,"Published in "),s=Y(h,o),h.forEach(c),d=C(m),p&&p.l(m),y=C(m),M&&M.l(m),_=C(m),g&&g.l(m),k=Q(),this.h()},h(){D(i,"class","note svelte-1bs3d7g")},m(m,$){T(m,e,$),F(e,n),T(m,t,$),T(m,i,$),F(i,l),F(i,s),T(m,d,$),p&&p.m(m,$),T(m,y,$),M&&M.m(m,$),T(m,_,$),g&&g.m(m,$),T(m,k,$),w=!0},p(m,$){var h,v;(!w||$&2)&&r!==(r=m[1].title+"")&&X(n,r),(!w||$&2)&&o!==(o=x(m[1].date,"UTC:mmmm yyyy")+"")&&X(s,o),m[1].updated?p?p.p(m,$):(p=me(m),p.c(),p.m(y.parentNode,y)):p&&(p.d(1),p=null),(h=m[1].tags)!=null&&h.length?M?(M.p(m,$),$&2&&E(M,1)):(M=ce(m),M.c(),E(M,1),M.m(_.parentNode,_)):M&&(q(),W(M,1,1,()=>{M=null}),K()),(v=m[1].teammates)!=null&&v.length?g?g.p(m,$):(g=_e(m),g.c(),g.m(k.parentNode,k)):g&&(g.d(1),g=null)},i(m){w||(E(M),w=!0)},o(m){W(M),w=!1},d(m){m&&c(e),m&&c(t),m&&c(i),m&&c(d),p&&p.d(m),m&&c(y),M&&M.d(m),m&&c(_),g&&g.d(m),m&&c(k)}}}function me(a){let e,r,n=x(a[1].updated,"UTC:mmmm yyyy")+"",t;return{c(){e=I("div"),r=L("Updated in "),t=L(n),this.h()},l(i){e=H(i,"DIV",{class:!0});var l=U(e);r=Y(l,"Updated in "),t=Y(l,n),l.forEach(c),this.h()},h(){D(e,"class","note svelte-1bs3d7g")},m(i,l){T(i,e,l),F(e,r),F(e,t)},p(i,l){l&2&&n!==(n=x(i[1].updated,"UTC:mmmm yyyy")+"")&&X(t,n)},d(i){i&&c(e)}}}function ce(a){let e,r,n=a[1].tags,t=[];for(let l=0;l<n.length;l+=1)t[l]=de(se(a,n,l));const i=l=>W(t[l],1,1,()=>{t[l]=null});return{c(){e=I("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=H(l,"DIV",{class:!0});var o=U(e);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(c),this.h()},h(){D(e,"class","tags svelte-1bs3d7g")},m(l,o){T(l,e,o);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);r=!0},p(l,o){if(o&2){n=l[1].tags;let s;for(s=0;s<n.length;s+=1){const d=se(l,n,s);t[s]?(t[s].p(d,o),E(t[s],1)):(t[s]=de(d),t[s].c(),E(t[s],1),t[s].m(e,null))}for(q(),s=n.length;s<t.length;s+=1)i(s);K()}},i(l){if(!r){for(let o=0;o<n.length;o+=1)E(t[o]);r=!0}},o(l){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)W(t[o]);r=!1},d(l){l&&c(e),ee(t,l)}}}function Be(a){let e=a[8]+"",r;return{c(){r=L(e)},l(n){r=Y(n,e)},m(n,t){T(n,r,t)},p(n,t){t&2&&e!==(e=n[8]+"")&&X(r,e)},d(n){n&&c(r)}}}function de(a){let e,r;return e=new He({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){B(e.$$.fragment)},l(n){O(e.$$.fragment,n)},m(n,t){J(e,n,t),r=!0},p(n,t){const i={};t&18&&(i.$$scope={dirty:t,ctx:n}),e.$set(i)},i(n){r||(E(e.$$.fragment,n),r=!0)},o(n){W(e.$$.fragment,n),r=!1},d(n){G(e,n)}}}function _e(a){let e,r,n,t,i,l,o=a[1].teammates,s=[];for(let d=0;d<o.length;d+=1)s[d]=ve(ie(a,o,d));return{c(){e=I("div"),r=I("h2"),n=L("Teammates"),t=S(),i=I("div"),l=I("p");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){e=H(d,"DIV",{class:!0});var y=U(e);r=H(y,"H2",{class:!0});var _=U(r);n=Y(_,"Teammates"),_.forEach(c),t=C(y),i=H(y,"DIV",{class:!0});var k=U(i);l=H(k,"P",{});var w=U(l);for(let p=0;p<s.length;p+=1)s[p].l(w);w.forEach(c),k.forEach(c),y.forEach(c),this.h()},h(){D(r,"class","svelte-1bs3d7g"),D(i,"class","note svelte-1bs3d7g"),D(e,"class","teammate-container svelte-1bs3d7g")},m(d,y){T(d,e,y),F(e,r),F(r,n),F(e,t),F(e,i),F(i,l);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(l,null)},p(d,y){if(y&2){o=d[1].teammates;let _;for(_=0;_<o.length;_+=1){const k=ie(d,o,_);s[_]?s[_].p(k,y):(s[_]=ve(k),s[_].c(),s[_].m(l,null))}for(;_<s.length;_+=1)s[_].d(1);s.length=o.length}},d(d){d&&c(e),ee(s,d)}}}function ve(a){let e=a[5]+"",r,n,t;return{c(){r=L(e),n=S(),t=I("br")},l(i){r=Y(i,e),n=C(i),t=H(i,"BR",{})},m(i,l){T(i,r,l),T(i,n,l),T(i,t,l)},p(i,l){l&2&&e!==(e=i[5]+"")&&X(r,e)},d(i){i&&c(r),i&&c(n),i&&c(t)}}}function ye(a){let e,r,n;return r=new Se({props:{src:a[1].coverImage,alt:a[1].title}}),{c(){e=I("div"),B(r.$$.fragment),this.h()},l(t){e=H(t,"DIV",{class:!0});var i=U(e);O(r.$$.fragment,i),i.forEach(c),this.h()},h(){D(e,"class","cover-image svelte-1bs3d7g")},m(t,i){T(t,e,i),J(r,e,null),n=!0},p(t,i){const l={};i&2&&(l.src=t[1].coverImage),i&2&&(l.alt=t[1].title),r.$set(l)},i(t){n||(E(r.$$.fragment,t),n=!0)},o(t){W(r.$$.fragment,t),n=!1},d(t){t&&c(e),G(r)}}}function he(a){let e,r,n;return r=new Ye({props:{posts:a[1].relatedPosts}}),{c(){e=I("div"),B(r.$$.fragment),this.h()},l(t){e=H(t,"DIV",{class:!0});var i=U(e);O(r.$$.fragment,i),i.forEach(c),this.h()},h(){D(e,"class","container")},m(t,i){T(t,e,i),J(r,e,null),n=!0},p(t,i){const l={};i&2&&(l.posts=t[1].relatedPosts),r.$set(l)},i(t){n||(E(r.$$.fragment,t),n=!0)},o(t){W(r.$$.fragment,t),n=!1},d(t){t&&c(e),G(r)}}}function Oe(a){let e,r,n,t,i,l,o,s,d,y,_,k,w,p,M,g=a[1]&&oe(a);t=new ke({});let b=a[1]&&ue(a),f=a[1]&&a[1].coverImage&&ye(a);const m=a[3].default,$=De(m,a,a[4],null);let h=a[1].relatedPosts&&a[1].relatedPosts.length>0&&he(a);return p=new we({}),{c(){g&&g.c(),e=Q(),r=S(),n=I("div"),B(t.$$.fragment),i=S(),l=I("main"),o=I("article"),s=I("div"),b&&b.c(),d=S(),f&&f.c(),y=S(),_=I("div"),$&&$.c(),k=S(),h&&h.c(),w=S(),B(p.$$.fragment),this.h()},l(v){const P=Te("svelte-1ylu8nc",document.head);g&&g.l(P),e=Q(),P.forEach(c),r=C(v),n=H(v,"DIV",{class:!0});var Z=U(n);O(t.$$.fragment,Z),i=C(Z),l=H(Z,"MAIN",{});var A=U(l);o=H(A,"ARTICLE",{id:!0,class:!0});var u=U(o);s=H(u,"DIV",{class:!0});var N=U(s);b&&b.l(N),N.forEach(c),d=C(u),f&&f.l(u),y=C(u),_=H(u,"DIV",{class:!0});var te=U(_);$&&$.l(te),te.forEach(c),u.forEach(c),k=C(A),h&&h.l(A),A.forEach(c),w=C(Z),O(p.$$.fragment,Z),Z.forEach(c),this.h()},h(){D(s,"class","header svelte-1bs3d7g"),D(_,"class","content svelte-1bs3d7g"),D(o,"id","article-content"),D(o,"class","svelte-1bs3d7g"),D(n,"class","article-layout svelte-1bs3d7g")},m(v,P){g&&g.m(document.head,null),F(document.head,e),T(v,r,P),T(v,n,P),J(t,n,null),F(n,i),F(n,l),F(l,o),F(o,s),b&&b.m(s,null),F(o,d),f&&f.m(o,null),F(o,y),F(o,_),$&&$.m(_,null),F(l,k),h&&h.m(l,null),F(n,w),J(p,n,null),M=!0},p(v,[P]){v[1]?g?g.p(v,P):(g=oe(v),g.c(),g.m(e.parentNode,e)):g&&(g.d(1),g=null),v[1]?b?(b.p(v,P),P&2&&E(b,1)):(b=ue(v),b.c(),E(b,1),b.m(s,null)):b&&(q(),W(b,1,1,()=>{b=null}),K()),v[1]&&v[1].coverImage?f?(f.p(v,P),P&2&&E(f,1)):(f=ye(v),f.c(),E(f,1),f.m(o,y)):f&&(q(),W(f,1,1,()=>{f=null}),K()),$&&$.p&&(!M||P&16)&&Me($,m,v,v[4],M?Ne(m,v[4],P,null):be(v[4]),null),v[1].relatedPosts&&v[1].relatedPosts.length>0?h?(h.p(v,P),P&2&&E(h,1)):(h=he(v),h.c(),E(h,1),h.m(l,null)):h&&(q(),W(h,1,1,()=>{h=null}),K())},i(v){M||(E(t.$$.fragment,v),E(b),E(f),E($,v),E(h),E(p.$$.fragment,v),M=!0)},o(v){W(t.$$.fragment,v),W(b),W(f),W($,v),W(h),W(p.$$.fragment,v),M=!1},d(v){g&&g.d(v),c(e),v&&c(r),v&&c(n),G(t),b&&b.d(),f&&f.d(),$&&$.d(v),h&&h.d(),G(p)}}}function Je(a,e,r){let n,{$$slots:t={},$$scope:i}=e,{data:l}=e,o=Ae;return a.$$set=s=>{"data"in s&&r(2,l=s.data),"$$scope"in s&&r(4,i=s.$$scope)},a.$$.update=()=>{var s,d;a.$$.dirty&4&&r(1,{post:n}=l,n),a.$$.dirty&3&&((s=n==null?void 0:n.tags)!=null&&s.length&&r(0,o=n.tags.concat(o)),(d=n==null?void 0:n.keywords)!=null&&d.length&&r(0,o=n.keywords.concat(o)))},[o,n,l,t,i]}class Qe extends pe{constructor(e){super(),ge(this,e,Je,Oe,$e,{data:2})}}export{Qe as default};
