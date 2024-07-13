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
    setAttack(path){
        this.attack = this.attack-this.pathObject[path]
        this.attacks.set('attack',this.attack) 
        if (this.getStoned()){
            const value = this.attack - Math.log2(path)*5
            this.attacks.set('attack',value)
        }
        

    }


    setStoned(){
        this.stoneds.set('stoned',true)
    }

    getAttack(){
        return this.attacks.get('attack')
    }

    getStoned(){
        return this.stoneds.get('stoned')
    }
}