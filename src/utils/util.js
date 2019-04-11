export function createType(keys){
    let obj={};
    keys.forEach(item=>{
      obj[item]=item;
    })
    return obj;
}