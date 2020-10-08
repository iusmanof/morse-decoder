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

function decode(expr) {
   
  let everyTen = expr.match(/.{1,10}/g);
  let r = everyTen.map((el) => {
    let splitTwo = el.match(/.{1,2}/g);
    

    return convertNumberToSignal(splitTwo).join('');
  })

  
  let word = convertSignalToLetter(r);
  console.log(word);
}
  
 function convertNumberToSignal(code){
   return code.map((el) => {
        if (el === "10"){
          return ".";
        }
        else if(el === "11"){
          return "-";
        }
        else{
          return "";
        }
      });
 }

 function convertSignalToLetter(signal){
   let word = '';
   for (let s of signal){
    
    word += MORSE_TABLE[s];
   }
   return word;
 }


module.exports = {
    decode
}