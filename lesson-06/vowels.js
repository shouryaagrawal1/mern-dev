function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(l of str){
        if(vowels.includes(l)){
            count++;
        }
    }
    return count;
}
const str = "hi i am shourya";
console.log(countVowels(str));