// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {  
    sumlength = n.toString()
    starr = []
    starr.push(n)
    while(sumlength > 1){
        // console.log(starr)
        starrstr = starr[0].toString()
        // console.log(starrstr)
        sum = 0
        for(i=0; i<=starrstr.length-1; i++){
            sum = sum + parseInt(starrstr[i])
        }
        // console.log(sum)
        sumlength = sum.toString().length
        // console.log(sum, sumlength)
    
        starr.pop()
        starr.push(sum)
        // console.log(starr)
        }
    // console.log(sum, sumlength)
    if(sumlength = 1){
        return console.log(`The single digit sum of all the digits in the number ${n} in recursion is ${sum}`)
    }
}
digital_root(16)
console.log('========')
digital_root(942)
console.log('========')
digital_root(132189)
console.log('========')
digital_root(493193)
console.log('========')
digital_root(878158636975)