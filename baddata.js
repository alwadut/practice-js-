function FindingBadData(data){
    const badData =[];
    for(let i=0; i< data.length; i++){
        if(data[i]<0){
            badData.push(data[i]);

        }


    }
    
    return badData;
}

const dataarray= [ 1,2,5,-4,-9];
const badDataList = FindingBadData(dataarray);
console.log(badDataList.length);