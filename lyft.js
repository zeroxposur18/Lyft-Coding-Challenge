function maxwater (arr,n) {
    let res = 0;
    for (i = 1; i < n-1; i++){
        left = arr[i];
        for (j = 0; j<i; j++){
            left = max(left, arr[j]);
        }
        right = arr[i];
        for (j = 0; j<i; j++){
            right = max(right, arr[j]);
        }
        res = res + (min(left, right) - arr[i]);

        return res    
    }
} 

init() {
    arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
}