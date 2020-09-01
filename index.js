const largestSubarraySum = array => {
    if (!array.length) return 0;
    let max = array[0];
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
        sum = Math.max(sum + array[i], array[i]);
        max = Math.max(max, sum);
    }
    return Math.max(max, 0);
}

