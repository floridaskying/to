(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13,16,31],{1203:function(t,e,n){"use strict";var r=["架构","开源","算法","GitHub","面试","代码规范","产品","掘金翻译计划"];e.a={home:r,frontend:["前端","CSS","JavaScript","HTML","React.js","Vue.js","Webpack","微信","TypeScript"],android:["Android","Kotlin","Android Studio","gradle","RxJava","React Native","Material Design"],backend:["后端","Java","数据库","Node.js","Linux","PHP","MySQL","Redis","Python","MongoDB"],ios:["Mac","Apple","Swift","Xcode","Objective-C","macOS"],freebie:r,career:r,article:r,ai:["Python","机器学习","NLP","数据挖掘","人工智能","OpenAI","神经网络","深度学习","TensorFlow"],devops:["运维","Linux","Nginx","服务器","容器","Docker","Kubernetes","云计算","连续集成"]}},1462:function(t,e,n){t.exports=n.p+"static/img/zan-active.930baa2.svg"},1463:function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}n.d(e,"a",function(){return r})},2124:function(t,e,n){t.exports=n.p+"static/img/collections.945b9ae.png"},2125:function(t,e,n){t.exports=n.p+"static/img/book.75582b2.png"},2126:function(t,e,n){t.exports=n.p+"static/img/ty-extension-icon.4b79fb4.png"},2127:function(t,e,n){t.exports=n.p+"static/img/ty-miner.b78347c.png"},2128:function(t,e,n){t.exports=n.p+"static/img/ty-partner.4dd2d8c.png"},24:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"g",function(){return o}),n.d(e,"d",function(){return s}),n.d(e,"f",function(){return a}),n.d(e,"e",function(){return u}),n.d(e,"b",function(){return c});var r="5b30c3b351882574957a788f";function i(t,e){if(0===t)return 0;var n=o(t,isNaN(e)?1:e/10);return 0===n?0:n.toFixed(2)}function o(t,e){var n=0,r=t.toString(),i=e.toString();try{n+=r.split(".")[1].length}catch(t){}try{n+=i.split(".")[1].length}catch(t){}var o=(r=Number(r.replace(".","")))*(i=Number(i.replace(".","")))/Math.pow(10,n),s=0<e?.01:0;return Math.max(s,o)}function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{free:0,charge:10},e=t.free,n=t.charge;return 0<e?0:n<10?n:10}function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[t.timeLimitDiscount,t.timeLimitDiscountFirstDay].some(function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.startUTC,n=void 0===e?null:e,r=t.endUTC,i=void 0===r?null:r,o=(t.discountCount,+new Date),s=+new Date(n),a=+new Date(i);return s<o&&o<a})}function u(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},g=t.id,f=[{title:"早鸟价",type:"timeLimitDiscountFirstDay"},{title:"限时优惠价",type:"timeLimitDiscount"}],e=t.timeLimitDiscount,n=void 0===e?{}:e,r=t.timeLimitDiscountFirstDay,i=[void 0===r?{}:r,n].map(function(t,e){var n=t.startUTC,r=void 0===n?null:n,i=t.endUTC,o=void 0===i?null:i,s=t.discountCount,a=void 0===s?10:s,u=+new Date(r),c=+new Date(o),h=a;return Object.assign({id:g},f[e],{startTime:u,endTime:c,sale:h})}),o={},s=0;s<2;s++){var a=+new Date,u=i[s],c=u.startTime,h=void 0===c?null:c,l=u.endTime,p=void 0===l?null:l,d=u.sale,m=void 0===d?10:d;if(0<=m&&m<10&&(h<a&&a<p)){o=i[s];break}}return o}function c(t,e){for(var n=[{className:"current",text:t,No:t}],r=1;r<=3;r++)1<t-r&&n.unshift({className:"",text:t-r,No:t-r}),t+r<e&&n.push({className:"",text:t+r,No:t+r});return 1<t-4&&n.unshift({className:"omit",text:"...",No:null}),1<t&&n.unshift({className:"prev",text:"上一页",No:t-1},{className:"",text:"1",No:1}),t+4<e&&n.push({className:"omit",text:"...",No:null}),t<e&&n.push({className:"",text:e,No:e},{className:"next",text:"下一页",No:t+1}),1<n.length?n:[]}},2489:function(t,e,n){"use strict";e.a={weibo:"http://weibo.com/xitucircle",zhihu:"https://zhuanlan.zhihu.com/xitucircle",jianshu:"http://www.jianshu.com/users/5fc9b6410f4f/latest_articles"}},2797:function(t,e,n){t.exports=n.p+"static/img/collection.77d703d.svg"},2798:function(t,e,n){"use strict"},2799:function(t,e,n){t.exports=n.p+"static/img/welcome.6f27533.png"},2800:function(t,e,n){t.exports=n.p+"static/img/timeline.e011f09.png"},2801:function(t,e,n){t.exports=n.p+"static/img/zhuanlan.9e7bee2.png"},2802:function(t,e,n){t.exports=n.p+"static/img/collections.eec2cd9.png"},2803:function(t,e,n){t.exports=n.p+"static/img/explore.2a0f594.png"},2804:function(t,e,n){t.exports=n.p+"static/img/entry.7c9ce29.png"},2805:function(t,e,n){t.exports=n.p+"static/img/detail.6e4b8cc.png"},2806:function(t,e,n){t.exports=n.p+"static/img/post.7cb7332.png"},2809:function(t,e,n){t.exports=n.p+"static/img/more.4e6dd54.svg"},2810:function(t,e,n){t.exports=n.p+"static/img/comment.4d5744f.svg"},2811:function(t,e,n){t.exports=n.p+"static/img/share.1d55e69.svg"},2812:function(t,e,n){t.exports=n.p+"static/img/weibo.8e2f5d6.svg"},2813:function(t,e,n){t.exports=n.p+"static/img/wechat.844402c.svg"},2814:function(t,e,n){t.exports=n.p+"static/img/collected.326b3ff.svg"},2815:function(t,e,n){t.exports=n.p+"static/img/collect.02e2979.svg"},2816:function(t,e,n){t.exports=n.p+"static/img/more.4e6dd54.svg"},2817:function(t,e,n){t.exports=n.p+"static/img/share.1d55e69.svg"},2818:function(t,e,n){t.exports=n.p+"static/img/weibo.8e2f5d6.svg"},2819:function(t,e,n){t.exports=n.p+"static/img/wechat.844402c.svg"},2820:function(t,e,n){t.exports=n.p+"static/img/45.b99ea03.svg"},2858:function(t,e,n){t.exports=n.p+"static/img/weibo.fa758eb.svg"},2859:function(t,e,n){t.exports=n.p+"static/img/github.547dd8a.svg"},2860:function(t,e,n){t.exports=n.p+"static/img/wechat.e0ff124.svg"},2861:function(t,e,n){t.exports=n.p+"static/img/weibo.0cd39f5.png"},2862:function(t,e,n){t.exports=n.p+"static/img/zhuanlan.18265c6.png"},2863:function(t,e,n){t.exports=n.p+"static/img/jianshu.80c1fdd.png"},2864:function(t,e,n){t.exports=n.p+"static/img/wechat.ce329e6.png"},2865:function(t,e,n){t.exports=n.p+"static/img/xitucircle-qr.0bfaeef.jpg"},2936:function(t,e,r){function n(t){this.mode=o.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var r=[],i=this.data.charCodeAt(e);65536<i?(r[0]=240|(1835008&i)>>>18,r[1]=128|(258048&i)>>>12,r[2]=128|(4032&i)>>>6,r[3]=128|63&i):2048<i?(r[0]=224|(61440&i)>>>12,r[1]=128|(4032&i)>>>6,r[2]=128|63&i):128<i?(r[0]=192|(1984&i)>>>6,r[1]=128|63&i):r[0]=i,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}n.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,n=this.parsedData.length;e<n;e++)t.put(this.parsedData[e],8)}},u.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=w.getLostPoint(this);(0==n||r<t)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,s=0;s<this.modules[i].length;s++){var a=1*s;this.modules[i][s]&&(r.beginFill(0,100),r.moveTo(a,o),r.lineTo(a+1,o),r.lineTo(a+1,o+1),r.lineTo(a,o+1),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=w.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],i=t[n];if(null==this.modules[r][i])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[r+o][i+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},setupTypeNumber:function(t){for(var e=w.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=w.getBCHTypeInfo(n),i=0;i<15;i++){var o=!t&&1==(r>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,i=7,o=0,s=this.moduleCount-1;0<s;s-=2)for(6==s&&s--;;){for(var a=0;a<2;a++)if(null==this.modules[r][s-a]){var u=!1;o<t.length&&(u=1==(t[o]>>>i&1)),w.getMask(e,r,s-a)&&(u=!u),this.modules[r][s-a]=u,-1==--i&&(o++,i=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,n){for(var r=L.getRSBlocks(t,e),i=new C,o=0;o<n.length;o++){var s=n[o];i.put(s.mode,4),i.put(s.getLength(),w.getLengthInBits(s.mode,t)),s.write(i)}var a=0;for(o=0;o<r.length;o++)a+=r[o].dataCount;if(i.getLengthInBits()>8*a)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*a+")");for(i.getLengthInBits()+4<=8*a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*a||(i.put(u.PAD0,8),i.getLengthInBits()>=8*a));)i.put(u.PAD1,8);return u.createBytes(i,r)},u.createBytes=function(t,e){for(var n=0,r=0,i=0,o=new Array(e.length),s=new Array(e.length),a=0;a<e.length;a++){var u=e[a].dataCount,c=e[a].totalCount-u;r=Math.max(r,u),i=Math.max(i,c),o[a]=new Array(u);for(var h=0;h<o[a].length;h++)o[a][h]=255&t.buffer[h+n];n+=u;var g=w.getErrorCorrectPolynomial(c),f=new b(o[a],g.getLength()-1).mod(g);s[a]=new Array(g.getLength()-1);for(h=0;h<s[a].length;h++){var l=h+f.getLength()-s[a].length;s[a][h]=0<=l?f.get(l):0}}var p=0;for(h=0;h<e.length;h++)p+=e[h].totalCount;var d=new Array(p),m=0;for(h=0;h<r;h++)for(a=0;a<e.length;a++)h<o[a].length&&(d[m++]=o[a][h]);for(h=0;h<i;h++)for(a=0;a<e.length;a++)h<s[a].length&&(d[m++]=s[a][h]);return d};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s=1,a=0,c=3,h=2,i=0,g=1,f=2,l=3,p=4,d=5,m=6,v=7,w={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=w.getBCHDigit(e)-w.getBCHDigit(w.G15);)e^=w.G15<<w.getBCHDigit(e)-w.getBCHDigit(w.G15);return(t<<10|e)^w.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=w.getBCHDigit(e)-w.getBCHDigit(w.G18);)e^=w.G18<<w.getBCHDigit(e)-w.getBCHDigit(w.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return w.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case i:return(e+n)%2==0;case g:return e%2==0;case f:return n%3==0;case l:return(e+n)%3==0;case p:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case d:return e*n%2+e*n%3==0;case m:return(e*n%2+e*n%3)%2==0;case v:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new b([1],0),n=0;n<t;n++)e=e.multiply(new b([1,D.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var i=0;i<e;i++){for(var o=0,s=t.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||e<=r+a))for(var u=-1;u<=1;u++)i+u<0||e<=i+u||0==a&&0==u||s==t.isDark(r+a,i+u)&&o++;5<o&&(n+=3+o-5)}for(r=0;r<e-1;r++)for(i=0;i<e-1;i++){var c=0;t.isDark(r,i)&&c++,t.isDark(r+1,i)&&c++,t.isDark(r,i+1)&&c++,t.isDark(r+1,i+1)&&c++,0!=c&&4!=c||(n+=3)}for(r=0;r<e;r++)for(i=0;i<e-6;i++)t.isDark(r,i)&&!t.isDark(r,i+1)&&t.isDark(r,i+2)&&t.isDark(r,i+3)&&t.isDark(r,i+4)&&!t.isDark(r,i+5)&&t.isDark(r,i+6)&&(n+=40);for(i=0;i<e;i++)for(r=0;r<e-6;r++)t.isDark(r,i)&&!t.isDark(r+1,i)&&t.isDark(r+2,i)&&t.isDark(r+3,i)&&t.isDark(r+4,i)&&!t.isDark(r+5,i)&&t.isDark(r+6,i)&&(n+=40);var h=0;for(i=0;i<e;i++)for(r=0;r<e;r++)t.isDark(r,i)&&h++;return n+=10*(Math.abs(100*h/e/e-50)/5)}},D={glog:function(t){if(t<1)throw new Error("glog("+t+")");return D.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return D.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},E=0;E<8;E++)D.EXP_TABLE[E]=1<<E;for(E=8;E<256;E++)D.EXP_TABLE[E]=D.EXP_TABLE[E-4]^D.EXP_TABLE[E-5]^D.EXP_TABLE[E-6]^D.EXP_TABLE[E-8];for(E=0;E<255;E++)D.LOG_TABLE[D.EXP_TABLE[E]]=E;function b(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function L(t,e){this.totalCount=t,this.dataCount=e}function C(){this.buffer=[],this.length=0}b.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=D.gexp(D.glog(this.get(n))+D.glog(t.get(r)));return new b(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=D.glog(this.get(0))-D.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=D.gexp(D.glog(t.get(r))+e);return new b(n,0).mod(t)}},L.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],L.getRSBlocks=function(t,e){var n=L.getRsBlockTable(t,e);if(null==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,i=[],o=0;o<r;o++)for(var s=n[3*o+0],a=n[3*o+1],u=n[3*o+2],c=0;c<s;c++)i.push(new L(a,u));return i},L.getRsBlockTable=function(t,e){switch(e){case s:return L.RS_BLOCK_TABLE[4*(t-1)+0];case a:return L.RS_BLOCK_TABLE[4*(t-1)+1];case c:return L.RS_BLOCK_TABLE[4*(t-1)+2];case h:return L.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},C.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var x=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function B(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(0<=this.options.padding))throw new Error("Expected 'padding' value to be non-negative!");if(!(0<this.options.width&&0<this.options.height))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var n=this.options.content,r=function(t,e){for(var n,r,i=(n=t,(r=encodeURI(n).toString().replace(/\%[0-9a-fA-F]{2}/g,"a")).length+(r.length!=n?3:0)),o=1,s=0,a=0,u=x.length;a<=u;a++){var c=x[a];if(!c)throw new Error("Content too long: expected "+s+" but got "+i);switch(e){case"L":s=c[0];break;case"M":s=c[1];break;case"Q":s=c[2];break;case"H":s=c[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(i<=s)break;o++}if(x.length<o)throw new Error("Content too long");return o}(n,this.options.ecl),i=function(t){switch(t){case"L":return s;case"M":return a;case"Q":return c;case"H":return h;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new u(r,i),this.qrcode.addData(n),this.qrcode.make()}B.prototype.svg=function(t){void 0===t&&(t={container:"svg"});for(var e=this.options,n=this.qrcode.modules,r="\r\n",i=e.width,o=e.height,s=n.length,a=i/(s+2*e.padding),u=o/(s+2*e.padding),c='<rect x="0" y="0" width="'+i+'" height="'+o+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+r,h=0;h<s;h++)for(var g=0;g<s;g++){if(n[g][h])c+='<rect x="'+(g*a+e.padding*a).toString()+'" y="'+(h*u+e.padding*u).toString()+'" width="'+a+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+r}var f="";switch(t.container){case"svg":f+='<?xml version="1.0" standalone="yes"?>\r\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+i+'" height="'+o+'">'+r,f+=c,f+="</svg>";break;case"g":f+='<g width="'+i+'" height="'+o+'">'+r,f+=c,f+="</g>";break;default:f+=c}return f},B.prototype.save=function(t,e){var n=this.svg();r(!function(){var t=new Error("Cannot find module 'fs'");throw t.code="MODULE_NOT_FOUND",t}()).writeFile(t,n,e)},t.exports=B},31:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(2936),i=n.n(r);function o(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"#000000",n=new i.a({content:t,color:e,padding:0,width:410,height:410,background:"#ffffff",ecl:"L"}).svg();return"data:image/svg+xml;utf8,".concat(encodeURIComponent(n))}}}]);