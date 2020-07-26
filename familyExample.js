
function familyCreator() {
    var dad = 'Mike'
    var mom = 'Virginia'
    var child = 'Pat'
    var savings = 0

    function familyPhoto(){
        console.log(dad + ' ' + mom + ' ' + child)
    }

    function addToSavings(){
        savings++
        console.log(savings);
    }

    return {familyPhoto, addToSavings}
}

var faucher = familyCreator()
faucher.addToSavings()
faucher.addToSavings()
faucher.addToSavings()
console.dir(faucher)