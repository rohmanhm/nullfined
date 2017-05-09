# Nullfined

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/nullfined.svg)](https://greenkeeper.io/)
 [![Build Status](https://travis-ci.org/rohmanhm/nullfined.svg?branch=master)](https://travis-ci.org/rohmanhm/nullfined)

Convert null value from any type of value to undefined.

## Install
Using **NPM**
```bash
npm install --save nullfined
```
or you may consider using **Yarn**
```bash
yarn add nullfined
```

## Usage
```javascript
nullfined(value)
```

## Example
```javascript
// ES6 import module
import nullfined from 'nullfined';

nullfined(null) // return undefined
```

> it also support object and array recursively. Like `Vaper` does

## Related
* [Vaper](https://github.com/rohmanhm/vaper) ~ 1kb Value Replacer any type recursively

## License
MIT © [Roman Masyhar](https://github.com/rohmanhm)