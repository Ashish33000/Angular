// let commonMan={
//     title:"Bruce"
// };
// let addPower=function(power:number){
//    return function(hero:any){
//     return{
//         title:hero.title,
//         power :power
//     }
//    }
// }
// //    let tempcommonMan=addPower(7)
// //    commonMan=tempcommonMan(commonMan)
// commonMan=addPower(7)(commonMan)
// console.log(commonMan);

let AddPower=function(power:number){
    return function(targetClass:any){
        return class{
            title:string=new targetClass().title
            power:number=power;
        }
    }
}

@AddPower(8)
class CommonMan{
    title:string="Bruce"
}
console.log(new CommonMan());
