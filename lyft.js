function findWater(arr){
    let total = 0;
    let highest = 0;
    let nextHighest = 0;
    for(i = 0; i < arr.length; i ++){
        if(arr[i] >= highest){
            highest = arr[i];
            for(j = i + 1; j < arr.length; j++){
                if(arr[j] > nextHighest){
                    nextHighest = arr[j];
                }
            }
            if(highest > nextHighest){
                highest = nextHighest;
            }
        }
        if(arr[i] < highest){
            total += (highest - arr[i])
        }
        nextHighest = 0;
    }
    console.log(total);
}

arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
findWater(arr);