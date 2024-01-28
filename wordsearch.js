// By Rusgyn and Rouslan

const wordSearch = (letters, word) => {

  let result = [];
  
  //Horizontal search
  const horizontalJoin = letters.map(ls => ls.join(""));
    
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  // Vertical search
  letters.forEach(row => {
    row.forEach((element, idx) => {
  
      //group numbers by index (idx) and put to results
            
      // result[idx] ||= []; // initialize result[idx] as an empty array.
      // //result[idx] is the element of the given array.
      if (!result[idx]) {
        result[idx] = []; // initialize result[idx] as an empty array if it is falsy
      }
        
  
      result[idx].push(element); //result is the new array, idx is the index, element is the character. result[idx] = index 0..., pushing all the elements in index 0;
    });
  });
  
  const verticalJoin = result.map(char =>char.join(""));
    
  for (const letter of verticalJoin) {
    if (letter.includes(word)) return true;
  }
  
  return false;
};
  
module.exports = wordSearch;