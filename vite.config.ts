import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import Optimization from '@uni-ku/bundle-optimizer'
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from 'weapp-tailwindcss/vite'
import postcssPlugins from './postcss.config'


// https://vitejs.dev/config/
export default defineConfig({
  // uvtw 一定要放在 uni 后面
  plugins: [
    uni(),
    Optimization({
      enable: {
        'optimization': true,
        'async-import': false,
        'async-component': false,
      },
      dts: {
        enable: true,
        base: './',
      },
      logger: true,
    }),
    uvtw({
      rem2rpx: true,
      mangle: false,
      // injectAdditionalCssVarScope: true,
      cssPreflight: {
        'border-color': false
      },
      // 需要先安装 `@ast-grep/napi`, 安装完成后再启用下方配置
      jsAstTool: 'ast-grep',
      htmlMatcher: (file) => {
        if (file.indexOf('wxcomponents') === 0) {
          return false
        }
      }
      // mangle: true, // 压缩混淆
    })
  ],
  build:{
    minify: 'esbuild',
    sourcemap: true,
  },
  esbuild: {
    drop: process.env.NODE_ENV  === 'production' ? ['console', 'debugger'] : [],
  },
  resolve: {
  },
  // 内联 postcss 注册 tailwindcss
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
    // https://vitejs.dev/config/shared-options.html#css-preprocessoroptions
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
