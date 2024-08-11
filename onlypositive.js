function onlyPositive(numebrs){
    const newarray=[];
    for (let i=0; i< numebrs.length; i++){
        if(numebrs[i]>0){
            newarray.push(numebrs [i]);
        }
        else{
            break;
        }
    }
    return newarray;

}

const array = [23,4,211,44,-33,23,3423];
const positive = onlyPositive(array);
console.log(positive);
