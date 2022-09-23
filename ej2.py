start = int(input("Ingresa el primer número >> "))
finish = int(input("Ingresa el último número >> "))

def is_prime_number(num):
    for i in range(2,num):
        if num%i==0:
            return False
    return True

prime_numbers=[]

for i in range(start, finish+1):
    if is_prime_number(i):
        prime_numbers.append(i)

print(prime_numbers)