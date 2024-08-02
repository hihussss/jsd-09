/* eslint-disable no-undef */

import { ArrayBufferConverter, getBuffer } from "../class/arraybufferconverter";


test('ArrayBufferConverterString', () => {
    const funcBuffer = getBuffer()
    const converter = new ArrayBufferConverter();
    const buffer = converter.load(funcBuffer)
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    const rezult = converter.toString(buffer)
    expect(rezult).toBe(expected)
})

test('ArrayBufferConverterLoad', () => {
    const converter = new ArrayBufferConverter();
    const expected = getBuffer()
    const rezult = converter.load(expected)
    expect(rezult).toEqual(expected)
})


