(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1096:function(t,e,o){var n=o(1088),i=o(2043);o(2044),o(2045),n.registerCoordinateSystem("bmap",i),n.registerAction({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(t,e){e.eachComponent("bmap",(function(t){var e=t.getBMap(),o=e.getCenter();t.setCenterAndZoom([o.lng,o.lat],e.getZoom())}))}));e.version="1.0.0"},2043:function(t,e,o){var n,i=o(1088),a=i.util,r=i.graphic,p=i.matrix;function s(t,e){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._projection=new BMap.MercatorProjection}function m(t,e){return e=e||[0,0],a.map([0,1],(function(o){var n=e[o],i=t[o]/2,a=[],r=[];return a[o]=n-i,r[o]=n+i,a[1-o]=r[1-o]=e[1-o],Math.abs(this.dataToPoint(a)[o]-this.dataToPoint(r)[o])}),this)}s.prototype.dimensions=["lng","lat"],s.prototype.setZoom=function(t){this._zoom=t},s.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))},s.prototype.setMapOffset=function(t){this._mapOffset=t},s.prototype.getBMap=function(){return this._bmap},s.prototype.dataToPoint=function(t){var e=new BMap.Point(t[0],t[1]),o=this._bmap.pointToOverlayPixel(e),n=this._mapOffset;return[o.x-n[0],o.y-n[1]]},s.prototype.pointToData=function(t){var e=this._mapOffset;return[(t=this._bmap.overlayPixelToPoint({x:t[0]+e[0],y:t[1]+e[1]})).lng,t.lat]},s.prototype.getViewRect=function(){var t=this._api;return new r.BoundingRect(0,0,t.getWidth(),t.getHeight())},s.prototype.getRoamTransform=function(){return p.create()},s.prototype.prepareCustoms=function(t){var e=this.getViewRect();return{coordSys:{type:"bmap",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:a.bind(this.dataToPoint,this),size:a.bind(m,this)}}},s.dimensions=s.prototype.dimensions,s.create=function(t,e){var o,i=e.getDom();t.eachComponent("bmap",(function(t){var a=e.getZr().painter,r=a.getViewportRoot();if("undefined"==typeof BMap)throw new Error("BMap api is not loaded");if(n=n||function(){function t(t){this._root=t}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){return t.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}(),o)throw new Error("Only one bmap component can exist");if(!t.__bmap){var p=i.querySelector(".ec-extension-bmap");p&&(r.style.left="0px",r.style.top="0px",i.removeChild(p)),(p=document.createElement("div")).style.cssText="width:100%;height:100%",p.classList.add("ec-extension-bmap"),i.appendChild(p);var m=t.get("mapOptions")||{};delete m.mapType;var c=t.__bmap=new BMap.Map(p,m),l=new n(r);c.addOverlay(l),a.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}c=t.__bmap;var d=t.get("center"),f=t.get("zoom");if(d&&f){var h=c.getCenter(),u=c.getZoom();if(t.centerOrZoomChanged([h.lng,h.lat],u)){var y=new BMap.Point(d[0],d[1]);c.centerAndZoom(y,f)}}(o=new s(c,e)).setMapOffset(t.__mapOffset||[0,0]),o.setZoom(f),o.setCenter(d),t.coordinateSystem=o})),t.eachSeries((function(t){"bmap"===t.get("coordinateSystem")&&(t.coordinateSystem=o)}))};var c=s;t.exports=c},2044:function(t,e,o){var n=o(1088).extendComponentModel({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,e){this.option.center=t,this.option.zoom=e},centerOrZoomChanged:function(t,e){var o,n,i=this.option;return o=t,n=i.center,!(o&&n&&o[0]===n[0]&&o[1]===n[1]&&e===i.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}});t.exports=n},2045:function(t,e,o){var n=o(1088);function i(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}var a=n.extendComponentView({type:"bmap",render:function(t,e,o){var a=!0,r=t.getBMap(),p=o.getZr().painter.getViewportRoot(),s=t.coordinateSystem,m=function(e,n){if(!a){var i=p.parentNode.parentNode.parentNode,r=[-parseInt(i.style.left,10)||0,-parseInt(i.style.top,10)||0];p.style.left=r[0]+"px",p.style.top=r[1]+"px",s.setMapOffset(r),t.__mapOffset=r,o.dispatchAction({type:"bmapRoam"})}};function c(){a||o.dispatchAction({type:"bmapRoam"})}r.removeEventListener("moving",this._oldMoveHandler),r.removeEventListener("moveend",this._oldMoveHandler),r.removeEventListener("zoomend",this._oldZoomEndHandler),r.addEventListener("moving",m),r.addEventListener("moveend",m),r.addEventListener("zoomend",c),this._oldMoveHandler=m,this._oldZoomEndHandler=c;var l=t.get("roam");l&&"scale"!==l?r.enableDragging():r.disableDragging(),l&&"move"!==l?(r.enableScrollWheelZoom(),r.enableDoubleClickZoom(),r.enablePinchToZoom()):(r.disableScrollWheelZoom(),r.disableDoubleClickZoom(),r.disablePinchToZoom());var d=t.__mapStyle,f=t.get("mapStyle")||{},h=JSON.stringify(f);JSON.stringify(d)!==h&&(i(y)||r.setMapStyle(n.util.clone(f)),t.__mapStyle=JSON.parse(h));var u=t.__mapStyle2,y=t.get("mapStyleV2")||{},g=JSON.stringify(y);JSON.stringify(u)!==g&&(i(y)||r.setMapStyleV2(n.util.clone(y)),t.__mapStyle2=JSON.parse(g)),a=!1}});t.exports=a}}]);