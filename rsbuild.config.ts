import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import stylexPlugin from 'unplugin-stylex/rspack';

export default defineConfig({
  plugins: [
    pluginReact(),

    // TODO: Try to use it as plugin
    stylexPlugin({ /* options */}),

  ],
  tools: {

    // TODO: Try to insert it into rspack
    rspack: {
      plugins: [
        stylexPlugin({ /* options */}),
      ]
    }

  },
});
