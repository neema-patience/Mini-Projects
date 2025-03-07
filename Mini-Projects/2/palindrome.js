const input = document.getElementById("input"); // Call from line 10 in Main.html

function reverseString(str) {
    return str.split("").reverse().join(""); 
    /* Fancy way of checking string palindromes
    The str.split, .reverse and .join are functions that call for the changes in the (str) introduced above.
    */
}

function check() {
    const historyTable = document.getElementById('history').getElementsByTagName('tbody')[0];

    const value = input.value;
    const reverse = reverseString(value); // Function to reverse the string. Mentioned in line 3.
    
    const resultMessage = value === reverse ? "This is a palindrome!" : "Not a palindrome.";
    document.getElementById('result').innerText = resultMessage;

    // Add the checked word and result to the history table
    const newRow = historyTable.insertRow();
    newRow.insertCell(0).innerText = value;
    newRow.insertCell(1).innerText = resultMessage;

}
