import { p as createComponent, q as renderTemplate, v as addAttribute, x as renderSlot, z as renderHead, w as createAstro } from './astro/server_rxn1rck1.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ru" class="h-full motion-safe:scroll-smooth"> <head><meta charset="UTF-8"><title>${title} | psychomaster.de</title><meta name="description" content="Психологическая помощь онлайн. Эффективно, удобно, конфиденциально."><meta name="keywords" content="психолог, психология, онлайн помощь, помощь, конфиденциальность, эффективность"><meta name="robots" content="index, follow"><meta http-equiv="Content-Language" content="ru"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="preload" href="/Raleway-Variable.woff2" as="font" type="font/woff2" crossorigin><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-dark.png" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-dark.png" media="(prefers-color-scheme: dark)"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-dark.png" media="(prefers-color-scheme: dark)"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body class="min-h-full font-sans antialiased"> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/lorem/Documents/GitHub/musical-waffle/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
