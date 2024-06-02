//iteration => loop

//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//cmd select same and ctr+d 
for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
}

//console.log(element);//not accessble outside loop

//if condition inside loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is the best number");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {

    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= i; j++) {
       //console.log(`inner loop value ${j} and inner loop ${i}`);
      // console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

//keywords //break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break//use to break the flow
//     }
//  console.log(`value of i is ${i}`);
    
// }
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue//
    }
 console.log(`value of i is ${i}`);
    
}