import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'lemonade',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://dpmanek.github.io/VanguardLemonadeUIPOC/',
      empty: true,
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
