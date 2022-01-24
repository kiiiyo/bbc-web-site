const config = {
  // 不要なCSSを削除するためのpurge設定
  mode: 'jit',
  // 設定ファイル内でのCSSのみをbuild時に最適化
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  content: [],
  theme: {
    extend: {}
  },
  plugins: []
}
module.exports = config
