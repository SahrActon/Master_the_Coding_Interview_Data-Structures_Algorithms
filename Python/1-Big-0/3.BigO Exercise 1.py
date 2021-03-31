def anotherFunction():
    print('i do nothing for now ')


def funChallenge(input):
    a = 10  # 0(1)
    a = 50 + 3  # 0(1)

    for i in input:  # 0(1)
        anotherFunction()  # 0(n)
        stranger = True  # 0(n)
        a = a + 1  # 0(n)
    return a  # 0(1)


myInput = [1, 2, 3, 4, 5, 6]
funChallenge(myInput)

# The result should be # 0(n)
