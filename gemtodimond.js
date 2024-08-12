function GemsToDimond(gem1,gem2,gem3){
    const firstFnd = 21;
    const secondFnd = 32;
    const thirdFnd = 43;
    const totaldimond = (gem1*firstFnd) + (gem2*secondFnd)+(gem3*thirdFnd);
    
    
    // const dimond= 0;
    if(totaldimond >= (1000*2)){
        const dimond = (totaldimond - 2000);

        return dimond;

    }
    // else{
    //     console.log(totaldimond);
    // }

}

const convetDimond = GemsToDimond(100, 5, 1)
console.log(convetDimond);
