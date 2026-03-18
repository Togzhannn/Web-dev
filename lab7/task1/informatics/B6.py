def power(a, n):
    res = 1.0
    for i in range(n):
        res = res * a
    return res

input_data = input().split()
a = float(input_data[0])
n = int(input_data[1])

print(power(a, n))