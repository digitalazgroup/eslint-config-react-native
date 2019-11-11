module.exports = {
  env: {
    browser: false, // Disables node env referenced from @digitalazgroup/eslint-config-react
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react-native/all',
    'plugin:import/react-native'
  ],
  plugins: [
    'react-native',
  ],
  rules: {
    // React-native Plugin
    // The following rules are made available via eslint-plugin-react-native
    'react-native/no-raw-text': 0 // All strings in React Native should be wrapped with a Text component; (disabled because rule is broken)
  },
}
