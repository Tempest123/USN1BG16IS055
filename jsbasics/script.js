// var age=18;
// if(age<18)
//     console.log("minor");
// else
//     console.log("major");

// age>=18?console.log("minor"):console.log("major");

// function tempest(firstname,lastname) {
//     console.log(firstname+' '+lastname);
// }
// tempest('tem','pest');

// var n=['name1','name2','name3','name4','name5'];
// console.log(n[2]);
// console.log(n.length)
// console.log(n);

// n.push("name6");
// console.log(n);
// n.unshift("name7");
// n.pop();
// console.log(n);

//Challenge 2
var b=[124,48,268];
var f=[0,0,0];
var t=[0,0,0];
var i=0;
function tip(bill) {
    if(bill>200){
        t[i]=bill*0.10;
        f[i]=bill*0.10+bill;
    }
    else if(bill>=50) {
        t[i]=bill*0.150;
        f[i]=bill*0.15+bill;
    }
    else {
        
        t[i]=bill*0.20;
        f[i]=bill*0.20+bill;
    }
    i++;

}
for(var j=0;j<3;j++)
    tip(b[j]);

console.log(f);
console.log(t);