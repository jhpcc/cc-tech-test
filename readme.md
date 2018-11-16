## Running with node native

Requires node 10
Runs on port 8888

```
npm run install 
npm run build
npm run start
```

## Running with docker

```
docker build -t cc .
docker run -i -t -p 8888:8888 cc npm run start:babel-node
```

## Running tests

```
npm test
```

## Running linting and code formatting

```
npm run lint
```

## Running audits

```
npm run lighthouse
npm run accessibility
```
