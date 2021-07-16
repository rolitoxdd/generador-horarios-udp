from sys import argv
from json import dumps
from utils import parsear_csv

if __name__ == "__main__":
    archivo = argv[1]
    texto = open(archivo).read().split('\n')
    texto = [linea.strip(",")
             for linea in texto if len(linea.strip(",")) > 5][1:]
    ramos = parsear_csv(texto)

    print(dumps(ramos))
