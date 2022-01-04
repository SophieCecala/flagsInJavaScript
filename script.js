// task 1
function func1(arr){
    for(let elem of arr){
        if(elem % 2 === 0){
            return true;
        }
    }
    return false;
}
let arr1 = [2, 4, 6, 8];

alert(func1(arr1));

// task2

function func2(num){
    const arr2 = num.toString().split('');
    return arr2.every(item => item % 2 > 0);
}
alert(func2(375));

// task 3

function func3(arr) {
 for(let i = 0; i < arr.length - 1; i++){
     for(let j = i+1; j < arr.length; j++){
         if(arr[i] === arr[j]){
             return true;
         }
     }
 }
 return false;
}

alert(func3([4, 3, 5, 7]));