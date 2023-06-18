"use strict";
//prvate property
//public property
//constructor
//private method
//public method
//getter 
//setter
//static method
//static propery
class Person {
    canwalk;
    constructor(canwalk) {
        this.canwalk = canwalk;
    }
}
class Hero extends Person {
    title;
    _firstName;
    _lastName;
    static version = 1001;
    //------------------------------------
    constructor(title, _firstName, _lastName, ncw) {
        super(ncw);
        this.title = title;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    //---------------------------------
    fullname() {
        return this._firstName + " " + this._lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(nfirstname) {
        this._firstName = nfirstname;
    }
    get lastName() {
        return this._firstName;
    }
    set lastName(nlastName) {
        this._lastName = nlastName;
    }
}
let hero = new Hero("spiderMan", "peter", "parker", "i can fly");
console.log(hero.title);
console.log(hero.canwalk);
