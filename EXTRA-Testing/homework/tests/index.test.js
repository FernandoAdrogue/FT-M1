const {
  checkSeatStatus,
  getRowNumber,
  book,
  getSeat,
  resume
} = require('../homework');

describe('checkSeatStatus', () => {

  it('checkSeatStatus is a function?', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
  });
  it('should throw a TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('hola','Mundo!')).toThrow(new TypeError('Second parameter is not a number'));
  });
  it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A',1)).toBe(true);
  });
  it('should return false if the given seat defined by row and column is not booked', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
  });
  it('should throw a TypeError if first parameter is not a character of A to E', () => {
    expect(()=>checkSeatStatus('',1)).toThrow( new TypeError('First parameter is not a character of A to E'))
    expect(()=>checkSeatStatus('fila',1)).toThrow( new TypeError('First parameter is not a character of A to E'))
    expect(()=>checkSeatStatus('F',1)).toThrow( new TypeError('First parameter is not a character of A to E'))
  })
  it('should throw a TypeError if second parameter is to higther of 4', () => {
    expect(()=>checkSeatStatus('A',5)).toThrow( new TypeError('Second parameter is to higther of 4'))
  })
});

describe('getRowNumber', () => {
  it('should return 0 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });
  it('should return 2 if the letter given is an C', () => {
    expect(getRowNumber('C')).toBe(2);
  });
});

describe('book', () => {
  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E4 successfully booked');
    expect(checkSeatStatus('E',3)).toBe(true);
  });
  it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
    expect(book('A',1)).toBe('Seat in A2 is already booked');
  });
});

describe('resume', () => {
  it('shoul return de correct resume of layaut', () => {
    expect(resume().booked).toBe(10);
    expect(resume().unbooked).toBe(10);
    expect(resume().seats).toBe(20);
    expect(resume().balance).toBe(4500);
  });
});
