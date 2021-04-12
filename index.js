const names = ["Luke", "Dave", "Sally"]

function writeCards(names, event) {
    let newCards = []
    for (let i = 0; i < names.length; i++) { 
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newCards
}

writeCards(names, "birthday")


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number -= 1;
}
      
};


countDown(9);
