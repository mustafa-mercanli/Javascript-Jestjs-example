# Javascript-Jestjs-example

## Goal
An example of running a test case for Javascript module using JestJS
## Installation
First install Nodejs and create an empty folder. Then run in the cli;
```
$ npm init
$ npm install --save-dev jest
```
or install it globally
```
$ npm install --global jest
```
## Config
Your package.json file must be contain this script if you not installed jestjs globally 
```json
"scripts": {
    "test": "jest"
}
```
## Usage
Just run
```
$ npm test
```
or run if you installed jestjs globally
```
$ jest ./test.js
```