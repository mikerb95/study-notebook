import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introducción a Programación","description":"","frontmatter":{},"headers":[],"relativePath":"clases/2025-01-intro-programacion.md","filePath":"clases/2025-01-intro-programacion.md"}');
const _sfc_main = { name: "clases/2025-01-intro-programacion.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduccion-a-programacion" tabindex="-1">Introducción a Programación <a class="header-anchor" href="#introduccion-a-programacion" aria-label="Permalink to &quot;Introducción a Programación&quot;">​</a></h1><p>Objetivos de la clase:</p><ul><li>Entender qué es un algoritmo.</li><li>Diferenciar compilación vs interpretación.</li><li>Escribir tu primer script.</li></ul><h2 id="conceptos-clave" tabindex="-1">Conceptos clave <a class="header-anchor" href="#conceptos-clave" aria-label="Permalink to &quot;Conceptos clave&quot;">​</a></h2><ul><li>Algoritmo: secuencia finita de pasos.</li><li>Lenguajes de programación: Python, JavaScript, etc.</li></ul><h2 id="recursos" tabindex="-1">Recursos <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos&quot;">​</a></h2><ul><li>Libro recomendado: &quot;Grokking Algorithms&quot;.</li><li>Documentación: <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">https://developer.mozilla.org/</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("clases/2025-01-intro-programacion.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _202501IntroProgramacion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _202501IntroProgramacion as default
};
