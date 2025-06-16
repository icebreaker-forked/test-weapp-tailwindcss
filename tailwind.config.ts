import tailwindcssAnimate from 'tailwindcss-animate'
import type { Config } from 'tailwindcss'

export default <Config>{
  // prefix: '', // 脑锻炼的前缀缩写, 避免影响其他组件
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      padding: {
        'safe-bottom': 'env(safe-area-inset-bottom)', // 添加一个自定义类
      },
      fontSize: {
        // 自定义 text-xl 的大小
        xl: ['44rpx', { lineHeight: '62rpx' }]
      },
      border: {

      },
      colors: {
        blue: {
          900: '#1E40AF'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
    // 支持不完全
    // iconsPlugin({
    //   // 在这里可以选择你要使用的 icon, 更多详见:
    //   // https://icon-sets.iconify.design/
    //   collections: getIconCollections(['material-symbols', 'solar', 'mdi','jam']),
    //   // 禁用自动设置图标的 width 和 height
    //   autoWidth: false,
    //   autoHeight: false
    // }),
  ],
  corePlugins: {
    preflight: false,
    container: false,
    textIndent: false,
  },
}

