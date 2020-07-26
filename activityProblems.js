function treasure() {
    var loot = 'We are rich!'
    var key = '2U'

    function openChest(password){
        if(password === key){
            console.log(loot)
        } else {
            console.log('Get outta here!')
        }
    }

    return openChest
}

var myTreasure = treasure()
myTreasure('2U')

function calorieCounter(){
    var totalCalories = 0

    function addCalories(numberOfCalories){
        totalCalories += numberOfCalories
        console.log(totalCalories);
    }

    function subtractColories(numberOfCalories){
        totalCalories -= numberOfCalories
        console.log(totalCalories);
    }

    function clear() {
        totalCalories = 0
        console.log(totalCalories);
    }

    return { addCalories, subtractColories, clear }
}

var myCalories = calorieCounter()
myCalories.addCalories(50)
myCalories.subtractColories(25)
myCalories.clear()

function family(){
    var familyArray = []

    function addMember(name){
        familyArray.push(name)
        console.log(familyArray)
    }

    function callFamily(){
        for( var person of familyArray){
            console.log(person)
        }
    }

    

    return {callFamily, addMember}
}
var Favre = family()
Favre.addMember('Parker')
Favre.addMember('Virginie')
Favre.addMember('Peter')
Favre.callFamily() 


