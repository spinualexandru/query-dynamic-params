# query-dynamic-params [![Build](https://github.com/spinualexandru/query-dynamic-params/actions/workflows/build.yml/badge.svg)](https://github.com/spinualexandru/query-dynamic-params/actions/workflows/build.yml)

JavaScript/Typescript util for querying dynamic/named params
⚠️This project is now archived as it's no longer relevant to Next 16+

## Installation

```bash
npm install query-dynamic-params
```

## Usage

```typescript
import { queryDynamicParams } from 'query-dynamic-params';

const url = '/users/:id/:name';
const path = '/users/1/john';

const params = queryDynamicParams(url, path, ['id', 'name']);
console.log(params); // { id: '1', name: 'john' }
```

## Build

  ```bash
  npm run build
  ```

## Test

  ```bash
  npm run test
  ```

## License

MIT
