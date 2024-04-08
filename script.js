//Do the below programs in anonymous function & IIFE& arrow :

//a.Print odd numbers in an array
//1.using anonymous:-
/* var result=[];
function odd(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))*/

//2.using IIFE:-

/*var result=[];
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            result.push(arr[i])
        }
    }
    console.log(result)
}
([1,2,3,4,5,6,7,8,9,10]));*/

//3.using arrow:-

/*var result=[];
var odd=(arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))*/

//b.Convert all the strings to title caps in a string array
//1.using anonymous:-
/*var result=[];
function titlecaps(str)
{
   str=str.toLowerCase().split(' ')
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        
    }
    return str.join(' ');
}
console.log(titlecaps("i am mern stack developer"))*/

//2.using IFFI:-

/*var result=[];
(function (str)
{
   str=str.toLowerCase().split(' ')
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        result.push(str[i])
        
    }
    console.log(result)
}
("i am mern stack developer"));*/

//3.using Arrow:-

/*var result=[];
var titlecaps=(str)=>
{
   str=str.toLowerCase().split(' ')
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        
    }
    return str.join(' ');
}
console.log(titlecaps("i am mern stack developer"))*/

//c.Sum of all numbers in an array
//1.using anonymous:-

/*var b=function(arr)
{
    var sum =0;
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
       
        
    }
    return sum
}
console.log(b([1,2,3,4,5]))*/
//using IFFI:-
/*(function(arr)
{
    var sum = 0;
    for(var i = 0 ; i< arr.length ; i++)
    {
        sum += arr[i];
    }
    console.log(sum);
})([1,2,3,4,5,6,7])*/

// USING ARROW FUNCTION
/*var b = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(b([1, 2, 3, 4, 5, 6]));*/

// 4 Return all the prime numbers in an array
//USING ANNOYMOUS FUNCTION
/*var prime = function (arr) 
{
  return arr.filter(function (n) 
  {
    for (let i = 2; i < n.length; i++)
     {
      if (n % i === 0) 
      return false;
    }
    return n > 1;
  });
};
console.log(prime([1, 2, 3, 4,5,6,7,8,9]));*/

//USING IIFE FUNCTION
/*(function () {
  var prime = [7, 16, 9, 3];
  prime = prime.filter(function (num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(prime);
})();*/
// USING ARROW FUNCTION
/*const newArray = [1, 2, 3, 4];
const myPrimeArray = newArray.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);*/
// 5 Return all the palindromes in an array
//USING ANNOYMOUS FUNCTION
/*const isPalindrome = (function () {
  const myArray = ["racecar", "book", "filter", "refer"];
  var arr = myArray.filter(function (a,b) {
    var palindrome = a.split("").reverse().join("");
    if (a == palindrome) {
      console.log(myArray[b]);
    }
  });
})();*/

//USING IIFE FUNCTION
/*(function () {
  var myArray = ["kolok", "peep", "result", "malayalam"];
  var arr = myArray.filter(function (a,b) {
    var palindrome = a.split("").reverse().join("");
    if (a=== palindrome) {
      console.log(myArray[b]);
    }
  });
})();*/
// USING ARROW FUNCTION
/*let input = [12, 66, 35, 77, "coco", "num", "rotator", "noon"];
let palindrome = (input) => {
  let i = 0;
  let ans = "";
  while (i < input.length) {
    let temp = "";
    temp = temp + input[i];
    let flag = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] == temp[temp.length - 1 - j]) {
        flag++;
      } else {
        break;
      }
    }
    if (flag === temp.length) {
      ans = ans + input[i] + " ";
    }
    i++;
  }
  if (ans.length > 0) {
    return ans.trimEnd();
  } else {
    return "No Palindrome found";
  }
};
console.log(palindrome(input));*/

// 6 Return median of two sorted arrays of the same size.
let arr1=[1,5,9,12,15]
let arr2=[3,4,7,10,11]
let n = arr1.length;
let median = function(arr1, arr2, n) {
    let i=0;
    let j=0;
    let value1 =0;
    let value2 =0;
 for(let count=0; count<=n; count++) {
       if(arr1[i]<arr2[j])
      {
        value1=arr1[i];
        i++;
      }
      else if(arr1[i]>arr2[j])
      {
        value2=arr2[j];
        j++;
      }
      else if(arr1[i] === arr2[j])
      {
        value1=arr1[i];
        i++;
      }
    }
    return (value1+value2)/2;
}
if(arr1.length === arr2.length)
{
    console.log('Median is',median(arr1,arr2,n))
}
else
{
  console.log('Array size should be equal for programm run')
}
// 7 Remove duplicates from an array
//USING ANNOYMOUS FUNCTION
let findDuplicates = function () {
  
  const yourArray = [1, 1, 2,2, 3, 4, 5, 5]
  let duplicates = []
  const tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates();
//USING IIFE FUNCTION
(function () {
  
  let numbers = [1, 2, 3,3, 2, 4, 5, 5, 6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})();
// 8 Rotate an array by k times
//USING ANNOYMOUS FUNCTION
let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2);
//USING IIFE FUNCTION
(function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],2)