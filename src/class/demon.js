import { Character } from './character.js'


export class Demon extends Character{
    constructor(name,type){
        super(name,type)

        this.attack = 100
        this.stoned = false
    }
}