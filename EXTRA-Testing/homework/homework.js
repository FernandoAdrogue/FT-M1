const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function getRowNumber(letter){
    const rows ={'A':0,'B':1,'C':2,'D':3,'E':4}//*indice correspondiente a cada fila
    if(!rows.hasOwnProperty(letter))throw new TypeError('First parameter is not a character of A to E')
    return rows[letter.toUpperCase()];
}

  
function checkSeatStatus(letter, numero){
    if(typeof letter != 'string')throw new TypeError('First parameter is not a string')
    if(typeof numero != 'number')throw new TypeError('Second parameter is not a number')
    return getSeat(letter, numero).booked;
};

function book (letter,numero){
    if(!checkSeatStatus(letter,numero)){
        getSeat(letter, numero).booked=true;
        return `Seat in ${letter}${numero+1} successfully booked`
    }
    return `Seat in ${letter}${numero+1} is already booked`
}

function getSeat(letter, numero) {
    const row = getRowNumber(letter);
    if(numero >= layout[row].length)throw new TypeError('Second parameter is to higther of 4')
    return layout[row][numero];
}

function resume(){
    const res = {}
    res.booked = 0;
    res.unbooked = 0;
    res.balance = 0;

    for(const row of layout){
        for(const sit of row){
            if(sit.booked){
                res.booked++;
                res.balance+= valor(sit.type);
            }else{
                res.unbooked++;
            }
        }
    }
    res.seats= res.booked + res.unbooked;
    return res;
}

function valor(type){
    const prices = {
        'VIP':600,
        'NORMAL':450,
        'ECONOMIC':300,
    }
    return prices[type] 
}

module.exports = {
    checkSeatStatus,
    getRowNumber,
    book,
    getSeat,
    resume,
 };