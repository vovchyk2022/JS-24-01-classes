

class User{
    // #lastName;
    constructor (firstName, lastName, age){
        if(typeof firstName !== 'string'){
            throw new TypeError('first name must be string!')
        }
        if(typeof firstName !== 'string'){
            throw new TypeError('last Name must be string!')
        }
        if(typeof age !== 'number'){
            throw new TypeError('age must be number!')
        }
        if(age<0 || age>150){
            throw new RangeError('error: age<0 or age>150')
        }
        if (typeof isMale !== "boolean"){
            throw new TypeError("isMale must be boolean!")
        }
    this._firstName = firstName;
    // this.#lastName = lastName;
    this._lastName = lastName;
    this._age = age;
    this._isMale = isMale;
}
getFullName (){
    return '${this._firstName} ${this.#lastName}';
}
toString (){
    return this._firstName;
}
}

try{
const user3 = new User(4,45,svs)
user3.lastName = 'null';
console.log(user3.getFullName);
} catch(error){
   console.log(error); 
} 
console.log('important info');


// написати клас Worker, у якого будуть дані: прізвище, ставка за день, к-ть відпрацьваних днів за замовчуванням = 0; метод, який повертає зарплатню

// class User{
//     constructor (firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isMale = true;
// }


// getFullName (){
//     return '${this.firstName} ${this.lastName}';
// }
// toString (){
//     return this.firstName;
// }
// }