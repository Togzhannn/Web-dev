_ = int(input())
a = set(map(int, input().split()))
n = int(input())

for _ in range(n):
    operation = input().split()[0]
    other_set = set(map(int, input().split()))

    if operation == "update":
        a.update(other_set)
    elif operation == "intersection_update":
        a.intersection_update(other_set)
    elif operation == "difference_update":
        a.difference_update(other_set)
    elif operation == "symmetric_difference_update":
        a.symmetric_difference_update(other_set)

print(sum(a))