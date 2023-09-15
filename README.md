# Template for

commonjs + ts project

# Compatible Versions:

### Node

- v19.7.0

### Typescript

- 5.2.2

# Initialise project

```bash
npm init
```

# nodemon

- Watches files and restarts the server in case of changes.

## Install

```jsx
npm i nodemon
```

## nodemon.json

- Sample configuration

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": ["test/fixtures/", "test/samples/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "ts,js,json"
}
```

# Typescript

## Install

```bash
npm install --save-dev typescript
```

## Install types

### Express

```bash
npm i --save-dev @types/express
```

### Node

```bash
npm i --save-dev @types/node
```

## tsconfig.json

### moduleDetection

- Will treat separate **js** files as separate modules. Without this it will raise errors like `const x already declared in other files`.

```bash
"moduleDetection": "force",
```

### esModuleInterop

- enabled interoperability of `commonjs` and `es6`.

```bash
"esModuleInterop": true,
```

### outDir

- `outDir` - The folder where compiled JavaScript gets saved, in this case, `dist`. This is a common folder name for this use case.\

```bash
"outDir": "./dist"
```

### include

- The TypeScript compiler will try to compile any TypeScript files ending in `.ts` it finds in the `src`.

```bash
"include": [
    "src/**/*"
  ]
```

### exclude

- Compiler will skip these files

```bash
"exclude": [
    "node_modules",
    "dist",
  ]
```

### declaration

- enable it if project is library project and we want to deliver types with our library

```bash
"declaration": true
```

## package.json

### Change main

```bash
"main": "dist/app.js",
```

### Add scripts

```json
"scripts": {
		"dev": "cross-env NODE_ENV=development nodemon src/app.ts",
		"prod": "cross-env NODE_ENV=production nodemon src/app.ts",
		"build": "tsc",
    "start": "tsc && node .",
		"tsc:setup": "tsc --init",
}
```

# Changes in code

- Typescript is interoperable with **commonjs,** because of property `esModuleInterop` enabled in `tsconfig`
- But it is better to replace `require()` and `module.exports` with `es6 syntax`, because Intellisense doesn’t work with Typescript.

# Final Configuration

## nodemon.json

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "watch": ["src/"],
  "ext": "js,ts,json"
}
```

## package.json

```json
{
  "name": "with-commonjs-ts",
  "version": "1.0.0",
  "description": "template project for express + nodejs + commonjs + ts",
  "main": "dist/app.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon",
    "prod": "cross-env NODE_ENV=production nodemon",
    "build": "tsc",
    "start": "tsc && node .",
    "tsc:setup": "tsc --init",
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": [
    "express",
    "nodejs",
    "dotenv",
    "crossenv",
    "commonjs",
    "typescript"
  ],
  "author": "deltacap019",
  "license": "ISC",
  "dependencies": {
    "axios": "1.5.0",
    "cross-env": "7.0.3",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-async-handler": "1.2.0",
    "joi": "17.10.1",
    "mongoose": "7.5.0",
    "node-cache": "5.1.2"
  },
  "devDependencies": {
    "@types/express": "4.17.17",
    "@types/node": "20.5.9",
    "nodemon": "3.0.1",
    "ts-node": "10.9.1",
    "typescript": "5.2.2"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "moduleDetection": "force" /* Control what method is used to detect module-format JS files. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,
    "checkJs": true /* Enable error reporting in type-checked JavaScript files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": ["src/**/*"]
}
```

# Template

```bash
npx degit "https://github.com/templates-deltacap019/with-commonjs-ts.git" "my_proj"
```
