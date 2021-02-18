
console.log( 'hello by Typescript' );


var str: string = 'King';
console.log( str.split('') );


var num: number = 15;
num = num + 1;
document.write( num.toString() );


var arrayExam: string[] = [ 'a','b','c' ]
var letterFilter: string = arrayExam.filter( ( letter ) => letter === 'a' ).join( '' );
console.log( letterFilter );


var arrayExam2: any[] = [ 0, false, undefined, true ];
var clear = ( array: any[] ) =>
{
    return array.filter( ( element ) => element === true );
};
console.log( clear( arrayExam2 ) );


var suma = ( num1: number, num2: number ) =>
( num1 + num2 );
console.log( suma( 2,2 ) );


var fullName = ( first: string, last: string = '' ) =>
{
    return `${ first } ${ last }`;
};
console.log( fullName( 'Juan' ) );
console.log( fullName( 'Juan', 'araya' ) );


var type = ( value: string | number ) =>
{

    if( typeof( value ) === 'number' )
    {
        return "is a Number";
    }

    if( typeof( value ) === 'string' )
    {
        return "is a String";
    };

};
console.log( type( 10 ) );
console.log( type( 'str' ) );


interface ITodo { title: string; descr: string };
var showTodo = ( toDo: ITodo ) =>
{
    return 'TITLE : '+toDo.title+'  DESCR : '+toDo.descr;
};
var CurrentToDo = { title : 'Shower', descr : 'Take a shawer' };
console.log( showTodo( CurrentToDo ) );


class User
{

    name : string;
    email : string;
    age: number;


    constructor( name: string, email: string, age: number )
    {
        this.name = name,
        this.email = email,
        this.age = age
    }


    register()
    {
        var date = new Date();
        return date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear();
    }
    
};


var user1 = new User( 'King', 'king@gmail.com', 29 );
var user2 = new User( 'Poli', 'poli@gmail.com', 27 );

console.log( user1 );
console.log( user1.register() );
console.log( user2 );
console.log( user2.register() );
