module.exports = {
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-class-properties',
    '@babel/plugin-transform-typescript',
  ],
  retainLines: true,
}
