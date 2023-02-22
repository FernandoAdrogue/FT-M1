'use strict';

function BinarioADecimal(num) {
   let auxArr = num.split("").reverse();
   let convert = 0;
   for(let i = 0 ; i < auxArr.length; i++){
      let digit = parseInt(auxArr[i]);
      convert +=  digit * 2**i;
   }
   return convert;
};

function DecimalABinario(num) {
   let numero = parseInt(num);
   let convert = "";
   while(numero > 1 ){
      convert += (numero % 2).toString();
      numero= Math.trunc(numero/2);
   };
   convert = numero + convert;
   return convert;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
