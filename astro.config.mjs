// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://textbook.lorieau.com',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: 'Professor Justin Lorieau',
      description: 'Interactive video textbooks for physical chemistry, physics, and mathematics by Professor Justin Lorieau.',
      customCss: [
        'katex/dist/katex.min.css',
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'referrer',
            content: 'strict-origin-when-cross-origin',
          },
        },
      ],
      social: [
        {
          icon: 'youtube',
          label: 'Professor Justin Lorieau on YouTube',
          href: 'https://www.youtube.com/@ProfessorJustinLorieau',
        },
      ],
      components: {
        TableOfContents: './src/components/starlight/TableOfContents.astro',
        MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
        Footer: './src/components/starlight/Footer.astro',
      },
      sidebar: [
        {
          label: '📙 Book of Thermodynamics',
          slug: 'thermodynamics',
        },
        {
          label: '📘 Book of Quantum Mechanics',
          slug: 'quantum-mechanics',
        },
        {
          label: 'ℹ️ About & Colophon',
          slug: 'about',
        },
      ],
    }),
  ],
});
