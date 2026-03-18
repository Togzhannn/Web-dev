import re

def is_float(s):
    pattern = r'^[+-]?[0-9]*\.[0-9]+$'
    return bool(re.match(pattern, s))

t = int(input())
for _ in range(t):
    n = input()
    print(is_float(n))