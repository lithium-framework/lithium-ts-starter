// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _core = require("@lithium-framework/core");
var _helloWorld = require("./components/hello-world");
var _indexScss = require("./index.scss");
(0, _core.render)((0, _core.html)`<main-application>${(0, _helloWorld.HelloWorld)}</main-application>`, document.body);

},{"@lithium-framework/core":"hmv1B","./index.scss":"lJZlQ","./components/hello-world":"hKwCj"}],"hmv1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// namespace Lithium{
//   export const DOM = require('./dom/index.js');
//   export const Decorators = require('./decorators/index.js');
//   export const Directives = require('./directives/index.js');
//   export const Utils = require('./utils/index.js');
//   export const Component = require('./webComponent/index.js');
// };
// export default Lithium;
// (() => {
//   if(globalThis.window){
//     window['lithium'] = {
//     };
//   }
// })()
parcelHelpers.export(exports, "ComponentExecutionContext", ()=>$ed2a677aa7485959$export$6dad889f9b7e7685);
parcelHelpers.export(exports, "render", ()=>$ed2a677aa7485959$export$b3890eb0ae9dca99);
parcelHelpers.export(exports, "attrState", ()=>$b1b98f19caab25c2$export$683a0e8baad8b9c3);
parcelHelpers.export(exports, "attr", ()=>(0, _fastElement.attr));
parcelHelpers.export(exports, "state", ()=>$a1f8df21dd3b8ee9$export$ca000e230c0caa3e);
parcelHelpers.export(exports, "when", ()=>(0, _fastElement.when));
parcelHelpers.export(exports, "repeat", ()=>(0, _fastElement.repeat));
parcelHelpers.export(exports, "children", ()=>(0, _fastElement.children));
parcelHelpers.export(exports, "elements", ()=>(0, _fastElement.elements));
parcelHelpers.export(exports, "slotted", ()=>(0, _fastElement.slotted));
parcelHelpers.export(exports, "AsyncAppendBindig", ()=>$21522158c10703ef$export$ca3487b83ec6860a);
parcelHelpers.export(exports, "AsyncAppendDirective", ()=>$21522158c10703ef$export$5761d9f85430a54b);
parcelHelpers.export(exports, "asyncAppend", ()=>$21522158c10703ef$export$eaa89ade56b7c0c1);
parcelHelpers.export(exports, "createRef", ()=>$f6651d38d609160e$export$7d1e3a5e95ceca43);
parcelHelpers.export(exports, "RefDirective", ()=>$f6651d38d609160e$export$1ef8aea9a6de98d);
parcelHelpers.export(exports, "ref", ()=>$f6651d38d609160e$export$eff4d24c3ff7876e);
parcelHelpers.export(exports, "StateBindig", ()=>$c66c6ea353620255$export$28205fa712822499);
parcelHelpers.export(exports, "StateDirective", ()=>$c66c6ea353620255$export$792c882b75ca2192);
parcelHelpers.export(exports, "useState", ()=>$c66c6ea353620255$export$60241385465d0a34);
parcelHelpers.export(exports, "StyleBindig", ()=>$6e530dd7df9f7fe5$export$81053cd05d55c9d8);
parcelHelpers.export(exports, "StyleDirective", ()=>$6e530dd7df9f7fe5$export$18211b6e76035cfa);
parcelHelpers.export(exports, "style", ()=>$6e530dd7df9f7fe5$export$1d567c320f4763bc);
parcelHelpers.export(exports, "UntilBindig", ()=>$15db1e855f042fe6$export$f36d8f10294685f8);
parcelHelpers.export(exports, "UntilDirective", ()=>$15db1e855f042fe6$export$51c6edf8ee19b71a);
parcelHelpers.export(exports, "until", ()=>$15db1e855f042fe6$export$a40009bd2c363351);
parcelHelpers.export(exports, "Observable", ()=>$fde9406d76ec24a9$re_export$Observable);
parcelHelpers.export(exports, "createObservableObject", ()=>$592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41);
parcelHelpers.export(exports, "ObservableObject", ()=>$f0b90d4a5f4da766$export$b176171395436676);
parcelHelpers.export(exports, "State", ()=>(0, _state.State));
parcelHelpers.export(exports, "createState", ()=>(0, _state.createState));
parcelHelpers.export(exports, "createStorage", ()=>(0, _context.createStorage));
parcelHelpers.export(exports, "uuid", ()=>(0, _huid.uuid));
parcelHelpers.export(exports, "customElement", ()=>(0, _esm.customElement));
parcelHelpers.export(exports, "css", ()=>(0, _esm.css));
parcelHelpers.export(exports, "html", ()=>(0, _esm.html));
parcelHelpers.export(exports, "ViewTemplate", ()=>(0, _esm.ViewTemplate));
parcelHelpers.export(exports, "HTMLView", ()=>(0, _esm.HTMLView));
parcelHelpers.export(exports, "volatile", ()=>(0, _esm.volatile));
parcelHelpers.export(exports, "WebComponent", ()=>$284c1ee70f828408$export$7f8b9f308979d41d);
var _esm = require("@microsoft/fast-element/dist/esm");
var _fastElement = require("@microsoft/fast-element");
var _state = require("@lithium-framework/state");
var _context = require("@lithium-framework/context");
var _huid = require("@lithium-framework/huid");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $ed2a677aa7485959$exports = {};
$parcel$export($ed2a677aa7485959$exports, "ComponentExecutionContext", ()=>$ed2a677aa7485959$export$6dad889f9b7e7685);
$parcel$export($ed2a677aa7485959$exports, "render", ()=>$ed2a677aa7485959$export$b3890eb0ae9dca99);
class $f0b90d4a5f4da766$export$b176171395436676 extends Object {
    static init(initialObject) {
        let observabe = new $f0b90d4a5f4da766$export$b176171395436676(initialObject);
        return observabe.createProxy();
    }
    constructor(initialObject){
        super();
        this.$data = {};
        this.set = (key, value)=>{
            this.$data[`_${key}`] = value;
            (0, _esm.Observable).defineProperty(this.$data, key);
            return this.$data[key];
        };
        Object.keys(initialObject).forEach((key)=>{
            this.set(key, initialObject[key]);
        });
    }
    createProxy() {
        return new Proxy(this.$data, {
            get (store, propKey) {
                let result = undefined;
                try {
                    result = store[propKey];
                } catch (error) {
                    console.error(error);
                } finally{
                    return result;
                }
            },
            set (store, propKey, value) {
                if (store[propKey]) store[propKey] = value;
                else {
                    store[`_${propKey}`] = value;
                    (0, _esm.Observable).defineProperty(store, propKey);
                }
                return true;
            }
        });
    }
}
function $592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41(initialObject) {
    return $f0b90d4a5f4da766$export$b176171395436676.init(initialObject);
}
var $535bb7ac3b1a1d6d$exports = {};
var $b1b98f19caab25c2$exports = {};
$parcel$export($b1b98f19caab25c2$exports, "attrState", ()=>$b1b98f19caab25c2$export$683a0e8baad8b9c3);
$parcel$export($b1b98f19caab25c2$exports, "attr", ()=>(0, _fastElement.attr));
var $a1f8df21dd3b8ee9$exports = {};
$parcel$export($a1f8df21dd3b8ee9$exports, "state", ()=>$a1f8df21dd3b8ee9$export$ca000e230c0caa3e);
function $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(target, propertyKey, value = null, constructible = false) {
    if (constructible) target.constructor.states = target.constructor.states || {};
    Object.defineProperty(target, propertyKey, {
        get () {
            return target.$states[propertyKey];
        },
        set (newValue) {
            target.$states[propertyKey] = newValue;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    (0, _fastElement.observable)(target, propertyKey);
    if (value) target[propertyKey] = value;
}
function $b1b98f19caab25c2$export$683a0e8baad8b9c3(options = {}) {
    return (target, propertyKey)=>{
        (0, _fastElement.attr)(options)(target, propertyKey);
        $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(target, propertyKey);
    };
}
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $b1b98f19caab25c2$exports);
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $a1f8df21dd3b8ee9$exports);
function $ed2a677aa7485959$var$_classPrivateFieldLooseBase(e, t) {
    if (!({}).hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
    return e;
}
var $ed2a677aa7485959$var$id = 0;
function $ed2a677aa7485959$var$_classPrivateFieldLooseKey(e) {
    return "__private_" + $ed2a677aa7485959$var$id++ + "_" + e;
}
// import './router/index.js'
// import './application/index.js'
var $ed2a677aa7485959$var$_state_keys = /*#__PURE__*/ $ed2a677aa7485959$var$_classPrivateFieldLooseKey("_state_keys");
class $ed2a677aa7485959$export$6dad889f9b7e7685 {
    get states() {
        return this.$states;
    }
    constructor(data){
        this.$states = $f0b90d4a5f4da766$export$b176171395436676.init({});
        Object.defineProperty(this, $ed2a677aa7485959$var$_state_keys, {
            writable: true,
            value: []
        });
        this.createState = (key, value)=>{
            if ($ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].includes(key)) return this.useState(key);
            Object.defineProperty(this, key, {
                get () {
                    return JSON.parse(this.states[key]);
                },
                set (value) {
                    if (!$ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].includes(key)) {
                        $ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].push(key);
                        this.$states = $f0b90d4a5f4da766$export$b176171395436676.init({
                            [key]: JSON.stringify(value),
                            ...Object.fromEntries(new Map(Array.from($ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys], (key)=>{
                                return [
                                    key,
                                    this.$states[`${key}`]
                                ];
                            })))
                        });
                    }
                    this.$states[key] = JSON.stringify(value);
                }
            });
            this[key] = value;
            return this.useState(key);
        };
        this.useState = (key)=>{
            return [
                this[key],
                (newValue)=>{
                    console.log({
                        newValue: newValue
                    });
                    this[key] = newValue;
                }
            ];
        };
        this.createConsumable = (key, value)=>{
            $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(this, key, value, false);
        };
        Object.assign(this, data);
    }
    static init(data) {
        return new $ed2a677aa7485959$export$6dad889f9b7e7685(data);
    }
}
function $ed2a677aa7485959$export$b3890eb0ae9dca99(template, container = document.body, data = {}) {
    let context = $ed2a677aa7485959$export$6dad889f9b7e7685.init(data);
    return template.render(context, container);
} // export * from './router';
// export * from './application/index.js';
var $5193209399721411$exports = {};
$parcel$export($5193209399721411$exports, "when", ()=>(0, _fastElement.when));
$parcel$export($5193209399721411$exports, "repeat", ()=>(0, _fastElement.repeat));
$parcel$export($5193209399721411$exports, "children", ()=>(0, _fastElement.children));
$parcel$export($5193209399721411$exports, "elements", ()=>(0, _fastElement.elements));
$parcel$export($5193209399721411$exports, "slotted", ()=>(0, _fastElement.slotted));
var $21522158c10703ef$exports = {};
$parcel$export($21522158c10703ef$exports, "AsyncAppendBindig", ()=>$21522158c10703ef$export$ca3487b83ec6860a);
$parcel$export($21522158c10703ef$exports, "AsyncAppendDirective", ()=>$21522158c10703ef$export$5761d9f85430a54b);
$parcel$export($21522158c10703ef$exports, "asyncAppend", ()=>$21522158c10703ef$export$eaa89ade56b7c0c1);
class $21522158c10703ef$export$ca3487b83ec6860a extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $21522158c10703ef$export$5761d9f85430a54b extends (0, _fastElement.HTMLBindingDirective) {
    constructor(fn, callback){
        super(new $21522158c10703ef$export$ca3487b83ec6860a((x)=>null));
        this.fn = null;
        this.callback = null;
        Object.assign(this, {
            fn: fn,
            callback: callback
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                this.fn.then((result)=>{
                    this.callback(result).render(source, target instanceof HTMLElement ? target : target.parentElement);
                }).catch((error)=>{
                    console.error(error);
                    (0, _fastElement.html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, callback) {
        return new $21522158c10703ef$export$5761d9f85430a54b(fn, callback);
    }
}
(0, _fastElement.HTMLDirective).define($21522158c10703ef$export$5761d9f85430a54b);
const $21522158c10703ef$export$eaa89ade56b7c0c1 = (fn, callback)=>$21522158c10703ef$export$5761d9f85430a54b.use(fn, callback);
var $f6651d38d609160e$exports = {};
$parcel$export($f6651d38d609160e$exports, "createRef", ()=>$f6651d38d609160e$export$7d1e3a5e95ceca43);
$parcel$export($f6651d38d609160e$exports, "RefDirective", ()=>$f6651d38d609160e$export$1ef8aea9a6de98d);
$parcel$export($f6651d38d609160e$exports, "ref", ()=>$f6651d38d609160e$export$eff4d24c3ff7876e);
function $f6651d38d609160e$export$7d1e3a5e95ceca43() {
    return {
        value: null
    };
}
class $f6651d38d609160e$export$1ef8aea9a6de98d extends (0, _fastElement.StatelessAttachedAttributeDirective) {
    constructor(options){
        super(options);
        this.options = null;
        Object.assign(this, {
            options: options
        });
    }
    bind(controller) {
        let { lastChild: target } = controller;
        this.options.value = target;
    }
    static use(options) {
        return new $f6651d38d609160e$export$1ef8aea9a6de98d(options);
    }
}
(0, _fastElement.HTMLDirective).define($f6651d38d609160e$export$1ef8aea9a6de98d);
const $f6651d38d609160e$export$eff4d24c3ff7876e = (options)=>$f6651d38d609160e$export$1ef8aea9a6de98d.use(options);
var $c66c6ea353620255$exports = {};
$parcel$export($c66c6ea353620255$exports, "StateBindig", ()=>$c66c6ea353620255$export$28205fa712822499);
$parcel$export($c66c6ea353620255$exports, "StateDirective", ()=>$c66c6ea353620255$export$792c882b75ca2192);
$parcel$export($c66c6ea353620255$exports, "useState", ()=>$c66c6ea353620255$export$60241385465d0a34);
// import { ViewTemplate, HTMLBindingDirective, ExecutionContext } from '@microsoft/fast-element';
class $c66c6ea353620255$export$28205fa712822499 extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $c66c6ea353620255$export$792c882b75ca2192 extends (0, _fastElement.HTMLBindingDirective) {
    get state() {
        return this._state.mutator[0];
    }
    set state(value) {
        this._state.mutator[1](value);
    }
    constructor(state, callback){
        super(new $c66c6ea353620255$export$28205fa712822499((x)=>null));
        this._state = null;
        this._callback = null;
        this._state = state;
        this._callback = callback;
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        let view = null;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                if (this._callback) {
                    this._state.subscribe(()=>{
                        view.dispose();
                        view = this._callback(this.state).render(source, target.parentElement);
                    });
                    view = this._callback(this.state).render(source, target.parentElement);
                } else {
                    this._state.subscribe(()=>{
                        if ("textContent" in target) target.textContent = `${this.state}`;
                    });
                    if ("textContent" in target) target.textContent = `${this.state}`;
                }
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(state, callback) {
        return new $c66c6ea353620255$export$792c882b75ca2192(state, callback);
    }
}
(0, _fastElement.HTMLDirective).define($c66c6ea353620255$export$792c882b75ca2192);
const $c66c6ea353620255$export$60241385465d0a34 = (state, callback)=>$c66c6ea353620255$export$792c882b75ca2192.use(state, callback);
var $6e530dd7df9f7fe5$exports = {};
$parcel$export($6e530dd7df9f7fe5$exports, "StyleBindig", ()=>$6e530dd7df9f7fe5$export$81053cd05d55c9d8);
$parcel$export($6e530dd7df9f7fe5$exports, "StyleDirective", ()=>$6e530dd7df9f7fe5$export$18211b6e76035cfa);
$parcel$export($6e530dd7df9f7fe5$exports, "style", ()=>$6e530dd7df9f7fe5$export$1d567c320f4763bc);
class $6e530dd7df9f7fe5$export$81053cd05d55c9d8 extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $6e530dd7df9f7fe5$export$18211b6e76035cfa extends (0, _fastElement.HTMLBindingDirective) {
    constructor(css){
        super(new $6e530dd7df9f7fe5$export$81053cd05d55c9d8((x)=>null));
        this.css = null;
        Object.assign(this, {
            css: css
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        let view = null;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                if (target instanceof HTMLElement) Object.assign(target.style, this.css);
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(css) {
        return new $6e530dd7df9f7fe5$export$18211b6e76035cfa(css);
    }
}
(0, _fastElement.HTMLDirective).define($6e530dd7df9f7fe5$export$18211b6e76035cfa);
const $6e530dd7df9f7fe5$export$1d567c320f4763bc = (css)=>$6e530dd7df9f7fe5$export$18211b6e76035cfa.use(css);
var $15db1e855f042fe6$exports = {};
$parcel$export($15db1e855f042fe6$exports, "UntilBindig", ()=>$15db1e855f042fe6$export$f36d8f10294685f8);
$parcel$export($15db1e855f042fe6$exports, "UntilDirective", ()=>$15db1e855f042fe6$export$51c6edf8ee19b71a);
$parcel$export($15db1e855f042fe6$exports, "until", ()=>$15db1e855f042fe6$export$a40009bd2c363351);
class $15db1e855f042fe6$export$f36d8f10294685f8 extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $15db1e855f042fe6$export$51c6edf8ee19b71a extends (0, _fastElement.HTMLBindingDirective) {
    constructor(fn, template){
        super(new $15db1e855f042fe6$export$f36d8f10294685f8((x)=>null));
        this.fn = null;
        this.template = null;
        Object.assign(this, {
            fn: fn,
            template: template
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                let loading = this.template.render(source, target instanceof HTMLElement ? target : target.parentElement);
                this.fn.then((result)=>{
                    loading.dispose();
                    result.render(source, target instanceof HTMLElement ? target : target.parentElement);
                }).catch((error)=>{
                    console.error(error);
                    loading.dispose();
                    (0, _fastElement.html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, template) {
        return new $15db1e855f042fe6$export$51c6edf8ee19b71a(fn, template);
    }
}
(0, _fastElement.HTMLDirective).define($15db1e855f042fe6$export$51c6edf8ee19b71a);
const $15db1e855f042fe6$export$a40009bd2c363351 = (fn, template)=>$15db1e855f042fe6$export$51c6edf8ee19b71a.use(fn, template);
$parcel$exportWildcard($5193209399721411$exports, $21522158c10703ef$exports);
$parcel$exportWildcard($5193209399721411$exports, $f6651d38d609160e$exports);
$parcel$exportWildcard($5193209399721411$exports, $c66c6ea353620255$exports);
$parcel$exportWildcard($5193209399721411$exports, $6e530dd7df9f7fe5$exports);
$parcel$exportWildcard($5193209399721411$exports, $15db1e855f042fe6$exports);
var $fde9406d76ec24a9$exports = {};
$parcel$export($fde9406d76ec24a9$exports, "Observable", ()=>$fde9406d76ec24a9$re_export$Observable);
$parcel$export($fde9406d76ec24a9$exports, "createObservableObject", ()=>$592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41);
$parcel$export($fde9406d76ec24a9$exports, "ObservableObject", ()=>$f0b90d4a5f4da766$export$b176171395436676);
$parcel$export($fde9406d76ec24a9$exports, "State", ()=>(0, _state.State));
$parcel$export($fde9406d76ec24a9$exports, "createState", ()=>(0, _state.createState));
$parcel$export($fde9406d76ec24a9$exports, "createStorage", ()=>(0, _context.createStorage));
$parcel$export($fde9406d76ec24a9$exports, "uuid", ()=>(0, _huid.uuid));
// export{
//   Observable,
//   volatile,
// State,
// createState,
// createStorage,
// Storage, 
// StorageKeys, 
// StorageValues, 
// StateValidator,
// ComponentId,
// Segment,
// ParentSegementId,
// CollectionId,
// HUID,
// HierarchicalUUIDOptions,
// uuid
// }
var $c5a7ff2cef84a00c$exports = {};
$parcel$export($c5a7ff2cef84a00c$exports, "customElement", ()=>(0, _esm.customElement));
$parcel$export($c5a7ff2cef84a00c$exports, "css", ()=>(0, _esm.css));
$parcel$export($c5a7ff2cef84a00c$exports, "html", ()=>(0, _esm.html));
$parcel$export($c5a7ff2cef84a00c$exports, "ViewTemplate", ()=>(0, _esm.ViewTemplate));
$parcel$export($c5a7ff2cef84a00c$exports, "HTMLView", ()=>(0, _esm.HTMLView));
$parcel$export($c5a7ff2cef84a00c$exports, "volatile", ()=>(0, _esm.volatile));
$parcel$export($c5a7ff2cef84a00c$exports, "WebComponent", ()=>$284c1ee70f828408$export$7f8b9f308979d41d);
class $284c1ee70f828408$export$7f8b9f308979d41d extends (0, _fastElement.FASTElement) {
    constructor(){
        super();
        /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
    instance property named `` on the `WebComponent` class. This property is being set to the
    result of calling the `init` method of the `ObservableObject` class, passing in the initial state
    values defined in the `states` static property of the `WebComponent` class
    (`this.constructor["states"]`). */ this.$states = $f0b90d4a5f4da766$export$b176171395436676.init(this.constructor["states"]);
        Object.keys(this.constructor["states"]).forEach((key)=>{
            // delete this[key];
            Object.defineProperty(this, key, {
                get () {
                    return this.$states[key];
                },
                set (value) {
                    this.$states[key] = value;
                }
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
/* The `static states = {};` line is declaring a static property named `states` on the `WebComponent`
class and initializing it as an empty object `{}`. This property is intended to hold the initial
state values for the component. By defining it as a static property, it is shared among all
instances of the `WebComponent` class rather than being specific to individual instances. This
allows all instances of the class to access and modify the same set of state values. */ $284c1ee70f828408$export$7f8b9f308979d41d.states = {};
$284c1ee70f828408$export$7f8b9f308979d41d.define = (0, _fastElement.FASTElement).define;

},{"@microsoft/fast-element/dist/esm":"db3kA","@microsoft/fast-element":"db3kA","@lithium-framework/state":"5wrfK","@lithium-framework/context":"aHGLq","@lithium-framework/huid":"aUhvD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db3kA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAST", ()=>(0, _platformJs.FAST));
parcelHelpers.export(exports, "emptyArray", ()=>(0, _platformJs.emptyArray));
// DOM
parcelHelpers.export(exports, "DOMAspect", ()=>(0, _domJs.DOMAspect));
parcelHelpers.export(exports, "DOM", ()=>(0, _domJs.DOM));
// Observation
parcelHelpers.export(exports, "ExecutionContext", ()=>(0, _observableJs.ExecutionContext));
parcelHelpers.export(exports, "Observable", ()=>(0, _observableJs.Observable));
parcelHelpers.export(exports, "observable", ()=>(0, _observableJs.observable));
parcelHelpers.export(exports, "SourceLifetime", ()=>(0, _observableJs.SourceLifetime));
parcelHelpers.export(exports, "volatile", ()=>(0, _observableJs.volatile));
parcelHelpers.export(exports, "PropertyChangeNotifier", ()=>(0, _notifierJs.PropertyChangeNotifier));
parcelHelpers.export(exports, "SubscriberSet", ()=>(0, _notifierJs.SubscriberSet));
parcelHelpers.export(exports, "ArrayObserver", ()=>(0, _arraysJs.ArrayObserver));
parcelHelpers.export(exports, "lengthOf", ()=>(0, _arraysJs.lengthOf));
parcelHelpers.export(exports, "Splice", ()=>(0, _arraysJs.Splice));
parcelHelpers.export(exports, "SpliceStrategy", ()=>(0, _arraysJs.SpliceStrategy));
parcelHelpers.export(exports, "SpliceStrategySupport", ()=>(0, _arraysJs.SpliceStrategySupport));
parcelHelpers.export(exports, "Updates", ()=>(0, _updateQueueJs.Updates));
// Binding
parcelHelpers.export(exports, "Binding", ()=>(0, _bindingJs.Binding));
parcelHelpers.export(exports, "listener", ()=>(0, _oneWayJs.listener));
parcelHelpers.export(exports, "oneWay", ()=>(0, _oneWayJs.oneWay));
parcelHelpers.export(exports, "oneTime", ()=>(0, _oneTimeJs.oneTime));
parcelHelpers.export(exports, "normalizeBinding", ()=>(0, _normalizeJs.normalizeBinding));
// Styles
parcelHelpers.export(exports, "ElementStyles", ()=>(0, _elementStylesJs.ElementStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssJs.css));
parcelHelpers.export(exports, "cssDirective", ()=>(0, _cssDirectiveJs.cssDirective));
parcelHelpers.export(exports, "CSSDirective", ()=>(0, _cssDirectiveJs.CSSDirective));
parcelHelpers.export(exports, "CSSBindingDirective", ()=>(0, _cssBindingDirectiveJs.CSSBindingDirective));
// Templating
parcelHelpers.export(exports, "html", ()=>(0, _templateJs.html));
parcelHelpers.export(exports, "InlineTemplateDirective", ()=>(0, _templateJs.InlineTemplateDirective));
parcelHelpers.export(exports, "ViewTemplate", ()=>(0, _templateJs.ViewTemplate));
parcelHelpers.export(exports, "Compiler", ()=>(0, _compilerJs.Compiler));
parcelHelpers.export(exports, "Markup", ()=>(0, _markupJs.Markup));
parcelHelpers.export(exports, "Parser", ()=>(0, _markupJs.Parser));
parcelHelpers.export(exports, "HTMLBindingDirective", ()=>(0, _htmlBindingDirectiveJs.HTMLBindingDirective));
parcelHelpers.export(exports, "htmlDirective", ()=>(0, _htmlDirectiveJs.htmlDirective));
parcelHelpers.export(exports, "HTMLDirective", ()=>(0, _htmlDirectiveJs.HTMLDirective));
parcelHelpers.export(exports, "StatelessAttachedAttributeDirective", ()=>(0, _htmlDirectiveJs.StatelessAttachedAttributeDirective));
parcelHelpers.export(exports, "ref", ()=>(0, _refJs.ref));
parcelHelpers.export(exports, "RefDirective", ()=>(0, _refJs.RefDirective));
parcelHelpers.export(exports, "when", ()=>(0, _whenJs.when));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJs.repeat));
parcelHelpers.export(exports, "RepeatBehavior", ()=>(0, _repeatJs.RepeatBehavior));
parcelHelpers.export(exports, "RepeatDirective", ()=>(0, _repeatJs.RepeatDirective));
parcelHelpers.export(exports, "slotted", ()=>(0, _slottedJs.slotted));
parcelHelpers.export(exports, "SlottedDirective", ()=>(0, _slottedJs.SlottedDirective));
parcelHelpers.export(exports, "children", ()=>(0, _childrenJs.children));
parcelHelpers.export(exports, "ChildrenDirective", ()=>(0, _childrenJs.ChildrenDirective));
parcelHelpers.export(exports, "HTMLView", ()=>(0, _viewJs.HTMLView));
parcelHelpers.export(exports, "elements", ()=>(0, _nodeObservationJs.elements));
parcelHelpers.export(exports, "NodeObservationDirective", ()=>(0, _nodeObservationJs.NodeObservationDirective));
// Components
parcelHelpers.export(exports, "customElement", ()=>(0, _fastElementJs.customElement));
parcelHelpers.export(exports, "FASTElement", ()=>(0, _fastElementJs.FASTElement));
parcelHelpers.export(exports, "FASTElementDefinition", ()=>(0, _fastDefinitionsJs.FASTElementDefinition));
parcelHelpers.export(exports, "attr", ()=>(0, _attributesJs.attr));
parcelHelpers.export(exports, "AttributeConfiguration", ()=>(0, _attributesJs.AttributeConfiguration));
parcelHelpers.export(exports, "AttributeDefinition", ()=>(0, _attributesJs.AttributeDefinition));
parcelHelpers.export(exports, "booleanConverter", ()=>(0, _attributesJs.booleanConverter));
parcelHelpers.export(exports, "nullableBooleanConverter", ()=>(0, _attributesJs.nullableBooleanConverter));
parcelHelpers.export(exports, "nullableNumberConverter", ()=>(0, _attributesJs.nullableNumberConverter));
parcelHelpers.export(exports, "ElementController", ()=>(0, _elementControllerJs.ElementController));
var _platformJs = require("./platform.js");
var _domJs = require("./dom.js");
var _observableJs = require("./observation/observable.js");
var _notifierJs = require("./observation/notifier.js");
var _arraysJs = require("./observation/arrays.js");
var _updateQueueJs = require("./observation/update-queue.js");
var _bindingJs = require("./binding/binding.js");
var _oneWayJs = require("./binding/one-way.js");
var _oneTimeJs = require("./binding/one-time.js");
var _normalizeJs = require("./binding/normalize.js");
var _elementStylesJs = require("./styles/element-styles.js");
var _cssJs = require("./styles/css.js");
var _cssDirectiveJs = require("./styles/css-directive.js");
var _hostJs = require("./styles/host.js");
var _styleStrategyJs = require("./styles/style-strategy.js");
var _cssBindingDirectiveJs = require("./styles/css-binding-directive.js");
var _templateJs = require("./templating/template.js");
var _compilerJs = require("./templating/compiler.js");
var _markupJs = require("./templating/markup.js");
var _htmlBindingDirectiveJs = require("./templating/html-binding-directive.js");
var _htmlDirectiveJs = require("./templating/html-directive.js");
var _refJs = require("./templating/ref.js");
var _whenJs = require("./templating/when.js");
var _repeatJs = require("./templating/repeat.js");
var _slottedJs = require("./templating/slotted.js");
var _childrenJs = require("./templating/children.js");
var _viewJs = require("./templating/view.js");
var _nodeObservationJs = require("./templating/node-observation.js");
var _fastElementJs = require("./components/fast-element.js");
var _fastDefinitionsJs = require("./components/fast-definitions.js");
var _attributesJs = require("./components/attributes.js");
var _elementControllerJs = require("./components/element-controller.js");

},{"./platform.js":false,"./dom.js":false,"./observation/observable.js":"a7TJ2","./observation/notifier.js":false,"./observation/arrays.js":false,"./observation/update-queue.js":false,"./binding/binding.js":"bkRAU","./binding/one-way.js":false,"./binding/one-time.js":false,"./binding/normalize.js":false,"./styles/element-styles.js":false,"./styles/css.js":"l6SHD","./styles/css-directive.js":false,"./styles/host.js":"3YBF3","./styles/style-strategy.js":"ek7Hf","./styles/css-binding-directive.js":false,"./templating/template.js":"6QbNE","./templating/compiler.js":false,"./templating/markup.js":false,"./templating/html-binding-directive.js":"2zgpw","./templating/html-directive.js":"jlaqE","./templating/ref.js":false,"./templating/when.js":"g3O57","./templating/repeat.js":"IvnaY","./templating/slotted.js":"59SVF","./templating/children.js":"i6pQm","./templating/view.js":"hUlFx","./templating/node-observation.js":"6lFIx","./components/fast-element.js":"eHqCx","./components/fast-definitions.js":false,"./components/attributes.js":"fTX1F","./components/element-controller.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWsKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAST", ()=>FAST);
parcelHelpers.export(exports, "emptyArray", ()=>emptyArray);
/**
 * Do not change. Part of shared kernel contract.
 * @internal
 */ parcelHelpers.export(exports, "createTypeRegistry", ()=>createTypeRegistry);
/**
 * Creates a function capable of locating metadata associated with a type.
 * @returns A metadata locator function.
 * @internal
 */ parcelHelpers.export(exports, "createMetadataLocator", ()=>createMetadataLocator);
/**
 * Makes a type noop for JSON serialization.
 * @param type - The type to make noop for JSON serialization.
 * @internal
 */ parcelHelpers.export(exports, "makeSerializationNoop", ()=>makeSerializationNoop);
var _interfacesJs = require("./interfaces.js");
var _polyfillsJs = require("./polyfills.js");
// ensure FAST global - duplicated debug.ts
const propConfig = {
    configurable: false,
    enumerable: false,
    writable: false
};
if (globalThis.FAST === void 0) Reflect.defineProperty(globalThis, "FAST", Object.assign({
    value: Object.create(null)
}, propConfig));
const FAST = globalThis.FAST;
if (FAST.getById === void 0) {
    const storage = Object.create(null);
    Reflect.defineProperty(FAST, "getById", Object.assign({
        value (id, initialize) {
            let found = storage[id];
            if (found === void 0) found = initialize ? storage[id] = initialize() : null;
            return found;
        }
    }, propConfig));
}
if (FAST.error === void 0) Object.assign(FAST, {
    warn () {},
    error (code) {
        return new Error(`Error ${code}`);
    },
    addMessages () {}
});
const emptyArray = Object.freeze([]);
function createTypeRegistry() {
    const typeToDefinition = new Map();
    return Object.freeze({
        register (definition) {
            if (typeToDefinition.has(definition.type)) return false;
            typeToDefinition.set(definition.type, definition);
            return true;
        },
        getByType (key) {
            return typeToDefinition.get(key);
        },
        getForInstance (object) {
            if (object === null || object === void 0) return void 0;
            return typeToDefinition.get(object.constructor);
        }
    });
}
function createMetadataLocator() {
    const metadataLookup = new WeakMap();
    return function(target) {
        let metadata = metadataLookup.get(target);
        if (metadata === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while(metadata === void 0 && currentTarget !== null){
                metadata = metadataLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            metadata = metadata === void 0 ? [] : metadata.slice(0);
            metadataLookup.set(target, metadata);
        }
        return metadata;
    };
}
function makeSerializationNoop(type) {
    type.prototype.toJSON = (0, _interfacesJs.noop);
}

},{"./interfaces.js":"5090A","./polyfills.js":"onSgt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5090A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KernelServiceId", ()=>KernelServiceId);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "noop", ()=>noop);
let kernelMode;
const kernelAttr = "fast-kernel";
try {
    if (document.currentScript) kernelMode = document.currentScript.getAttribute(kernelAttr);
    else {
        const scripts = document.getElementsByTagName("script");
        const currentScript = scripts[scripts.length - 1];
        kernelMode = currentScript.getAttribute(kernelAttr);
    }
} catch (e) {
    kernelMode = "isolate";
}
let KernelServiceId;
switch(kernelMode){
    case "share":
        KernelServiceId = Object.freeze({
            updateQueue: 1,
            observable: 2,
            contextEvent: 3,
            elementRegistry: 4
        });
        break;
    case "share-v2":
        KernelServiceId = Object.freeze({
            updateQueue: 1.2,
            observable: 2.2,
            contextEvent: 3.2,
            elementRegistry: 4.2
        });
        break;
    default:
        // fully isolate the kernel from all other FAST instances
        const postfix = `-${Math.random().toString(36).substring(2, 8)}`;
        KernelServiceId = Object.freeze({
            updateQueue: `1.2${postfix}`,
            observable: `2.2${postfix}`,
            contextEvent: `3.2${postfix}`,
            elementRegistry: `4.2${postfix}`
        });
        break;
}
const isFunction = (object)=>typeof object === "function";
const isString = (object)=>typeof object === "string";
const noop = ()=>void 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"onSgt":[function(require,module,exports) {
var global = arguments[3];
/* eslint-disable @typescript-eslint/ban-ts-comment */ (function ensureGlobalThis() {
    if (typeof globalThis !== "undefined") // We're running in a modern environment.
    return;
    // @ts-ignore
    if (typeof global !== "undefined") // We're running in NodeJS
    // @ts-ignore
    global.globalThis = global;
    else if (typeof self !== "undefined") self.globalThis = self;
    else if (typeof window !== "undefined") // We're running in the browser's main thread.
    window.globalThis = window;
    else {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        const result = new Function("return this")();
        result.globalThis = result;
    }
})();

},{}],"9qDgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMAspect", ()=>DOMAspect);
parcelHelpers.export(exports, "DOM", ()=>DOM);
var _interfacesJs = require("./interfaces.js");
var _platformJs = require("./platform.js");
const DOMAspect = Object.freeze({
    /**
     * Not aspected.
     */ none: 0,
    /**
     * An attribute.
     */ attribute: 1,
    /**
     * A boolean attribute.
     */ booleanAttribute: 2,
    /**
     * A property.
     */ property: 3,
    /**
     * Content
     */ content: 4,
    /**
     * A token list.
     */ tokenList: 5,
    /**
     * An event.
     */ event: 6
});
const createHTML = (html)=>html;
const fastTrustedType = globalThis.trustedTypes ? globalThis.trustedTypes.createPolicy("fast-html", {
    createHTML
}) : {
    createHTML
};
let defaultPolicy = Object.freeze({
    createHTML (value) {
        return fastTrustedType.createHTML(value);
    },
    protect (tagName, aspect, aspectName, sink) {
        return sink;
    }
});
const fastPolicy = defaultPolicy;
const DOM = Object.freeze({
    /**
     * Gets the dom policy used by the templating system.
     */ get policy () {
        return defaultPolicy;
    },
    /**
     * Sets the dom policy used by the templating system.
     * @param policy - The policy to set.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */ setPolicy (value) {
        if (defaultPolicy !== fastPolicy) throw (0, _platformJs.FAST).error(1201 /* Message.onlySetDOMPolicyOnce */ );
        defaultPolicy = value;
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */ setAttribute (element, attributeName, value) {
        value === null || value === undefined ? element.removeAttribute(attributeName) : element.setAttribute(attributeName, value);
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */ setBooleanAttribute (element, attributeName, value) {
        value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
    }
});

},{"./interfaces.js":"5090A","./platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7TJ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SourceLifetime", ()=>SourceLifetime);
parcelHelpers.export(exports, "Observable", ()=>Observable);
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */ parcelHelpers.export(exports, "observable", ()=>observable);
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */ parcelHelpers.export(exports, "volatile", ()=>volatile);
parcelHelpers.export(exports, "ExecutionContext", ()=>ExecutionContext);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
var _updateQueueJs = require("./update-queue.js");
var _notifierJs = require("./notifier.js");
const SourceLifetime = Object.freeze({
    /**
     * The source to controller lifetime relationship is unknown.
     */ unknown: void 0,
    /**
     * The source and controller lifetimes are coupled to one another.
     * They can/will be GC'd together.
     */ coupled: 1
});
const Observable = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).observable, ()=>{
    const queueUpdate = (0, _updateQueueJs.Updates).enqueue;
    const volatileRegex = /(:|&&|\|\||if|\?\.)/;
    const notifierLookup = new WeakMap();
    let watcher = void 0;
    let createArrayObserver = (array)=>{
        throw (0, _platformJs.FAST).error(1101 /* Message.needsArrayObservation */ );
    };
    function getNotifier(source) {
        var _a;
        let found = (_a = source.$fastController) !== null && _a !== void 0 ? _a : notifierLookup.get(source);
        if (found === void 0) Array.isArray(source) ? found = createArrayObserver(source) : notifierLookup.set(source, found = new (0, _notifierJs.PropertyChangeNotifier)(source));
        return found;
    }
    const getAccessors = (0, _platformJs.createMetadataLocator)();
    class DefaultObservableAccessor {
        constructor(name){
            this.name = name;
            this.field = `_${name}`;
            this.callback = `${name}Changed`;
        }
        getValue(source) {
            if (watcher !== void 0) watcher.watch(source, this.name);
            return source[this.field];
        }
        setValue(source, newValue) {
            const field = this.field;
            const oldValue = source[field];
            if (oldValue !== newValue) {
                source[field] = newValue;
                const callback = source[this.callback];
                if ((0, _interfacesJs.isFunction)(callback)) callback.call(source, oldValue, newValue);
                getNotifier(source).notify(this.name);
            }
        }
    }
    class ExpressionNotifierImplementation extends (0, _notifierJs.SubscriberSet) {
        constructor(expression, initialSubscriber, isVolatileBinding = false){
            super(expression, initialSubscriber);
            this.expression = expression;
            this.isVolatileBinding = isVolatileBinding;
            this.needsRefresh = true;
            this.needsQueue = true;
            this.isAsync = true;
            this.first = this;
            this.last = null;
            this.propertySource = void 0;
            this.propertyName = void 0;
            this.notifier = void 0;
            this.next = void 0;
        }
        setMode(isAsync) {
            this.isAsync = this.needsQueue = isAsync;
        }
        bind(controller) {
            this.controller = controller;
            const value = this.observe(controller.source, controller.context);
            if (!controller.isBound && this.requiresUnbind(controller)) controller.onUnbind(this);
            return value;
        }
        requiresUnbind(controller) {
            return controller.sourceLifetime !== SourceLifetime.coupled || this.first !== this.last || this.first.propertySource !== controller.source;
        }
        unbind(controller) {
            this.dispose();
        }
        observe(source, context) {
            if (this.needsRefresh && this.last !== null) this.dispose();
            const previousWatcher = watcher;
            watcher = this.needsRefresh ? this : void 0;
            this.needsRefresh = this.isVolatileBinding;
            let result;
            try {
                result = this.expression(source, context);
            } finally{
                watcher = previousWatcher;
            }
            return result;
        }
        // backwards compat with v1 kernel
        disconnect() {
            this.dispose();
        }
        dispose() {
            if (this.last !== null) {
                let current = this.first;
                while(current !== void 0){
                    current.notifier.unsubscribe(this, current.propertyName);
                    current = current.next;
                }
                this.last = null;
                this.needsRefresh = this.needsQueue = this.isAsync;
            }
        }
        watch(propertySource, propertyName) {
            const prev = this.last;
            const notifier = getNotifier(propertySource);
            const current = prev === null ? this.first : {};
            current.propertySource = propertySource;
            current.propertyName = propertyName;
            current.notifier = notifier;
            notifier.subscribe(this, propertyName);
            if (prev !== null) {
                if (!this.needsRefresh) {
                    // Declaring the variable prior to assignment below circumvents
                    // a bug in Angular's optimization process causing infinite recursion
                    // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
                    let prevValue;
                    watcher = void 0;
                    /* eslint-disable-next-line */ prevValue = prev.propertySource[prev.propertyName];
                    /* eslint-disable-next-line */ watcher = this;
                    if (propertySource === prevValue) this.needsRefresh = true;
                }
                prev.next = current;
            }
            this.last = current;
        }
        handleChange() {
            if (this.needsQueue) {
                this.needsQueue = false;
                queueUpdate(this);
            } else if (!this.isAsync) this.call();
        }
        call() {
            if (this.last !== null) {
                this.needsQueue = this.isAsync;
                this.notify(this);
            }
        }
        *records() {
            let next = this.first;
            while(next !== void 0){
                yield next;
                next = next.next;
            }
        }
    }
    (0, _platformJs.makeSerializationNoop)(ExpressionNotifierImplementation);
    return Object.freeze({
        /**
         * @internal
         * @param factory - The factory used to create array observers.
         */ setArrayObserverFactory (factory) {
            createArrayObserver = factory;
        },
        /**
         * Gets a notifier for an object or Array.
         * @param source - The object or Array to get the notifier for.
         */ getNotifier,
        /**
         * Records a property change for a source object.
         * @param source - The object to record the change against.
         * @param propertyName - The property to track as changed.
         */ track (source, propertyName) {
            watcher && watcher.watch(source, propertyName);
        },
        /**
         * Notifies watchers that the currently executing property getter or function is volatile
         * with respect to its observable dependencies.
         */ trackVolatile () {
            watcher && (watcher.needsRefresh = true);
        },
        /**
         * Notifies subscribers of a source object of changes.
         * @param source - the object to notify of changes.
         * @param args - The change args to pass to subscribers.
         */ notify (source, args) {
            /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ getNotifier(source).notify(args);
        },
        /**
         * Defines an observable property on an object or prototype.
         * @param target - The target object to define the observable on.
         * @param nameOrAccessor - The name of the property to define as observable;
         * or a custom accessor that specifies the property name and accessor implementation.
         */ defineProperty (target, nameOrAccessor) {
            if ((0, _interfacesJs.isString)(nameOrAccessor)) nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
            getAccessors(target).push(nameOrAccessor);
            Reflect.defineProperty(target, nameOrAccessor.name, {
                enumerable: true,
                get () {
                    return nameOrAccessor.getValue(this);
                },
                set (newValue) {
                    nameOrAccessor.setValue(this, newValue);
                }
            });
        },
        /**
         * Finds all the observable accessors defined on the target,
         * including its prototype chain.
         * @param target - The target object to search for accessor on.
         */ getAccessors,
        /**
         * Creates a {@link ExpressionNotifier} that can watch the
         * provided {@link Expression} for changes.
         * @param expression - The binding to observe.
         * @param initialSubscriber - An initial subscriber to changes in the binding value.
         * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
         */ binding (expression, initialSubscriber, isVolatileBinding = this.isVolatileBinding(expression)) {
            return new ExpressionNotifierImplementation(expression, initialSubscriber, isVolatileBinding);
        },
        /**
         * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
         * on every evaluation of the value.
         * @param expression - The binding to inspect.
         */ isVolatileBinding (expression) {
            return volatileRegex.test(expression.toString());
        }
    });
});
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get () {
            Observable.trackVolatile();
            return descriptor.get.apply(this);
        }
    });
}
const contextEvent = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).contextEvent, ()=>{
    let current = null;
    return {
        get () {
            return current;
        },
        set (event) {
            current = event;
        }
    };
});
const ExecutionContext = Object.freeze({
    /**
     * A default execution context.
     */ default: {
        index: 0,
        length: 0,
        get event () {
            return ExecutionContext.getEvent();
        },
        eventDetail () {
            return this.event.detail;
        },
        eventTarget () {
            return this.event.target;
        }
    },
    /**
     * Gets the current event.
     * @returns An event object.
     */ getEvent () {
        return contextEvent.get();
    },
    /**
     * Sets the current event.
     * @param event - An event object.
     */ setEvent (event) {
        contextEvent.set(event);
    }
});

},{"../interfaces.js":"5090A","../platform.js":"aWsKi","./update-queue.js":"8aP8r","./notifier.js":"3Ve9s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aP8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Updates", ()=>Updates);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
const Updates = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).updateQueue, ()=>{
    const tasks = [];
    const pendingErrors = [];
    const rAF = globalThis.requestAnimationFrame;
    let updateAsync = true;
    function throwFirstError() {
        if (pendingErrors.length) throw pendingErrors.shift();
    }
    function tryRunTask(task) {
        try {
            task.call();
        } catch (error) {
            if (updateAsync) {
                pendingErrors.push(error);
                setTimeout(throwFirstError, 0);
            } else {
                tasks.length = 0;
                throw error;
            }
        }
    }
    function process() {
        const capacity = 1024;
        let index = 0;
        while(index < tasks.length){
            tryRunTask(tasks[index]);
            index++;
            // Prevent leaking memory for long chains of recursive calls to `enqueue`.
            // If we call `enqueue` within a task scheduled by `enqueue`, the queue will
            // grow, but to avoid an O(n) walk for every task we execute, we don't
            // shift tasks off the queue after they have been executed.
            // Instead, we periodically shift 1024 tasks off the queue.
            if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for(let scan = 0, newLength = tasks.length - index; scan < newLength; scan++)tasks[scan] = tasks[scan + index];
                tasks.length -= index;
                index = 0;
            }
        }
        tasks.length = 0;
    }
    function enqueue(callable) {
        tasks.push(callable);
        if (tasks.length < 2) updateAsync ? rAF(process) : process();
    }
    return Object.freeze({
        enqueue,
        next: ()=>new Promise(enqueue),
        process,
        setMode: (isAsync)=>updateAsync = isAsync
    });
});

},{"../interfaces.js":"5090A","../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ve9s":[function(require,module,exports) {
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable subject.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriberSet", ()=>SubscriberSet);
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */ parcelHelpers.export(exports, "PropertyChangeNotifier", ()=>PropertyChangeNotifier);
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified subject.
     * @param subject - The subject that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */ constructor(subject, initialSubscriber){
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.subject = subject;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */ has(subscriber) {
        return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */ subscribe(subscriber) {
        const spillover = this.spillover;
        if (spillover === void 0) {
            if (this.has(subscriber)) return;
            if (this.sub1 === void 0) {
                this.sub1 = subscriber;
                return;
            }
            if (this.sub2 === void 0) {
                this.sub2 = subscriber;
                return;
            }
            this.spillover = [
                this.sub1,
                this.sub2,
                subscriber
            ];
            this.sub1 = void 0;
            this.sub2 = void 0;
        } else {
            const index = spillover.indexOf(subscriber);
            if (index === -1) spillover.push(subscriber);
        }
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */ unsubscribe(subscriber) {
        const spillover = this.spillover;
        if (spillover === void 0) {
            if (this.sub1 === subscriber) this.sub1 = void 0;
            else if (this.sub2 === subscriber) this.sub2 = void 0;
        } else {
            const index = spillover.indexOf(subscriber);
            if (index !== -1) spillover.splice(index, 1);
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */ notify(args) {
        const spillover = this.spillover;
        const subject = this.subject;
        if (spillover === void 0) {
            const sub1 = this.sub1;
            const sub2 = this.sub2;
            if (sub1 !== void 0) sub1.handleChange(subject, args);
            if (sub2 !== void 0) sub2.handleChange(subject, args);
        } else for(let i = 0, ii = spillover.length; i < ii; ++i)spillover[i].handleChange(subject, args);
    }
}
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified subject.
     * @param subject - The object that subscribers will receive notifications for.
     */ constructor(subject){
        this.subscribers = {};
        this.subjectSubscribers = null;
        this.subject = subject;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */ notify(propertyName) {
        var _a, _b;
        (_a = this.subscribers[propertyName]) === null || _a === void 0 || _a.notify(propertyName);
        (_b = this.subjectSubscribers) === null || _b === void 0 || _b.notify(propertyName);
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */ subscribe(subscriber, propertyToWatch) {
        var _a, _b;
        let subscribers;
        if (propertyToWatch) subscribers = (_a = this.subscribers[propertyToWatch]) !== null && _a !== void 0 ? _a : this.subscribers[propertyToWatch] = new SubscriberSet(this.subject);
        else subscribers = (_b = this.subjectSubscribers) !== null && _b !== void 0 ? _b : this.subjectSubscribers = new SubscriberSet(this.subject);
        subscribers.subscribe(subscriber);
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */ unsubscribe(subscriber, propertyToUnwatch) {
        var _a, _b;
        if (propertyToUnwatch) (_a = this.subscribers[propertyToUnwatch]) === null || _a === void 0 || _a.unsubscribe(subscriber);
        else (_b = this.subjectSubscribers) === null || _b === void 0 || _b.unsubscribe(subscriber);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8D0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   (index, removed, addedCount)
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 * @public
 */ parcelHelpers.export(exports, "Splice", ()=>Splice);
parcelHelpers.export(exports, "SpliceStrategySupport", ()=>SpliceStrategySupport);
parcelHelpers.export(exports, "SpliceStrategy", ()=>SpliceStrategy);
parcelHelpers.export(exports, "ArrayObserver", ()=>ArrayObserver);
/**
 * Enables observing the length of an array.
 * @param array - The array to observe the length of.
 * @returns The length of the array.
 * @public
 */ parcelHelpers.export(exports, "lengthOf", ()=>lengthOf);
var _platformJs = require("../platform.js");
var _notifierJs = require("./notifier.js");
var _observableJs = require("./observable.js");
var _updateQueueJs = require("./update-queue.js");
class Splice {
    /**
     * Creates a splice.
     * @param index - The index that the splice occurs at.
     * @param removed - The items that were removed.
     * @param addedCount - The  number of items that were added.
     */ constructor(index, removed, addedCount){
        this.index = index;
        this.removed = removed;
        this.addedCount = addedCount;
    }
    /**
     * Adjusts the splice index based on the provided array.
     * @param array - The array to adjust to.
     * @returns The same splice, mutated based on the reference array.
     */ adjustTo(array) {
        let index = this.index;
        const arrayLength = array.length;
        if (index > arrayLength) index = arrayLength - this.addedCount;
        else if (index < 0) index = arrayLength + this.removed.length + index - this.addedCount;
        this.index = index < 0 ? 0 : index;
        return this;
    }
}
const SpliceStrategySupport = Object.freeze({
    /**
     * Only supports resets.
     */ reset: 1,
    /**
     * Supports tracking splices and resets.
     */ splice: 2,
    /**
     * Supports tracking splices and resets, while applying some form
     * of optimization, such as merging, to the splices.
     */ optimized: 3
});
const reset = new Splice(0, (0, _platformJs.emptyArray), 0);
reset.reset = true;
const resetSplices = [
    reset
];
// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' to '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    const rowCount = oldEnd - oldStart + 1;
    const columnCount = currentEnd - currentStart + 1;
    const distances = new Array(rowCount);
    let north;
    let west;
    // "Addition" rows. Initialize null column.
    for(let i = 0; i < rowCount; ++i){
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
    }
    // Initialize null row
    for(let j = 0; j < columnCount; ++j)distances[0][j] = j;
    for(let i = 1; i < rowCount; ++i){
        for(let j = 1; j < columnCount; ++j)if (current[currentStart + j - 1] === old[oldStart + i - 1]) distances[i][j] = distances[i - 1][j - 1];
        else {
            north = distances[i - 1][j] + 1;
            west = distances[i][j - 1] + 1;
            distances[i][j] = north < west ? north : west;
        }
    }
    return distances;
}
// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances) {
    let i = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i][j];
    const edits = [];
    while(i > 0 || j > 0){
        if (i === 0) {
            edits.push(2 /* Edit.add */ );
            j--;
            continue;
        }
        if (j === 0) {
            edits.push(3 /* Edit.delete */ );
            i--;
            continue;
        }
        const northWest = distances[i - 1][j - 1];
        const west = distances[i - 1][j];
        const north = distances[i][j - 1];
        let min;
        if (west < north) min = west < northWest ? west : northWest;
        else min = north < northWest ? north : northWest;
        if (min === northWest) {
            if (northWest === current) edits.push(0 /* Edit.leave */ );
            else {
                edits.push(1 /* Edit.update */ );
                current = northWest;
            }
            i--;
            j--;
        } else if (min === west) {
            edits.push(3 /* Edit.delete */ );
            i--;
            current = west;
        } else {
            edits.push(2 /* Edit.add */ );
            j--;
            current = north;
        }
    }
    return edits.reverse();
}
function sharedPrefix(current, old, searchLength) {
    for(let i = 0; i < searchLength; ++i){
        if (current[i] !== old[i]) return i;
    }
    return searchLength;
}
function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while(count < searchLength && current[--index1] === old[--index2])count++;
    return count;
}
function intersect(start1, end1, start2, end2) {
    // Disjoint
    if (end1 < start2 || end2 < start1) return -1;
    // Adjacent
    if (end1 === start2 || end2 === start1) return 0;
    // Non-zero intersect, span1 first
    if (start1 < start2) {
        if (end1 < end2) return end1 - start2; // Overlap
        return end2 - start2; // Contained
    }
    // Non-zero intersect, span2 first
    if (end2 < end1) return end2 - start1; // Overlap
    return end1 - start1; // Contained
}
/**
 * @remarks
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 */ function calc(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) prefixCount = sharedPrefix(current, old, minLength);
    if (currentEnd === current.length && oldEnd === old.length) suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) return 0, _platformJs.emptyArray;
    if (currentStart === currentEnd) {
        const splice = new Splice(currentStart, [], 0);
        while(oldStart < oldEnd)splice.removed.push(old[oldStart++]);
        return [
            splice
        ];
    } else if (oldStart === oldEnd) return [
        new Splice(currentStart, [], currentEnd - currentStart)
    ];
    const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
    const splices = [];
    let splice = void 0;
    let index = currentStart;
    let oldIndex = oldStart;
    for(let i = 0; i < ops.length; ++i)switch(ops[i]){
        case 0 /* Edit.leave */ :
            if (splice !== void 0) {
                splices.push(splice);
                splice = void 0;
            }
            index++;
            oldIndex++;
            break;
        case 1 /* Edit.update */ :
            if (splice === void 0) splice = new Splice(index, [], 0);
            splice.addedCount++;
            index++;
            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
        case 2 /* Edit.add */ :
            if (splice === void 0) splice = new Splice(index, [], 0);
            splice.addedCount++;
            index++;
            break;
        case 3 /* Edit.delete */ :
            if (splice === void 0) splice = new Splice(index, [], 0);
            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
    }
    if (splice !== void 0) splices.push(splice);
    return splices;
}
function merge(splice, splices) {
    let inserted = false;
    let insertionOffset = 0;
    for(let i = 0; i < splices.length; i++){
        const current = splices[i];
        current.index += insertionOffset;
        if (inserted) continue;
        const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
        if (intersectCount >= 0) {
            // Merge the two splices
            splices.splice(i, 1);
            i--;
            insertionOffset -= current.addedCount - current.removed.length;
            splice.addedCount += current.addedCount - intersectCount;
            const deleteCount = splice.removed.length + current.removed.length - intersectCount;
            if (!splice.addedCount && !deleteCount) // merged splice is a noop. discard.
            inserted = true;
            else {
                let currentRemoved = current.removed;
                if (splice.index < current.index) {
                    // some prefix of splice.removed is prepended to current.removed.
                    const prepend = splice.removed.slice(0, current.index - splice.index);
                    prepend.push(...currentRemoved);
                    currentRemoved = prepend;
                }
                if (splice.index + splice.removed.length > current.index + current.addedCount) {
                    // some suffix of splice.removed is appended to current.removed.
                    const append = splice.removed.slice(current.index + current.addedCount - splice.index);
                    currentRemoved.push(...append);
                }
                splice.removed = currentRemoved;
                if (current.index < splice.index) splice.index = current.index;
            }
        } else if (splice.index < current.index) {
            // Insert splice here.
            inserted = true;
            splices.splice(i, 0, splice);
            i++;
            const offset = splice.addedCount - splice.removed.length;
            current.index += offset;
            insertionOffset += offset;
        }
    }
    if (!inserted) splices.push(splice);
}
function project(array, changes) {
    let splices = [];
    const initialSplices = [];
    for(let i = 0, ii = changes.length; i < ii; i++)merge(changes[i], initialSplices);
    for(let i = 0, ii = initialSplices.length; i < ii; ++i){
        const splice = initialSplices[i];
        if (splice.addedCount === 1 && splice.removed.length === 1) {
            if (splice.removed[0] !== array[splice.index]) splices.push(splice);
            continue;
        }
        splices = splices.concat(calc(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    }
    return splices;
}
/**
 * A SpliceStrategy that attempts to merge all splices into the minimal set of
 * splices needed to represent the change from the old array to the new array.
 * @public
 */ let defaultSpliceStrategy = Object.freeze({
    support: SpliceStrategySupport.optimized,
    normalize (previous, current, changes) {
        if (previous === void 0) {
            if (changes === void 0) return 0, _platformJs.emptyArray;
            return project(current, changes);
        }
        return resetSplices;
    },
    pop (array, observer, pop, args) {
        const notEmpty = array.length > 0;
        const result = pop.apply(array, args);
        if (notEmpty) observer.addSplice(new Splice(array.length, [
            result
        ], 0));
        return result;
    },
    push (array, observer, push, args) {
        const result = push.apply(array, args);
        observer.addSplice(new Splice(array.length - args.length, [], args.length).adjustTo(array));
        return result;
    },
    reverse (array, observer, reverse, args) {
        const result = reverse.apply(array, args);
        observer.reset(array);
        return result;
    },
    shift (array, observer, shift, args) {
        const notEmpty = array.length > 0;
        const result = shift.apply(array, args);
        if (notEmpty) observer.addSplice(new Splice(0, [
            result
        ], 0));
        return result;
    },
    sort (array, observer, sort, args) {
        const result = sort.apply(array, args);
        observer.reset(array);
        return result;
    },
    splice (array, observer, splice, args) {
        const result = splice.apply(array, args);
        observer.addSplice(new Splice(+args[0], result, args.length > 2 ? args.length - 2 : 0).adjustTo(array));
        return result;
    },
    unshift (array, observer, unshift, args) {
        const result = unshift.apply(array, args);
        observer.addSplice(new Splice(0, [], args.length).adjustTo(array));
        return result;
    }
});
const SpliceStrategy = Object.freeze({
    /**
     * A set of changes that represent a full array reset.
     */ reset: resetSplices,
    /**
     * Sets the default strategy to use for array observers.
     * @param strategy - The splice strategy to use.
     */ setDefaultStrategy (strategy) {
        defaultSpliceStrategy = strategy;
    }
});
function setNonEnumerable(target, property, value) {
    Reflect.defineProperty(target, property, {
        value,
        enumerable: false
    });
}
class DefaultArrayObserver extends (0, _notifierJs.SubscriberSet) {
    constructor(subject){
        super(subject);
        this.oldCollection = void 0;
        this.splices = void 0;
        this.needsQueue = true;
        this._strategy = null;
        this._lengthObserver = void 0;
        this.call = this.flush;
        setNonEnumerable(subject, "$fastController", this);
    }
    get strategy() {
        return this._strategy;
    }
    set strategy(value) {
        this._strategy = value;
    }
    get lengthObserver() {
        let observer = this._lengthObserver;
        if (observer === void 0) {
            const array = this.subject;
            this._lengthObserver = observer = {
                length: array.length,
                handleChange () {
                    if (this.length !== array.length) {
                        this.length = array.length;
                        (0, _observableJs.Observable).notify(observer, "length");
                    }
                }
            };
            this.subscribe(observer);
        }
        return observer;
    }
    subscribe(subscriber) {
        this.flush();
        super.subscribe(subscriber);
    }
    addSplice(splice) {
        if (this.splices === void 0) this.splices = [
            splice
        ];
        else this.splices.push(splice);
        this.enqueue();
    }
    reset(oldCollection) {
        this.oldCollection = oldCollection;
        this.enqueue();
    }
    flush() {
        var _a;
        const splices = this.splices;
        const oldCollection = this.oldCollection;
        if (splices === void 0 && oldCollection === void 0) return;
        this.needsQueue = true;
        this.splices = void 0;
        this.oldCollection = void 0;
        this.notify(((_a = this._strategy) !== null && _a !== void 0 ? _a : defaultSpliceStrategy).normalize(oldCollection, this.subject, splices));
    }
    enqueue() {
        if (this.needsQueue) {
            this.needsQueue = false;
            (0, _updateQueueJs.Updates).enqueue(this);
        }
    }
}
let enabled = false;
const ArrayObserver = Object.freeze({
    /**
     * Enables the array observation mechanism.
     * @remarks
     * Array observation is enabled automatically when using the
     * {@link RepeatDirective}, so calling this API manually is
     * not typically necessary.
     */ enable () {
        if (enabled) return;
        enabled = true;
        (0, _observableJs.Observable).setArrayObserverFactory((collection)=>new DefaultArrayObserver(collection));
        const proto = Array.prototype;
        if (!proto.$fastPatch) {
            setNonEnumerable(proto, "$fastPatch", 1);
            [
                proto.pop,
                proto.push,
                proto.reverse,
                proto.shift,
                proto.sort,
                proto.splice,
                proto.unshift
            ].forEach((method)=>{
                proto[method.name] = function(...args) {
                    var _a;
                    const o = this.$fastController;
                    return o === void 0 ? method.apply(this, args) : ((_a = o.strategy) !== null && _a !== void 0 ? _a : defaultSpliceStrategy)[method.name](this, o, method, args);
                };
            });
        }
    }
});
function lengthOf(array) {
    if (!array) return 0;
    let arrayObserver = array.$fastController;
    if (arrayObserver === void 0) {
        ArrayObserver.enable();
        arrayObserver = (0, _observableJs.Observable).getNotifier(array);
    }
    (0, _observableJs.Observable).track(arrayObserver.lengthObserver, "length");
    return array.length;
}

},{"../platform.js":"aWsKi","./notifier.js":"3Ve9s","./observable.js":"a7TJ2","./update-queue.js":"8aP8r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkRAU":[function(require,module,exports) {
/**
 * Captures a binding expression along with related information and capabilities.
 *
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Binding", ()=>Binding);
class Binding {
    /**
     * Creates a binding.
     * @param evaluate - Evaluates the binding.
     * @param policy - The security policy to associate with this binding.
     * @param isVolatile - Indicates whether the binding is volatile.
     */ constructor(evaluate, policy, isVolatile = false){
        this.evaluate = evaluate;
        this.policy = policy;
        this.isVolatile = isVolatile;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1Y9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates an standard binding.
 * @param expression - The binding to refresh when changed.
 * @param policy - The security policy to associate with th binding.
 * @param isVolatile - Indicates whether the binding is volatile or not.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "oneWay", ()=>oneWay);
/**
 * Creates an event listener binding.
 * @param expression - The binding to invoke when the event is raised.
 * @param options - Event listener options.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "listener", ()=>listener);
var _observableJs = require("../observation/observable.js");
var _bindingJs = require("./binding.js");
class OneWayBinding extends (0, _bindingJs.Binding) {
    createObserver(subscriber) {
        return (0, _observableJs.Observable).binding(this.evaluate, subscriber, this.isVolatile);
    }
}
function oneWay(expression, policy, isVolatile = (0, _observableJs.Observable).isVolatileBinding(expression)) {
    return new OneWayBinding(expression, policy, isVolatile);
}
function listener(expression, options) {
    const config = new OneWayBinding(expression);
    config.options = options;
    return config;
}

},{"../observation/observable.js":"a7TJ2","./binding.js":"bkRAU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bSYC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a one time binding
 * @param expression - The binding to refresh when signaled.
 * @param policy - The security policy to associate with th binding.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "oneTime", ()=>oneTime);
var _platformJs = require("../platform.js");
var _bindingJs = require("./binding.js");
class OneTimeBinding extends (0, _bindingJs.Binding) {
    createObserver() {
        return this;
    }
    bind(controller) {
        return this.evaluate(controller.source, controller.context);
    }
}
(0, _platformJs.makeSerializationNoop)(OneTimeBinding);
function oneTime(expression, policy) {
    return new OneTimeBinding(expression, policy);
}

},{"../platform.js":"aWsKi","./binding.js":"bkRAU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j2v2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Normalizes the input value into a binding.
 * @param value - The value to create the default binding for.
 * @returns A binding configuration for the provided value.
 * @public
 */ parcelHelpers.export(exports, "normalizeBinding", ()=>normalizeBinding);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("./binding.js");
var _oneWayJs = require("./one-way.js");
var _oneTimeJs = require("./one-time.js");
function normalizeBinding(value) {
    return (0, _interfacesJs.isFunction)(value) ? (0, _oneWayJs.oneWay)(value) : value instanceof (0, _bindingJs.Binding) ? value : (0, _oneTimeJs.oneTime)(()=>value);
}

},{"../interfaces.js":"5090A","./binding.js":"bkRAU","./one-way.js":"c1Y9Q","./one-time.js":"8bSYC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jf7rv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents styles that can be applied to a custom element.
 * @public
 */ parcelHelpers.export(exports, "ElementStyles", ()=>ElementStyles);
let DefaultStyleStrategy;
function reduceStyles(styles) {
    return styles.map((x)=>x instanceof ElementStyles ? reduceStyles(x.styles) : [
            x
        ]).reduce((prev, curr)=>prev.concat(curr), []);
}
class ElementStyles {
    /**
     * Creates an instance of ElementStyles.
     * @param styles - The styles that will be associated with elements.
     */ constructor(styles){
        this.styles = styles;
        this.targets = new WeakSet();
        this._strategy = null;
        this.behaviors = styles.map((x)=>x instanceof ElementStyles ? x.behaviors : null).reduce((prev, curr)=>curr === null ? prev : prev === null ? curr : prev.concat(curr), null);
    }
    /**
     * Gets the StyleStrategy associated with these element styles.
     */ get strategy() {
        if (this._strategy === null) this.withStrategy(DefaultStyleStrategy);
        return this._strategy;
    }
    /** @internal */ addStylesTo(target) {
        this.strategy.addStylesTo(target);
        this.targets.add(target);
    }
    /** @internal */ removeStylesFrom(target) {
        this.strategy.removeStylesFrom(target);
        this.targets.delete(target);
    }
    /** @internal */ isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */ withBehaviors(...behaviors) {
        this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
    /**
     * Sets the strategy that handles adding/removing these styles for an element.
     * @param strategy - The strategy to use.
     */ withStrategy(Strategy) {
        this._strategy = new Strategy(reduceStyles(this.styles));
        return this;
    }
    /**
     * Sets the default strategy type to use when creating style strategies.
     * @param Strategy - The strategy type to construct.
     */ static setDefaultStrategy(Strategy) {
        DefaultStyleStrategy = Strategy;
    }
    /**
     * Normalizes a set of composable style options.
     * @param styles - The style options to normalize.
     * @returns A singular ElementStyles instance or undefined.
     */ static normalize(styles) {
        return styles === void 0 ? void 0 : Array.isArray(styles) ? new ElementStyles(styles) : styles instanceof ElementStyles ? styles : new ElementStyles([
            styles
        ]);
    }
}
/**
 * Indicates whether the DOM supports the adoptedStyleSheets feature.
 */ ElementStyles.supportsAdoptedStyleSheets = Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6SHD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("../binding/binding.js");
var _oneWayJs = require("../binding/one-way.js");
var _cssDirectiveJs = require("./css-directive.js");
var _elementStylesJs = require("./element-styles.js");
var _cssBindingDirectiveJs = require("./css-binding-directive.js");
const marker = `${Math.random().toString(36).substring(2, 8)}`;
let varId = 0;
const nextCSSVariable = ()=>`--v${marker}${++varId}`;
function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    const add = (behavior)=>{
        behaviors.push(behavior);
    };
    for(let i = 0, ii = strings.length - 1; i < ii; ++i){
        cssString += strings[i];
        let value = values[i];
        if ((0, _interfacesJs.isFunction)(value)) value = new (0, _cssBindingDirectiveJs.CSSBindingDirective)((0, _oneWayJs.oneWay)(value), nextCSSVariable()).createCSS(add);
        else if (value instanceof (0, _bindingJs.Binding)) value = new (0, _cssBindingDirectiveJs.CSSBindingDirective)(value, nextCSSVariable()).createCSS(add);
        else if ((0, _cssDirectiveJs.CSSDirective).getForInstance(value) !== void 0) value = value.createCSS(add);
        if (value instanceof (0, _elementStylesJs.ElementStyles) || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        } else cssString += value;
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") styles.push(cssString);
    return {
        styles,
        behaviors
    };
}
const css = (strings, ...values)=>{
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = new (0, _elementStylesJs.ElementStyles)(styles);
    return behaviors.length ? elementStyles.withBehaviors(...behaviors) : elementStyles;
};
class CSSPartial {
    constructor(styles, behaviors){
        this.behaviors = behaviors;
        this.css = "";
        const stylesheets = styles.reduce((accumulated, current)=>{
            if ((0, _interfacesJs.isString)(current)) this.css += current;
            else accumulated.push(current);
            return accumulated;
        }, []);
        if (stylesheets.length) this.styles = new (0, _elementStylesJs.ElementStyles)(stylesheets);
    }
    createCSS(add) {
        this.behaviors.forEach(add);
        if (this.styles) add(this);
        return this.css;
    }
    addedCallback(controller) {
        controller.addStyles(this.styles);
    }
    removedCallback(controller) {
        controller.removeStyles(this.styles);
    }
}
(0, _cssDirectiveJs.CSSDirective).define(CSSPartial);
css.partial = (strings, ...values)=>{
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
};

},{"../interfaces.js":"5090A","../binding/binding.js":"bkRAU","../binding/one-way.js":"c1Y9Q","./css-directive.js":"iBccj","./element-styles.js":"jf7rv","./css-binding-directive.js":"9wXia","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBccj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSDirective", ()=>CSSDirective);
/**
 * Decorator: Defines a CSSDirective.
 * @public
 */ parcelHelpers.export(exports, "cssDirective", ()=>cssDirective);
var _platformJs = require("../platform.js");
const registry = (0, _platformJs.createTypeRegistry)();
const CSSDirective = Object.freeze({
    /**
     * Gets the directive definition associated with the instance.
     * @param instance - The directive instance to retrieve the definition for.
     */ getForInstance: registry.getForInstance,
    /**
     * Gets the directive definition associated with the specified type.
     * @param type - The directive type to retrieve the definition for.
     */ getByType: registry.getByType,
    /**
     * Defines a CSSDirective.
     * @param type - The type to define as a directive.
     */ define (type) {
        registry.register({
            type
        });
        return type;
    }
});
function cssDirective() {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        CSSDirective.define(type);
    };
}

},{"../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wXia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Enables bindings in CSS.
 *
 * @public
 */ parcelHelpers.export(exports, "CSSBindingDirective", ()=>CSSBindingDirective);
var _cssDirectiveJs = require("./css-directive.js");
function handleChange(directive, controller, observer) {
    controller.source.style.setProperty(directive.targetAspect, observer.bind(controller));
}
class CSSBindingDirective {
    /**
     * Creates an instance of CSSBindingDirective.
     * @param dataBinding - The binding to use in CSS.
     * @param targetAspect - The CSS property to target.
     */ constructor(dataBinding, targetAspect){
        this.dataBinding = dataBinding;
        this.targetAspect = targetAspect;
    }
    /**
     * Creates a CSS fragment to interpolate into the CSS document.
     * @returns - the string to interpolate into CSS
     */ createCSS(add) {
        add(this);
        return `var(${this.targetAspect})`;
    }
    /**
     * Executed when this behavior is attached to a controller.
     * @param controller - Controls the behavior lifecycle.
     */ addedCallback(controller) {
        var _a;
        const element = controller.source;
        if (!element.$cssBindings) {
            element.$cssBindings = new Map();
            const setAttribute = element.setAttribute;
            element.setAttribute = (attr, value)=>{
                setAttribute.call(element, attr, value);
                if (attr === "style") element.$cssBindings.forEach((v, k)=>handleChange(k, v.controller, v.observer));
            };
        }
        const observer = (_a = controller[this.targetAspect]) !== null && _a !== void 0 ? _a : controller[this.targetAspect] = this.dataBinding.createObserver(this, this);
        observer.controller = controller;
        controller.source.$cssBindings.set(this, {
            controller,
            observer
        });
    }
    /**
     * Executed when this behavior's host is connected.
     * @param controller - Controls the behavior lifecycle.
     */ connectedCallback(controller) {
        handleChange(this, controller, controller[this.targetAspect]);
    }
    /**
     * Executed when this behavior is detached from a controller.
     * @param controller - Controls the behavior lifecycle.
     */ removedCallback(controller) {
        if (controller.source.$cssBindings) controller.source.$cssBindings.delete(this);
    }
    /**
     * Called when a subject this instance has subscribed to changes.
     * @param subject - The subject of the change.
     * @param args - The event args detailing the change that occurred.
     *
     * @internal
     */ handleChange(_, observer) {
        handleChange(this, observer.controller, observer);
    }
}
(0, _cssDirectiveJs.CSSDirective).define(CSSBindingDirective);

},{"./css-directive.js":"iBccj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YBF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ek7Hf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QbNE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Inlines a template into another template.
 * @public
 */ parcelHelpers.export(exports, "InlineTemplateDirective", ()=>InlineTemplateDirective);
/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */ parcelHelpers.export(exports, "ViewTemplate", ()=>ViewTemplate);
parcelHelpers.export(exports, "html", ()=>html);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("../binding/binding.js");
var _platformJs = require("../platform.js");
var _oneWayJs = require("../binding/one-way.js");
var _oneTimeJs = require("../binding/one-time.js");
var _htmlBindingDirectiveJs = require("./html-binding-directive.js");
var _compilerJs = require("./compiler.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = /* eslint-disable-next-line no-control-regex */ /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
const noFactories = Object.create(null);
class InlineTemplateDirective {
    /**
     * Creates an instance of InlineTemplateDirective.
     * @param template - The template to inline.
     */ constructor(html, factories = noFactories){
        this.html = html;
        this.factories = factories;
    }
    /**
     * Creates HTML to be used within a template.
     * @param add - Can be used to add  behavior factories to a template.
     */ createHTML(add) {
        const factories = this.factories;
        for(const key in factories)add(factories[key]);
        return this.html;
    }
}
/**
 * An empty template partial.
 */ InlineTemplateDirective.empty = new InlineTemplateDirective("");
(0, _htmlDirectiveJs.HTMLDirective).define(InlineTemplateDirective);
function createHTML(value, prevString, add, definition = (0, _htmlDirectiveJs.HTMLDirective).getForInstance(value)) {
    if (definition.aspected) {
        const match = lastAttributeNameRegex.exec(prevString);
        if (match !== null) (0, _htmlDirectiveJs.HTMLDirective).assignAspect(value, match[2]);
    }
    return value.createHTML(add);
}
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param factories - The directives that will be connected to placeholders in the html.
     * @param policy - The security policy to use when compiling this template.
     */ constructor(html, factories = {}, policy){
        this.policy = policy;
        this.result = null;
        this.html = html;
        this.factories = factories;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */ create(hostBindingTarget) {
        if (this.result === null) this.result = (0, _compilerJs.Compiler).compile(this.html, this.factories, this.policy);
        return this.result.createView(hostBindingTarget);
    }
    /**
     * Returns a directive that can inline the template.
     */ inline() {
        return new InlineTemplateDirective((0, _interfacesJs.isString)(this.html) ? this.html : this.html.innerHTML, this.factories);
    }
    /**
     * Sets the DOMPolicy for this template.
     * @param policy - The policy to associated with this template.
     * @returns The modified template instance.
     * @remarks
     * The DOMPolicy can only be set once for a template and cannot be
     * set after the template is compiled.
     */ withPolicy(policy) {
        if (this.result) throw (0, _platformJs.FAST).error(1208 /* Message.cannotSetTemplatePolicyAfterCompilation */ );
        if (this.policy) throw (0, _platformJs.FAST).error(1207 /* Message.onlySetTemplatePolicyOnce */ );
        this.policy = policy;
        return this;
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */ render(source, host, hostBindingTarget) {
        const view = this.create(hostBindingTarget);
        view.bind(source);
        view.appendTo(host);
        return view;
    }
    /**
     * Creates a template based on a set of static strings and dynamic values.
     * @param strings - The static strings to create the template with.
     * @param values - The dynamic values to create the template with.
     * @param policy - The DOMPolicy to associated with the template.
     * @returns A ViewTemplate.
     * @remarks
     * This API should not be used directly under normal circumstances because constructing
     * a template in this way, if not done properly, can open up the application to XSS
     * attacks. When using this API, provide a strong DOMPolicy that can properly sanitize
     * and also be sure to manually sanitize all static strings particularly if they can
     * come from user input.
     */ static create(strings, values, policy) {
        let html = "";
        const factories = Object.create(null);
        const add = (factory)=>{
            var _a;
            const id = (_a = factory.id) !== null && _a !== void 0 ? _a : factory.id = (0, _markupJs.nextId)();
            factories[id] = factory;
            return id;
        };
        for(let i = 0, ii = strings.length - 1; i < ii; ++i){
            const currentString = strings[i];
            let currentValue = values[i];
            let definition;
            html += currentString;
            if ((0, _interfacesJs.isFunction)(currentValue)) currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneWayJs.oneWay)(currentValue));
            else if (currentValue instanceof (0, _bindingJs.Binding)) currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)(currentValue);
            else if (!(definition = (0, _htmlDirectiveJs.HTMLDirective).getForInstance(currentValue))) {
                const staticValue = currentValue;
                currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneTimeJs.oneTime)(()=>staticValue));
            }
            html += createHTML(currentValue, currentString, add, definition);
        }
        return new ViewTemplate(html + strings[strings.length - 1], factories, policy);
    }
}
(0, _platformJs.makeSerializationNoop)(ViewTemplate);
const html = (strings, ...values)=>{
    if (Array.isArray(strings) && Array.isArray(strings.raw)) return ViewTemplate.create(strings, values);
    throw (0, _platformJs.FAST).error(1206 /* Message.directCallToHTMLTagNotAllowed */ );
};
html.partial = (html)=>{
    return new InlineTemplateDirective(html);
};

},{"../interfaces.js":"5090A","../binding/binding.js":"bkRAU","../platform.js":"aWsKi","../binding/one-way.js":"c1Y9Q","../binding/one-time.js":"8bSYC","./html-binding-directive.js":"2zgpw","./compiler.js":"bSUH3","./html-directive.js":"jlaqE","./markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zgpw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A directive that applies bindings.
 * @public
 */ parcelHelpers.export(exports, "HTMLBindingDirective", ()=>HTMLBindingDirective);
var _interfacesJs = require("../interfaces.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _domJs = require("../dom.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
function updateContent(target, aspect, value, controller) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) value = "";
    // If the value has a "create" method, then it's a ContentTemplate.
    if (value.create) {
        target.textContent = "";
        let view = target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) view = value.create();
        else // If there is a previous view, but it wasn't created
        // from the same template as the new value, then we
        // need to remove the old view if it's still in the DOM
        // and create a new view from the template.
        if (target.$fastTemplate !== value) {
            if (view.isComposed) {
                view.remove();
                view.unbind();
            }
            view = value.create();
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(controller.source, controller.context);
            view.insertBefore(target);
            target.$fastView = view;
            target.$fastTemplate = value;
        } else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(controller.source, controller.context);
        }
    } else {
        const view = target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) view.needsBindOnly = false;
            else view.unbind();
        }
        target.textContent = value;
    }
}
function updateTokenList(target, aspect, value) {
    var _a;
    const lookup = `${this.id}-t`;
    const state = (_a = target[lookup]) !== null && _a !== void 0 ? _a : target[lookup] = {
        v: 0,
        cv: Object.create(null)
    };
    const classVersions = state.cv;
    let version = state.v;
    const tokenList = target[aspect];
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for(let i = 0, ii = names.length; i < ii; ++i){
            const currentName = names[i];
            if (currentName === "") continue;
            classVersions[currentName] = version;
            tokenList.add(currentName);
        }
    }
    state.v = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) return;
    // Remove classes from the previous version.
    version -= 1;
    for(const name in classVersions)if (classVersions[name] === version) tokenList.remove(name);
}
const sinkLookup = {
    [(0, _domJs.DOMAspect).attribute]: (0, _domJs.DOM).setAttribute,
    [(0, _domJs.DOMAspect).booleanAttribute]: (0, _domJs.DOM).setBooleanAttribute,
    [(0, _domJs.DOMAspect).property]: (t, a, v)=>t[a] = v,
    [(0, _domJs.DOMAspect).content]: updateContent,
    [(0, _domJs.DOMAspect).tokenList]: updateTokenList,
    [(0, _domJs.DOMAspect).event]: ()=>void 0
};
class HTMLBindingDirective {
    /**
     * Creates an instance of HTMLBindingDirective.
     * @param dataBinding - The binding configuration to apply.
     */ constructor(dataBinding){
        this.dataBinding = dataBinding;
        this.updateTarget = null;
        /**
         * The type of aspect to target.
         */ this.aspectType = (0, _domJs.DOMAspect).content;
    }
    /**
     * Creates HTML to be used within a template.
     * @param add - Can be used to add  behavior factories to a template.
     */ createHTML(add) {
        return (0, _markupJs.Markup).interpolation(add(this));
    }
    /**
     * Creates a behavior.
     */ createBehavior() {
        var _a;
        if (this.updateTarget === null) {
            const sink = sinkLookup[this.aspectType];
            const policy = (_a = this.dataBinding.policy) !== null && _a !== void 0 ? _a : this.policy;
            if (!sink) throw (0, _platformJs.FAST).error(1205 /* Message.unsupportedBindingBehavior */ );
            this.data = `${this.id}-d`;
            this.updateTarget = policy.protect(this.targetTagName, this.aspectType, this.targetAspect, sink);
        }
        return this;
    }
    /** @internal */ bind(controller) {
        var _a;
        const target = controller.targets[this.targetNodeId];
        switch(this.aspectType){
            case (0, _domJs.DOMAspect).event:
                target[this.data] = controller;
                target.addEventListener(this.targetAspect, this, this.dataBinding.options);
                break;
            case (0, _domJs.DOMAspect).content:
                controller.onUnbind(this);
            // intentional fall through
            default:
                const observer = (_a = target[this.data]) !== null && _a !== void 0 ? _a : target[this.data] = this.dataBinding.createObserver(this, this);
                observer.target = target;
                observer.controller = controller;
                this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
                break;
        }
    }
    /** @internal */ unbind(controller) {
        const target = controller.targets[this.targetNodeId];
        const view = target.$fastView;
        if (view !== void 0 && view.isComposed) {
            view.unbind();
            view.needsBindOnly = true;
        }
    }
    /** @internal */ handleEvent(event) {
        const controller = event.currentTarget[this.data];
        if (controller.isBound) {
            (0, _observableJs.ExecutionContext).setEvent(event);
            const result = this.dataBinding.evaluate(controller.source, controller.context);
            (0, _observableJs.ExecutionContext).setEvent(null);
            if (result !== true) event.preventDefault();
        }
    }
    /** @internal */ handleChange(binding, observer) {
        const target = observer.target;
        const controller = observer.controller;
        this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(HTMLBindingDirective, {
    aspected: true
});

},{"../interfaces.js":"5090A","../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../dom.js":"9qDgN","./html-directive.js":"jlaqE","./markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jlaqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLDirective", ()=>HTMLDirective);
/**
 * Decorator: Defines an HTMLDirective.
 * @param options - Provides options that specify the directive's application.
 * @public
 */ parcelHelpers.export(exports, "htmlDirective", ()=>htmlDirective);
/**
 * A base class used for attribute directives that don't need internal state.
 * @public
 */ parcelHelpers.export(exports, "StatelessAttachedAttributeDirective", ()=>StatelessAttachedAttributeDirective);
var _domJs = require("../dom.js");
var _platformJs = require("../platform.js");
var _markupJs = require("./markup.js");
const registry = (0, _platformJs.createTypeRegistry)();
const HTMLDirective = Object.freeze({
    /**
     * Gets the directive definition associated with the instance.
     * @param instance - The directive instance to retrieve the definition for.
     */ getForInstance: registry.getForInstance,
    /**
     * Gets the directive definition associated with the specified type.
     * @param type - The directive type to retrieve the definition for.
     */ getByType: registry.getByType,
    /**
     * Defines an HTMLDirective based on the options.
     * @param type - The type to define as a directive.
     * @param options - Options that specify the directive's application.
     */ define (type, options) {
        options = options || {};
        options.type = type;
        registry.register(options);
        return type;
    },
    /**
     *
     * @param directive - The directive to assign the aspect to.
     * @param value - The value to base the aspect determination on.
     * @remarks
     * If a falsy value is provided, then the content aspect will be assigned.
     */ assignAspect (directive, value) {
        if (!value) {
            directive.aspectType = (0, _domJs.DOMAspect).content;
            return;
        }
        directive.sourceAspect = value;
        switch(value[0]){
            case ":":
                directive.targetAspect = value.substring(1);
                directive.aspectType = directive.targetAspect === "classList" ? (0, _domJs.DOMAspect).tokenList : (0, _domJs.DOMAspect).property;
                break;
            case "?":
                directive.targetAspect = value.substring(1);
                directive.aspectType = (0, _domJs.DOMAspect).booleanAttribute;
                break;
            case "@":
                directive.targetAspect = value.substring(1);
                directive.aspectType = (0, _domJs.DOMAspect).event;
                break;
            default:
                directive.targetAspect = value;
                directive.aspectType = (0, _domJs.DOMAspect).attribute;
                break;
        }
    }
});
function htmlDirective(options) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        HTMLDirective.define(type, options);
    };
}
class StatelessAttachedAttributeDirective {
    /**
     * Creates an instance of RefDirective.
     * @param options - The options to use in configuring the directive.
     */ constructor(options){
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */ createHTML(add) {
        return (0, _markupJs.Markup).attribute(add(this));
    }
    /**
     * Creates a behavior.
     * @param targets - The targets available for behaviors to be attached to.
     */ createBehavior() {
        return this;
    }
}
(0, _platformJs.makeSerializationNoop)(StatelessAttachedAttributeDirective);

},{"../dom.js":"9qDgN","../platform.js":"aWsKi","./markup.js":"byCOc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byCOc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextId", ()=>nextId);
parcelHelpers.export(exports, "Markup", ()=>Markup);
parcelHelpers.export(exports, "Parser", ()=>Parser);
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
const interpolationStart = `${marker}{`;
const interpolationEnd = `}${marker}`;
const interpolationEndLength = interpolationEnd.length;
let id = 0;
const nextId = ()=>`${marker}-${++id}`;
const Markup = Object.freeze({
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */ interpolation: (id)=>`${interpolationStart}${id}${interpolationEnd}`,
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */ attribute: (id)=>`${nextId()}="${interpolationStart}${id}${interpolationEnd}"`,
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */ comment: (id)=>`<!--${interpolationStart}${id}${interpolationEnd}-->`
});
const Parser = Object.freeze({
    /**
     * Parses text content or HTML attribute content, separating out the static strings
     * from the directives.
     * @param value - The content or attribute string to parse.
     * @param factories - A list of directives to search for in the string.
     * @returns A heterogeneous array of static strings interspersed with
     * directives or null if no directives are found in the string.
     */ parse (value, factories) {
        const parts = value.split(interpolationStart);
        if (parts.length === 1) return null;
        const result = [];
        for(let i = 0, ii = parts.length; i < ii; ++i){
            const current = parts[i];
            const index = current.indexOf(interpolationEnd);
            let literal;
            if (index === -1) literal = current;
            else {
                const factoryId = current.substring(0, index);
                result.push(factories[factoryId]);
                literal = current.substring(index + interpolationEndLength);
            }
            if (literal !== "") result.push(literal);
        }
        return result;
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSUH3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Compiler", ()=>Compiler);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
var _domJs = require("../dom.js");
var _oneTimeJs = require("../binding/one-time.js");
var _markupJs = require("./markup.js");
var _htmlBindingDirectiveJs = require("./html-binding-directive.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _viewJs = require("./view.js");
const targetIdFrom = (parentId, nodeIndex)=>`${parentId}.${nodeIndex}`;
const descriptorCache = {};
// used to prevent creating lots of objects just to track node and index while compiling
const next = {
    index: 0,
    node: null
};
function tryWarn(name) {
    if (!name.startsWith("fast-")) (0, _platformJs.FAST).warn(1204 /* Message.hostBindingWithoutHost */ , {
        name
    });
}
const warningHost = new Proxy(document.createElement("div"), {
    get (target, property) {
        tryWarn(property);
        const value = Reflect.get(target, property);
        return (0, _interfacesJs.isFunction)(value) ? value.bind(target) : value;
    },
    set (target, property, value) {
        tryWarn(property);
        return Reflect.set(target, property, value);
    }
});
class CompilationContext {
    constructor(fragment, directives, policy){
        this.fragment = fragment;
        this.directives = directives;
        this.policy = policy;
        this.proto = null;
        this.nodeIds = new Set();
        this.descriptors = {};
        this.factories = [];
    }
    addFactory(factory, parentId, nodeId, targetIndex, tagName) {
        var _a, _b;
        if (!this.nodeIds.has(nodeId)) {
            this.nodeIds.add(nodeId);
            this.addTargetDescriptor(parentId, nodeId, targetIndex);
        }
        factory.id = (_a = factory.id) !== null && _a !== void 0 ? _a : (0, _markupJs.nextId)();
        factory.targetNodeId = nodeId;
        factory.targetTagName = tagName;
        factory.policy = (_b = factory.policy) !== null && _b !== void 0 ? _b : this.policy;
        this.factories.push(factory);
    }
    freeze() {
        this.proto = Object.create(null, this.descriptors);
        return this;
    }
    addTargetDescriptor(parentId, targetId, targetIndex) {
        const descriptors = this.descriptors;
        if (targetId === "r" || // root
        targetId === "h" || // host
        descriptors[targetId]) return;
        if (!descriptors[parentId]) {
            const index = parentId.lastIndexOf(".");
            const grandparentId = parentId.substring(0, index);
            const childIndex = parseInt(parentId.substring(index + 1));
            this.addTargetDescriptor(grandparentId, parentId, childIndex);
        }
        let descriptor = descriptorCache[targetId];
        if (!descriptor) {
            const field = `_${targetId}`;
            descriptorCache[targetId] = descriptor = {
                get () {
                    var _a;
                    return (_a = this[field]) !== null && _a !== void 0 ? _a : this[field] = this[parentId].childNodes[targetIndex];
                }
            };
        }
        descriptors[targetId] = descriptor;
    }
    createView(hostBindingTarget) {
        const fragment = this.fragment.cloneNode(true);
        const targets = Object.create(this.proto);
        targets.r = fragment;
        targets.h = hostBindingTarget !== null && hostBindingTarget !== void 0 ? hostBindingTarget : warningHost;
        for (const id of this.nodeIds)targets[id]; // trigger locator
        return new (0, _viewJs.HTMLView)(fragment, this.factories, targets);
    }
}
function compileAttributes(context, parentId, node, nodeId, nodeIndex, includeBasicValues = false) {
    const attributes = node.attributes;
    const directives = context.directives;
    for(let i = 0, ii = attributes.length; i < ii; ++i){
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = (0, _markupJs.Parser).parse(attrValue, directives);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneTimeJs.oneTime)(()=>attrValue, context.policy));
                (0, _htmlDirectiveJs.HTMLDirective).assignAspect(result, attr.name);
            }
        } else /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ result = Compiler.aggregate(parseResult, context.policy);
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result, parentId, nodeId, nodeIndex, node.tagName);
        }
    }
}
function compileContent(context, node, parentId, nodeId, nodeIndex) {
    const parseResult = (0, _markupJs.Parser).parse(node.textContent, context.directives);
    if (parseResult === null) {
        next.node = node.nextSibling;
        next.index = nodeIndex + 1;
        return next;
    }
    let currentNode;
    let lastNode = currentNode = node;
    for(let i = 0, ii = parseResult.length; i < ii; ++i){
        const currentPart = parseResult[i];
        if (i !== 0) {
            nodeIndex++;
            nodeId = targetIdFrom(parentId, nodeIndex);
            currentNode = lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
        }
        if ((0, _interfacesJs.isString)(currentPart)) currentNode.textContent = currentPart;
        else {
            currentNode.textContent = " ";
            (0, _htmlDirectiveJs.HTMLDirective).assignAspect(currentPart);
            context.addFactory(currentPart, parentId, nodeId, nodeIndex, null);
        }
        lastNode = currentNode;
    }
    next.index = nodeIndex + 1;
    next.node = lastNode.nextSibling;
    return next;
}
function compileChildren(context, parent, parentId) {
    let nodeIndex = 0;
    let childNode = parent.firstChild;
    while(childNode){
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ const result = compileNode(context, parentId, childNode, nodeIndex);
        childNode = result.node;
        nodeIndex = result.index;
    }
}
function compileNode(context, parentId, node, nodeIndex) {
    const nodeId = targetIdFrom(parentId, nodeIndex);
    switch(node.nodeType){
        case 1:
            compileAttributes(context, parentId, node, nodeId, nodeIndex);
            compileChildren(context, node, nodeId);
            break;
        case 3:
            return compileContent(context, node, parentId, nodeId, nodeIndex);
        case 8:
            const parts = (0, _markupJs.Parser).parse(node.data, context.directives);
            if (parts !== null) context.addFactory(/* eslint-disable-next-line @typescript-eslint/no-use-before-define */ Compiler.aggregate(parts), parentId, nodeId, nodeIndex, null);
            break;
    }
    next.index = nodeIndex + 1;
    next.node = node.nextSibling;
    return next;
}
function isMarker(node, directives) {
    return node && node.nodeType == 8 && (0, _markupJs.Parser).parse(node.data, directives) !== null;
}
const templateTag = "TEMPLATE";
const Compiler = {
    /**
     * Compiles a template and associated directives into a compilation
     * result which can be used to create views.
     * @param html - The html string or template element to compile.
     * @param factories - The behavior factories referenced by the template.
     * @param policy - The security policy to compile the html with.
     * @remarks
     * The template that is provided for compilation is altered in-place
     * and cannot be compiled again. If the original template must be preserved,
     * it is recommended that you clone the original and pass the clone to this API.
     * @public
     */ compile (html, factories, policy = (0, _domJs.DOM).policy) {
        let template;
        if ((0, _interfacesJs.isString)(html)) {
            template = document.createElement(templateTag);
            template.innerHTML = policy.createHTML(html);
            const fec = template.content.firstElementChild;
            if (fec !== null && fec.tagName === templateTag) template = fec;
        } else template = html;
        if (!template.content.firstChild && !template.content.lastChild) template.content.appendChild(document.createComment(""));
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
        const fragment = document.adoptNode(template.content);
        const context = new CompilationContext(fragment, factories, policy);
        compileAttributes(context, "", template, /* host */ "h", 0, true);
        if (// If the first node in a fragment is a marker, that means it's an unstable first node,
        // because something like a when, repeat, etc. could add nodes before the marker.
        // To mitigate this, we insert a stable first node. However, if we insert a node,
        // that will alter the result of the TreeWalker. So, we also need to offset the target index.
        isMarker(fragment.firstChild, factories) || // Or if there is only one node and a directive, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        fragment.childNodes.length === 1 && Object.keys(factories).length > 0) fragment.insertBefore(document.createComment(""), fragment.firstChild);
        compileChildren(context, fragment, /* root */ "r");
        next.node = null; // prevent leaks
        return context.freeze();
    },
    /**
     * Sets the default compilation strategy that will be used by the ViewTemplate whenever
     * it needs to compile a view preprocessed with the html template function.
     * @param strategy - The compilation strategy to use when compiling templates.
     */ setDefaultStrategy (strategy) {
        this.compile = strategy;
    },
    /**
     * Aggregates an array of strings and directives into a single directive.
     * @param parts - A heterogeneous array of static strings interspersed with
     * directives.
     * @param policy - The security policy to use with the aggregated bindings.
     * @returns A single inline directive that aggregates the behavior of all the parts.
     */ aggregate (parts, policy = (0, _domJs.DOM).policy) {
        if (parts.length === 1) return parts[0];
        let sourceAspect;
        let binding;
        let isVolatile = false;
        let bindingPolicy = void 0;
        const partCount = parts.length;
        const finalParts = parts.map((x)=>{
            if ((0, _interfacesJs.isString)(x)) return ()=>x;
            sourceAspect = x.sourceAspect || sourceAspect;
            binding = x.dataBinding || binding;
            isVolatile = isVolatile || x.dataBinding.isVolatile;
            bindingPolicy = bindingPolicy || x.dataBinding.policy;
            return x.dataBinding.evaluate;
        });
        const expression = (scope, context)=>{
            let output = "";
            for(let i = 0; i < partCount; ++i)output += finalParts[i](scope, context);
            return output;
        };
        binding.evaluate = expression;
        binding.isVolatile = isVolatile;
        binding.policy = bindingPolicy !== null && bindingPolicy !== void 0 ? bindingPolicy : policy;
        const directive = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)(binding);
        (0, _htmlDirectiveJs.HTMLDirective).assignAspect(directive, sourceAspect);
        return directive;
    }
};

},{"../interfaces.js":"5090A","../platform.js":"aWsKi","../dom.js":"9qDgN","../binding/one-time.js":"8bSYC","./markup.js":"byCOc","./html-binding-directive.js":"2zgpw","./html-directive.js":"jlaqE","./view.js":"hUlFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUlFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */ parcelHelpers.export(exports, "HTMLView", ()=>HTMLView);
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
function removeNodeSequence(firstNode, lastNode) {
    const parent = firstNode.parentNode;
    let current = firstNode;
    let next;
    while(current !== lastNode){
        next = current.nextSibling;
        parent.removeChild(current);
        current = next;
    }
    parent.removeChild(lastNode);
}
class HTMLView {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */ constructor(fragment, factories, targets){
        this.fragment = fragment;
        this.factories = factories;
        this.targets = targets;
        this.behaviors = null;
        this.unbindables = [];
        /**
         * The data that the view is bound to.
         */ this.source = null;
        /**
         * Indicates whether the controller is bound.
         */ this.isBound = false;
        /**
         * Indicates how the source's lifetime relates to the controller's lifetime.
         */ this.sourceLifetime = (0, _observableJs.SourceLifetime).unknown;
        /**
         * The execution context the view is running within.
         */ this.context = this;
        /**
         * The index of the current item within a repeat context.
         */ this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */ this.length = 0;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * The current event within an event handler.
     */ get event() {
        return (0, _observableJs.ExecutionContext).getEvent();
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */ get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */ get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */ get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */ get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */ get isLast() {
        return this.index === this.length - 1;
    }
    /**
     * Returns the typed event detail of a custom event.
     */ eventDetail() {
        return this.event.detail;
    }
    /**
     * Returns the typed event target of the event.
     */ eventTarget() {
        return this.event.target;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */ appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */ insertBefore(node) {
        if (this.fragment.hasChildNodes()) node.parentNode.insertBefore(this.fragment, node);
        else {
            const end = this.lastChild;
            if (node.previousSibling === end) return;
            const parentNode = node.parentNode;
            let current = this.firstChild;
            let next;
            while(current !== end){
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */ remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while(current !== end){
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */ dispose() {
        removeNodeSequence(this.firstChild, this.lastChild);
        this.unbind();
    }
    onUnbind(behavior) {
        this.unbindables.push(behavior);
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */ bind(source, context = this) {
        if (this.source === source) return;
        let behaviors = this.behaviors;
        if (behaviors === null) {
            this.source = source;
            this.context = context;
            this.behaviors = behaviors = new Array(this.factories.length);
            const factories = this.factories;
            for(let i = 0, ii = factories.length; i < ii; ++i){
                const behavior = factories[i].createBehavior();
                behavior.bind(this);
                behaviors[i] = behavior;
            }
        } else {
            if (this.source !== null) this.evaluateUnbindables();
            this.isBound = false;
            this.source = source;
            this.context = context;
            for(let i = 0, ii = behaviors.length; i < ii; ++i)behaviors[i].bind(this);
        }
        this.isBound = true;
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */ unbind() {
        if (!this.isBound || this.source === null) return;
        this.evaluateUnbindables();
        this.source = null;
        this.context = this;
        this.isBound = false;
    }
    evaluateUnbindables() {
        const unbindables = this.unbindables;
        for(let i = 0, ii = unbindables.length; i < ii; ++i)unbindables[i].unbind(this);
        unbindables.length = 0;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */ static disposeContiguousBatch(views) {
        if (views.length === 0) return;
        removeNodeSequence(views[0].firstChild, views[views.length - 1].lastChild);
        for(let i = 0, ii = views.length; i < ii; ++i)views[i].unbind();
    }
}
(0, _platformJs.makeSerializationNoop)(HTMLView);
(0, _observableJs.Observable).defineProperty(HTMLView.prototype, "index");
(0, _observableJs.Observable).defineProperty(HTMLView.prototype, "length");

},{"../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3O57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A directive that enables basic conditional rendering in a template.
 * @param condition - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @param elseTemplateOrTemplateBinding - Optional template or binding that that
 * gets the template to render when the conditional is false.
 * @public
 */ parcelHelpers.export(exports, "when", ()=>when);
var _interfacesJs = require("../interfaces.js");
const noTemplate = ()=>null;
function normalizeBinding(value) {
    return value === undefined ? noTemplate : (0, _interfacesJs.isFunction)(value) ? value : ()=>value;
}
function when(condition, templateOrTemplateBinding, elseTemplateOrTemplateBinding) {
    const dataBinding = (0, _interfacesJs.isFunction)(condition) ? condition : ()=>condition;
    const templateBinding = normalizeBinding(templateOrTemplateBinding);
    const elseBinding = normalizeBinding(elseTemplateOrTemplateBinding);
    return (source, context)=>dataBinding(source, context) ? templateBinding(source, context) : elseBinding(source, context);
}

},{"../interfaces.js":"5090A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"IvnaY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A behavior that renders a template for each item in an array.
 * @public
 */ parcelHelpers.export(exports, "RepeatBehavior", ()=>RepeatBehavior);
/**
 * A directive that configures list rendering.
 * @public
 */ parcelHelpers.export(exports, "RepeatDirective", ()=>RepeatDirective);
/**
 * A directive that enables list rendering.
 * @param items - The array to render.
 * @param template - The template or a template binding used obtain a template
 * to render for each item in the array.
 * @param options - Options used to turn on special repeat features.
 * @public
 */ parcelHelpers.export(exports, "repeat", ()=>repeat);
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _arraysJs = require("../observation/arrays.js");
var _normalizeJs = require("../binding/normalize.js");
var _markupJs = require("./markup.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _viewJs = require("./view.js");
const defaultRepeatOptions = Object.freeze({
    positioning: false,
    recycle: true
});
function bindWithoutPositioning(view, items, index, controller) {
    view.context.parent = controller.source;
    view.context.parentContext = controller.context;
    view.bind(items[index]);
}
function bindWithPositioning(view, items, index, controller) {
    view.context.parent = controller.source;
    view.context.parentContext = controller.context;
    view.context.length = items.length;
    view.context.index = index;
    view.bind(items[index]);
}
class RepeatBehavior {
    /**
     * Creates an instance of RepeatBehavior.
     * @param location - The location in the DOM to render the repeat.
     * @param dataBinding - The array to render.
     * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
     * @param templateBinding - The template to render for each item.
     * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
     * @param options - Options used to turn on special repeat features.
     */ constructor(directive){
        this.directive = directive;
        this.items = null;
        this.itemsObserver = null;
        this.bindView = bindWithoutPositioning;
        /** @internal */ this.views = [];
        this.itemsBindingObserver = directive.dataBinding.createObserver(this, directive);
        this.templateBindingObserver = directive.templateBinding.createObserver(this, directive);
        if (directive.options.positioning) this.bindView = bindWithPositioning;
    }
    /**
     * Bind this behavior.
     * @param controller - The view controller that manages the lifecycle of this behavior.
     */ bind(controller) {
        this.location = controller.targets[this.directive.targetNodeId];
        this.controller = controller;
        this.items = this.itemsBindingObserver.bind(controller);
        this.template = this.templateBindingObserver.bind(controller);
        this.observeItems(true);
        this.refreshAllViews();
        controller.onUnbind(this);
    }
    /**
     * Unbinds this behavior.
     */ unbind() {
        if (this.itemsObserver !== null) this.itemsObserver.unsubscribe(this);
        this.unbindAllViews();
    }
    /**
     * Handles changes in the array, its items, and the repeat template.
     * @param source - The source of the change.
     * @param args - The details about what was changed.
     */ handleChange(source, args) {
        if (args === this.itemsBindingObserver) {
            this.items = this.itemsBindingObserver.bind(this.controller);
            this.observeItems();
            this.refreshAllViews();
        } else if (args === this.templateBindingObserver) {
            this.template = this.templateBindingObserver.bind(this.controller);
            this.refreshAllViews(true);
        } else if (!args[0]) return;
        else if (args[0].reset) this.refreshAllViews();
        else this.updateViews(args);
    }
    observeItems(force = false) {
        if (!this.items) {
            this.items = (0, _platformJs.emptyArray);
            return;
        }
        const oldObserver = this.itemsObserver;
        const newObserver = this.itemsObserver = (0, _observableJs.Observable).getNotifier(this.items);
        const hasNewObserver = oldObserver !== newObserver;
        if (hasNewObserver && oldObserver !== null) oldObserver.unsubscribe(this);
        if (hasNewObserver || force) newObserver.subscribe(this);
    }
    updateViews(splices) {
        const views = this.views;
        const bindView = this.bindView;
        const items = this.items;
        const template = this.template;
        const controller = this.controller;
        const recycle = this.directive.options.recycle;
        const leftoverViews = [];
        let leftoverIndex = 0;
        let availableViews = 0;
        for(let i = 0, ii = splices.length; i < ii; ++i){
            const splice = splices[i];
            const removed = splice.removed;
            let removeIndex = 0;
            let addIndex = splice.index;
            const end = addIndex + splice.addedCount;
            const removedViews = views.splice(splice.index, removed.length);
            const totalAvailableViews = availableViews = leftoverViews.length + removedViews.length;
            for(; addIndex < end; ++addIndex){
                const neighbor = views[addIndex];
                const location = neighbor ? neighbor.firstChild : this.location;
                let view;
                if (recycle && availableViews > 0) {
                    if (removeIndex <= totalAvailableViews && removedViews.length > 0) {
                        view = removedViews[removeIndex];
                        removeIndex++;
                    } else {
                        view = leftoverViews[leftoverIndex];
                        leftoverIndex++;
                    }
                    availableViews--;
                } else view = template.create();
                views.splice(addIndex, 0, view);
                bindView(view, items, addIndex, controller);
                view.insertBefore(location);
            }
            if (removedViews[removeIndex]) leftoverViews.push(...removedViews.slice(removeIndex));
        }
        for(let i = leftoverIndex, ii = leftoverViews.length; i < ii; ++i)leftoverViews[i].dispose();
        if (this.directive.options.positioning) for(let i = 0, viewsLength = views.length; i < viewsLength; ++i){
            const context = views[i].context;
            context.length = viewsLength;
            context.index = i;
        }
    }
    refreshAllViews(templateChanged = false) {
        const items = this.items;
        const template = this.template;
        const location = this.location;
        const bindView = this.bindView;
        const controller = this.controller;
        let itemsLength = items.length;
        let views = this.views;
        let viewsLength = views.length;
        if (itemsLength === 0 || templateChanged || !this.directive.options.recycle) {
            // all views need to be removed
            (0, _viewJs.HTMLView).disposeContiguousBatch(views);
            viewsLength = 0;
        }
        if (viewsLength === 0) {
            // all views need to be created
            this.views = views = new Array(itemsLength);
            for(let i = 0; i < itemsLength; ++i){
                const view = template.create();
                bindView(view, items, i, controller);
                views[i] = view;
                view.insertBefore(location);
            }
        } else {
            // attempt to reuse existing views with new data
            let i = 0;
            for(; i < itemsLength; ++i)if (i < viewsLength) {
                const view = views[i];
                bindView(view, items, i, controller);
            } else {
                const view = template.create();
                bindView(view, items, i, controller);
                views.push(view);
                view.insertBefore(location);
            }
            const removed = views.splice(i, viewsLength - i);
            for(i = 0, itemsLength = removed.length; i < itemsLength; ++i)removed[i].dispose();
        }
    }
    unbindAllViews() {
        const views = this.views;
        for(let i = 0, ii = views.length; i < ii; ++i)views[i].unbind();
    }
}
class RepeatDirective {
    /**
     * Creates an instance of RepeatDirective.
     * @param dataBinding - The binding that provides the array to render.
     * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
     * @param options - Options used to turn on special repeat features.
     */ constructor(dataBinding, templateBinding, options){
        this.dataBinding = dataBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        (0, _arraysJs.ArrayObserver).enable();
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     */ createHTML(add) {
        return (0, _markupJs.Markup).comment(add(this));
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     */ createBehavior() {
        return new RepeatBehavior(this);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(RepeatDirective);
function repeat(items, template, options = defaultRepeatOptions) {
    const dataBinding = (0, _normalizeJs.normalizeBinding)(items);
    const templateBinding = (0, _normalizeJs.normalizeBinding)(template);
    return new RepeatDirective(dataBinding, templateBinding, Object.assign(Object.assign({}, defaultRepeatOptions), options));
}

},{"../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../observation/arrays.js":"h8D0u","../binding/normalize.js":"j2v2x","./markup.js":"byCOc","./html-directive.js":"jlaqE","./view.js":"hUlFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59SVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The runtime behavior for slotted node observation.
 * @public
 */ parcelHelpers.export(exports, "SlottedDirective", ()=>SlottedDirective);
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */ parcelHelpers.export(exports, "slotted", ()=>slotted);
var _interfacesJs = require("../interfaces.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _nodeObservationJs = require("./node-observation.js");
const slotEvent = "slotchange";
class SlottedDirective extends (0, _nodeObservationJs.NodeObservationDirective) {
    /**
     * Begins observation of the nodes.
     * @param target - The target to observe.
     */ observe(target) {
        target.addEventListener(slotEvent, this);
    }
    /**
     * Disconnects observation of the nodes.
     * @param target - The target to unobserve.
     */ disconnect(target) {
        target.removeEventListener(slotEvent, this);
    }
    /**
     * Retrieves the raw nodes that should be assigned to the source property.
     * @param target - The target to get the node to.
     */ getNodes(target) {
        return target.assignedNodes(this.options);
    }
    /** @internal */ handleEvent(event) {
        const target = event.currentTarget;
        this.updateTarget(this.getSource(target), this.computeNodes(target));
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(SlottedDirective);
function slotted(propertyOrOptions) {
    if ((0, _interfacesJs.isString)(propertyOrOptions)) propertyOrOptions = {
        property: propertyOrOptions
    };
    return new SlottedDirective(propertyOrOptions);
}

},{"../interfaces.js":"5090A","./html-directive.js":"jlaqE","./node-observation.js":"6lFIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lFIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elements", ()=>elements);
/**
 * A base class for node observation.
 * @public
 * @remarks
 * Internally used by the SlottedDirective and the ChildrenDirective.
 */ parcelHelpers.export(exports, "NodeObservationDirective", ()=>NodeObservationDirective);
var _platformJs = require("../platform.js");
var _htmlDirectiveJs = require("./html-directive.js");
const selectElements = (value)=>value.nodeType === 1;
const elements = (selector)=>selector ? (value)=>value.nodeType === 1 && value.matches(selector) : selectElements;
class NodeObservationDirective extends (0, _htmlDirectiveJs.StatelessAttachedAttributeDirective) {
    /**
     * The unique id of the factory.
     */ get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
        this._controllerProperty = `${value}-c`;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     * @param targets - The targets that behaviors in a view can attach to.
     */ bind(controller) {
        const target = controller.targets[this.targetNodeId];
        target[this._controllerProperty] = controller;
        this.updateTarget(controller.source, this.computeNodes(target));
        this.observe(target);
        controller.onUnbind(this);
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     * @param context - The execution context that the binding is operating within.
     * @param targets - The targets that behaviors in a view can attach to.
     */ unbind(controller) {
        const target = controller.targets[this.targetNodeId];
        this.updateTarget(controller.source, (0, _platformJs.emptyArray));
        this.disconnect(target);
        target[this._controllerProperty] = null;
    }
    /**
     * Gets the data source for the target.
     * @param target - The target to get the source for.
     * @returns The source.
     */ getSource(target) {
        return target[this._controllerProperty].source;
    }
    /**
     * Updates the source property with the computed nodes.
     * @param source - The source object to assign the nodes property to.
     * @param value - The nodes to assign to the source object property.
     */ updateTarget(source, value) {
        source[this.options.property] = value;
    }
    /**
     * Computes the set of nodes that should be assigned to the source property.
     * @param target - The target to compute the nodes for.
     * @returns The computed nodes.
     * @remarks
     * Applies filters if provided.
     */ computeNodes(target) {
        let nodes = this.getNodes(target);
        if ("filter" in this.options) nodes = nodes.filter(this.options.filter);
        return nodes;
    }
}

},{"../platform.js":"aWsKi","./html-directive.js":"jlaqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6pQm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The runtime behavior for child node observation.
 * @public
 */ parcelHelpers.export(exports, "ChildrenDirective", ()=>ChildrenDirective);
/**
 * A directive that observes the `childNodes` of an element and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure child node observation.
 * @public
 */ parcelHelpers.export(exports, "children", ()=>children);
var _interfacesJs = require("../interfaces.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _nodeObservationJs = require("./node-observation.js");
class ChildrenDirective extends (0, _nodeObservationJs.NodeObservationDirective) {
    /**
     * Creates an instance of ChildrenDirective.
     * @param options - The options to use in configuring the child observation behavior.
     */ constructor(options){
        super(options);
        this.observerProperty = Symbol();
        this.handleEvent = (mutations, observer)=>{
            const target = observer.target;
            this.updateTarget(this.getSource(target), this.computeNodes(target));
        };
        options.childList = true;
    }
    /**
     * Begins observation of the nodes.
     * @param target - The target to observe.
     */ observe(target) {
        let observer = target[this.observerProperty];
        if (!observer) {
            observer = new MutationObserver(this.handleEvent);
            observer.toJSON = (0, _interfacesJs.noop);
            target[this.observerProperty] = observer;
        }
        observer.target = target;
        observer.observe(target, this.options);
    }
    /**
     * Disconnects observation of the nodes.
     * @param target - The target to unobserve.
     */ disconnect(target) {
        const observer = target[this.observerProperty];
        observer.target = null;
        observer.disconnect();
    }
    /**
     * Retrieves the raw nodes that should be assigned to the source property.
     * @param target - The target to get the node to.
     */ getNodes(target) {
        if ("selector" in this.options) return Array.from(target.querySelectorAll(this.options.selector));
        return Array.from(target.childNodes);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(ChildrenDirective);
function children(propertyOrOptions) {
    if ((0, _interfacesJs.isString)(propertyOrOptions)) propertyOrOptions = {
        property: propertyOrOptions
    };
    return new ChildrenDirective(propertyOrOptions);
}

},{"../interfaces.js":"5090A","./html-directive.js":"jlaqE","./node-observation.js":"6lFIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHqCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FASTElement", ()=>FASTElement);
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */ parcelHelpers.export(exports, "customElement", ()=>customElement);
var _interfacesJs = require("../interfaces.js");
var _elementControllerJs = require("./element-controller.js");
var _fastDefinitionsJs = require("./fast-definitions.js");
/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ function createFASTElement(BaseType) {
    const type = class extends BaseType {
        constructor(){
            /* eslint-disable-next-line */ super();
            (0, _elementControllerJs.ElementController).forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.connect();
        }
        disconnectedCallback() {
            this.$fastController.disconnect();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
    (0, _fastDefinitionsJs.FASTElementDefinition).registerBaseType(type);
    return type;
}
function compose(type, nameOrDef) {
    if ((0, _interfacesJs.isFunction)(type)) return (0, _fastDefinitionsJs.FASTElementDefinition).compose(type, nameOrDef);
    return (0, _fastDefinitionsJs.FASTElementDefinition).compose(this, type);
}
function define(type, nameOrDef) {
    if ((0, _interfacesJs.isFunction)(type)) return (0, _fastDefinitionsJs.FASTElementDefinition).compose(type, nameOrDef).define().type;
    return (0, _fastDefinitionsJs.FASTElementDefinition).compose(this, type).define().type;
}
function from(BaseType) {
    return createFASTElement(BaseType);
}
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */ from,
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */ define,
    /**
     * Defines metadata for a FASTElement which can be used to later define the element.
     * @public
     */ compose
});
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        define(type, nameOrDef);
    };
}

},{"../interfaces.js":"5090A","./element-controller.js":"ljMOy","./fast-definitions.js":"j7Lm6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljMOy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */ parcelHelpers.export(exports, "ElementController", ()=>ElementController);
// Default StyleStrategy implementations are defined in this module because they
// require access to element shadowRoots, and we don't want to leak shadowRoot
// objects out of this module.
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */ parcelHelpers.export(exports, "AdoptedStyleSheetsStrategy", ()=>AdoptedStyleSheetsStrategy);
/**
 * @internal
 */ parcelHelpers.export(exports, "StyleElementStrategy", ()=>StyleElementStrategy);
var _interfacesJs = require("../interfaces.js");
var _notifierJs = require("../observation/notifier.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _elementStylesJs = require("../styles/element-styles.js");
var _fastDefinitionsJs = require("./fast-definitions.js");
const defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true
};
const isConnectedPropertyName = "isConnected";
const shadowRoots = new WeakMap();
function getShadowRoot(element) {
    var _a, _b;
    return (_b = (_a = element.shadowRoot) !== null && _a !== void 0 ? _a : shadowRoots.get(element)) !== null && _b !== void 0 ? _b : null;
}
let elementControllerStrategy;
class ElementController extends (0, _notifierJs.PropertyChangeNotifier) {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */ constructor(element, definition){
        super(element);
        this.boundObservables = null;
        this.needsInitialization = true;
        this.hasExistingShadowRoot = false;
        this._template = null;
        this.stage = 3 /* Stages.disconnected */ ;
        /**
         * A guard against connecting behaviors multiple times
         * during connect in scenarios where a behavior adds
         * another behavior during it's connectedCallback
         */ this.guardBehaviorConnection = false;
        this.behaviors = null;
        this._mainStyles = null;
        /**
         * This allows Observable.getNotifier(...) to return the Controller
         * when the notifier for the Controller itself is being requested. The
         * result is that the Observable system does not need to create a separate
         * instance of Notifier for observables on the Controller. The component and
         * the controller will now share the same notifier, removing one-object construct
         * per web component instance.
         */ this.$fastController = this;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */ this.view = null;
        this.source = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            let shadowRoot = element.shadowRoot;
            if (shadowRoot) this.hasExistingShadowRoot = true;
            else {
                shadowRoot = element.attachShadow(shadowOptions);
                if (shadowOptions.mode === "closed") shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = (0, _observableJs.Observable).getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = this.boundObservables = Object.create(null);
            for(let i = 0, ii = accessors.length; i < ii; ++i){
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */ get isConnected() {
        (0, _observableJs.Observable).track(this, isConnectedPropertyName);
        return this.stage === 1 /* Stages.connected */ ;
    }
    /**
     * The context the expression is evaluated against.
     */ get context() {
        var _a, _b;
        return (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.context) !== null && _b !== void 0 ? _b : (0, _observableJs.ExecutionContext).default;
    }
    /**
     * Indicates whether the controller is bound.
     */ get isBound() {
        var _a, _b;
        return (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.isBound) !== null && _b !== void 0 ? _b : false;
    }
    /**
     * Indicates how the source's lifetime relates to the controller's lifetime.
     */ get sourceLifetime() {
        var _a;
        return (_a = this.view) === null || _a === void 0 ? void 0 : _a.sourceLifetime;
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */ get template() {
        var _a;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            const definition = this.definition;
            if (this.source.resolveTemplate) // 2. Allow for element instance overrides next.
            this._template = this.source.resolveTemplate();
            else if (definition.template) // 3. Default to the static definition.
            this._template = (_a = definition.template) !== null && _a !== void 0 ? _a : null;
        }
        return this._template;
    }
    set template(value) {
        if (this._template === value) return;
        this._template = value;
        if (!this.needsInitialization) this.renderTemplate(value);
    }
    /**
     * The main set of styles used for the component, independent
     * of any dynamically added styles.
     */ get mainStyles() {
        var _a;
        // 1. Styles overrides take top precedence.
        if (this._mainStyles === null) {
            const definition = this.definition;
            if (this.source.resolveStyles) // 2. Allow for element instance overrides next.
            this._mainStyles = this.source.resolveStyles();
            else if (definition.styles) // 3. Default to the static definition.
            this._mainStyles = (_a = definition.styles) !== null && _a !== void 0 ? _a : null;
        }
        return this._mainStyles;
    }
    set mainStyles(value) {
        if (this._mainStyles === value) return;
        if (this._mainStyles !== null) this.removeStyles(this._mainStyles);
        this._mainStyles = value;
        if (!this.needsInitialization) this.addStyles(value);
    }
    /**
     * Registers an unbind handler with the controller.
     * @param behavior - An object to call when the controller unbinds.
     */ onUnbind(behavior) {
        var _a;
        (_a = this.view) === null || _a === void 0 || _a.onUnbind(behavior);
    }
    /**
     * Adds the behavior to the component.
     * @param behavior - The behavior to add.
     */ addBehavior(behavior) {
        var _a, _b;
        const targetBehaviors = (_a = this.behaviors) !== null && _a !== void 0 ? _a : this.behaviors = new Map();
        const count = (_b = targetBehaviors.get(behavior)) !== null && _b !== void 0 ? _b : 0;
        if (count === 0) {
            targetBehaviors.set(behavior, 1);
            behavior.addedCallback && behavior.addedCallback(this);
            if (behavior.connectedCallback && !this.guardBehaviorConnection && (this.stage === 1 /* Stages.connected */  || this.stage === 0 /* Stages.connecting */ )) behavior.connectedCallback(this);
        } else targetBehaviors.set(behavior, count + 1);
    }
    /**
     * Removes the behavior from the component.
     * @param behavior - The behavior to remove.
     * @param force - Forces removal even if this behavior was added more than once.
     */ removeBehavior(behavior, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) return;
        const count = targetBehaviors.get(behavior);
        if (count === void 0) return;
        if (count === 1 || force) {
            targetBehaviors.delete(behavior);
            if (behavior.disconnectedCallback && this.stage !== 3 /* Stages.disconnected */ ) behavior.disconnectedCallback(this);
            behavior.removedCallback && behavior.removedCallback(this);
        } else targetBehaviors.set(behavior, count - 1);
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */ addStyles(styles) {
        var _a;
        if (!styles) return;
        const source = this.source;
        if (styles instanceof HTMLElement) {
            const target = (_a = getShadowRoot(source)) !== null && _a !== void 0 ? _a : this.source;
            target.append(styles);
        } else if (!styles.isAttachedTo(source)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(source);
            if (sourceBehaviors !== null) for(let i = 0, ii = sourceBehaviors.length; i < ii; ++i)this.addBehavior(sourceBehaviors[i]);
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */ removeStyles(styles) {
        var _a;
        if (!styles) return;
        const source = this.source;
        if (styles instanceof HTMLElement) {
            const target = (_a = getShadowRoot(source)) !== null && _a !== void 0 ? _a : source;
            target.removeChild(styles);
        } else if (styles.isAttachedTo(source)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(source);
            if (sourceBehaviors !== null) for(let i = 0, ii = sourceBehaviors.length; i < ii; ++i)this.removeBehavior(sourceBehaviors[i]);
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */ connect() {
        if (this.stage !== 3 /* Stages.disconnected */ ) return;
        this.stage = 0 /* Stages.connecting */ ;
        // If we have any observables that were bound, re-apply their values.
        if (this.boundObservables !== null) {
            const element = this.source;
            const boundObservables = this.boundObservables;
            const propertyNames = Object.keys(boundObservables);
            for(let i = 0, ii = propertyNames.length; i < ii; ++i){
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            this.guardBehaviorConnection = true;
            for (const key of behaviors.keys())key.connectedCallback && key.connectedCallback(this);
            this.guardBehaviorConnection = false;
        }
        if (this.needsInitialization) {
            this.renderTemplate(this.template);
            this.addStyles(this.mainStyles);
            this.needsInitialization = false;
        } else if (this.view !== null) this.view.bind(this.source);
        this.stage = 1 /* Stages.connected */ ;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */ disconnect() {
        if (this.stage !== 1 /* Stages.connected */ ) return;
        this.stage = 2 /* Stages.disconnecting */ ;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
        if (this.view !== null) this.view.unbind();
        const behaviors = this.behaviors;
        if (behaviors !== null) for (const key of behaviors.keys())key.disconnectedCallback && key.disconnectedCallback(this);
        this.stage = 3 /* Stages.disconnected */ ;
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */ onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) attrDef.onAttributeChangedCallback(this.source, newValue);
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */ emit(type, detail, options) {
        if (this.stage === 1 /* Stages.connected */ ) return this.source.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({
            detail
        }, defaultEventOptions), options)));
        return false;
    }
    renderTemplate(template) {
        var _a;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const element = this.source;
        const host = (_a = getShadowRoot(element)) !== null && _a !== void 0 ? _a : element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        } else if (!this.needsInitialization || this.hasExistingShadowRoot) {
            this.hasExistingShadowRoot = false;
            // If there was previous custom rendering, we need to clear out the host.
            for(let child = host.firstChild; child !== null; child = host.firstChild)host.removeChild(child);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
            this.view.sourceLifetime = (0, _observableJs.SourceLifetime).coupled;
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */ static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) return controller;
        const definition = (0, _fastDefinitionsJs.FASTElementDefinition).getForInstance(element);
        if (definition === void 0) throw (0, _platformJs.FAST).error(1401 /* Message.missingElementDefinition */ );
        return element.$fastController = new elementControllerStrategy(element, definition);
    }
    /**
     * Sets the strategy that ElementController.forCustomElement uses to construct
     * ElementController instances for an element.
     * @param strategy - The strategy to use.
     */ static setStrategy(strategy) {
        elementControllerStrategy = strategy;
    }
}
(0, _platformJs.makeSerializationNoop)(ElementController);
// Set default strategy for ElementController
ElementController.setStrategy(ElementController);
/**
 * Converts a styleTarget into the operative target. When the provided target is an Element
 * that is a FASTElement, the function will return the ShadowRoot for that element. Otherwise,
 * it will return the root node for the element.
 * @param target
 * @returns
 */ function normalizeStyleTarget(target) {
    var _a;
    if ("adoptedStyleSheets" in target) return target;
    else return (_a = getShadowRoot(target)) !== null && _a !== void 0 ? _a : target.getRootNode();
}
class AdoptedStyleSheetsStrategy {
    constructor(styles){
        const styleSheetCache = AdoptedStyleSheetsStrategy.styleSheetCache;
        this.sheets = styles.map((x)=>{
            if (x instanceof CSSStyleSheet) return x;
            let sheet = styleSheetCache.get(x);
            if (sheet === void 0) {
                sheet = new CSSStyleSheet();
                sheet.replaceSync(x);
                styleSheetCache.set(x, sheet);
            }
            return sheet;
        });
    }
    addStylesTo(target) {
        addAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
    }
    removeStylesFrom(target) {
        removeAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
    }
}
AdoptedStyleSheetsStrategy.styleSheetCache = new Map();
let id = 0;
const nextStyleId = ()=>`fast-${++id}`;
function usableStyleTarget(target) {
    return target === document ? document.body : target;
}
class StyleElementStrategy {
    constructor(styles){
        this.styles = styles;
        this.styleClass = nextStyleId();
    }
    addStylesTo(target) {
        target = usableStyleTarget(normalizeStyleTarget(target));
        const styles = this.styles;
        const styleClass = this.styleClass;
        for(let i = 0; i < styles.length; i++){
            const element = document.createElement("style");
            element.innerHTML = styles[i];
            element.className = styleClass;
            target.append(element);
        }
    }
    removeStylesFrom(target) {
        target = usableStyleTarget(normalizeStyleTarget(target));
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for(let i = 0, ii = styles.length; i < ii; ++i)target.removeChild(styles[i]);
    }
}
let addAdoptedStyleSheets = (target, sheets)=>{
    target.adoptedStyleSheets = [
        ...target.adoptedStyleSheets,
        ...sheets
    ];
};
let removeAdoptedStyleSheets = (target, sheets)=>{
    target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x)=>sheets.indexOf(x) === -1);
};
if ((0, _elementStylesJs.ElementStyles).supportsAdoptedStyleSheets) {
    try {
        // Test if browser implementation uses FrozenArray.
        // If not, use push / splice to alter the stylesheets
        // in place. This circumvents a bug in Safari 16.4 where
        // periodically, assigning the array would previously
        // cause sheets to be removed.
        document.adoptedStyleSheets.push();
        document.adoptedStyleSheets.splice();
        addAdoptedStyleSheets = (target, sheets)=>{
            target.adoptedStyleSheets.push(...sheets);
        };
        removeAdoptedStyleSheets = (target, sheets)=>{
            for (const sheet of sheets){
                const index = target.adoptedStyleSheets.indexOf(sheet);
                if (index !== -1) target.adoptedStyleSheets.splice(index, 1);
            }
        };
    } catch (e) {
    // Do nothing if an error is thrown, the default
    // case handles FrozenArray.
    }
    (0, _elementStylesJs.ElementStyles).setDefaultStrategy(AdoptedStyleSheetsStrategy);
} else (0, _elementStylesJs.ElementStyles).setDefaultStrategy(StyleElementStrategy);

},{"../interfaces.js":"5090A","../observation/notifier.js":"3Ve9s","../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../styles/element-styles.js":"jf7rv","./fast-definitions.js":"j7Lm6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7Lm6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Defines metadata for a FASTElement.
 * @public
 */ parcelHelpers.export(exports, "FASTElementDefinition", ()=>FASTElementDefinition);
var _interfacesJs = require("../interfaces.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _elementStylesJs = require("../styles/element-styles.js");
var _attributesJs = require("./attributes.js");
const defaultShadowOptions = {
    mode: "open"
};
const defaultElementOptions = {};
const fastElementBaseTypes = new Set();
const fastElementRegistry = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).elementRegistry, ()=>(0, _platformJs.createTypeRegistry)());
class FASTElementDefinition {
    constructor(type, nameOrConfig = type.definition){
        var _a;
        this.platformDefined = false;
        if ((0, _interfacesJs.isString)(nameOrConfig)) nameOrConfig = {
            name: nameOrConfig
        };
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        this.registry = (_a = nameOrConfig.registry) !== null && _a !== void 0 ? _a : customElements;
        const proto = type.prototype;
        const attributes = (0, _attributesJs.AttributeDefinition).collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for(let i = 0, ii = attributes.length; i < ii; ++i){
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
            (0, _observableJs.Observable).defineProperty(proto, current);
        }
        Reflect.defineProperty(type, "observedAttributes", {
            value: observedAttributes,
            enumerable: true
        });
        this.attributes = attributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles = (0, _elementStylesJs.ElementStyles).normalize(nameOrConfig.styles);
        fastElementRegistry.register(this);
    }
    /**
     * Indicates if this element has been defined in at least one registry.
     */ get isDefined() {
        return this.platformDefined;
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     * @remarks
     * This operation is idempotent per registry.
     */ define(registry = this.registry) {
        const type = this.type;
        if (!registry.get(this.name)) {
            this.platformDefined = true;
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrDef - The name of the element to define or a config object
     * that describes the element to define.
     */ static compose(type, nameOrDef) {
        if (fastElementBaseTypes.has(type) || fastElementRegistry.getByType(type)) return new FASTElementDefinition(class extends type {
        }, nameOrDef);
        return new FASTElementDefinition(type, nameOrDef);
    }
    /**
     * Registers a FASTElement base type.
     * @param type - The type to register as a base type.
     * @internal
     */ static registerBaseType(type) {
        fastElementBaseTypes.add(type);
    }
}
/**
 * Gets the element definition associated with the specified type.
 * @param type - The custom element type to retrieve the definition for.
 */ FASTElementDefinition.getByType = fastElementRegistry.getByType;
/**
 * Gets the element definition associated with the instance.
 * @param instance - The custom element instance to retrieve the definition for.
 */ FASTElementDefinition.getForInstance = fastElementRegistry.getForInstance;

},{"../interfaces.js":"5090A","../observation/observable.js":"a7TJ2","../platform.js":"aWsKi","../styles/element-styles.js":"jf7rv","./attributes.js":"fTX1F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTX1F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeConfiguration", ()=>AttributeConfiguration);
parcelHelpers.export(exports, "booleanConverter", ()=>booleanConverter);
parcelHelpers.export(exports, "nullableBooleanConverter", ()=>nullableBooleanConverter);
parcelHelpers.export(exports, "nullableNumberConverter", ()=>nullableNumberConverter);
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */ parcelHelpers.export(exports, "AttributeDefinition", ()=>AttributeDefinition);
parcelHelpers.export(exports, "attr", ()=>attr);
var _observableJs = require("../observation/observable.js");
var _interfacesJs = require("../interfaces.js");
var _updateQueueJs = require("../observation/update-queue.js");
var _domJs = require("../dom.js");
var _platformJs = require("../platform.js");
const booleanMode = "boolean";
const reflectMode = "reflect";
const AttributeConfiguration = Object.freeze({
    /**
     * Locates all attribute configurations associated with a type.
     */ locate: (0, _platformJs.createMetadataLocator)()
});
const booleanConverter = {
    toView (value) {
        return value ? "true" : "false";
    },
    fromView (value) {
        return value === null || value === void 0 || value === "false" || value === false || value === 0 ? false : true;
    }
};
const nullableBooleanConverter = {
    toView (value) {
        return typeof value === "boolean" ? value.toString() : "";
    },
    fromView (value) {
        return [
            null,
            undefined,
            void 0
        ].includes(value) ? null : booleanConverter.fromView(value);
    }
};
function toNumber(value) {
    if (value === null || value === undefined) return null;
    const number = value * 1;
    return isNaN(number) ? null : number;
}
const nullableNumberConverter = {
    toView (value) {
        const output = toNumber(value);
        return output ? output.toString() : output;
    },
    fromView: toNumber
};
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */ constructor(Owner, name, attribute = name.toLowerCase(), mode = reflectMode, converter){
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === booleanMode && converter === void 0) this.converter = booleanConverter;
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */ setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) newValue = converter.fromView(newValue);
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) source[this.callbackName](oldValue, newValue);
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */ getValue(source) {
        (0, _observableJs.Observable).track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */ onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) return;
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") return;
        (0, _updateQueueJs.Updates).enqueue(()=>{
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch(mode){
                case reflectMode:
                    const converter = this.converter;
                    (0, _domJs.DOM).setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case booleanMode:
                    (0, _domJs.DOM).setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */ static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(AttributeConfiguration.locate(Owner));
        for(let i = 0, ii = attributeLists.length; i < ii; ++i){
            const list = attributeLists[i];
            if (list === void 0) continue;
            for(let j = 0, jj = list.length; j < jj; ++j){
                const config = list[j];
                if ((0, _interfacesJs.isString)(config)) attributes.push(new AttributeDefinition(Owner, config));
                else attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) // Non invocation:
        // - @attr
        // Invocation with or w/o opts:
        // - @attr()
        // - @attr({...opts})
        config.property = $prop;
        AttributeConfiguration.locate($target.constructor).push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}

},{"../observation/observable.js":"a7TJ2","../interfaces.js":"5090A","../observation/update-queue.js":"8aP8r","../dom.js":"9qDgN","../platform.js":"aWsKi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wrfK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>$e23529bbb092cbf2$export$7254cc27399e90bd);
parcelHelpers.export(exports, "createState", ()=>$75bc972ccc621f94$export$e6a0daad8304de);
var _fastElement = require("@microsoft/fast-element");
class $e23529bbb092cbf2$export$7254cc27399e90bd {
    constructor(value = null){
        /** 
     * Propriété privée pour stocker l'historique des valeurs d'état, limitée aux 10 dernières entrées.
    */ this._history = [];
        /** 
     * Propriété privée pour stocker la valeur actuelle de l'état, initialisée à `null`.
    */ this._value = null;
        /** 
     * Propriété privée pour notifier les observateurs des changements d'état, initialisée avec `Observable.getNotifier`.
    */ this._notifier = (0, _fastElement.Observable).getNotifier(this);
        this._value = value;
    }
    /** 
   * Getter pour la valeur actuelle de l'état. Utilise `Observable.track` pour suivre les changements.
  */ get value() {
        (0, _fastElement.Observable).track(this, "value");
        return this._value;
    }
    /**
   * Setter pour mettre à jour la valeur de l'état. Ajoute la valeur actuelle à l'historique et notifie
   * les observateurs du changement.
   * @param {T} value - Nouvelle valeur de l'état.
  */ set value(value) {
        this._value = value;
        this._history = [
            this._value,
            ...this._history.reverse()
        ].reduce((results, value)=>{
            if (results.length > 10) results.push(value);
            return results;
        }, []).reverse();
        (0, _fastElement.Observable).notify(this, "value");
    }
    /**
   * Méthode statique pour initialiser un nouvel objet `State` avec une valeur initiale facultative.
   * @param {T} [value=null] - Valeur initiale de l'état.
   * @returns Une nouvelle instance de `State` avec la valeur spécifiée.
  */ static init(value = null) {
        return new $e23529bbb092cbf2$export$7254cc27399e90bd(value);
    }
    /**
   * Renvoie un tableau avec l'état actuel et une fonction pour mettre à jour l'état.
   * @returns Un tableau contenant l'état actuel et une fonction de mise à jour.
  */ get mutator() {
        return [
            this,
            (value)=>{
                this.value = value;
            }
        ];
    }
    /** 
   * Abonne une fonction de rappel qui sera appelée à chaque changement de valeur de l'état.
   * @param {function} callback - Fonction à appeler lors d'un changement de valeur.
  */ subscribe(callback) {
        this._notifier.subscribe({
            handleChange: (state, key)=>{
                callback(state[key]);
            }
        });
    }
    /**
   * Convertit l'état en une valeur primitive pour les objets, ou en Proxy pour les objets complexes.
   * @returns La valeur primitive ou un Proxy pour les objets complexes.
  */ [Symbol.toPrimitive]() {
        return typeof this.value != "object" ? this.value : new Proxy(this.value, {
            get (target, key) {
                return target[key] ? target[key] : undefined;
            }
        });
    }
}
function $75bc972ccc621f94$export$e6a0daad8304de(value = null) {
    return $e23529bbb092cbf2$export$7254cc27399e90bd.init(value).mutator;
}

},{"@microsoft/fast-element":"db3kA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHGLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStorage", ()=>$0718d8712747089f$export$d184a47a971dd4b9);
var _state = require("@lithium-framework/state");
class $89fec59bbef2bb37$export$98c71376181af907 extends Map {
    /**
   * Initialise une nouvelle instance de la classe `_storage` avec des enregistrements initiaux facultatifs et un validateur optionnel.
   * @param {RECORD} [records] - Un objet contenant des paires clé-valeur représentant des enregistrements de données.
   * @param {StateValidator} [validator] - Une fonction de validation optionnelle appelée lors de la modification d'un état.
   * @returns {Storage<RECORD>} Une nouvelle instance de la classe `_storage` initialisée avec les enregistrements et le validateur fournis.
   * @example
   * ```typescript
   * const records = { count: 0, name: "John" };
   * const storage = _storage.init(records);
   * ```
   */ static init(records, validator) {
        return new $89fec59bbef2bb37$export$98c71376181af907(records, validator);
    }
    /**
   * Constructeur qui initialise la classe `_storage` avec des enregistrements optionnels et un validateur.
   * @param {RECORD} [records] - Un objet contenant des paires clé-valeur représentant des enregistrements de données.
   * @param {StateValidator} [validator] - Une fonction de validation optionnelle appelée lors de la modification d'un état.
   */ constructor(records, validator){
        super();
        this._validator = null;
        if (validator) this._validator = validator;
        // Si des enregistrements sont fournis, les ajouter au _storage
        if (records) Object.keys(records).forEach((key)=>{
            this.set(key, (0, _state.createState)(records[key]));
        });
    }
    /**
   * Récupère la valeur du stockage en fonction d'une clé spécifiée.
   * Si un validateur est défini, il valide la nouvelle valeur avant de l'appliquer.
   * @template T - Le type de la valeur de l'état.
   * @param {StorageKeys<RECORD>} key - La clé utilisée pour accéder à un enregistrement spécifique en stockage.
   * @returns {State<T>["mutator"]} La fonction `mutator` associée à la clé spécifiée de l'objet `State`.
   * @example
   * ```typescript
   * const storage = _storage.init({ count: 0 });
   * const [count, setCount] = storage.get("count");
   * setCount(10); // met à jour la valeur si la validation réussit
   * ```
   */ get(key) {
        if (!this._validator) return super.get(key);
        else {
            let [state, setter] = super.get(key);
            return [
                state,
                (newValue)=>{
                    let previousValue = state.value;
                    let result = this._validator(key, previousValue, newValue);
                    if (result instanceof Promise) result.then(()=>setter(newValue)).catch((error)=>console.error(error));
                    else if (result == true) setter(newValue);
                }
            ];
        }
    }
}
function $0718d8712747089f$export$d184a47a971dd4b9(records = {}, stateValidator) {
    // Création d'un proxy contenant le stockage
    return new Proxy($89fec59bbef2bb37$export$98c71376181af907.init(records, stateValidator), {
        /**
     * Intercepte les opérations d'accès aux propriétés du stockage.
     * @param {Storage<RECORD>} target - L'objet cible auquel les opérations sont appliquées.
     * @param {string} key - La clé de l'état ou de la méthode accédée.
     * @param {any} receiver - L'objet Proxy qui intercepte l'opération.
     * @returns {any} La méthode ou la valeur de l'état correspondant à la clé.
     * @example
     * ```typescript
     * const storage = createStorage({ count: 0 });
     * console.log(storage.count[0].value); // affiche 0
     * storage.count ; // met à jour la valeur de count à 5
     * ```
    */ get (target, key, receiver) {
            // Retourne les méthodes du stockage
            if (target[key]) {
                if (typeof target[key] == "function") return target[key].bind(target);
                else return target[key];
            } else if (target.has(key)) return target.get(key);
            else return undefined;
        },
        /**
     * Intercepte les opérations de mise à jour des propriétés du stockage.
     * @param {Storage<RECORD>} target - L'objet cible auquel les opérations sont appliquées.
     * @param {string} key - La clé de l'état à mettre à jour.
     * @param {any} newValue - La nouvelle valeur à assigner à l'état.
     * @param {any} receiver - L'objet Proxy qui intercepte l'opération.
     * @returns {boolean} Un indicateur de succès de la mise à jour.
     * @example
     * ```typescript
     * const storage = createStorage({ count: 0 });
     * storage.count ; // met à jour la valeur de count à 5
     * console.log(storage.count[0].value); // affiche 5
     * ```
    */ set (target, key, newValue, receiver) {
            if (target.has(key)) {
                // Mise à jour du state contenant la valeur
                target.get(key)[1](newValue);
                return true;
            } else return undefined;
        }
    });
}

},{"@lithium-framework/state":"5wrfK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aUhvD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_HUID", ()=>$149c1bd638913645$export$74e446f6456d826d);
parcelHelpers.export(exports, "uuid", ()=>$149c1bd638913645$export$31b40729666a4ae0);
var _getRandomValues = require("get-random-values");
var _getRandomValuesDefault = parcelHelpers.interopDefault(_getRandomValues);
// ===============================================
// https://www.npmjs.com/package/get-random-values
// ===============================================
class $149c1bd638913645$export$74e446f6456d826d extends String {
    /**
   * Obtient l'identifiant de composant en extrayant la première partie de l'UUID.
   * @returns L'identifiant de composant.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.componentId); // '123456789012'
   * ```
  */ get componentId() {
        return this.split("-")[0];
    }
    /**
   * Obtient la première section de l'UUID après division par '-'.
   * @returns La première section de l'UUID.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section1); // '1234'
   * ```
  */ get section1() {
        return this.split("-")[1];
    }
    /**
   * Obtient la deuxième section de l'UUID après division par '-'.
   * @returns La deuxième section de l'UUID.
   * @example
   * ```typescipt
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section2); // '5678'
   * ```
  */ get section2() {
        return this.split("-")[2];
    }
    /**
   * Obtient la troisième section de l'UUID après division par '-'.
   * @returns La troisième section de l'UUID.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section3); // '90ab'
   * ```
  */ get section3() {
        return this.split("-")[3];
    }
    /**
   * Obtient l'identifiant de collection en extrayant la cinquième partie de l'UUID.
   * @returns L'identifiant de collection.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.collectionId); // 'abcdefabcdef'
   * ```
  */ get collectionId() {
        return this.split("-")[4];
    }
    /**
   * Obtient l'identifiant parent en concaténant les sections 1, 2 et 3.
   * @returns L'identifiant parent.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.parentId); // '1234567890ab'
   * ```
  */ get parentId() {
        return [
            this.section1,
            this.section2,
            this.section3
        ].join("");
    }
    /**
   * Étend l'UUID hiérarchique avec des options personnalisées.
   * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
   * @returns Un nouvel UUID hiérarchique (_HUID).
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  const extendedUUID = uuid.extend({ parentId: '098765432109', collectionId: 'abcdefabcdef' });
   *  console.log(extendedUUID); // Un nouvel _HUID avec les sections mises à jour.
   * ```
  */ extend(options) {
        return $149c1bd638913645$export$31b40729666a4ae0.hv1({
            parentId: this.componentId,
            collectionId: this.collectionId
        });
    }
}
class $149c1bd638913645$export$31b40729666a4ae0 {
    /**
   * Obtient une valeur par défaut pour l'identifiant de composant.
   * @returns '000000000000' en tant que ComponentId.
  */ static get componentId() {
        return "000000000000";
    }
    /**
   * Obtient une valeur par défaut pour la première section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment1() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour la deuxième section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment2() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour la troisième section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment3() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour l'identifiant de collection.
   * @returns '000000000000' en tant que CollectionId.
  */ static get collectionId() {
        return "000000000000";
    }
    /**
   * Obtient un UUID NIL (null) par défaut.
   * @returns L'UUID NIL sous forme de chaîne.
  */ static get NIL() {
        return new $149c1bd638913645$export$74e446f6456d826d(`${$149c1bd638913645$export$31b40729666a4ae0.componentId}-${$149c1bd638913645$export$31b40729666a4ae0.segment1}-${$149c1bd638913645$export$31b40729666a4ae0.segment2}-${$149c1bd638913645$export$31b40729666a4ae0.segment3}-${$149c1bd638913645$export$31b40729666a4ae0.collectionId}`);
    }
    /**
   * Encode une chaîne de longueur fixe en remplaçant certains caractères par des valeurs hexadécimales aléatoires.
   * @param chaine - Une chaîne de longueur fixe.
   * @returns Une chaîne de longueur fixe avec des valeurs hexadécimales aléatoires.
   * @example
   * ```typescript
   *  const encoded = uuid.encode('123456789012');
   *  console.log(encoded); // '1a2b3c4d5e6f'
   * ```
  */ static encode(chaine) {
        return chaine.replace(/[018]/g, (c)=>{
            return (c ^ (0, _getRandomValuesDefault.default)(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
   * Génère un UUID de version 4 en utilisant des valeurs aléatoires.
   * @returns Un UUID de version 4 sous forme de chaîne.
   * @example
   * ```typescript
   *  const uuidV4 = uuid.v4();
   *  console.log(uuidV4); // Un UUID de version 4.
   * ```
  */ static v4() {
        return $149c1bd638913645$export$31b40729666a4ae0.NIL.replace(/[018]/g, (c)=>{
            return (c ^ (0, _getRandomValuesDefault.default)(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
   * Génère un UUID hiérarchique en fonction des options fournies.
   * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
   * @returns Un nouvel UUID hiérarchique (_HUID).
   * @example
   * ```typescript
   *  const hierarchicalUUID = uuid.hv1({ parentId: '123456789012', collectionId: 'abcdefabcdef' });
   *  console.log(hierarchicalUUID); // Un nouvel UUID hiérarchique (_HUID).
   * ```
  */ static hv1(options) {
        if (!options) options = {
            parentId: null,
            collectionId: null
        };
        let componentId = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.componentId);
        let segment1 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment1);
        let segment2 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment2);
        let segment3 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment3);
        let collectionId = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.collectionId);
        if (options.parentId && options.parentId.length == 12) {
            segment1 = options.parentId.slice(0, 4);
            segment2 = options.parentId.slice(4, 8);
            segment3 = options.parentId.slice(8, 12);
        } else console.error("parentId.length exeded 12 char length.");
        if (options.collectionId) collectionId = options.collectionId;
        return new $149c1bd638913645$export$74e446f6456d826d(`${componentId}-${segment1}-${segment2}-${segment3}-${collectionId}`);
    }
}

},{"get-random-values":"6HviX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HviX":[function(require,module,exports) {
/* eslint-disable no-var, operator-linebreak */ var window = require("a8ff6337a266ee63");
var nodeCrypto = require("5639852e2cc661f9");
/**
 * @template {ArrayBufferView | null} T
 * @param {T} buf
 * @returns {T}
 */ function getRandomValues(buf) {
    if (window.crypto && window.crypto.getRandomValues) return window.crypto.getRandomValues(buf);
    if (typeof window.msCrypto === "object" && typeof window.msCrypto.getRandomValues === "function") return window.msCrypto.getRandomValues(buf);
    if (nodeCrypto.randomBytes) {
        if (!(buf instanceof Uint8Array)) throw new TypeError("expected Uint8Array");
        if (buf.length > 65536) {
            var e = new Error();
            // @ts-expect-error
            e.code = 22;
            e.message = "Failed to execute 'getRandomValues' on 'Crypto': The ArrayBufferView's byte length (" + buf.length + ") exceeds the " + "number of bytes of entropy available via this API (65536).";
            e.name = "QuotaExceededError";
            throw e;
        }
        var bytes = nodeCrypto.randomBytes(buf.length);
        buf.set(bytes);
        return buf;
    } else throw new Error("No secure random number generator available.");
}
module.exports = getRandomValues;

},{"a8ff6337a266ee63":"iU6IE","5639852e2cc661f9":"jhUEF"}],"iU6IE":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {};
module.exports = win;

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"lJZlQ":[function() {},{}],"hKwCj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HelloWorld", ()=>HelloWorld);
var _core = require("@lithium-framework/core");
var _navigatorInformations = require("../navigator-informations");
function HelloWorld() {
    return (0, _core.html)`<div>
    <h1>Hello World !</h1>
    ${(0, _navigatorInformations.NavigatorInformations)()}
  </div>`;
}

},{"@lithium-framework/core":"hmv1B","../navigator-informations":"glErJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glErJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigatorInformations", ()=>NavigatorInformations);
var _core = require("@lithium-framework/core");
function NavigatorInformations() {
    return (0, _core.html)`<div>
    <h3>running on</h3>
    <p>${navigator.userAgent}</p>
  </div>`;
}

},{"@lithium-framework/core":"hmv1B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire1dbf")

//# sourceMappingURL=index.b71e74eb.js.map
