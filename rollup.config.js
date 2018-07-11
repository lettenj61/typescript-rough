import buble from 'rollup-plugin-buble'

export default {
  input: 'intermediate/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'App'
  },
  plugins: [buble()]
}
