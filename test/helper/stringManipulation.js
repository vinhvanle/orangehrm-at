/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param {string} string - The input string to be manipulated.
 * @returns {string} - The manipulated string with the first letter of each word capitalized.
 */
function capitalizeFirstLetter(string) {
  let finalizedString = '';
  let arr = string.split(' '); // Split the string into words
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); // Capitalize first letter of each word
    finalizedString += arr[i] + ' '; // Add the word to the final string with a space
  }
  return finalizedString.trim(); // Remove the trailing space
}

export default { capitalizeFirstLetter };
