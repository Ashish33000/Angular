//prvate property
//public property
//constructor
//private method
//public method
//getter 
//setter
//static method
//static propery
class Person{
    
    constructor(public  canwalk:string){   
    }
}
interface IHero{
    title:String
    fullname():String;
}
class Hero extends Person implements IHero {
    static version :number=1001
   
    //------------------------------------
    constructor(
        public title:string,
        private _firstName:string,
        private _lastName:string,
        ncw:string){
            super(ncw);
    }
    //---------------------------------
    fullname(){
        return this._firstName+" "+this._lastName
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(nfirstname:string){
        this._firstName=nfirstname
    }
    get lastName(){
        return this._firstName;
    }
    
    set lastName(nlastName:string){
        this._lastName=nlastName;
    }
    

}
let hero=new Hero("spiderMan","peter","parker","i can fly")
console.log(hero.title);
console.log(hero.canwalk);

