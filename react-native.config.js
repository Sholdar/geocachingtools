// disabled from auto linking
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
  dependencies: {
    'react-native-keyboard-input': {
      platforms: {
        ios: null,
      },
    },
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
