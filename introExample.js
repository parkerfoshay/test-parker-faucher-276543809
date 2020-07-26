function dog() {
    var bark = 'woof'

    function makeNoise() {
        console.log(bark)
    }

    return makeNoise
}

dog()()

var pug = dog()
pug()

console.dir(pug)