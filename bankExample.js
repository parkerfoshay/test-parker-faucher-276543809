function myBank() {
    var balance = 5
    var accountPIN = '@243$&%51234657879'

    function showBalance(PIN) {
        if(accountPIN === PIN){
            console.log(balance);
        } else {
            console.log('Wrong PIN')
        }
    }

    function depositeToBalance(amount){
        balance += amount
        console.log(balance)
    }

    function withdrawFromBalance(amount) {
        balance -= amount
        console.log(balance)
    }

    return { showBalance, depositeToBalance, withdrawFromBalance }
}

const parkerBank = myBank()
parkerBank.depositeToBalance(10)
parkerBank.withdrawFromBalance(7)
parkerBank.showBalance('@243$&%51234657879')
console.dir(parkerBank)