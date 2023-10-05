# trace4d frontend

## Setup

```bash
yarn install
```

## Running (debug mode)

```bash
yarn dev
```

## Building

```bash
yarn build
```

## Running (production mode)

```bash
# (after building)
mkdir dist/traces && cp ../../assets/traces/* dist/traces/
npx http-server dist
```

## Usage

See [/README.md](../../README.md).
