'use strict';

//function BinarioADecimal(num) {
//   let auxArr = num.split("").reverse();
//   let convert = 0;
//   for(let i = 0 ; i < auxArr.length; i++){
//      let digit = parseInt(auxArr[i]);
//      convert +=  digit * 2**i;
//   }
//   return convert;
//};

function BinarioADecimal(num) {
   console.log(parseInt(num,2));
return parseInt(num,2);

};

//function DecimalABinario(num) {
//   let numero = parseInt(num);
//   let convert = "";
//   while(numero > 1 ){
//      convert += (numero % 2).toString();
//      numero= Math.trunc(numero/2);
//   };
//   convert = numero + convert;
//   return convert;
//}
function DecimalABinario(num) {
      console.log(num.toString(2));
   return num.toString(2);
  }

BinarioADecimal("10");
DecimalABinario(3);

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
