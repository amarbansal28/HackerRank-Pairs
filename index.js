function pairs(k, arr) {
    // Write your code here
    let count =0;
    for(let i =0; i < arr.length; i++){
        for(let j =i+1; j < arr.length; j++){
            if(Math.abs(arr[i] - arr[j]) === k){
                count++;    
            }
        }
    }
    return count;
}
pairs(2,[1, 5, 3, 4, 2])

// o/p -> 3
