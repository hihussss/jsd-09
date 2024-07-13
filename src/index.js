import { getBuffer, ArrayBufferConverter } from "./class/arraybuffer.js";



const converter = new ArrayBufferConverter();
console.log(converter.toString(getBuffer()))
console.log(getBuffer())