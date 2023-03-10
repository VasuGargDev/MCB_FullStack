//node.js array and filter function

const arr = [1,2,3,4,5,6,7,8];

res = arr.filter((item) => {
    return (item%2==0);       //only returning even no's
})

console.warn(res);
