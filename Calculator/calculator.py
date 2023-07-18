# These function will be used for performing the calcuation process
def add (x,y):
    return x + y
def sub(x,y):
    return x-y
def mul(x,y):
    return x * y
def div(x,y):
    return x/y
def mod(x,y):
    return x % y
first_number = int(input("Enter the first number: "))
second_number = int(input("Enter the second number: "))
Operator = (input("Select the operation(+,-,*,/,%): "))
if Operator=='+':
    print ("The sum of",first_number,"and",second_number, "is", add(first_number,second_number))
elif Operator == '-':
    print ("The difference of",first_number,"and",second_number,"is",sub(first_number,second_number))
elif Operator == '*':
    print ("The multiplication of",first_number,"and",second_number,"is",mul(first_number,second_number))
elif Operator == '/':
    print ("The Division of",first_number,"and",second_number,"is",div(first_number,second_number))
elif Operator == '%':
    print ("The modulus of",first_number,"and",second_number,"is",mod(first_number,second_number))
else :
    print("Your have entered the wrong symbol")

print("************Thankyou*******************")