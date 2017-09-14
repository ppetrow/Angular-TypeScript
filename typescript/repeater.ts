// make a function that will repeat a given string a given number of times
// e.g. repeat("Weko", 3) should return "WekoWekoWeko"



let repeat = function (name: string, repeatnumber: number) 
{
    let element: string ="";
    for (let index = 0; index < repeatnumber; index++) {
        element += name;
    }
    return element;
}

console.log(repeat("Weko", 3));
