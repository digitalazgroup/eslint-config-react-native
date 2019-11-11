# eslint-config-react-native

This config includes React-Native rules. Should be used with [digitalazgroup/eslint-config](https://github.com/digitalazgroup/eslint-config) and [digitalazgroup/eslint-config-react](https://github.com/digitalazgroup/eslint-config-react).

## Installation

Install package as dev dependency:
```sh
yarn add -D digitalazgroup/eslint-config digitalazgroup/eslint-config-react digitalazgroup/eslint-config-react-native
```

Add config to `.eslintrc.*`. Here's an example `.eslintrc.json` file:

```json
module.exports = {
  extends: [
    '@digitalazgroup',
    '@digitalazgroup/react',
    '@digitalazgroup/react-native',
  ],
};
```
