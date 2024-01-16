name = 'Brian'
print(name)


def title_case(string):
    words = string.lower().split()
    for i in range(len(words)):
        words[i] = words[i][0].upper() + words[i][1:]
    return ' '.join(words)


print(title_case('thIS SenTenCe waS wRITten BY somEone wIth a Bad SHIft KeY'))