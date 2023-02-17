// // let, const,var
// var age = 20;
// if(age > 18){
//     // const name1 = "Salman Shah";
//     // let name2 = "Manna";
//     // var  name3 = "Riaz";
//     // console.log(name1);
//     // console.log(name2);
//     // console.log(name3);
// }


// function mostan(){
    
//     const name1 = "Salman Shah";
//     let name2 = "Manna";
//     var  name3 = "Riaz";
// }




/* Default Parameter*/


// function Mostan(name1, name2 = "bhai"){
//     const fullName = `${name1} ${name2}`;
//     return fullName;
// }
// console.log(mostan("bangla", "bhai"));


function multi(firstPara, SecondPara = 1){
    const result = firstPara * SecondPara;
    return result;
}
// console.log(multi(5));

/* Template String*/

/*
মাল্টি লাইন ব্যবহার, ডিয়নামিক ভাবে ভ্যালু এসাইন। ম্যাথমেটিক অপারেশান করা যায়
*/

const firstName =  "Ershad";
const lastName = "Sikdar";
let value = 2;
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName} ${value }`;
// console.log(fullName);



// const mostan = (name1, name2) =>{
//     const fullName = `${name1} ${name2}`;
//     return fullName;
// }
// console.log(mostan("Bangla", "Bhai"))

/* Spread operator */
const mostan = ['Josef', 'Bangla bhai','Ershad Sikdar','Sweden aslam'];
console.log(...mostan);
console.log(mostan);