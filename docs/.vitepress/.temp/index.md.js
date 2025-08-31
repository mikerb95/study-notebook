import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Inicio","description":"","frontmatter":{"layout":"home","title":"Inicio","hero":{"name":"Study Notebook","text":"Apuntes en Markdown, con sitio estilo Notion","tagline":"Escribe en .md, léelos en GitHub o como sitio estático","actions":[{"theme":"brand","text":"Empezar","link":"/clases/"},{"theme":"alt","text":"Repo en GitHub","link":"https://github.com/<tu-usuario>/<tu-repo>"}]},"features":[{"title":"Markdown puro","details":"Archivos compatibles con el render de GitHub, sin vendor lock-in."},{"title":"Navegación cómoda","details":"Sidebar automática por carpeta y búsqueda local."},{"title":"Despliegue sencillo","details":"Publica en GitHub Pages en 1 clic."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
