[![Built with](https://img.shields.io/badge/By-Gleam.ai-ff69b4.svg)](https://gleam.ai/)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/gpl-2.0)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)
[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://circleci.com/gh/GleamAI/mephesto.svg?style=svg&circle-token=8a709daa86c798ef8b9127b8b036eed7cf74e233)


![Dr-Alphonse-Mephesto](https://storage.googleapis.com/gleam_static_resources1/mephesto.png)


# mephesto

Gleam AI Front End. Check out the project's documentation.



## Prerequisites

### Dependecies

To manage the project dependencies we use [Yarn](https://yarnpkg.com/es-ES/). To install the project dependencies run the following command

```
yarn install
```


## Development :rocket:

### Run local project

To start the application you only need to run the next command:

```
yarn start
```

### Lint

This project uses [JavaScript Standard Style](https://standardjs.com/) as linter and formater.

```
yarn lint
```

To automatically format code use:
```
yarn lint --fix
```


### Run tests

```
yarn test
yarn test --coverage
yarn test -u
```

To test single file (ie Table.test.js)

```
yarn jest __tests__/components/Table/Table.test.js
```

### Compile project

To build the application for production you need to run the next command:

```
yarn run build
```

:metal: