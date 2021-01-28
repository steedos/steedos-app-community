;/*!store/Page.ts*/
amis.define("c3d9fbb",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageStore=void 0;var i=e("2426036");t.PageStore=i.types.model("Page",{id:i.types.identifier,icon:"",path:"",label:"",schema:i.types.frozen({})}).views(function(){return{}}).actions(function(e){function t(t){e.schema=t}return{updateSchema:t}})});
;/*!store/index.ts*/
amis.define("8586189",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainStore=void 0;var n=e("849c8c1"),r=e("2426036"),a=e("c3d9fbb");t.MainStore=r.types.model("MainStore",{pages:r.types.optional(r.types.map(a.PageStore),{}),theme:"default",asideFixed:!0,asideFolded:!1,offScreen:!1,addPageIsOpen:!1,preview:!1,isMobile:!1,schema:r.types.frozen()}).views(function(e){return{get fetcher(){return r.getEnv(e).fetcher},get notify(){return r.getEnv(e).notify},get alert(){return r.getEnv(e).alert},get copy(){return r.getEnv(e).copy}}}).actions(function(e){function t(){e.asideFolded=!e.asideFolded}function o(){e.asideFixed=!e.asideFixed}function c(){e.offScreen=!e.offScreen}function i(t){e.addPageIsOpen=t}function s(t){e.pages.set(t.id,a.PageStore.create(n.__assign({},t)))}function d(t){e.pages.delete(t)}function u(t){e.schema=t}function f(t){e.preview=t}function l(t){e.isMobile=t}return{toggleAsideFolded:t,toggleAsideFixed:o,toggleOffScreen:c,setAddPageIsOpen:i,addPage:s,removePageAt:d,updatePageSchemaAt:r.flow(function(t){var a,o,c;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,r.getEnv(e).fetcher({url:r.getEnv(e).rootUrl()+"/api/v4/community_page/"+t,method:"put",data:{$set:{schema:JSON.stringify(e.schema)}}})];case 1:return a=n.sent(),o=a.data,s({icon:"",id:t,path:o.url,label:o.label,schema:{type:"page",title:o.title,body:"这是你刚刚新增的页面"+t}}),[3,3];case 2:return c=n.sent(),console.error("Failed to fetch projects",c),[3,3];case 3:return[2]}})}),updateSchema:u,setPreview:f,setIsMobile:l,fetchPage:r.flow(function(t){var a,o,c,i;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,r.getEnv(e).fetcher({url:r.getEnv(e).rootUrl()+"/api/v4/community_page/"+t,method:"get"})];case 1:if(a=n.sent(),o=a.data,c={type:"page",title:o.title,body:"这是你刚刚新增的页面"},o.schema)try{c=JSON.parse(o.schema)}catch(d){console.error(d)}return s({icon:"",id:t,path:o.url,label:o.title,schema:c}),[3,3];case 2:return i=n.sent(),console.error("Failed to fetch projects",i),[3,3];case 3:return[2]}})}),afterCreate:function(){if(console.log("afterCreate...."),"undefined"!=typeof window){var t=new URLSearchParams(window.location.search),n=t.get("id");e.fetchPage(n)}}}})});
;/*!route/index.tsx*/
amis.define("11207ed",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("849c8c1"),r=n.__importDefault(e("cc4bbf0")),a=e("167c905"),o=e("f7998ad"),l=e("024943c"),c=r.default.lazy(function(){return Promise.resolve().then(function(){return new Promise(function(t){e(["816c31c"],function(e){t(n.__importStar(e))})})})}),u=r.default.lazy(function(){return Promise.resolve().then(function(){return new Promise(function(t){e(["218f7cb"],function(e){t(n.__importStar(e))})})})});t.default=l.observer(function(e){var t=e.store,n="";return t.pages.forEach(function(e){n=e.path}),console.log("redirectTo",n),r.default.createElement(o.HashRouter,null,r.default.createElement("div",{className:"routes-wrapper"},r.default.createElement(a.ToastComponent,{key:"toast",position:"top-right",theme:t.theme}),r.default.createElement(a.AlertComponent,{key:"alert",theme:t.theme}),r.default.createElement(r.default.Suspense,{fallback:r.default.createElement(a.Spinner,{overlay:!0,className:"m-t-lg",size:"lg"})},r.default.createElement(o.Switch,null,n&&r.default.createElement(o.Redirect,{to:"/"+n,from:"/",exact:!0}),r.default.createElement(o.Route,{path:"/edit/:id",component:u}),r.default.createElement(o.Route,{component:c})))))})});
;/*!App.tsx*/
amis.define("4c5556c",function(e,t){"use strict";function r(){var e=window.store=i.MainStore.create({},{fetcher:function(e){var t=e.url,r=e.method,a=e.data,n=e.responseType,o=e.config,c=e.headers;return o=o||{},o.withCredentials=!0,n&&(o.responseType=n),o.cancelExecutor&&(o.cancelToken=new f.default.CancelToken(o.cancelExecutor)),o.headers=c||{},"post"!==r&&"put"!==r&&"patch"!==r?(a&&(o.params=a),f.default[r](t,o)):(a&&a instanceof FormData?(o.headers=o.headers||{},o.headers["Content-Type"]="multipart/form-data"):!a||"string"==typeof a||a instanceof Blob||a instanceof ArrayBuffer||(a=JSON.stringify(a),o.headers=o.headers||{},o.headers["Content-Type"]="application/json"),f.default[r](t,a,o))},isCancel:function(e){return f.default.isCancel(e)},notify:function(e,t){c.toast[e]?c.toast[e](t,"error"===e?"系统错误":"系统消息"):console.warn("[Notify]",e,t),console.log("[notify]",e,t)},alert:c.alert,confirm:c.confirm,copy:function(e,t){void 0===t&&(t={});var r=u.default(e,t);return r&&(!t||t.shutup!==!0)&&c.toast.info("内容已拷贝到剪切板"),r},rootUrl:function(){return""}});return n.default.createElement(o.Provider,{store:e},n.default.createElement(s.default,{store:e}))}Object.defineProperty(t,"__esModule",{value:!0});var a=e("849c8c1"),n=a.__importDefault(e("cc4bbf0")),o=e("024943c"),c=e("167c905"),f=a.__importDefault(e("a5149e9")),i=e("8586189"),s=a.__importDefault(e("11207ed")),u=a.__importDefault(e("6f82c2d"));t.default=r});