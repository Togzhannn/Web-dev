import math

a = int(input())
b = int(input())

for i in range(a, b + 1):
    root = int(math.sqrt(i))
    if root * root == i:
        print(i, end=" ")