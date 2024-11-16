import{S as Ha,i as Ga,s as Na,k as s,y as m,a as p,q as n,l,m as i,z as v,c as u,h as t,r as f,n as h,b as a,A as $,G as o,g as y,d as g,B as _}from"../chunks/index.889feda2.js";import{I as w}from"../chunks/Image.9fd0349e.js";import{B as xa}from"../chunks/Button.835f3106.js";function ja(Be){let c;return{c(){c=n("Github")},l(d){c=f(d,"Github")},m(d,te){a(d,c,te)},d(d){d&&t(c)}}}function Ca(Be){let c;return{c(){c=n("YouTube")},l(d){c=f(d,"YouTube")},m(d,te){a(d,c,te)},d(d){d&&t(c)}}}function Da(Be){let c,d,te,B,nt,re,ft,O,E,Oe,nr,fr,ht,ge,hr,pt,oe,ut,ae,ct,z,b,ze,pr,ur,dt,Y,cr,_e,dr,mr,mt,se,vt,we,vr,$t,le,yt,Pe,$r,gt,ie,_t,Ee,yr,wt,ne,Pt,fe,Et,L,k,Ye,gr,_r,bt,be,wr,kt,ke,Pr,It,he,Tt,M,I,Le,Er,br,St,Ie,kr,At,pe,xt,U,T,Me,Ir,Tr,Ht,Te,Sr,Gt,ue,Nt,q,S,Ue,Ar,xr,jt,Se,Hr,Ct,ce,Dt,V,A,qe,Gr,Nr,Rt,Ae,jr,Bt,de,Cr,me,Dr,Ot,J,x,Ve,Rr,Br,zt,P,Or,Je,zr,Yr,Fe,Lr,Mr,We,Ur,qr,Yt,F,Vr,Ze,Jr,Fr,Lt,H,Wr,Ke,Zr,Kr,Qe,Qr,Mt,G,Xr,Xe,eo,to,et,ro,Ut,xe,oo,qt,W,N,tt,ao,so,Vt,He,lo,Jt,j,ve,io,$e,Ft,Z,no,Ge,fo,ho,Wt,K,C,rt,po,uo,Zt,Ne,co,Kt,Q,D,ot,mo,vo,Qt,je,$o,Xt,ye,er,X,R,at,yo,go,tr,Ce,_o,rr,De,wo,or;return d=new xa({props:{href:"https://github.com/punnlert/RogerRoger-ID311-Individual-Project",$$slots:{default:[ja]},$$scope:{ctx:Be}}}),B=new xa({props:{href:"https://youtu.be/GxBwiM4es7w",$$slots:{default:[Ca]},$$scope:{ctx:Be}}}),re=new w({props:{src:"/images/posts/roger-roger/start_page.png",alt:"Start Page"}}),oe=new w({props:{src:"/images/posts/roger-roger/gameplay_1.png",alt:"Picture showing gameplay while the rocket shoots the asteroid"}}),ae=new w({props:{src:"/images/posts/roger-roger/gameplay_2.png",alt:"Start Page"}}),se=new w({props:{src:"/images/posts/roger-roger/start_page.png",alt:"Start Page"}}),le=new w({props:{src:"/images/posts/roger-roger/score_and_info.png",alt:"Start Page"}}),ie=new w({props:{src:"/images/posts/roger-roger/asteroid_streaming.png",alt:"Start Page"}}),ne=new w({props:{src:"/images/posts/roger-roger/gameplay_2.png",alt:"Start Page"}}),fe=new w({props:{src:"/images/posts/roger-roger/new_highscore.png",alt:"Start Page"}}),he=new w({props:{src:"/images/posts/roger-roger/IP_input.jpg",alt:"Start Page"}}),pe=new w({props:{src:"/images/posts/roger-roger/gun_control.PNG",alt:"Start Page"}}),ue=new w({props:{src:"/images/posts/roger-roger/trajectory_control.PNG",alt:"Start Page"}}),ce=new w({props:{src:"/images/posts/roger-roger/acceleration.PNG",alt:"Start Page"}}),ve=new w({props:{src:"/images/posts/roger-roger/astronaut.png",alt:"Start Page"}}),$e=new w({props:{src:"/images/posts/roger-roger/asteroid.png",alt:"Start Page"}}),ye=new w({props:{src:"/images/posts/roger-roger/RogerRogerUML.drawio.png",alt:"Start Page"}}),{c(){c=s("div"),m(d.$$.fragment),te=p(),m(B.$$.fragment),nt=p(),m(re.$$.fragment),ft=p(),O=s("h2"),E=s("a"),Oe=s("span"),nr=n("#"),fr=n("Introduction"),ht=p(),ge=s("p"),hr=n("“Roger, Roger” is a cooperative game about a rocket travelling through space. Players have to navigate through asteroids by cooperative with each other. There is a total of 3 controls that can be accessed: trajectory control, acceleration control, and gun. trajectory control lets the player control the y-axis of the rocket, acceleration control lets the player control the x-axis, and gun lets player shoots."),pt=p(),m(oe.$$.fragment),ut=p(),m(ae.$$.fragment),ct=p(),z=s("h2"),b=s("a"),ze=s("span"),pr=n("#"),ur=n("The main screen"),dt=p(),Y=s("p"),cr=n("Upon the welcome screen, the player will be greeted with the title of the game, the IP address of the server, and the prompt “press space”. The reason behind the IP address being displayed will be explained in "),_e=s("a"),dr=n("the control screen"),mr=n(" section."),mt=p(),m(se.$$.fragment),vt=p(),we=s("p"),vr=n("After all the players have connected and the captain pressed spacebar, the main screen shows the players the rocket they are controlling. It also shows the score and lives they have left."),$t=p(),m(le.$$.fragment),yt=p(),Pe=s("p"),$r=n("Group of asteroids are streaming through the right side of the screen at different velocity. The players have to use this visual display to based their control on."),gt=p(),m(ie.$$.fragment),_t=p(),Ee=s("p"),yr=n("If the rocket ran out of life, the game ends. The last page will display the final score and whether you got the new highscore."),wt=p(),m(ne.$$.fragment),Pt=p(),m(fe.$$.fragment),Et=p(),L=s("h2"),k=s("a"),Ye=s("span"),gr=n("#"),_r=n("The control screen"),bt=p(),be=s("p"),wr=n("The control screen consisted of two parts: socket connection input and the control."),kt=p(),ke=s("p"),Pr=n("Socket connection input lets the player input the IP address of the server to gain control of the rocket. If the connection is successful, green circle appears on the right side of the input. This is because I want the server to be able to be hosted on the computer and in that case the IP address would be dynamically assigned."),It=p(),m(he.$$.fragment),Tt=p(),M=s("h3"),I=s("a"),Le=s("span"),Er=n("#"),br=n("Gun controls"),St=p(),Ie=s("p"),kr=n("lets the player controls the gun. There is a two seconds cooldown period for gun firing."),At=p(),m(pe.$$.fragment),xt=p(),U=s("h3"),T=s("a"),Me=s("span"),Ir=n("#"),Tr=n("Trajectory control"),Ht=p(),Te=s("p"),Sr=n("lets the player controls the up-down movement of the spaceship"),Gt=p(),m(ue.$$.fragment),Nt=p(),q=s("h3"),S=s("a"),Ue=s("span"),Ar=n("#"),xr=n("Acceleration"),jt=p(),Se=s("p"),Hr=n("lets the player controls the left-right of the spaceship"),Ct=p(),m(ce.$$.fragment),Dt=p(),V=s("h2"),A=s("a"),qe=s("span"),Gr=n("#"),Nr=n("The game mechanics"),Rt=p(),Ae=s("p"),jr=n("Player navigate through the group of asteroids. if they get hit, their lives decreases. they get points for shooting the asteroid depending on the size of it. There are astronauts that you can save. But you can hurt them if you accidentally shoot them. So, be careful around them. But the velocity increase with the score. The gun have a cooldown period of two seconds so players have to be conservative about their shooting. You can collect some lives as you go and save yourselves from dying. If you accidentally shoot the lives, they disappear."),Bt=p(),de=s("p"),Cr=n("To see a clearer picture, you can check my demo on "),me=s("a"),Dr=n("YouTube"),Ot=p(),J=s("h2"),x=s("a"),Ve=s("span"),Rr=n("#"),Br=n("How to start?"),zt=p(),P=s("p"),Or=n("After you clone the repository, you have to go into every folder "),Je=s("code"),zr=n("/client/display; gun-control; horizontal control; vertical control"),Yr=n(" and "),Fe=s("code"),Lr=n("/server"),Mr=n(" then run "),We=s("code"),Ur=n("npm install"),qr=n(" for each one of them."),Yt=p(),F=s("p"),Vr=n("If you use Visual Studio Code and have a ‘Go Live’ extension, you can launch the control pages by go into "),Ze=s("code"),Jr=n("/client"),Fr=n(" then click go live."),Lt=p(),H=s("p"),Wr=n("For the display of the main screen, go into "),Ke=s("code"),Zr=n("/client/display"),Kr=n(" directory and run "),Qe=s("code"),Qr=n("npm run dev"),Mt=p(),G=s("p"),Xr=n("To initiate the server, go into"),Xe=s("code"),eo=n("/server"),to=n(" then run "),et=s("code"),ro=n("npx nodemon 'index.js'"),Ut=p(),xe=s("p"),oo=n("If there is an IP address appearing on your ‘display’ screen, you are ready to play!"),qt=p(),W=s("h2"),N=s("a"),tt=s("span"),ao=n("#"),so=n("Highlight"),Vt=p(),He=s("p"),lo=n("After finishing all the code, I tried to draw some pixel art to elevate the gaming experience. So, I drew this astronaut and asteroid."),Jt=p(),j=s("div"),m(ve.$$.fragment),io=p(),m($e.$$.fragment),Ft=p(),Z=s("p"),no=n("I also learned to postpone the socket.io connection and connect to the input IP (in the "),Ge=s("a"),fo=n("control sections"),ho=n(") and I am really proud of it."),Wt=p(),K=s("h2"),C=s("a"),rt=s("span"),po=n("#"),uo=n("Software"),Zt=p(),Ne=s("p"),co=n("The game use node to host the server, P5JS to draw the graphics, and socket.io to allow the communication between devices."),Kt=p(),Q=s("h2"),D=s("a"),ot=s("span"),mo=n("#"),vo=n("The architecture"),Qt=p(),je=s("p"),$o=n("This is the UML of the game code."),Xt=p(),m(ye.$$.fragment),er=p(),X=s("h2"),R=s("a"),at=s("span"),yo=n("#"),go=n("What I would do to make it better"),tr=p(),Ce=s("p"),_o=n("Right now, the obstacles are extended from the class asteroid. That is not very organized in terms of the readability of the code. So, in the future, I would like to restructure it to have a base class of “hittable” and extends every obstacle from there."),rr=p(),De=s("p"),wo=n("I would also like to add collectibles other than “lives” and “astronaut”; like temporary life extension or gun boost that modify the property of the bullet fired."),this.h()},l(e){c=l(e,"DIV",{class:!0});var r=i(c);v(d.$$.fragment,r),te=u(r),v(B.$$.fragment,r),r.forEach(t),nt=u(e),v(re.$$.fragment,e),ft=u(e),O=l(e,"H2",{id:!0});var Re=i(O);E=l(Re,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var st=i(E);Oe=l(st,"SPAN",{});var jo=i(Oe);nr=f(jo,"#"),jo.forEach(t),st.forEach(t),fr=f(Re,"Introduction"),Re.forEach(t),ht=u(e),ge=l(e,"P",{});var Co=i(ge);hr=f(Co,"“Roger, Roger” is a cooperative game about a rocket travelling through space. Players have to navigate through asteroids by cooperative with each other. There is a total of 3 controls that can be accessed: trajectory control, acceleration control, and gun. trajectory control lets the player control the y-axis of the rocket, acceleration control lets the player control the x-axis, and gun lets player shoots."),Co.forEach(t),pt=u(e),v(oe.$$.fragment,e),ut=u(e),v(ae.$$.fragment,e),ct=u(e),z=l(e,"H2",{id:!0});var Po=i(z);b=l(Po,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Do=i(b);ze=l(Do,"SPAN",{});var Ro=i(ze);pr=f(Ro,"#"),Ro.forEach(t),Do.forEach(t),ur=f(Po,"The main screen"),Po.forEach(t),dt=u(e),Y=l(e,"P",{});var ar=i(Y);cr=f(ar,"Upon the welcome screen, the player will be greeted with the title of the game, the IP address of the server, and the prompt “press space”. The reason behind the IP address being displayed will be explained in "),_e=l(ar,"A",{href:!0});var Bo=i(_e);dr=f(Bo,"the control screen"),Bo.forEach(t),mr=f(ar," section."),ar.forEach(t),mt=u(e),v(se.$$.fragment,e),vt=u(e),we=l(e,"P",{});var Oo=i(we);vr=f(Oo,"After all the players have connected and the captain pressed spacebar, the main screen shows the players the rocket they are controlling. It also shows the score and lives they have left."),Oo.forEach(t),$t=u(e),v(le.$$.fragment,e),yt=u(e),Pe=l(e,"P",{});var zo=i(Pe);$r=f(zo,"Group of asteroids are streaming through the right side of the screen at different velocity. The players have to use this visual display to based their control on."),zo.forEach(t),gt=u(e),v(ie.$$.fragment,e),_t=u(e),Ee=l(e,"P",{});var Yo=i(Ee);yr=f(Yo,"If the rocket ran out of life, the game ends. The last page will display the final score and whether you got the new highscore."),Yo.forEach(t),wt=u(e),v(ne.$$.fragment,e),Pt=u(e),v(fe.$$.fragment,e),Et=u(e),L=l(e,"H2",{id:!0});var Eo=i(L);k=l(Eo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Lo=i(k);Ye=l(Lo,"SPAN",{});var Mo=i(Ye);gr=f(Mo,"#"),Mo.forEach(t),Lo.forEach(t),_r=f(Eo,"The control screen"),Eo.forEach(t),bt=u(e),be=l(e,"P",{});var Uo=i(be);wr=f(Uo,"The control screen consisted of two parts: socket connection input and the control."),Uo.forEach(t),kt=u(e),ke=l(e,"P",{});var qo=i(ke);Pr=f(qo,"Socket connection input lets the player input the IP address of the server to gain control of the rocket. If the connection is successful, green circle appears on the right side of the input. This is because I want the server to be able to be hosted on the computer and in that case the IP address would be dynamically assigned."),qo.forEach(t),It=u(e),v(he.$$.fragment,e),Tt=u(e),M=l(e,"H3",{id:!0});var bo=i(M);I=l(bo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Vo=i(I);Le=l(Vo,"SPAN",{});var Jo=i(Le);Er=f(Jo,"#"),Jo.forEach(t),Vo.forEach(t),br=f(bo,"Gun controls"),bo.forEach(t),St=u(e),Ie=l(e,"P",{});var Fo=i(Ie);kr=f(Fo,"lets the player controls the gun. There is a two seconds cooldown period for gun firing."),Fo.forEach(t),At=u(e),v(pe.$$.fragment,e),xt=u(e),U=l(e,"H3",{id:!0});var ko=i(U);T=l(ko,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Wo=i(T);Me=l(Wo,"SPAN",{});var Zo=i(Me);Ir=f(Zo,"#"),Zo.forEach(t),Wo.forEach(t),Tr=f(ko,"Trajectory control"),ko.forEach(t),Ht=u(e),Te=l(e,"P",{});var Ko=i(Te);Sr=f(Ko,"lets the player controls the up-down movement of the spaceship"),Ko.forEach(t),Gt=u(e),v(ue.$$.fragment,e),Nt=u(e),q=l(e,"H3",{id:!0});var Io=i(q);S=l(Io,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Qo=i(S);Ue=l(Qo,"SPAN",{});var Xo=i(Ue);Ar=f(Xo,"#"),Xo.forEach(t),Qo.forEach(t),xr=f(Io,"Acceleration"),Io.forEach(t),jt=u(e),Se=l(e,"P",{});var ea=i(Se);Hr=f(ea,"lets the player controls the left-right of the spaceship"),ea.forEach(t),Ct=u(e),v(ce.$$.fragment,e),Dt=u(e),V=l(e,"H2",{id:!0});var To=i(V);A=l(To,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var ta=i(A);qe=l(ta,"SPAN",{});var ra=i(qe);Gr=f(ra,"#"),ra.forEach(t),ta.forEach(t),Nr=f(To,"The game mechanics"),To.forEach(t),Rt=u(e),Ae=l(e,"P",{});var oa=i(Ae);jr=f(oa,"Player navigate through the group of asteroids. if they get hit, their lives decreases. they get points for shooting the asteroid depending on the size of it. There are astronauts that you can save. But you can hurt them if you accidentally shoot them. So, be careful around them. But the velocity increase with the score. The gun have a cooldown period of two seconds so players have to be conservative about their shooting. You can collect some lives as you go and save yourselves from dying. If you accidentally shoot the lives, they disappear."),oa.forEach(t),Bt=u(e),de=l(e,"P",{});var So=i(de);Cr=f(So,"To see a clearer picture, you can check my demo on "),me=l(So,"A",{href:!0,rel:!0});var aa=i(me);Dr=f(aa,"YouTube"),aa.forEach(t),So.forEach(t),Ot=u(e),J=l(e,"H2",{id:!0});var Ao=i(J);x=l(Ao,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var sa=i(x);Ve=l(sa,"SPAN",{});var la=i(Ve);Rr=f(la,"#"),la.forEach(t),sa.forEach(t),Br=f(Ao,"How to start?"),Ao.forEach(t),zt=u(e),P=l(e,"P",{});var ee=i(P);Or=f(ee,"After you clone the repository, you have to go into every folder "),Je=l(ee,"CODE",{});var ia=i(Je);zr=f(ia,"/client/display; gun-control; horizontal control; vertical control"),ia.forEach(t),Yr=f(ee," and "),Fe=l(ee,"CODE",{});var na=i(Fe);Lr=f(na,"/server"),na.forEach(t),Mr=f(ee," then run "),We=l(ee,"CODE",{});var fa=i(We);Ur=f(fa,"npm install"),fa.forEach(t),qr=f(ee," for each one of them."),ee.forEach(t),Yt=u(e),F=l(e,"P",{});var sr=i(F);Vr=f(sr,"If you use Visual Studio Code and have a ‘Go Live’ extension, you can launch the control pages by go into "),Ze=l(sr,"CODE",{});var ha=i(Ze);Jr=f(ha,"/client"),ha.forEach(t),Fr=f(sr," then click go live."),sr.forEach(t),Lt=u(e),H=l(e,"P",{});var lt=i(H);Wr=f(lt,"For the display of the main screen, go into "),Ke=l(lt,"CODE",{});var pa=i(Ke);Zr=f(pa,"/client/display"),pa.forEach(t),Kr=f(lt," directory and run "),Qe=l(lt,"CODE",{});var ua=i(Qe);Qr=f(ua,"npm run dev"),ua.forEach(t),lt.forEach(t),Mt=u(e),G=l(e,"P",{});var it=i(G);Xr=f(it,"To initiate the server, go into"),Xe=l(it,"CODE",{});var ca=i(Xe);eo=f(ca,"/server"),ca.forEach(t),to=f(it," then run "),et=l(it,"CODE",{});var da=i(et);ro=f(da,"npx nodemon 'index.js'"),da.forEach(t),it.forEach(t),Ut=u(e),xe=l(e,"P",{});var ma=i(xe);oo=f(ma,"If there is an IP address appearing on your ‘display’ screen, you are ready to play!"),ma.forEach(t),qt=u(e),W=l(e,"H2",{id:!0});var xo=i(W);N=l(xo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var va=i(N);tt=l(va,"SPAN",{});var $a=i(tt);ao=f($a,"#"),$a.forEach(t),va.forEach(t),so=f(xo,"Highlight"),xo.forEach(t),Vt=u(e),He=l(e,"P",{});var ya=i(He);lo=f(ya,"After finishing all the code, I tried to draw some pixel art to elevate the gaming experience. So, I drew this astronaut and asteroid."),ya.forEach(t),Jt=u(e),j=l(e,"DIV",{class:!0});var lr=i(j);v(ve.$$.fragment,lr),io=u(lr),v($e.$$.fragment,lr),lr.forEach(t),Ft=u(e),Z=l(e,"P",{});var ir=i(Z);no=f(ir,"I also learned to postpone the socket.io connection and connect to the input IP (in the "),Ge=l(ir,"A",{href:!0});var ga=i(Ge);fo=f(ga,"control sections"),ga.forEach(t),ho=f(ir,") and I am really proud of it."),ir.forEach(t),Wt=u(e),K=l(e,"H2",{id:!0});var Ho=i(K);C=l(Ho,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var _a=i(C);rt=l(_a,"SPAN",{});var wa=i(rt);po=f(wa,"#"),wa.forEach(t),_a.forEach(t),uo=f(Ho,"Software"),Ho.forEach(t),Zt=u(e),Ne=l(e,"P",{});var Pa=i(Ne);co=f(Pa,"The game use node to host the server, P5JS to draw the graphics, and socket.io to allow the communication between devices."),Pa.forEach(t),Kt=u(e),Q=l(e,"H2",{id:!0});var Go=i(Q);D=l(Go,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ea=i(D);ot=l(Ea,"SPAN",{});var ba=i(ot);mo=f(ba,"#"),ba.forEach(t),Ea.forEach(t),vo=f(Go,"The architecture"),Go.forEach(t),Qt=u(e),je=l(e,"P",{});var ka=i(je);$o=f(ka,"This is the UML of the game code."),ka.forEach(t),Xt=u(e),v(ye.$$.fragment,e),er=u(e),X=l(e,"H2",{id:!0});var No=i(X);R=l(No,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ia=i(R);at=l(Ia,"SPAN",{});var Ta=i(at);yo=f(Ta,"#"),Ta.forEach(t),Ia.forEach(t),go=f(No,"What I would do to make it better"),No.forEach(t),tr=u(e),Ce=l(e,"P",{});var Sa=i(Ce);_o=f(Sa,"Right now, the obstacles are extended from the class asteroid. That is not very organized in terms of the readability of the code. So, in the future, I would like to restructure it to have a base class of “hittable” and extends every obstacle from there."),Sa.forEach(t),rr=u(e),De=l(e,"P",{});var Aa=i(De);wo=f(Aa,"I would also like to add collectibles other than “lives” and “astronaut”; like temporary life extension or gun boost that modify the property of the bullet fired."),Aa.forEach(t),this.h()},h(){h(c,"class","button_container svelte-1biqf0s"),h(E,"class","heading-link"),h(E,"title","Permalink"),h(E,"aria-hidden","true"),h(E,"href","#introduction"),h(O,"id","introduction"),h(b,"class","heading-link"),h(b,"title","Permalink"),h(b,"aria-hidden","true"),h(b,"href","#the-main-screen"),h(z,"id","the-main-screen"),h(_e,"href","#the-control-screen"),h(k,"class","heading-link"),h(k,"title","Permalink"),h(k,"aria-hidden","true"),h(k,"href","#the-control-screen"),h(L,"id","the-control-screen"),h(I,"class","heading-link"),h(I,"title","Permalink"),h(I,"aria-hidden","true"),h(I,"href","#gun-controls"),h(M,"id","gun-controls"),h(T,"class","heading-link"),h(T,"title","Permalink"),h(T,"aria-hidden","true"),h(T,"href","#trajectory-control"),h(U,"id","trajectory-control"),h(S,"class","heading-link"),h(S,"title","Permalink"),h(S,"aria-hidden","true"),h(S,"href","#acceleration"),h(q,"id","acceleration"),h(A,"class","heading-link"),h(A,"title","Permalink"),h(A,"aria-hidden","true"),h(A,"href","#the-game-mechanics"),h(V,"id","the-game-mechanics"),h(me,"href","https://youtu.be/GxBwiM4es7w"),h(me,"rel","nofollow"),h(x,"class","heading-link"),h(x,"title","Permalink"),h(x,"aria-hidden","true"),h(x,"href","#how-to-start"),h(J,"id","how-to-start"),h(N,"class","heading-link"),h(N,"title","Permalink"),h(N,"aria-hidden","true"),h(N,"href","#highlight"),h(W,"id","highlight"),h(j,"class","drawing_container svelte-1biqf0s"),h(Ge,"href","#the-control-screen"),h(C,"class","heading-link"),h(C,"title","Permalink"),h(C,"aria-hidden","true"),h(C,"href","#software"),h(K,"id","software"),h(D,"class","heading-link"),h(D,"title","Permalink"),h(D,"aria-hidden","true"),h(D,"href","#the-architecture"),h(Q,"id","the-architecture"),h(R,"class","heading-link"),h(R,"title","Permalink"),h(R,"aria-hidden","true"),h(R,"href","#what-i-would-do-to-make-it-better"),h(X,"id","what-i-would-do-to-make-it-better")},m(e,r){a(e,c,r),$(d,c,null),o(c,te),$(B,c,null),a(e,nt,r),$(re,e,r),a(e,ft,r),a(e,O,r),o(O,E),o(E,Oe),o(Oe,nr),o(O,fr),a(e,ht,r),a(e,ge,r),o(ge,hr),a(e,pt,r),$(oe,e,r),a(e,ut,r),$(ae,e,r),a(e,ct,r),a(e,z,r),o(z,b),o(b,ze),o(ze,pr),o(z,ur),a(e,dt,r),a(e,Y,r),o(Y,cr),o(Y,_e),o(_e,dr),o(Y,mr),a(e,mt,r),$(se,e,r),a(e,vt,r),a(e,we,r),o(we,vr),a(e,$t,r),$(le,e,r),a(e,yt,r),a(e,Pe,r),o(Pe,$r),a(e,gt,r),$(ie,e,r),a(e,_t,r),a(e,Ee,r),o(Ee,yr),a(e,wt,r),$(ne,e,r),a(e,Pt,r),$(fe,e,r),a(e,Et,r),a(e,L,r),o(L,k),o(k,Ye),o(Ye,gr),o(L,_r),a(e,bt,r),a(e,be,r),o(be,wr),a(e,kt,r),a(e,ke,r),o(ke,Pr),a(e,It,r),$(he,e,r),a(e,Tt,r),a(e,M,r),o(M,I),o(I,Le),o(Le,Er),o(M,br),a(e,St,r),a(e,Ie,r),o(Ie,kr),a(e,At,r),$(pe,e,r),a(e,xt,r),a(e,U,r),o(U,T),o(T,Me),o(Me,Ir),o(U,Tr),a(e,Ht,r),a(e,Te,r),o(Te,Sr),a(e,Gt,r),$(ue,e,r),a(e,Nt,r),a(e,q,r),o(q,S),o(S,Ue),o(Ue,Ar),o(q,xr),a(e,jt,r),a(e,Se,r),o(Se,Hr),a(e,Ct,r),$(ce,e,r),a(e,Dt,r),a(e,V,r),o(V,A),o(A,qe),o(qe,Gr),o(V,Nr),a(e,Rt,r),a(e,Ae,r),o(Ae,jr),a(e,Bt,r),a(e,de,r),o(de,Cr),o(de,me),o(me,Dr),a(e,Ot,r),a(e,J,r),o(J,x),o(x,Ve),o(Ve,Rr),o(J,Br),a(e,zt,r),a(e,P,r),o(P,Or),o(P,Je),o(Je,zr),o(P,Yr),o(P,Fe),o(Fe,Lr),o(P,Mr),o(P,We),o(We,Ur),o(P,qr),a(e,Yt,r),a(e,F,r),o(F,Vr),o(F,Ze),o(Ze,Jr),o(F,Fr),a(e,Lt,r),a(e,H,r),o(H,Wr),o(H,Ke),o(Ke,Zr),o(H,Kr),o(H,Qe),o(Qe,Qr),a(e,Mt,r),a(e,G,r),o(G,Xr),o(G,Xe),o(Xe,eo),o(G,to),o(G,et),o(et,ro),a(e,Ut,r),a(e,xe,r),o(xe,oo),a(e,qt,r),a(e,W,r),o(W,N),o(N,tt),o(tt,ao),o(W,so),a(e,Vt,r),a(e,He,r),o(He,lo),a(e,Jt,r),a(e,j,r),$(ve,j,null),o(j,io),$($e,j,null),a(e,Ft,r),a(e,Z,r),o(Z,no),o(Z,Ge),o(Ge,fo),o(Z,ho),a(e,Wt,r),a(e,K,r),o(K,C),o(C,rt),o(rt,po),o(K,uo),a(e,Zt,r),a(e,Ne,r),o(Ne,co),a(e,Kt,r),a(e,Q,r),o(Q,D),o(D,ot),o(ot,mo),o(Q,vo),a(e,Qt,r),a(e,je,r),o(je,$o),a(e,Xt,r),$(ye,e,r),a(e,er,r),a(e,X,r),o(X,R),o(R,at),o(at,yo),o(X,go),a(e,tr,r),a(e,Ce,r),o(Ce,_o),a(e,rr,r),a(e,De,r),o(De,wo),or=!0},p(e,[r]){const Re={};r&1&&(Re.$$scope={dirty:r,ctx:e}),d.$set(Re);const st={};r&1&&(st.$$scope={dirty:r,ctx:e}),B.$set(st)},i(e){or||(y(d.$$.fragment,e),y(B.$$.fragment,e),y(re.$$.fragment,e),y(oe.$$.fragment,e),y(ae.$$.fragment,e),y(se.$$.fragment,e),y(le.$$.fragment,e),y(ie.$$.fragment,e),y(ne.$$.fragment,e),y(fe.$$.fragment,e),y(he.$$.fragment,e),y(pe.$$.fragment,e),y(ue.$$.fragment,e),y(ce.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(ye.$$.fragment,e),or=!0)},o(e){g(d.$$.fragment,e),g(B.$$.fragment,e),g(re.$$.fragment,e),g(oe.$$.fragment,e),g(ae.$$.fragment,e),g(se.$$.fragment,e),g(le.$$.fragment,e),g(ie.$$.fragment,e),g(ne.$$.fragment,e),g(fe.$$.fragment,e),g(he.$$.fragment,e),g(pe.$$.fragment,e),g(ue.$$.fragment,e),g(ce.$$.fragment,e),g(ve.$$.fragment,e),g($e.$$.fragment,e),g(ye.$$.fragment,e),or=!1},d(e){e&&t(c),_(d),_(B),e&&t(nt),_(re,e),e&&t(ft),e&&t(O),e&&t(ht),e&&t(ge),e&&t(pt),_(oe,e),e&&t(ut),_(ae,e),e&&t(ct),e&&t(z),e&&t(dt),e&&t(Y),e&&t(mt),_(se,e),e&&t(vt),e&&t(we),e&&t($t),_(le,e),e&&t(yt),e&&t(Pe),e&&t(gt),_(ie,e),e&&t(_t),e&&t(Ee),e&&t(wt),_(ne,e),e&&t(Pt),_(fe,e),e&&t(Et),e&&t(L),e&&t(bt),e&&t(be),e&&t(kt),e&&t(ke),e&&t(It),_(he,e),e&&t(Tt),e&&t(M),e&&t(St),e&&t(Ie),e&&t(At),_(pe,e),e&&t(xt),e&&t(U),e&&t(Ht),e&&t(Te),e&&t(Gt),_(ue,e),e&&t(Nt),e&&t(q),e&&t(jt),e&&t(Se),e&&t(Ct),_(ce,e),e&&t(Dt),e&&t(V),e&&t(Rt),e&&t(Ae),e&&t(Bt),e&&t(de),e&&t(Ot),e&&t(J),e&&t(zt),e&&t(P),e&&t(Yt),e&&t(F),e&&t(Lt),e&&t(H),e&&t(Mt),e&&t(G),e&&t(Ut),e&&t(xe),e&&t(qt),e&&t(W),e&&t(Vt),e&&t(He),e&&t(Jt),e&&t(j),_(ve),_($e),e&&t(Ft),e&&t(Z),e&&t(Wt),e&&t(K),e&&t(Zt),e&&t(Ne),e&&t(Kt),e&&t(Q),e&&t(Qt),e&&t(je),e&&t(Xt),_(ye,e),e&&t(er),e&&t(X),e&&t(tr),e&&t(Ce),e&&t(rr),e&&t(De)}}}const za={slug:"roger-roger",title:"Roger, Roger",date:"2023-05-18T21:55:27.000Z",excerpt:"Travel through space with your friends in this cooperative rocket controlling game. Shoot some asteroids, save some astronauts, and try not to fight!",coverImage:"/images/posts/roger-roger/cover.png",tags:["Coding","Javascript","Game Design"],hidden:!1};class Ya extends Ha{constructor(c){super(),Ga(this,c,null,Da,Na,{})}}export{Ya as default,za as metadata};