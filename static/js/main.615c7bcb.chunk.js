(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(43)},29:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(13),o=n.n(r),s=(n(29),n(7)),u=n(8),c=n(10),l=n(9),h=n(11),p=(n(30),n(31),n(1)),f=n.n(p),d=n(2),m=n(12),v=n(23),g=n(4),E=n(16),k=n(6),y=n.n(k),S=n(5),b=function(e){var t=e.onPlay,n=e.onStep,i=e.onFullscreen,r=e.playing,o=e.onSeek,s=e.position,u=e.duration;return a.a.createElement("div",{className:"controls"},a.a.createElement("button",{className:"btn btn-default",onClick:function(e){n(-1),e.stopPropagation()}},a.a.createElement(S.g,null)),a.a.createElement("button",{className:y()("btn","btn-default"),onClick:function(e){console.log("play/pause: "),t(),e.stopPropagation()}},r?a.a.createElement(S.e,null):a.a.createElement(S.f,null)),a.a.createElement("button",{className:"btn btn-default",onClick:function(e){n(1),e.stopPropagation()}},a.a.createElement(S.h,null)),a.a.createElement("input",{type:"range",value:s,min:"0",max:u,step:"0.04",onInput:function(e){console.log("range value: ".concat(e.target.value));var t=parseFloat(e.target.value);o(t),e.stopPropagation()}}),a.a.createElement("button",{className:"btn btn-default glyphicon glyphicon-fullscreen",onClick:function(e){i(),e.stopPropagation()}},a.a.createElement(S.d,null)))},w=n(19),O=n.n(w),P=n(20),V=n(21);function R(e){return e.split("?")[0].endsWith(".m3u8")}function T(e){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(f.a.mark(function e(t){var n,i,a,r,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.text();case 5:return i=e.sent,(a=new V.a).push(i),a.end(),r=a.manifest,o=r.playlists.map(function(e){return Object(P.a)({url:L(t,e.uri),bandwidth:e.attributes.BANDWIDTH},e.attributes.RESOLUTION)}),e.abrupt("return",{mainUrl:t,variants:o,selectedVariant:0});case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e,t){return 0===(n=t).indexOf("http://")||0===n.indexOf("https://")?t:e.replace(/\/[^/]*$/,"/"+t);var n}var N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={zoom:1,panHorizontal:0,panVertical:0},n.onTimeUpdate=n.onTimeUpdate.bind(Object(g.a)(n)),n.onMetadataLoaded=n.onMetadataLoaded.bind(Object(g.a)(n)),n.setVideoRef=function(e){n.videoElement=e},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onTimeUpdate",value:function(){this.props.onTimeUpdate&&this.props.onTimeUpdate(this.videoElement.currentTime)}},{key:"onMetadataLoaded",value:function(){this.props.onDurationSet&&this.props.onDurationSet(this.videoElement.duration)}},{key:"play",value:function(){var e=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.videoElement.play());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"pause",value:function(){this.videoElement.pause()}},{key:"quickSeek",value:function(e){this.videoElement.currentTime=e}},{key:"zoomIn",value:function(){this.zoom(1.1)}},{key:"zoomOut",value:function(){this.zoom(1/1.1)}},{key:"zoom",value:function(e){var t=(1-e)/2*document.documentElement.clientWidth+e*this.state.panHorizontal,n=(1-e)/2*document.documentElement.clientHeight+e*this.state.panVertical;this.setState({zoom:this.state.zoom*e,panHorizontal:t,panVertical:n})}},{key:"pan",value:function(e,t){this.setState({panHorizontal:this.state.panHorizontal+e,panVertical:this.state.panVertical+t})}},{key:"resetPanZoom",value:function(){var e=(document.documentElement.clientHeight-this.videoElement.offsetHeight/this.state.zoom)/2;this.setState({zoom:1,panHorizontal:0,panVertical:e})}},{key:"seek",value:function(){var e=Object(d.a)(f.a.mark(function e(t){var n=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t>this.videoElement.duration)){e.next=2;break}return e.abrupt("return",Promise.reject("Invalid seek position: ".concat(t,", media duration is ").concat(this.videoElement.duration)));case 2:return e.abrupt("return",new Promise(function(e,i){n.videoElement.addEventListener("seeked",function(){e()},{once:!0}),n.videoElement.currentTime=t}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadSource",value:function(){var e=Object(d.a)(f.a.mark(function e(t){var n=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("load source: ".concat(t)),e.abrupt("return",new Promise(function(e,i){n.videoElement.addEventListener("canplay",function(){e()},{once:!0}),R(t)?n.loadHls(t):n.videoElement.src=t}));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadHls",value:function(e){var t=this.state.hls;t||(t=new O.a,this.setState({hls:t})),t.loadSource(e),t.attachMedia(this.videoElement)}},{key:"currentTime",value:function(){return this.videoElement.currentTime}},{key:"componentDidMount",value:function(){this.videoElement.addEventListener("timeupdate",this.onTimeUpdate),this.videoElement.addEventListener("loadedmetadata",this.onMetadataLoaded)}},{key:"componentWillUnmount",value:function(){this.videoElement.removeEventListener("timeupdate",this.onTimeUpdate),this.videoElement.removeEventListener("loadedmetadata",this.onMetadataLoaded)}},{key:"render",value:function(){var e=parseInt(100*this.state.zoom)+"vw";return a.a.createElement("video",{muted:this.props.muted,ref:this.setVideoRef,tabIndex:"-1",style:{width:e,left:this.state.panHorizontal+"px",top:this.state.panVertical+"px"}})}}]),t}(i.Component),I=(n(39),n(40),n(22)),_=n.n(I);function x(e,t,n){return U.apply(this,arguments)}function U(){return(U=Object(d.a)(f.a.mark(function e(t,n,i){var a,r,o,s,u,c,l=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=l.length>3&&void 0!==l[3]?l[3]:10485760,r=0,o=a;case 3:if(i()){e.next=19;break}return e.next=6,A(t,{start:r,end:o});case 6:if(s=e.sent,u=s.data,c=parseInt(s.contentRange.split("/")[1]),u.fileStart=r,n(u),o!==c){e.next=13;break}return e.abrupt("break",19);case 13:if(r=o,o=Math.min(c,r+a),!(u.length<a)){e.next=17;break}return e.abrupt("break",19);case 17:e.next=3;break;case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(f.a.mark(function e(t,n){var i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{Range:"bytes=".concat(n.start,"-").concat(n.end)}});case 2:if((i=e.sent).ok){e.next=5;break}throw Error("Fetch failed with status: ".concat(i.status));case 5:return e.next=7,i.arrayBuffer();case 7:return e.t0=e.sent,e.t1=i.headers.get("Content-Length"),e.t2=i.headers.get("Content-Range"),e.abrupt("return",{data:e.t0,contentLength:e.t1,contentRange:e.t2});case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(){return(j=Object(d.a)(f.a.mark(function e(t){var n,i,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("mp4Info: ".concat(t)),n=!1,i=new _.a.MP4Box,a=new Promise(function(e,t){i.onError=function(e){n=!0,console.log(e),t(e)},i.onReady=function(t){n=!0,e(t)}}),x(t,function(e){i.appendBuffer(e)},function(){return n}).catch(function(e){console.log("error: ".concat(e)),console.trace(e)}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var M=function(e){return j.apply(this,arguments)},D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).stopPropagation=n.stopPropagation.bind(Object(g.a)(n)),n.urlInputKeyDown=n.urlInputKeyDown.bind(Object(g.a)(n)),n.state={source:n.props.defaultSource,showUrlInput:!1,visible:n.props.visible},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setInputRef",value:function(e){this.input=e}},{key:"loadHlsMetadata",value:function(){var e=Object(d.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:n=e.sent,this.setState({hls:n});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadMp4Metadata",value:function(e){var t=this;M(e).then(function(e){t.setState({mp4Info:e})}).catch(function(e){return console.trace(e)})}},{key:"componentDidMount",value:function(){this.changeSource(this.state.source),console.log("Source selector add event listeners"),this.input.addEventListener("keydown",this.urlInputKeyDown),this.input.addEventListener("keypress",this.stopPropagation),this.input.addEventListener("keyup",this.stopPropagation)}},{key:"componentWillUnmount",value:function(){this.input.removeEventListener("keydown",this.urlInputKeyDown),this.input.removeEventListener("keypress",this.stopPropagation),this.input.removeEventListener("keyup",this.stopPropagation)}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"urlInputKeyDown",value:function(e){switch(e.stopPropagation(),e.keyCode){case 13:this.onUrlSelected(e.target.value);break;case 27:this.hideUrlInput()}}},{key:"onBlur",value:function(){console.log("onBlur"),this.setState({showUrlInput:!1})}},{key:"handleChange",value:function(e){e.target.files&&this.props.onChange(e.target.files[0])}},{key:"showUrlInput",value:function(){this.setState({showUrlInput:!0})}},{key:"hideUrlInput",value:function(){this.setState({showUrlInput:!1})}},{key:"onUrlSelected",value:function(e){console.log("url: ".concat(e)),this.hideUrlInput(),this.changeSource({type:"url",name:e,url:e})}},{key:"onFileSelected",value:function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];this.changeSource({type:"file",name:t.name,url:window.URL.createObjectURL(t)})}}},{key:"onVariantSelected",value:function(e){console.log("variant selected: ".concat(e.target.value));var t=e.target.value;this.setVariant(t)}},{key:"setVariant",value:function(e){this.setState({hls:Object.assign({},this.state.hls,{selectedVariant:e})});var t=this.state.hls.variants[e].url;this.props.onChange(Object.assign({},this.state.source,{url:t}))}},{key:"changeSource",value:function(e){var t=this,n=this.state.source;R(e.url)?(this.setState({source:e,mp4Info:null}),this.loadHlsMetadata(e.url).then(function(){t.setVariant(e.variant?e.variant:0),"file"===n.type&&n.url&&window.URL.revokeObjectURL(n)})):(this.setState({source:e,hls:null}),this.loadMp4Metadata(e.url),this.props.onChange(e),"file"===n.type&&n.url&&window.URL.revokeObjectURL(n))}},{key:"componentDidUpdate",value:function(e,t,n){this.state.showUrlInput&&this.input.focus()}},{key:"currentUrl",value:function(){return"url"===this.state.source.type?this.state.source.url:""}},{key:"formatMetadata",value:function(e,t,n){return"[".concat(Math.round(e/1e3),"kbit/s ").concat(t,"x").concat(n,"]")}},{key:"renderSelectedSource",value:function(){var e=this;if(this.state.showUrlInput)return null;var t=null;if(this.state.hls){var n=this.state.hls.variants.map(function(t,n){return a.a.createElement("option",{key:n,value:n},e.formatMetadata(t.bandwidth,t.width,t.height))});t=a.a.createElement("select",{value:this.state.hls.selectedVariant,onChange:function(t){return e.onVariantSelected(t)}},n)}else if(this.state.mp4Info){var i=this.state.mp4Info.videoTracks[0],r=i.bitrate,o=i.video.width,s=i.video.height;t=a.a.createElement("span",null,this.formatMetadata(r,o,s))}return a.a.createElement("div",{className:"source-metadata"},a.a.createElement("div",{className:"source-name",title:this.state.source.name},this.state.source.name),a.a.createElement("div",null,t))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:y()("source-selector",this.props.className,{hidden:!this.props.visible})},a.a.createElement("div",{className:"source-buttons"},a.a.createElement("div",{title:"open URL",className:"url-button"},a.a.createElement(S.b,{style:{cursor:"pointer"},onClick:function(){return e.showUrlInput()}})),a.a.createElement("label",{title:"open local file",className:"source-file-input",onClick:function(t){e.hideUrlInput(),t.stopPropagation()}},a.a.createElement(S.a,null),a.a.createElement("input",{type:"file",onChange:function(t){return e.onFileSelected(t)}}))),a.a.createElement("input",{className:y()("url-input",{hidden:!this.state.showUrlInput}),type:"text",ref:function(t){return e.setInputRef(t)},onBlur:function(){return e.onBlur()},defaultValue:this.currentUrl()}),this.renderSelectedSource())}}]),t}(i.Component),H=(n(41),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).mouseMove=n.mouseMove.bind(Object(g.a)(n)),n.mouseDown=n.mouseDown.bind(Object(g.a)(n)),n.mouseUp=n.mouseUp.bind(Object(g.a)(n)),console.log("Split view constructor"),n.state={splitPercent:0,dragStart:null,dragging:!1},n.setSplitViewContainerRef=function(e){n.splitViewContainer=e},n.setSplitViewClipperRef=function(e){n.splitViewClipper=e},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.splitViewContainer.addEventListener("mousemove",this.mouseMove,{passive:!0}),this.splitViewContainer.addEventListener("mousedown",this.mouseDown),document.addEventListener("mouseup",this.mouseUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.mouseUp),this.splitViewContainer.removeEventListener("mousedown",this.mouseDown),this.splitViewContainer.removeEventListener("mousemove",this.mouseMove,{passive:!0})}},{key:"mouseUp",value:function(e){this.state.dragging&&(this.ignoreNextClick=!0),this.setState({dragStart:null,dragging:!1})}},{key:"onClick",value:function(e){this.ignoreNextClick?this.ignoreNextClick=!1:this.props.onClick(e)}},{key:"mouseDown",value:function(e){this.setState({dragStart:{x:e.clientX,y:e.clientY}})}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentDidUpdate",value:function(e,t){this.props.tracking&&!e.tracking&&this.setSplitPosition(this.state.splitPercent)}},{key:"mouseMove",value:function(e){this.state.dragStart?(this.setState({dragging:!0}),this.props.onDrag(e.movementX,e.movementY)):this.trackLocation(e)}},{key:"trackLocation",value:function(e){if(this.splitViewContainer){var t=this.splitViewContainer.getBoundingClientRect(),n=(e.pageX-t.left)/this.splitViewContainer.offsetWidth*100;n<=100&&(this.setState({splitPercent:n}),this.props.tracking&&this.setSplitPosition(n))}}},{key:"setSplitPosition",value:function(e){this.splitViewClipper.style.width=e+"%"}},{key:"focus",value:function(){this.splitViewContainer.focus()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:y()("split-view-container",{dragging:this.state.dragging}),ref:function(t){return e.setSplitViewContainerRef(t)},tabIndex:"-1",onClick:function(t){return e.onClick(t)}},a.a.createElement("div",{className:y()("split-view-clipper",{"show-border":this.props.splitBorderVisible}),ref:function(t){return e.setSplitViewClipperRef(t)}},this.props.leftSideContent),this.props.children)}}]),t}(i.Component));function B(e){return e<10?"0"+e:""+e}var z=function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),i=Math.floor(e%60),a=Math.floor((e-Math.floor(e))/.04);return B(t)+":"+B(n)+":"+B(i)+"."+B(a)},G=function(e){var t=e.position;return a.a.createElement("div",{className:"time-display"},z(t))};var W=function(e){var t=e.offset;return 0===t?null:a.a.createElement("div",{className:"offset-indicator"},"offset: ",function(e){return e>0?"+":""}(t),.04*t)},Z=(n(42),function(e,t,n){return{name:e,keys:t,description:n}}),K={PLAY:Z("PLAY","l","Play video"),PAUSE:Z("PAUSE","k","Pause video"),PLAY_PAUSE:Z("PLAY_PAUSE","space","Play/Pause video"),STEP_FORWARD_FRAME:Z("STEP_FORWARD_FRAME",".","Step forward 1 frame"),STEP_BACKWARD_FRAME:Z("STEP_BACKWARD_FRAME",",","Step backward 1 frame"),STEP_FORWARD:Z("STEP_FORWARD",["/","-"],"Step forward 1 second"),STEP_BACKWARD:Z("STEP_BACKWARD","m","Step backward 1 second"),FULLSCREEN:Z("FULLSCREEN","f","Toggle full screen"),TOGGLE_TRACKING:Z("TOGGLE_TRACKING","t","Toggle split position follows mouse"),LEFT_ONLY:Z("LEFT_ONLY","]","View only left video"),RIGHT_ONLY:Z("RIGHT_ONLY","[","View only right video"),TIMESHIFT_DECREASE:Z("OFFSET_DECREASE","<","Decrease timeshift between videos"),TIMESHIFT_INCREASE:Z("OFFSET_INCREASE",">","Increase timeshift between videos"),TIMESHIFT_RESET:Z("OFFSET_RESET","r","Reset timeshift between videos"),ZOOM_IN:Z("ZOOM_IN","u","Zoom in"),ZOOM_OUT:Z("ZOOM_OUT","i","Zoom out"),PAN_UP:Z("PAN_UP","up","Pan up"),PAN_DOWN:Z("PAN_DOWN","down","Pan down"),PAN_RIGHT:Z("PAN_RIGHT","right","Pan right"),PAN_LEFT:Z("PAN_LEFT","left","Pan left"),REST_PAN_ZOOM:Z("RESET_PAN_ZOOM","0","Reset pan and zoom to default"),TOGGLE_HELP:Z("TOOGLE_HELP","esc","Toggle help window"),TOGGLE_SPLIT_BORDER_VISIBLE:Z("TOGGLE_SPLIT_BORDER_VISIBLE","s","Toggle split border visible")},Y=Object.keys(K).reduce(function(e,t){return Object.assign(e,Object(m.a)({},K[t].name,K[t].keys))},{});console.log("KEY_MAP: ".concat(JSON.stringify(Y)));var q=function(e){var t=e.visible,n=e.onClick;return a.a.createElement("div",{className:y()("help",{hidden:!t})},a.a.createElement("div",{className:"help-header"},a.a.createElement("h3",{className:"padding10"},"Vivict - Vivict Video Comparison Tool"),a.a.createElement("div",{className:"close-button",onClick:function(){return n()}},a.a.createElement(S.i,null))),a.a.createElement("div",null,a.a.createElement("h4",{className:"padding10"},"Keybindings:"),X(),$(),Q()))},J=function(e){var t=e.onClick,n=e.className;return a.a.createElement("div",{className:"help-button "+n,onClick:function(e){return t(e)}},a.a.createElement(S.c,null))},X=function(){return Object.keys(K).map(function(e){var t=K[e];return a.a.createElement("div",{key:"keybinding-"+t.name},a.a.createElement("span",{className:"bold"},t.keys),"  "+t.description)})},$=function(){return a.a.createElement("h4",{className:"padding10"},"Copyright 2019 Sveriges Television AB.")},Q=function(){return a.a.createElement("a",{href:"https://github.com/SVT/vivict"},"Contribute on Github, released under MIT")};var ee=new URLSearchParams(window.location.search),te=ee.get("leftVideoUrl")||"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",ne=ee.get("rightVideoUrl")||te,ie=ee.get("leftVideoVariant")||0,ae=ee.get("rightVideoVariant")||1,re=Number(ee.get("position"))||0,oe=Boolean(ee.get("hideSourceSelector")),se=Boolean(ee.get("hideHelp")),ue={type:"url",name:te,url:te,variant:ie,position:re},ce={type:"url",name:ne,url:ne,variant:ae,position:re},le=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).shortCutHandlers=[[K.STEP_FORWARD,function(){return n.step(25)}],[K.STEP_FORWARD_FRAME,function(){return n.step(1)}],[K.STEP_BACKWARD_FRAME,function(){return n.step(-1)}],[K.STEP_BACKWARD,function(){return n.step(-25)}],[K.PLAY_PAUSE,function(){return n.playPause()}],[K.FULLSCREEN,function(){return n.fullscreen()}],[K.TOGGLE_TRACKING,function(){return n.toggleTracking()}],[K.LEFT_ONLY,function(){return n.splitView.setSplitPosition(100)}],[K.RIGHT_ONLY,function(){return n.splitView.setSplitPosition(0)}],[K.TIMESHIFT_INCREASE,function(){return n.changeOffset(1)}],[K.TIMESHIFT_DECREASE,function(){return n.changeOffset(-1)}],[K.TIMESHIFT_RESET,function(){return n.changeOffset(0)}],[K.ZOOM_IN,function(){return n.zoomIn()}],[K.ZOOM_OUT,function(){return n.zoomOut()}],[K.PAN_UP,function(){return n.pan(0,10)}],[K.PAN_DOWN,function(){return n.pan(0,-10)}],[K.PAN_RIGHT,function(){return n.pan(-10,0)}],[K.PAN_LEFT,function(){return n.pan(10,0)}],[K.REST_PAN_ZOOM,function(){return n.resetPanZoom()}],[K.PLAY,function(){return n.playForward()}],[K.PAUSE,function(){return n.pause()}],[K.TOGGLE_HELP,function(){return n.toggleShowHelp()}],[K.TOGGLE_SPLIT_BORDER_VISIBLE,function(){return n.toggleSplitBorderVisible()}]].reduce(function(e,t){var n=Object(v.a)(t,2),i=n[0],a=n[1];return Object.assign(e,Object(m.a)({},i.name,a))},{}),n.setVideoViewerRef=function(e){n.videoViewer=e},n.setRightVideoRef=function(e){console.log("setRightVideoRef",e),n.rightVideo=e},n.setLeftVideoRef=function(e){n.leftVideo=e},n.setSplitViewRef=function(e){n.splitView=e},n.state={playing:!1,duration:0,position:0,leftSource:{name:"NONE",url:null},rightSource:{name:"NONE",url:null},tracking:!0,splitBorderVisible:!0,rightVideoOffset:0,showHelp:!se,showSourceSelector:!oe,playReverse:!1,userDefinedPanZoom:!1},console.dir(n.state),n.onFullScreenChange=n.onFullScreenChange.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setPosition",value:function(e){this.setState({position:e})}},{key:"setPlaying",value:function(e){this.setState({playing:e})}},{key:"setLeftSource",value:function(e){this.setState({leftSource:e})}},{key:"setRightSource",value:function(e){this.setState({rightSource:e})}},{key:"toggleTracking",value:function(){this.setState({tracking:!this.state.tracking})}},{key:"changeOffset",value:function(e){var t=this;0===e?this.setState({rightVideoOffset:e}):this.setState({rightVideoOffset:this.state.rightVideoOffset+e}),this.state.playing?this.pause().then(function(){return t.play()}):this.seek(this.leftVideo.currentTime())}},{key:"playPause",value:function(){this.state.playing?this.pause():this.play()}},{key:"step",value:function(){var e=Object(d.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.rightVideo.currentTime()+.04*t,this.rightVideo.quickSeek(n),this.leftVideo.quickSeek(n);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"fullscreen",value:function(){var e;document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():(e=this.videoViewer).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"onTimeUpdate",value:function(e){this.setPosition(e)}},{key:"onDurationSet",value:function(e){this.setState({duration:e})}},{key:"syncPlayers",value:function(){this.leftVideo.seek(this.rightVideo.currentTime()),this.setPosition(this.leftVideo.currentTime())}},{key:"playForward",value:function(){var e=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.playing){e.next=3;break}return e.next=3,this.pause();case 3:return this.leftVideo.playbackRate=1,this.rightVideo.playbackRate=1,e.abrupt("return",this.play());case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"play",value:function(){var e=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.playing){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:return e.next=4,Promise.all([this.rightVideo.play(),this.leftVideo.play()]);case 4:this.setPlaying(!0);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"pause",value:function(){var e=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.playing){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:return this.rightVideo.pause(),this.leftVideo.pause(),this.setPlaying(!1),e.abrupt("return",this.seek(this.leftVideo.currentTime()));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"seek",value:function(){var e=Object(d.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({position:t}),e.abrupt("return",Promise.all([this.leftVideo.seek(t),this.rightVideo.seek(t+.04*this.state.rightVideoOffset)]));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onLeftSourceChange",value:function(){var e=Object(d.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.changeSource(this.leftVideo,t);case 2:this.setLeftSource(t),this.splitView.focus();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onRightSourceChange",value:function(){var e=Object(d.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.changeSource(this.rightVideo,t);case 2:this.setRightSource(t),this.splitView.focus();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"changeSource",value:function(){var e=Object(d.a)(f.a.mark(function e(t,n){var i,a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.state.playing,a=this.state.playReverse,e.next=4,this.pause();case 4:return r=t.currentTime(),console.log("".concat(JSON.stringify(t.props)," time: ").concat(r)),e.next=8,t.loadSource(n.url);case 8:return e.next=10,this.seek(r);case 10:if(!i){e.next=13;break}return e.next=13,this.play();case 13:if(!a){e.next=16;break}return e.next=16,this.playReverse();case 16:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"zoomIn",value:function(){this.leftVideo.zoomIn(),this.rightVideo.zoomIn(),this.setState({userDefinedPanZoom:!0})}},{key:"zoomOut",value:function(){this.leftVideo.zoomOut(),this.rightVideo.zoomOut(),this.setState({userDefinedPanZoom:!0})}},{key:"resetPanZoom",value:function(){this.leftVideo.resetPanZoom(),this.rightVideo.resetPanZoom(),this.setState({userDefinedPanZoom:!1})}},{key:"pan",value:function(e,t){this.leftVideo.pan(e,t),this.rightVideo.pan(e,t),this.setState({userDefinedPanZoom:!0})}},{key:"toggleShowHelp",value:function(){this.setState({showHelp:!this.state.showHelp})}},{key:"toggleSplitBorderVisible",value:function(){this.setState({splitBorderVisible:!this.state.splitBorderVisible})}},{key:"onFullScreenChange",value:function(){this.state.userDefinedPanZoom||this.resetPanZoom()}},{key:"componentDidMount",value:function(){this.splitView.focus(),this.seek(re).catch(function(e){return console.trace(e)}),this.videoViewer.addEventListener("fullscreenchange",this.onFullScreenChange)}},{key:"componentWillUnmount",value:function(){this.videoViewer.removeEventListener("fullscreenchange",this.onFullScreenChange)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"video-viewer",tabIndex:"0",ref:this.setVideoViewerRef},a.a.createElement(G,{position:this.state.position}),a.a.createElement(E.HotKeys,{className:"hotkeys-div",keyMap:Y,handlers:this.shortCutHandlers},a.a.createElement(H,{tracking:this.state.tracking,splitBorderVisible:this.state.splitBorderVisible,onDrag:function(t,n){return e.pan(t,n)},onClick:function(){return e.playPause()},ref:this.setSplitViewRef,leftSideContent:a.a.createElement(N,{muted:!0,ref:this.setLeftVideoRef})},a.a.createElement(N,{ref:this.setRightVideoRef,onTimeUpdate:function(t){return e.onTimeUpdate(t)},onDurationSet:function(t){return e.onDurationSet(t)}}),a.a.createElement("div",{className:y()("big-play-button",{hidden:this.state.playing||0!==this.state.position}),onClick:function(){return e.play()}},a.a.createElement(S.f,{size:"32px"}))),a.a.createElement(b,{visible:this.state.showSourceSelector,playing:this.state.playing,onPlay:function(){return e.playPause()},onStep:function(t){return e.step(t)},onFullscreen:function(){return e.fullscreen()},duration:this.state.duration,onSeek:function(t){return e.seek(t)},position:this.state.position}),a.a.createElement(D,{visible:this.state.showSourceSelector,className:"left-source-selector",defaultSource:ue,onChange:function(t){return e.onLeftSourceChange(t)}}),a.a.createElement(D,{visible:this.state.showSourceSelector,className:"right-source-selector",defaultSource:ce,onChange:function(t){return e.onRightSourceChange(t)}}),a.a.createElement(W,{offset:this.state.rightVideoOffset}),a.a.createElement(q,{visible:this.state.showHelp,onClick:function(){return e.toggleShowHelp()}}),a.a.createElement(J,{onClick:function(){return e.toggleShowHelp()}})))}}]),t}(i.Component),he=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(le,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.615c7bcb.chunk.js.map