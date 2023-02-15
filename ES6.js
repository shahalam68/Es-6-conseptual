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


function multi(firstPara, SecondPara =5){
    const result = firstPara * SecondPara;
    return result;
}
console.log(multi(5));