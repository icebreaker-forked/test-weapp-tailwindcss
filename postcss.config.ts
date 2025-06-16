import type { AcceptedPlugin } from 'postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'


const plugins: AcceptedPlugin[] = [
  tailwindcss(),
  autoprefixer(),
]


export default plugins
