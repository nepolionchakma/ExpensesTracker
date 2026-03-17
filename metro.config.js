const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [
      ...getDefaultConfig(__dirname).resolver.assetExts,
      'png',
      'jpg',
      'jpeg',
    ],
    sourceExts: [
      ...getDefaultConfig(__dirname).resolver.sourceExts,
      'js',
      'jsx',
      'ts',
      'tsx',
      'svg',
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
