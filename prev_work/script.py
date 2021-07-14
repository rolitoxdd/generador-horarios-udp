from sys import argv
from json import dumps
from utils import parsear_csv

if __name__ == "__main__":
    archivo = argv[1]
    texto = open(archivo).read().split('\n')[1:]
    texto = [linea for linea in texto if linea.strip() and linea !=
             ",,,,,,,,,,,"]
    ramos = parsear_csv(texto)

    print(dumps(ramos))
