/*objects creation in different ways */
o=new Object(); /* or o={};*/
o.name='Vijay';
o.age=21;
o.phno=75565766243;
console.log(o);

o2={};
o2['name']='chowdy';
o2['age']=22;
o2.phno=98765432;
console.log(o2);

/* cretion objects using functions*/
function object(){
    this.first_name='gowri';
    this.last_name='vara prasad';
    this.another_name='Anwar';
};
var o=new object();
console.log(o)
document.write('\n'+'my friends names are : '+o.first_name,o.another_name)

