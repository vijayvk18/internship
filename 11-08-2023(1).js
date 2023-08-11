/*Anonymous function*/
var a=function(a,b,c){
    return a+b+c;
}
console.log(a(3,4,5));

var max=function(a,b,c){
    if(a>b && a>c){
        return 'a is greater'
    }
    else if (b>a && b>c){
        return 'b is greater'
    }
    else{
        return 'c is greater'
    };
};
n1=prompt('enter number a: ');
n2=prompt('enter number b: ');
n3=prompt('enter number c: ');
document.write(max(n1,n2,n3));

/* constructors */
var add=new Function('a','b','c','return a+b+c;')
console.log(add(4,2,7));

var max=new Function('a','b',"return a>b" )
k1=prompt('enter number a: ');
k2=prompt('enter number b: ');
document.write('\n'+max(k1,k2));

/* self-invoking functions */
(function(a,b,c){
    console.log("addition using slef-invoking functions");
    console.log(a+b+c);
}
)(4,8,6);