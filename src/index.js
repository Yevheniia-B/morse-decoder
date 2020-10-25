const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

decodeCharMap = {
  '00': null,
  '10': '.',
  '11': '-',
  
};

function splitChars(expr) {
  let charCount = expr.length / 10;
  let encodedChars = [];

  for (let i = 0; i < charCount; i++) {

    encodedChars.push(expr.slice(i * 10, (i * 10) + 10));
  }
  return encodedChars;
}

function convertMorseChar(elem) {
  let morseChar = [];
  if (elem === '**********') {
     return ' ';
  }

  for (let i = 0; i < elem.length; i += 2) {
    let item = elem.slice(i , i + 2);
    let morseItem = decodeCharMap[item];
     if (morseItem) {
        morseChar.push(morseItem);
     }
  }
  return morseChar.join('');

}

function convertToAlphabet(morseChars) {
  let alphabetArray = [];

  for (let i = 0; i < morseChars.length; i++) {
    let alpabetChar = MORSE_TABLE[morseChars[i]];

    if (alpabetChar) {
      alphabetArray.push(alpabetChar);
    }
    else {
      alphabetArray.push(morseChars[i]);
    }
  }
  
  return alphabetArray.join('');
}


function decode(expr) {
  let encodedChars = splitChars(expr);
  let morseChars = encodedChars.map(convertMorseChar);
  return convertToAlphabet(morseChars);
}

module.exports = {
    decode
}