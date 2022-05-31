

exports.caesarCipher = function(str, num) {
    str = str.split('')
    re = /^[a-zA-Z]/
    ans = []
    let j, temp;

    for(let i = 0; i<str.length; i++){
        if(re.test(str[i])){
            j = str[i]===str[i].toUpperCase() ? 65 : 97
            temp = (((str[i].charCodeAt(0))-j+num)%26)
            temp = temp<0 ? temp+=(j+26) : temp+=j
            ans.push(String.fromCharCode(temp))
        }
        else{
            ans.push(str[i])
        }

    }
    return ans.join('')
}

