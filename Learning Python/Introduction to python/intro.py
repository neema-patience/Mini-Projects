# Introduction to Python - String Manipulation

# Define string variables
name1 = "Jarett"
name2 = "Jim"
name3 = 'Mary'

# Print the types of the string variables
print(type(name1))  # <class 'str'>
print(type(name2))  # <class 'str'>
print(type(name3))  # <class 'str'>

# Convert the string '100' to an integer
string_number = '100'
converted_number = int(string_number)
print(f"The integer value of '{string_number}' is {converted_number}.")

# Use a string method to convert 'HELLO' to 'hello'
greeting = 'HELLO'
lowercase_greeting = greeting.lower()
print(f"The lowercase version of '{greeting}' is '{lowercase_greeting}'.")
