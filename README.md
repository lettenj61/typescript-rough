Rough TypeScript Boilerplate
====

My favorite preset to build TypeScript app / library quickly.

## Workflow

* Compile TypeScript source into JavaScript(ES6)
* Transpile & bundle ES6 modules using `rollup` and `buble`
* Format bundled code using `prettier`

## Usage

```sh
$ git clone https://github.com/lettenj61/typescript-rough.git myapp
$ cd myapp
$ yarn # or `npm install`
$ yarn build
```

## Configuration

Edit `rollup.config.js`

## Tricks

#### Make bundle depends on external script at runtime (e.g. via CDN)

* Install dependency (you may also need `rollup-plugin-node-resolve`)

```sh
$ yarn add -D lodash @types/lodash
```

* Import them as usual

```ts
import _ from 'lodash'

export function usesLodash (): number[] {
  return _.range(1, 10)
}
```

* Add following in `rollup.config.js`

```js
export default {
  input: '...',
  output: {
    // ...
    globals: {
      lodash: '_'
    }
  }
  external: ['lodash']
}
```

## License

MIT license
