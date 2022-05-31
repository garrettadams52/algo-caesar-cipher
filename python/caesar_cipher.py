import re

def caesar_cipher(string, shift_amount):
    string = list(string)
    let = "^[a-zA-Z]"
    ans = []

    for i,x in enumerate(string):
        if re.match(let,x):
            j = 97 if x.islower() else 65
            temp = ((ord(x)-j+shift_amount)%26)+j
            x = chr(temp)
        ans.append(x)

    return ''.join(ans)



