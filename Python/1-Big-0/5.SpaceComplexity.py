def boo(n):
    for i in n:
        print('booo!')


boo([1, 2, 3, 4, 5, 6])  # 0(1)


def arrayOfHiNTimes(n):
    hiArray = []
    for i in n:
        hiArray[i] = "hi"
    return hiArray


arrayOfHiNTimes(6)
