
function findLongestName(names) {
    let longestName = "";
  
    for (let i = 0; i < names.length; i++) {
      if (names[i].length > longestName.length) {
        longestName = names[i];
      }
    }
  
    return longestName;
  }
  
  const friends = ["Alice", "Jonathan", "Emily", "Christopher", "Michael"];
  const longestName = findLongestName(friends);
  console.log(longestName); 
  