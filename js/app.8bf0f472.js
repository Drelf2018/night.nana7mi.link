(function(){"use strict";var t={6793:function(t,e,i){var n=i(9242),s=i(5269),o=i.n(s),a=i(3396);function l(t,e,i,n,s,o){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}var r={name:"App"},d=i(89);const c=(0,d.Z)(r,[["render",l]]);var g=c,h=i(7139);const u=(0,a._)("h3",{style:{margin:"0.5em auto"}},"扫描二维码登录",-1),m=["src"],p=(0,a._)("h4",{style:{margin:"0.5em auto"}},[(0,a.Uk)("请使用"),(0,a._)("span",{style:{color:"rgb(21,169,217)"}},"哔哩哔哩客户端")],-1),f={key:1,class:"view"},w=(0,a._)("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"96%",height:"110",src:"//music.163.com/outchain/player?type=2&id=1985010157&height=90"},null,-1),y=(0,a._)("div",{id:"insertArea"},null,-1),b={style:{display:"flex","margin-top":"1em","justify-content":"space-between","flex-direction":"column"}},v={key:0,class:"show-block",style:{padding:"0px"}},_=["src"],k=(0,a._)("div",{class:"linear"},null,-1),C={key:0,style:{width:"100px",position:"relative",top:"-2.5em","z-index":"3",margin:"0.5em"}},x=["src"],S=["src"],I={id:"name"},D={style:{color:"grey","font-size":"100%"},id:"subtitle"},j={key:2};function U(t,e,i,s,o,l){const r=(0,a.up)("Nav"),d=(0,a.up)("Sider"),c=(0,a.up)("Swiper"),g=(0,a.up)("Medal"),U=(0,a.up)("ConfigArea"),T=(0,a.up)("IconBtn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t.$route.params.roomid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(r,{key:0,href:"https://t.bilibili.com/682043379459031137",src:"https://i0.hdslb.com/bfs/new_dyn/0de10012b4a96d7d4bcd82728f77b2051464240042.png",move:o.move,islandStatus:null!=o.oauthKey},{default:(0,a.w5)((()=>[u,(0,a._)("img",{class:"Erweima",src:"https://api.qrserver.com/v1/create-qr-code?data=https://passport.bilibili.com/qrcode/h5/login?oauthKey="+o.oauthKey},null,8,m),p])),_:1},8,["move","islandStatus"])),t.$route.params.roomid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(d,{id:"sider",status:o.siderStatus,func:o.changeConfig},null,8,["status","func"]),(0,a._)("div",{id:"subsider",style:(0,h.j5)("right: "+10*(1-o.siderStatus)+"%")},[(0,a.Wm)(c,{speed:"5000",width:"90%",banner:l.banner},null,8,["banner"]),w,y,(0,a._)("input",{onKeyup:e[0]||(e[0]=(0,n.D2)(((...t)=>l.addHtml&&l.addHtml(...t)),["enter"])),style:{width:"90%",margin:"0.5em 0px"},placeholder:"插入 html 代码"},null,32)],4),(0,a._)("div",{id:"main",style:(0,h.j5)("left: "+10*(o.siderStatus-1)+"%;"+(o.bili.mid>0?"opacity: 1;":"opacity: 0;"))},[(0,a._)("div",b,[o.bili.mid?((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("img",{src:o.bili.top_photo.replace("http://","https://"),class:"topPhoto"},null,8,_),k,o.bili.face?((0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("img",{src:o.bili.face.replace("http://","https://"),class:(0,h.C_)([o.bili.pendant.image?"face1":"face2","bface"]),alt:""},null,10,x),(0,a._)("img",{src:o.bili.pendant.image.replace("http://","https://"),style:{height:"92px",position:"absolute"},alt:""},null,8,S)])):(0,a.kq)("",!0),(0,a._)("div",I,[(0,a._)("strong",null,[(0,a._)("p",{style:(0,h.j5)("color: "+o.bili.vip.nickname_color+"; font-size: 150%;margin:0; display: flex; align-items: center;")},[(0,a.Uk)((0,h.zw)(o.bili.name)+" ",1),o.bili.fans_medal.medal?((0,a.wg)(),(0,a.j4)(g,{key:0,medal:o.bili.fans_medal.medal},null,8,["medal"])):(0,a.kq)("",!0)],4),(0,a._)("span",D,(0,h.zw)(o.bili.sign),1)])])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.bots,(t=>((0,a.wg)(),(0,a.j4)(U,{key:t,name:o.uid2name[t.owner],oconfig:t,appendConfig:l.appendConfig,deleteConfig:l.deleteConfig},null,8,["name","oconfig","appendConfig","deleteConfig"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.showConfigs,(t=>((0,a.wg)(),(0,a.j4)(U,{key:t,name:o.uid2name[t.owner],oconfig:t,appendConfig:l.appendConfig,deleteConfig:l.deleteConfig},null,8,["name","oconfig","appendConfig","deleteConfig"])))),128)),(0,a.Wm)(T,{name:"add-outline",iconColor:"rgb(52,120,246)",onClick:e[1]||(e[1]=t=>l.addBaseConfig()),style:{width:"max-content","margin-bottom":"0.5em"}},{default:(0,a.w5)((()=>[(0,a.Uk)("添加配置")])),_:1})])],4)])),t.$route.params.roomid?((0,a.wg)(),(0,a.iD)("div",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.bots,(t=>((0,a.wg)(),(0,a.j4)(U,{key:t,name:o.uid2name[t.owner],oconfig:t,appendConfig:l.appendConfig,deleteConfig:l.deleteConfig},null,8,["name","oconfig","appendConfig","deleteConfig"])))),128)),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.showConfigs,(t=>((0,a.wg)(),(0,a.j4)(U,{key:t,name:o.uid2name[t.owner],oconfig:t,appendConfig:l.appendConfig,deleteConfig:l.deleteConfig},null,8,["name","oconfig","appendConfig","deleteConfig"])))),128))])):(0,a.kq)("",!0)],64)}i(7658);const T={id:"phone"},B={style:{height:"100%",display:"flex","align-items":"center"}},W=(0,a._)("p",{style:{"padding-top":"0.25em"}},"Dynamic Island",-1),E={class:"inner"},V=["href"],q=["src"];function Z(t,e,i,n,s,o){const l=(0,a.up)("ion-icon"),r=(0,a.up)("IconTag");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a.Wm)(l,{class:"menu",name:"menu-outline",onClick:i.move},null,8,["onClick"]),(0,a._)("div",{id:"island",class:(0,h.C_)(i.islandStatus?"island-open":"island-close"),style:{width:"95px",height:"40px"}},[(0,a._)("div",T,[(0,a._)("div",B,[(0,a.Wm)(l,{name:"logo-apple",class:"github"}),W]),(0,a.Wm)(r,{href:"https://github.com/Drelf2018/nana7mi.link/blob/main/src/components/Nav.vue",src:"https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",title:"CSS",subtitle:"Powered",style:{"padding-right":"1em"}})]),(0,a._)("div",{id:"content",class:(0,h.C_)(i.islandStatus?"inner-open":"inner-close")},[(0,a._)("div",E,[(0,a.WI)(t.$slots,"default")])],2)],2),(0,a._)("a",{href:i.href},[(0,a._)("img",{class:"eyes",src:i.src,alt:"eyes"},null,8,q)],8,V)])}const A=["href"],K={class:"link"},M=["src"],H={style:{display:"inline","padding-right":"0.5em"}},O=(0,a._)("br",null,null,-1),z={style:{color:"grey"}};function L(t,e,i,n,s,o){return(0,a.wg)(),(0,a.iD)("a",{href:i.href},[(0,a._)("div",K,[(0,a._)("img",{src:i.src,class:"github"},null,8,M),(0,a._)("div",H,[(0,a._)("strong",null,(0,h.zw)(i.title),1),O,(0,a._)("span",z,(0,h.zw)(i.subtitle),1)])])],8,A)}var $={name:"IconTag",props:{href:String,src:String,title:String,subtitle:String}};const N=(0,d.Z)($,[["render",L]]);var P=N,F={name:"NavVue",props:{href:String,src:String,move:Function,islandStatus:Number},components:{IconTag:P},updated(){if(this.islandStatus){var t=document.getElementById("content").lastChild,e=document.body.offsetWidth>=900?Math.max(t.offsetWidth,450)+"px":"95%",i=48+t.offsetHeight;document.getElementById("island").style="width: "+e+";height: "+i+"px"}else document.getElementById("island").style="width: 95px; height: 40px"}};const Y=(0,d.Z)(F,[["render",Z]]);var R=Y;const Q={style:{overflow:"auto",height:"100%"}},G={class:"content"},J=(0,a._)("h2",{style:{"margin-top":"0.7em","margin-bottom":"0.3em"}},"本页面",-1),X={style:{display:"flex","justify-content":"space-between","margin-bottom":"1.75em"}},tt={class:"content"},et=(0,a._)("h2",{style:{"margin-top":"0.7em","margin-bottom":"0.3em"}},"UI 灵感",-1),it={style:{display:"flex","justify-content":"space-between","margin-bottom":"1.75em"}},nt={class:"content"},st=(0,a._)("h2",{style:{"margin-top":"0.7em","margin-bottom":"0.3em"}},"关于",-1);function ot(t,e,i,n,s,o){const l=(0,a.up)("IconTag");return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)([i.status?"sider-open":"sider-close","hidden-sider"])},[(0,a._)("div",Q,[(0,a._)("div",G,[J,(0,a._)("div",X,[(0,a.Wm)(l,{href:"https://github.com/Drelf2018/night.nana7mi.link",src:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",title:"前端",subtitle:"Vue 3",style:{width:"48%"}}),(0,a.Wm)(l,{href:"https://github.com/Drelf2018/api",src:"https://www.aliyun.com/favicon.ico",title:"后端",subtitle:"Aliyun",style:{width:"48%"}})])]),(0,a._)("div",tt,[et,(0,a._)("div",it,[(0,a.Wm)(l,{href:"https://github.com/AceDroidX/SuperSpider",src:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",title:"BiliSC",subtitle:"Vue 3",style:{width:"48%"}}),(0,a.Wm)(l,{href:"https://github.com/brainbush/matsuri.icu",src:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",title:"matsuri",subtitle:"Vue 3",style:{width:"48%"}})])]),(0,a._)("div",nt,[st,(0,a._)("input",{onInput:e[0]||(e[0]=(...t)=>i.func&&i.func(...t)),style:{margin:"1em 0px"},placeholder:"你想知道什么？"},null,32)])])],2)}var at={name:"SiderVue",props:{status:Number,func:Function},components:{IconTag:P}};const lt=(0,d.Z)(at,[["render",ot]]);var rt=lt;const dt={class:"medal-box"},ct=["src"];function gt(t,e,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",{style:(0,h.j5)("display: inline-block; margin-left: "+(i.medal.guard_level?"14px;":"4px;"))},[(0,a._)("div",dt,[i.medal.guard_level?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"medal-flag",src:"https://i0.hdslb.com/bfs/activity-plat/static/20200716/1d0c5a1b042efb59f46d4ba1286c6727/icon-guard"+i.medal.guard_level+".png@100w_100h_1c.webp"},null,8,ct)):(0,a.kq)("",!0),(0,a._)("div",{class:"medal-true-love",style:(0,h.j5)("padding: 0.5em "+(i.medal.guard_level?"3px":"4px")+" 0.5em "+(i.medal.guard_level?"8px;":"4px;")+"border-color:"+o.int2rgb(i.medal.medal_color_border)+"; background-image: linear-gradient(90deg, "+o.int2rgb(i.medal.medal_color_start)+", "+o.int2rgb(i.medal.medal_color_end)+");")},(0,h.zw)(i.medal.medal_name),5),(0,a._)("div",{class:"medal-level",style:(0,h.j5)("border-color:"+o.int2rgb(i.medal.medal_color_border)+"; color: rgb(6, 21, 76);")},(0,h.zw)(i.medal.level),5)])],4)}var ht={name:"MedalVue",props:{medal:Object},methods:{int2rgb(t){var e=t>>16,i=(t>>8)-(e<<8),n=t-(e<<16)-(i<<8);return"rgb("+e+","+i+","+n+")"}}};const ut=(0,d.Z)(ht,[["render",gt]]);var mt=ut;const pt={class:"hidden"},ft={id:"swiper"},wt=["href"],yt=["src"],bt=["src"],vt={class:"dotList"};function _t(t,e,i,n,s,o){const l=(0,a.up)("ion-icon");return(0,a.wg)(),(0,a.iD)("div",{id:"swiperBox",onMouseenter:e[2]||(e[2]=(...t)=>o.stop&&o.stop(...t)),onMouseleave:e[3]||(e[3]=(...t)=>o.start&&o.start(...t)),style:(0,h.j5)({width:i.width,height:"172px"})},[(0,a._)("div",pt,[(0,a._)("div",ft,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.banner,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"imgDiv",key:t},[(0,a._)("a",{href:t.link},[(0,a._)("img",{class:"swiper-width",src:t.url},null,8,yt),(0,a._)("img",{class:"swiper-height",src:t.url},null,8,bt)],8,wt)])))),128))])]),(0,a._)("div",vt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.banner.length-1,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"dot",key:t,style:(0,h.j5)(s.count==t-1?"opacity: 1;":"opacity: 0.5;")},null,4)))),128))]),(0,a.Wm)(l,{name:"chevron-back-circle",class:"btn",style:{left:"10px"},onClick:e[0]||(e[0]=t=>s.move(-1))}),(0,a.Wm)(l,{name:"chevron-forward-circle",class:"btn",style:{right:"10px"},onClick:e[1]||(e[1]=t=>s.move(1))})],36)}var kt={name:"SwiperVue",props:{speed:String,width:String,banner:null},data(){return{timer:null,count:0,swiper:null,move:this.throttle(this.moveNow,550)}},updated(){},methods:{updateStyle(){this.total=this.banner.length,this.swiper.style.width=this.total+"00%";var t=0;this.banner.forEach((e=>{var i=new Image;i.src=e.url,setTimeout((()=>{var e=i.height/i.width;e>t&&(t=e)}),100)})),setTimeout((()=>{t&&(document.getElementById("swiperBox").style.height=t*parseInt(this.width)+"px")}),1)},stop(){this.timer&&(clearInterval(this.timer),this.timer=null)},start(){var t=this;function e(){t.count+=1,t.swiper.style.transition="all 0.5s",t.swiper.style.left=-100*t.count+"%",t.count>=t.total-1&&setTimeout((()=>{t.swiper.style.transition="none",t.swiper.style.left="0%",t.count=0}),505)}this.timer=setInterval(e,parseInt(this.speed))},moveNow(t){this.stop(),this.swiper.style.left?this.count=parseInt(this.swiper.style.left)/-100+t:this.count=t,this.count>=this.total-1?(this.count=0,this.swiper.style.left=-100*(this.total-1)+"%",setTimeout((()=>{this.swiper.style.transition="none",this.swiper.style.left="0%",setTimeout((()=>{this.swiper.style.transition="all 0.5s"}),30)}),510)):this.count<0?(this.count=this.total-2,this.swiper.style.transition="none",this.swiper.style.left=-100*(this.total-1)+"%",setTimeout((()=>{this.swiper.style.transition="all 0.5s",this.swiper.style.left=-100*this.count+"%"}),30)):this.swiper.style.left=-100*this.count+"%"}},mounted(){this.swiper=document.getElementById("swiper"),this.updateStyle(),this.start()},beforeUnmount(){this.stop()}};const Ct=(0,d.Z)(kt,[["render",_t]]);var xt=Ct;const St=["id"],It={id:"config-title",class:"inputarea",style:{display:"flex","align-items":"center"}},Dt={style:{width:"100%","margin-right":"0.5em"}},jt={style:{color:"grey","font-size":"0.8em"}},Ut={id:"config-subtitle"},Tt=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"直播间号",-1),Bt={style:{width:"80%",display:"flex","justify-content":"space-between"}},Wt=["disabled"],Et=(0,a._)("span",{style:{color:"rgb(33,37,41)"}},"停止",-1),Vt={key:0,class:"inputarea"},qt={class:"inputInside",style:{"align-items":"center"}},Zt=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"密度阈值",-1),At={class:"inputInside",style:{"align-items":"center"}},Kt=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"发送间隔",-1),Mt={key:1,class:"inputarea"},Ht={class:"inputInside"},Ot=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"监听弹幕",-1),zt={class:"inputInside"},Lt=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"发送弹幕",-1),$t={key:2,class:"inputarea"},Nt={class:"inputInside",style:{"align-items":"center"}},Pt=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"上传配置",-1),Ft={class:"inputInside",style:{"align-items":"center"}},Yt=(0,a._)("span",{style:{width:"20%","margin-right":"0.5em"}},"删除配置",-1);function Rt(t,e,i,s,o,l){const r=(0,a.up)("ion-icon"),d=(0,a.up)("IconBtn");return(0,a.wg)(),(0,a.iD)("div",{id:"outside"+o.cid,class:"show-block outside"},[(0,a._)("div",It,[(0,a._)("div",{class:"inputInside",style:{"margin-top":"0 !important","align-items":"center"},onClick:e[0]||(e[0]=t=>o.status^=1)},[(0,a.Wm)(r,{id:"play",name:"play-sharp",style:(0,h.j5)(o.status?"transform: rotate(90deg);":"")},null,8,["style"]),(0,a._)("span",Dt,[(0,a.Uk)((0,h.zw)(this.config.name)+" ",1),(0,a._)("span",jt,"所有者："+(0,h.zw)(i.name),1)])]),(0,a._)("div",Ut,[Tt,(0,a._)("div",Bt,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.roomid=t),style:{width:"calc(100% - 90px)",margin:"0 0.5em 0 0"},placeholder:"不是UID！！！",disabled:1==o.running},null,8,Wt),[[n.nr,o.roomid]]),1==o.running?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:e[2]||(e[2]=t=>l.update()),style:{"border-radius":"0.5em",height:"38px",width:"78px",border:"1px solid #ced4da",display:"flex","align-items":"center"}},[(0,a.Wm)(r,{name:"stop",style:{margin:"0.5em 0.4em 0.5em 0.5em",width:"30%",height:"60%",color:"rgb(232,64,38)"}}),Et])):(0,a.kq)("",!0),-1==o.running?((0,a.wg)(),(0,a.j4)(d,{key:1,onClick:e[3]||(e[3]=t=>{o.roomid&&l.update()}),name:"checkmark-circle",bgColor:"rgb(52,120,246)",iconColor:"white",textColor:"white",shadow:"none"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 启动")])),_:1})):(0,a.kq)("",!0)])])]),(0,a._)("div",{style:(0,h.j5)([o.status?"opacity: 1;":"opacity: 0;","transition: all 0.2s ease 0.1s;"])},[o.status?((0,a.wg)(),(0,a.iD)("div",Vt,[(0,a._)("div",qt,[Zt,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.config.limited_density=t),style:{width:"80%"}},null,512),[[n.nr,o.config.limited_density]])]),(0,a._)("div",At,[Kt,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>o.config.send_rate=t),style:{width:"80%"}},null,512),[[n.nr,o.config.send_rate]])])])):(0,a.kq)("",!0),o.status?((0,a.wg)(),(0,a.iD)("div",Mt,[(0,a._)("div",Ht,[Ot,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[6]||(e[6]=t=>o.config.listening_words=t),style:{width:"80%"}},null,512),[[n.nr,o.config.listening_words]])]),(0,a._)("div",zt,[Lt,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[7]||(e[7]=t=>o.config.send_words=t),style:{width:"80%"}},null,512),[[n.nr,o.config.send_words]])])])):(0,a.kq)("",!0),o.status&&o.cid&&!t.$route.params.roomid?((0,a.wg)(),(0,a.iD)("div",$t,[(0,a._)("div",Nt,[Pt,(0,a.Wm)(d,{name:"cloud-upload-outline",iconColor:"rgb(52,120,246)",onClick:e[8]||(e[8]=t=>l.uploadConfigs())},{default:(0,a.w5)((()=>[(0,a.Uk)("将此配置上传并署您用户名")])),_:1})]),(0,a._)("div",Ft,[Yt,(0,a.Wm)(d,{name:"trash-outline",iconColor:"rgb(232,64,38)",onClick:e[9]||(e[9]=t=>i.deleteConfig(this.cid))},{default:(0,a.w5)((()=>[(0,a.Uk)("将此配置从您的账户中删除")])),_:1})])])):(0,a.kq)("",!0)],4)],8,St)}function Qt(t,e,i,n,s,o){const l=(0,a.up)("ion-icon");return(0,a.wg)(),(0,a.iD)("div",{class:"link",style:(0,h.j5)("height: 40px;display: flex;align-items: center;background-color: "+i.bgColor+";box-shadow: "+i.shadow)},[(0,a.Wm)(l,{name:i.name,style:(0,h.j5)("margin: 7px 5px 7px 7px; width:26px; height:26px;color:"+i.iconColor)},null,8,["name","style"]),(0,a._)("span",{style:(0,h.j5)("margin-right:10px;color: "+i.textColor)},[(0,a.WI)(t.$slots,"default")],4)],4)}var Gt={name:"IconBtn",props:{name:String,bgColor:String,iconColor:String,textColor:String,shadow:Number}};const Jt=(0,d.Z)(Gt,[["render",Qt]]);var Xt=Jt,te=i(5939),ee={name:"ConfigArea",props:{name:String,oconfig:Object,appendConfig:Function,deleteConfig:Function},components:{IconBtn:Xt},data(){return{config:this.oconfig,cid:this.oconfig.cid,status:1,roomid:this.oconfig.roomid||this.$route.params.roomid,running:this.oconfig.running||-1,height:[0,0],cookies:this.getCookies(),outside:null}},methods:{update(){this.running*=-1,te.Z.post("https://gh.nana7mi.link/update",{roomid:String(this.running*this.roomid),name:this.config.name,owner:this.config.owner,SESSDATA:this.cookies.SESSDATA,bili_jct:this.cookies.bili_jct,DedeUserID:this.cookies.DedeUserID,listening_words:this.config.listening_words,send_words:this.config.send_words,limited_density:this.config.limited_density,send_rate:this.config.send_rate}).catch(console.log)},uploadConfigs(){te.Z.post("https://gh.nana7mi.link/save",{name:this.config.name,DedeUserID:this.cookies.DedeUserID,listening_words:this.config.listening_words,send_words:this.config.send_words,limited_density:this.config.limited_density,send_rate:this.config.send_rate}).then((t=>{1==t.data.code&&this.appendConfig(t.data.cid.toString())})).catch(console.log)}},mounted(){this.outside=document.getElementById("outside"+this.cid),this.height[this.status]=this.outside.offsetHeight-32,this.status^=1,setTimeout((()=>{this.height[this.status]=this.outside.offsetHeight-32,this.outside.style="height: "+this.height[this.status]+"px;",this.$route.params.roomid&&(this.outside.classList.add("iframe"),document.body.style.backgroundColor="transparent",document.body.parentElement.style.filter="none",this.status=1)}),1)},watch:{status:function(t){this.height[t]&&(this.outside.style="height: "+this.height[t]+"px;")}}};const ie=(0,d.Z)(ee,[["render",Rt]]);var ne=ie,se={name:"MainVue",components:{Nav:R,Sider:rt,Medal:mt,Swiper:xt,ConfigArea:ne,IconBtn:Xt},mounted(){this.getInfo(),this.getConfigs()},data(){return{oauthKey:null,siderStatus:0,changeConfig:this.debounce((t=>{this.cids[this.cids.length]=t.target.value,localStorage.setItem("configs",this.cids.filter((t=>""!=t)).join(","))})),move:this.throttle((()=>this.siderStatus^=1)),cids:(localStorage.getItem("configs")||"").split(","),bili:{mid:-1,face:"",pendant:{image:""},vip:{nickname_color:""},name:"",top_photo:"",fans_medal:{medal:""}},bots:[],configs:[],uid2name:{}}},computed:{baseConfig(){return{running:-1,cid:this.configs.length,name:"晚安姬",owner:this.bili.mid.toString(),limited_density:10,send_rate:1.05,listening_words:"晚安\n拜拜\n再见",send_words:"晚安\n拜拜\n再见\n别走\n爱您"}},showConfigs(){let t=[];for(let e in this.cids)parseInt(e)<this.configs.length&&t.push(this.configs[parseInt(e)]);return t},banner(){function t(t,e){this.link=t,this.url=e}var e=[new t("https://www.bilibili.com/video/BV1vJ411B7ng","https://i2.hdslb.com/bfs/archive/7fe8272ef4c90d07ba2dba968638392f8d5bf490.jpg"),new t("https://www.bilibili.com/video/BV1he4y1r79x","https://i1.hdslb.com/bfs/archive/ca796b3fe2a213c652ebb32469d81511036c7117.jpg"),new t("https://www.bilibili.com/video/BV1tG411g7Fo","https://i0.hdslb.com/bfs/archive/b7868c38077aaa66e233499723a4d7490804f861.png"),new t("https://www.bilibili.com/video/BV1T24y1R7wd","https://i1.hdslb.com/bfs/archive/ab9738d7aee96044183b61c7dd9c95eb1ec17ed1.jpg"),new t("https://www.bilibili.com/video/BV1pR4y1W7M7","https://i0.hdslb.com/bfs/new_dyn/8b90b7582c6fa3023eda3ffb58bf8eeb1464240042.png")];return e.push(e[0]),e}},methods:{addHtml(t){var e=document.createElement("div");e.innerHTML=t.target.value,document.getElementById("insertArea").appendChild(e)},addBaseConfig(){this.configs[this.configs.length]=this.baseConfig,this.cids[this.cids.length]=(this.configs.length-1).toString()},appendConfig(t){-1==this.cids.indexOf(t)&&(this.cids[this.cids.length]=t),localStorage.setItem("configs",this.cids.filter((t=>""!=t)).join(","))},deleteConfig(t){for(var e=0;e<this.cids.length;e++)this.cids[e]==t&&(this.cids[e]="");localStorage.setItem("configs",this.cids.filter((t=>""!=t)).join(","))},longQuery(t=-1){-1==t&&(this.getLoginUrl(),this.bili.mid=0,this.plan=setInterval(this.getLoginInfo,3e3))},getConfigs(){te.Z.get("https://gh.nana7mi.link/query?cid=-1&uid="+this.getCookies().DedeUserID).then((t=>{if(1==t.data.code){this.bots=t.data.bots,this.configs=t.data.data;for(var e=0;e<this.bots.length;e++){this.bots[e].running=1;var i=this.bots[e].owner;this.uid2name[i]||(this.uid2name[i]="await",te.Z.get("https://aliyun.nana7mi.link/user.User(uid="+i+").get_user_info()?max_age=86400").then((t=>{0==t.data.code&&(this.uid2name[t.data.data.mid.toString()]=t.data.data.name)})))}for(let t=0;t<this.configs.length;t++){this.configs[t].cid=t;let e=this.configs[t].owner;this.uid2name[e]||(this.uid2name[e]="await",te.Z.get("https://aliyun.nana7mi.link/user.User(uid="+e+").get_user_info()?max_age=86400").then((t=>{0==t.data.code&&(this.uid2name[t.data.data.mid.toString()]=t.data.data.name)})))}}})).catch(console.log)},getInfo(){var t=this.getCookies();t.DedeUserID||this.longQuery(),te.Z.get("https://aliyun.nana7mi.link/user.User(uid="+t.DedeUserID+").get_user_info()?max_age=86400",{params:t}).then((t=>(1!=t.data.code&&(this.bili=t.data.data),t.data.data.mid))).then(this.longQuery).catch(console.log)},getLoginUrl(){te.Z.get("https://aliyun.nana7mi.link/getLoginUrl").then((t=>this.oauthKey=t.data.data.oauthKey)).catch(console.log)},getLoginInfo(){te.Z.get("https://aliyun.nana7mi.link/getLoginInfo",{params:{oauthKey:this.oauthKey}}).then((t=>{-1!=t.data.DedeUserID&&(clearInterval(this.plan),this.setCookies(t.data),this.oauthKey=null,this.getInfo())})).catch(console.log)}}};const oe=(0,d.Z)(se,[["render",U]]);var ae=oe,le=i(2483);Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t};const re=(0,le.p7)({history:(0,le.PO)(),routes:[{path:"/",component:ae},{path:"/:roomid",component:ae}]});var de=(0,n.ri)(g);de.use(re),de.use(o()),de.config.globalProperties.getCookies=()=>({DedeUserID:localStorage.getItem("DedeUserID")||0,SESSDATA:localStorage.getItem("SESSDATA")||0,bili_jct:localStorage.getItem("bili_jct")||0}),de.config.globalProperties.setCookies=t=>{for(var e in t)localStorage.setItem(e,t[e])},de.config.globalProperties.throttle=function(t,e=500){var i=(new Date).getTime();return function(...n){var s=(new Date).getTime();s-i>=e&&(t.call(this,...n),i=s)}},de.config.globalProperties.debounce=function(t,e=500){var i=null;return function(...n){i&&clearTimeout(i),i=setTimeout((()=>t.call(this,...n)),e)}},de.mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,o){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],o=t[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[r])}))?n.splice(r--,1):(l=!1,o<a&&(a=o));if(l){t.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,s,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,a=n[0],l=n[1],r=n[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(r)var c=r(i)}for(e&&e(n);d<a.length;d++)o=a[d],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},n=self["webpackChunknight_nana7mi_link"]=self["webpackChunknight_nana7mi_link"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6793)}));n=i.O(n)})();
//# sourceMappingURL=app.8bf0f472.js.map