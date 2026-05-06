function balikKata(kata) {
    //split kata menjadi array
    let splitKata = kata.split('');
    //balikkan array
    let reverseKata = splitKata.reverse();
    //join array menjadi string
    let joinKata = reverseKata.join('');
    return joinKata;
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS