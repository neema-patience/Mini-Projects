const input = document.getElementById("input"); // Call from line 10 in Main.html

function reverseString(str) {
    return str.split("").reverse().join(""); 
    /* Fancy way of checking string palindromes
    The str.split, .reverse and .join are functions that call for the changes in the (str) introduced above.
    */
}

function check() { 
    const value = input.value;
    const reverse = reverseString(value); // Function to reverse the string. Mentioned in line 3.
    
    if (value === reverse) {
        alert("This is a palindrome!"); 
    } else {
        alert("Not a palindrome.");    
    }
}
