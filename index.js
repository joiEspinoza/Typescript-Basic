console.log('hello by Typescript');
var str = 'King';
console.log(str.split(''));
var num = 15;
num = num + 1;
document.write(num.toString());
var arrayExam = ['a', 'b', 'c'];
var letterFilter = arrayExam.filter(function (letter) { return letter === 'a'; }).join('');
console.log(letterFilter);
var arrayExam2 = [0, false, undefined, true];
var clear = function (array) {
    return array.filter(function (element) { return element === true; });
};
console.log(clear(arrayExam2));
var suma = function (num1, num2) {
    return (num1 + num2);
};
console.log(suma(2, 2));
var fullName = function (first, last) {
    if (last === void 0) { last = ''; }
    return first + " " + last;
};
console.log(fullName('Juan'));
console.log(fullName('Juan', 'araya'));
var type = function (value) {
    if (typeof (value) === 'number') {
        return "is a Number";
    }
    if (typeof (value) === 'string') {
        return "is a String";
    }
    ;
};
console.log(type(10));
console.log(type('str'));
;
var showTodo = function (toDo) {
    return 'TITLE : ' + toDo.title + '  DESCR : ' + toDo.descr;
};
var CurrentToDo = { title: 'Shower', descr: 'Take a shawer' };
console.log(showTodo(CurrentToDo));
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name,
            this.email = email,
            this.age = age;
    }
    User.prototype.register = function () {
        var date = new Date();
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    };
    return User;
}());
;
var user1 = new User('King', 'king@gmail.com', 29);
var user2 = new User('Poli', 'poli@gmail.com', 27);
console.log(user1);
console.log(user1.register());
console.log(user2);
console.log(user2.register());
