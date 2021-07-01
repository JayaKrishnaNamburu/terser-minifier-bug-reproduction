Terser bug at the mine of minification

Steps to reproduce
- Clone the repo.
- Install dependencies `npm install`
- Run the build `npm build`

It will run two builds `build:noop` which is for "no-optimization" applied and another is `build:op` using Terser

Generates two folder, `build` and `build-no-opt` for optimised and not-optimised respectively.
Load the files in browser and the one with terser optimised throws error.

Video of the bug
https://drive.google.com/file/d/1EPjdUWW9HDBENddZaWWVx61zl7Ixr6Pi/view