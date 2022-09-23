from re import sub
def count_words(words):
    word_count = dict()
    for i in sub("[^0-9a-zA-Z: ]+","",words.lower()).split(" "):
        word_count[i] = 1 if (i not in word_count) else (word_count[i]+1)
    return word_count

frase = str(input("Ingresa la frase a analizar >> "))
print(count_words(frase))