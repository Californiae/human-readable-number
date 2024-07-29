module.exports = function toReadable(number) {
    number=String(number)
let n=''
let resalt = ''
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    h = ' hundred';

if (number.length==3) {n=number}
    else if (number.length==2) {n="0"+number}
    else {n="00"+number}

if (n.slice(0,1) > 0) {resalt=resalt+units[n.slice(0,1)]+h}

if ((n.slice(1,3)!=00 ) && (n.slice(1,3)<20)&& (n.slice(1,3)>9)) {resalt=resalt+' '+units[n.slice(1,3)] 
    return resalt.trim() 
    // console.log(n.slice(1,3))
}
else if ((n.slice(1,2)!=0 )){resalt=resalt+' '+tens[n.slice(1,2)]}

if ((n.slice(2,3)!=0 )){ resalt=resalt+' '+units[n.slice(2,3)]}
else if (resalt=='') {resalt='zero'}
return resalt.trim()
}
