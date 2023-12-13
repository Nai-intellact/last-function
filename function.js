function canPay(arr, target) {
    // Check if the array is empty
    if (arr.length === ) {
        return "Please input valid elements";
    }

    // Calculate the sum of array elements without using reduce
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is a positive integer
        // if (typeof arr[i] !== 'number' || arr[i] <= 0) {
        //     return "Please input valid positive integers";
        // }

        sum += arr[i];
    }

    // Check if the sum is greater than or equal to the target
    if (sum >= target) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const paymentArray = [12, 10, 40];
const targetAmount = 40;

const result = canPay(paymentArray, targetAmount);
console.log(result); // It will print 'true' in this example
