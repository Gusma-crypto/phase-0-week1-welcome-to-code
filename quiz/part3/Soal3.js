console.log(`Angka Ganjil & Genap`);
console.log(`=================`);

//looping angka ganjil
for (let angka=1; angka<=100; angka++){
    if(angka % 2===1){
        console.log(`${angka}: GANJIL`);
    }else{
        console.log(`${angka}: GENAP`);
    }
}