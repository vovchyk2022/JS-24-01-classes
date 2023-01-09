// const nameProgrammingLanguage ='C++'
// console.log('programming language:',nameProgrammingLanguage);

// const isUserHavePet = false;

// const COUNTER_SEAZONS_OF_YEAR = '4'
// console.log('seasons of the year:', SEAZONS_OF_YEAR);

const userInput = prompt('Enter number: ', '5');


if (userInput=== '' || userInput === null || Number.isNaN(Number(userInput))) {
  console.log('error')
}else{
  console.log(userInput, Number(userInput));
}




