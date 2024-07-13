import { Character } from './character.js'


export class Magician extends Character{
    constructor(name,type){
        super(name,type)

        this.attack = 120
        this.stoned = false
    }
}