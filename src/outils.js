const generateNumber = (str1, str2) => {

    var res = 0;
    for(let i =0; i< str1.length; i++){
        if(!isNaN(parseInt(str1[i]))) res+= parseInt(str1[i])
    }
    for(let i =0; i< str2.length; i++){
        if(!isNaN(parseInt(str2[i]))) res+= parseInt(str2[i])
    }
    return res.toString()
}


const generatestring = (str1, str2) => {
    var res = "";
    for(let i =0; i< str1.length; i++){
        if(isNaN(parseInt(str1[i]))) res+= str1[i]
    }
    for(let i =0; i< str2.length; i++){
        if(isNaN(parseInt(str2[i]))) res+= str2[i]
    }
    return res.split('').sort().join('');
}

export const generate = (str1, str2) => {
    return generateNumber(str1, str2)+generatestring(str1, str2)
}
export const getWhatItsNeeded = (data, inp) => {
    return data.filter(ele => {
        if(inp.length <= ele.userName.length) {
            let tmp = ele.userName.split('').slice(0, inp.length).join('')
            if(tmp === inp) return ele
        }
    })
}
