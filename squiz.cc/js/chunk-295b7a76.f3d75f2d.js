(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-295b7a76"],{1164:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-grow flex xl:mx-auto max-w-screen-xl"},[e.guest?n("div",{staticClass:"flex-col w-full sm:w-1/2 md:w-1/3 mt-8 mx-auto"},[n("p",{staticClass:"text-center"},[e._v(" Pour rejoindre ou créer une partie privée, vous devez vous connecter. ")]),n("LoginIncentiveOverlay")],1):e._e(),e.guest?e._e():n("div",{staticClass:"flex-grow md:flex my-8 md:space-x-6"},[n("div",{staticClass:"w-full md:w-2/5 flex flex-col items-center content-center"},[n("CustomRoomJoinForm")],1),n("div",{staticClass:"w-full md:w-3/5 mt-5 md:mt-0"},[n("ServerStatus"),n("CustomRoomCreationForm")],1)])])},a=[],o=n("0b38"),r=n("9ce4"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppCard",{attrs:{title:"Créer une partie",overlay:e.guest},scopedSlots:e._u([e.guest?{key:"overlay",fn:function(){return[n("LoginIncentiveOverlay")]},proxy:!0}:null],null,!0)},[e.completed?e._e():n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"pb-12"},[n("p",[e._v(" Difficulté ")]),n("vue-slider",{attrs:{tooltip:"none",contained:!0,adsorb:!0,marks:e.marks,min:1,max:4},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}})],1),n("div",{staticClass:"pb-8 flex flex-row justify-between space-x-2"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-row"},[n("p",[e._v("Nombre de joueurs")]),n("div",{staticClass:"text-right flex-grow"},[e._v(e._s(e.users))])]),n("vue-slider",{attrs:{tooltip:"none",contained:!0,adsorb:!0,max:1024,min:64,interval:64},model:{value:e.users,callback:function(t){e.users=t},expression:"users"}})],1),n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-row"},[n("p",[e._v("Rounds")]),n("div",{staticClass:"text-right flex-grow"},[e._v(e._s(e.rounds))])]),n("vue-slider",{attrs:{tooltip:"none",contained:!0,adsorb:!0,max:50,min:5,interval:5},model:{value:e.rounds,callback:function(t){e.rounds=t},expression:"rounds"}})],1)]),n("div",{staticClass:"pb-6 flex flex-row justify-between space-x-2"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-row"},[n("p",[e._v("Temps pour répondre")]),n("div",{staticClass:"text-right flex-grow"},[e._v(e._s(e.questionTime)+"s")])]),n("vue-slider",{attrs:{tooltip:"none",contained:!0,adsorb:!0,max:30,min:3,interval:1},model:{value:e.questionTime,callback:function(t){e.questionTime=t},expression:"questionTime"}})],1),n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-row"},[n("p",[e._v("Temps entre les questions")]),n("div",{staticClass:"text-right flex-grow"},[e._v(e._s(e.questionResultTime)+"s")])]),n("vue-slider",{attrs:{tooltip:"none",contained:!0,adsorb:!0,max:60,min:5,interval:1},model:{value:e.questionResultTime,callback:function(t){e.questionResultTime=t},expression:"questionResultTime"}})],1)]),n("div",{staticClass:"pb-6 flex flex-row justify-between space-x-2"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex flex-row"},[n("p",[e._v("Temps entre les parties")]),n("div",{staticClass:"text-right flex-grow"},[e._v(e._s(e.gameResultTime)+"s")])]),n("vue-slider",{attrs:{tooltip:"none",contained:!0,adsorb:!0,max:90,min:15,interval:1},model:{value:e.gameResultTime,callback:function(t){e.gameResultTime=t},expression:"gameResultTime"}})],1)]),n("div",{staticClass:"pb-6 flex flex-row justify-between"},[n("div",{staticClass:"w-full"},[n("p",[e._v("Thèmes")]),n("div",{staticClass:"w-full"},[n("VueSelect",{staticClass:"select-dark-blue select-multiple",attrs:{label:"name",options:e.themes,reduce:function(e){return e.id},searchable:!1,placeholder:"Tous les thèmes",multiple:""},model:{value:e.themeIdentifiers,callback:function(t){e.themeIdentifiers=t},expression:"themeIdentifiers"}},[n("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("Aucun thème disponible")])])],1)])]),n("div",{staticClass:"pb-4 flex flex-row justify-between space-x-2"},[n("div",{staticClass:"w-1/2 flex flex-col"},[n("p",{staticClass:"flex flex-grow"},[e._v(" Chances de réponse ")]),n("div",{staticClass:"w-full"},[n("VueSelect",{staticClass:"select-dark-blue",attrs:{label:"label",options:[{id:"ONE",label:"Une seule chance"},{id:"TWO",label:"Deux chances"},{id:"AUTO",label:"Automatique"},{id:"UNLIMITED",label:"Aucune limite"}],reduce:function(e){return e.id},searchable:!1,multiple:!1},model:{value:e.answerLifes,callback:function(t){e.answerLifes=t},expression:"answerLifes"}},[n("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("Aucun thème disponible")])])],1)]),n("div",{staticClass:"w-1/4 flex flex-col mb-3 align-center items-center"},[n("p",{staticClass:"flex flex-grow"},[e._v(" Anti-triche ")]),e.loaded?n("div",{staticClass:"flex"},[n("toggle-button",{attrs:{color:"#204A6C"},model:{value:e.anticheatEnabled,callback:function(t){e.anticheatEnabled=t},expression:"anticheatEnabled"}})],1):e._e()]),e.canCreatePublicRooms?n("div",{staticClass:"w-1/4 flex flex-col mb-3 align-center items-center"},[n("p",{staticClass:"flex flex-grow"},[e._v(" Partie publique ")]),e.loaded?n("div",{staticClass:"flex"},[n("toggle-button",{attrs:{color:"#204A6C"},model:{value:e.publicGame,callback:function(t){e.publicGame=t},expression:"publicGame"}})],1):e._e()]):e._e()]),e.creationInProgress?e._e():n("div",{staticClass:"flex mt-4"},[n("button",{staticClass:"border-2 border-clean-blue-500 hover:bg-clean-blue-500 text-lg px-4 py-2 rounded-lg focus:outline-none text-gray-300 bg-clear-blue-500 mx-auto hover:text-electric-blue-500",attrs:{type:"submit"}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus-square"}}),e._v(" Créer le salon ")],1)]),e.creationInProgress?n("div",{staticClass:"flex mt-4"},[n("AppLoader")],1):e._e()])]),e.completed?n("div",{staticClass:"flex flex-col items-center justify-center mt-4"},[e.room.metadata.code?e._e():n("p",[e._v("Votre partie a bien été créée.")]),e.room.metadata.code?n("p",[e._v(" Votre partie a bien été créée, voici le code à communiquer : ")]):e._e(),e.room.metadata.code?n("div",{staticClass:"block flex rounded-lg py-2 px-4 border-2 border-clean-blue-500 mt-3"},[n("span",{class:["text-3xl","mr-3",e.codeVisible?void 0:"filter-blur-md"]},[e._v(" "+e._s(e.room.metadata.code)+" ")]),n("button",{staticClass:"text-clean-blue-500 text-lg px-2 focus:outline-none hover:text-electric-blue-500",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.copyCodeInClipboard()}}},[n("font-awesome-icon",{attrs:{icon:"copy"}})],1),n("button",{staticClass:"text-clean-blue-500 text-lg px-2 focus:outline-none hover:text-electric-blue-500",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.toggleCodeVisibility()}}},[e.codeVisible?e._e():n("font-awesome-icon",{attrs:{"fixed-width":"",icon:"eye"}}),e.codeVisible?n("font-awesome-icon",{attrs:{"fixed-width":"",icon:"eye-slash"}}):e._e()],1)]):e._e(),n("button",{staticClass:"mt-4 border-2 border-clean-blue-500 hover:bg-clean-blue-500 text-lg px-4 py-2 rounded-lg focus:outline-none text-gray-300 bg-clear-blue-500 mx-auto hover:text-electric-blue-500",attrs:{type:"button",disabled:e.joinInProgress},on:{click:function(t){return t.preventDefault(),e.joinRoom()}}},[n("span",{staticClass:"mr-4"},[e._v("Se connecter")]),e.joinInProgress?n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"spinner",spin:""}}):e._e(),e.joinInProgress?e._e():n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"arrow-circle-right"}})],1)]):e._e()])},l=[],c=(n("8d0d"),n("c78b"),n("df26"),n("42c2")),u=n("9ec3"),d=n.n(u),m=n("d2ca"),f=n("3a09"),p=n("35ca"),b=n("baea"),v=n("359f"),x=n("c863"),g=n("47b4"),w={level:1,users:512,rounds:15,questionTime:12,questionResultTime:6,gameResultTime:45,publicGame:!1,themeIdentifiers:[],anticheatEnabled:!0,answerLifes:"AUTO"};function h(e){window.localStorage.setItem("customRoomOptions",JSON.stringify(e))}function C(){var e=window.localStorage.getItem("customRoomOptions");return e?JSON.parse(e):{}}var _={components:{AppCard:v["a"],LoginIncentiveOverlay:g["a"],AppLoader:x["a"]},mixins:[b["a"]],data:function(){return Object(o["a"])(Object(o["a"])({},w),{},{creationInProgress:!1,completed:!1,room:void 0,codeVisible:!1,joinInProgress:!1,themes:[],canCreatePublicRooms:!1,marks:function(e){return{label:["Initié","Confirmé","Expert","Aléatoire"][e-1]}}})},computed:Object(o["a"])({},Object(r["b"])({guest:"guest"})),methods:{onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.creationInProgress=!0,n=d.a.pick(e,["level","users","rounds","questionTime","questionResultTime","gameResultTime","publicGame","themeIdentifiers","anticheatEnabled","answerLifes"]),h(n),t.prev=3,t.next=6,m["a"].createCustomRoom(n);case 6:e.room=t.sent,e.completed=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),e.$notify({title:"Erreur",type:"error",text:"Impossible de créer le salon"});case 13:return t.prev=13,e.creationInProgress=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[3,10,13,16]])})))()},toggleCodeVisibility:function(){this.codeVisible=!this.codeVisible},copyCodeInClipboard:function(){this.$copyText(this.room.metadata.code)},joinRoom:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.joinInProgress=!0,t.prev=1,t.t0=e.$store,t.next=5,m["a"].joinRoom(e.room.roomId);case 5:t.t1=t.sent,t.t0.commit.call(t.t0,"setCurrentRoom",t.t1),e.$router.push({name:"GameIndex"}),t.next=14;break;case 10:t.prev=10,t.t2=t["catch"](1),e.$notify({title:"Erreur",type:"error",text:"Impossible de rejoindre le salon"}),e.joinInProgress=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},innerLoad:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=d.a,t.next=3,f["a"].getAll();case 3:return t.t1=t.sent,e.themes=t.t0.sortBy.call(t.t0,t.t1,"name"),t.t2=d.a,t.next=8,p["a"].getCurrentUserRoles();case 8:t.t3=t.sent,e.canCreatePublicRooms=t.t2.includes.call(t.t2,t.t3,"PUBLIC_ROOM_CREATION"),n=C(),d.a.assign(e,d.a.defaults(n,w)),e.canCreatePublicRooms||(e.publicGame=!1);case 13:case"end":return t.stop()}}),t)})))()}}},y=_,I=n("2be6"),k=Object(I["a"])(y,i,l,!1,null,null,null),j=k.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppCard",{attrs:{title:"Rejoindre une partie privée"}},[n("p",[e._v(" Pour rejoindre une partie privée, l'hôte doit vous communiquer le code d'accès. ")]),n("div",{staticClass:"mt-8 flex justify-center"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("div",{staticClass:"w-40 flex rounded-lg py-2 px-4 border-2 border-clean-blue-500"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"flex-grow w-full focus:outline-none text-xl appearance-none text-center leading-normal bg-transparent",attrs:{type:"password",autocomplete:e.autocomplete,placeholder:"CODE",maxlength:"4"},domProps:{value:e.code},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault()},input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("button",{staticClass:"text-clean-blue-500 text-lg px-2 focus:outline-none hover:text-electric-blue-500 disabled:text-gray-500 disabled:cursor-not-allowed",attrs:{type:"submit",disabled:4!==e.code.length||e.loading}},[e.loading?n("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}):e._e(),e.loading?e._e():n("font-awesome-icon",{attrs:{icon:"arrow-circle-right"}})],1)])])])])},O=[],T=(n("ef1f"),n("0d9f"),{components:{AppCard:v["a"]},data:function(){return{autocomplete:(new Date).getTime().toString(),code:"",loading:!1}},methods:{onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,m["a"].getRoomByCode(e.code);case 3:if(n=t.sent,0!==n.length){t.next=8;break}e.$notify({title:"Erreur",type:"error",text:"Aucun salon trouvé : vérifiez le code"}),t.next=20;break;case 8:return t.prev=8,t.t0=e.$store,t.next=12,m["a"].joinRoomWithCode(n[0].roomId,e.code);case 12:t.t1=t.sent,t.t0.commit.call(t.t0,"setCurrentRoom",t.t1),e.$router.push({name:"GameIndex"}),t.next=20;break;case 17:t.prev=17,t.t2=t["catch"](8),e.$notify({title:"Erreur",type:"error",text:"Impossible de rejoindre le salon"});case 20:e.loading=!1;case 21:case"end":return t.stop()}}),t,null,[[8,17]])})))()}}}),P=T,L=Object(I["a"])(P,R,O,!1,null,null,null),S=L.exports,A=n("5aa6"),E={components:{CustomRoomCreationForm:j,CustomRoomJoinForm:S,ServerStatus:A["a"],LoginIncentiveOverlay:g["a"]},metaInfo:{title:"Parties personnalisées"},computed:Object(o["a"])({},Object(r["b"])({guest:"guest"}))},q=E,V=Object(I["a"])(q,s,a,!1,null,null,null);t["default"]=V.exports},"3a09":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("f5f2"),a=n("30c6"),o=n("62e4"),r="/theme",i=function(){function e(){Object(s["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return Object(o["b"])(r)}}]),e}(),l=new i},"47b4":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-2"},[n("a",{staticClass:"rounded-md bg-twitch py-2 px-3 mt-3 shadow-lg text-center",attrs:{href:e.twitchLink}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","twitch"]}}),n("span",[e._v("Se connecter avec Twitch")])],1),n("a",{staticClass:"rounded-md bg-twitter py-2 px-3 mt-3 shadow-lg text-center",attrs:{href:e.twitterLink}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","twitter"]}}),n("span",[e._v("Se connecter avec Twitter")])],1),n("a",{staticClass:"rounded-md bg-clean-blue-500 py-2 px-3 mt-3 shadow-lg text-center",attrs:{href:e.googleLink}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","google"]}}),n("span",[e._v("Se connecter avec Google")])],1)])},a=[],o=n("5fb0"),r={computed:{twitchLink:function(){return"".concat(o["a"],"/twitch/redirect")},twitterLink:function(){return"".concat(o["a"],"/twitter/redirect")},googleLink:function(){return"".concat(o["a"],"/google/redirect")}}},i=r,l=n("2be6"),c=Object(l["a"])(i,s,a,!1,null,null,null);t["a"]=c.exports},"5aa6":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{class:[e.shutdownInProgress?"bg-gradient-tr-red":void 0,e.messageVisible?"bg-gradient-tr-blue":void 0,"text-center","w-full","p-4","rounded-lg","mb-4"]},[e._v(" "+e._s(e.labelDisplayed)+" ")]):e._e()},a=[],o=(n("df26"),n("42c2")),r=n("9ec3"),i=n.n(r),l=n("baea"),c=n("f5f2"),u=n("30c6"),d=n("62e4"),m="/server",f=function(){function e(){Object(c["a"])(this,e)}return Object(u["a"])(e,[{key:"getStatus",value:function(){return Object(d["b"])("".concat(m,"/status"))}}]),e}(),p=new f,b={mixins:[l["a"]],data:function(){return{shutdownInProgress:!1,message:void 0}},computed:{visible:function(){return this.shutdownInProgress||this.message},messageVisible:function(){return this.message&&!this.shutdownInProgress},labelDisplayed:function(){return this.shutdownInProgress?"Les serveurs sont en cours d'arrêt":this.message?this.message:void 0}},created:function(){this.loadingInterval=setInterval(this.innerLoad.bind(this),i.a.random(8e3,2e4))},unmounted:function(){this.loadingInterval&&clearInterval(this.loadingInterval)},methods:{innerLoad:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.getStatus();case 2:n=t.sent,e.shutdownInProgress=n.shutdownInProgress,e.message=n.message;case 5:case"end":return t.stop()}}),t)})))()}}},v=b,x=n("2be6"),g=Object(x["a"])(v,s,a,!1,null,null,null);t["a"]=g.exports}}]);
//# sourceMappingURL=chunk-295b7a76.f3d75f2d.js.map