import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Clases","description":"","frontmatter":{},"headers":[],"relativePath":"clases/README.md","filePath":"clases/README.md"}');
const _sfc_main = { name: "clases/README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="clases" tabindex="-1">Clases <a class="header-anchor" href="#clases" aria-label="Permalink to &quot;Clases&quot;">​</a></h1><p>Listado de apuntes. Agrega nuevos <code>.md</code> en esta carpeta.</p><ul><li><a href="./2025-01-intro-programacion.html">Introducción a Programación</a></li><li><a href="./2025-02-estructuras-datos.html">Estructuras de Datos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("clases/README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
