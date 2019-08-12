module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          containers: './src/containers',
          hooks: './src/hooks',
          locale: './src/locale',
          reducers: './src/reducers',
          store: './src/store',
          utils: './src/utils'
        },
        cwd: 'babelrc'
      }
    ]
  ]
};
