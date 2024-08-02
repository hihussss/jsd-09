import { Math } from 'core-js';

export class Character{
    constructor(name,type){
        this.attacks = new Map()
        this.stoneds = new Map()
        this.stoneds.set('stoned',false)
        this.name = name
        this.type = type
        this.attack = undefined
        
    

        this.pathObject = {
        1: 0,
        2: 10, 
        3: 20,
        4: 30,
        5: 40
    }
}
    set Attack(path){
        this.attack = this.attack-this.pathObject[path]
        this.attacks.set('attack',this.attack) 
        if (this.Stoned){
            const value = this.attack - Math.log2(path)*5
            this.attacks.set('attack',value)
        }
    }
    
    get Attack(){
        return this.attacks.get('attack')
    }

    set Stoned(value){
        this.stoneds.set('stoned',value)
    }

    

    get Stoned(){
        return this.stoneds.get('stoned')
    }
}