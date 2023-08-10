function isprime(a) {
    c=0;
    for(i=1;i<=a;i++){
        if (a%i==0){
            c=c+1;
        }
    }
    if (c==2){
        document.write('prime numnber')
    }
    else{
        document.write('not a prime number')
    }
}
p=prompt('enter number:')
p=parent(p)
isprime(p)