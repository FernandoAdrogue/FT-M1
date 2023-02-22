'use strict';

function BinarioADecimal(num) {
   const auxArr=num.split("");
   let convert = 0;
   for(let i = 0 ; i < auxArr.length; i++){
      let digit = parseInt(auxArr[i]);
      convert +=  digit * 2^i;
   }
   return Number.toString(convert);
}

function DecimalABinario(num) {
   const auxArr=num.split("");
   let convert = 0;
   for(let i = 0 ; i < auxArr.length; i++){
      let digit = parseInt(auxArr[i]);
      convert +=  digit * 2^i;
   }
   return Number.toString(convert);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
