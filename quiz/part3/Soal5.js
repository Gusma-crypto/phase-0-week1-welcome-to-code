console.log(`LOOPING BINTANG`);
console.log(`=================`);
let input = 5;
let pettern = "";
for(let i=1; i <= input; i++){
    for(let j=1; j<=i; j++){
       pettern += "*";
    }
    pettern += "\n";

}
console.log(pettern);