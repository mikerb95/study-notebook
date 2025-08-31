import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Estructuras de Datos","description":"","frontmatter":{},"headers":[],"relativePath":"clases/2025-02-estructuras-datos.md","filePath":"clases/2025-02-estructuras-datos.md"}');
const _sfc_main = { name: "clases/2025-02-estructuras-datos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="estructuras-de-datos" tabindex="-1">Estructuras de Datos <a class="header-anchor" href="#estructuras-de-datos" aria-label="Permalink to &quot;Estructuras de Datos&quot;">​</a></h1><p>Repaso de estructuras frecuentemente usadas.</p><h2 id="listas-arreglos" tabindex="-1">Listas/Arreglos <a class="header-anchor" href="#listas-arreglos" aria-label="Permalink to &quot;Listas/Arreglos&quot;">​</a></h2><ul><li>Acceso O(1), inserciones al final usualmente O(1) amortizado.</li></ul><h2 id="pilas-y-colas" tabindex="-1">Pilas y Colas <a class="header-anchor" href="#pilas-y-colas" aria-label="Permalink to &quot;Pilas y Colas&quot;">​</a></h2><ul><li>Pila (LIFO), Cola (FIFO).</li></ul><h2 id="conjuntos-y-mapas" tabindex="-1">Conjuntos y Mapas <a class="header-anchor" href="#conjuntos-y-mapas" aria-label="Permalink to &quot;Conjuntos y Mapas&quot;">​</a></h2><ul><li>Eliminan duplicados y mapean claves a valores.</li></ul><h2 id="arboles-y-grafos" tabindex="-1">Árboles y Grafos <a class="header-anchor" href="#arboles-y-grafos" aria-label="Permalink to &quot;Árboles y Grafos&quot;">​</a></h2><ul><li>Representación de relaciones jerárquicas y complejas.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("clases/2025-02-estructuras-datos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _202502EstructurasDatos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _202502EstructurasDatos as default
};
