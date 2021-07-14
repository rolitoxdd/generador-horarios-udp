from csv import reader


# ej horario_texto:
# MA JU 10:00 - 11:20
# LU 11:30 - 12:50; VI 13:00 - 14:20
def parsear_horario(horario_texto):
    respuesta = []
    if horario_texto:
        bloques = {
            "08:30 - 09:50": "A",
            "10:00 - 11:20": "B",
            "11:30 - 12:50": "C",
            "13:00 - 14:20": "D",
            "14:30 - 15:50": "E",
            "16:00 - 17:20": "F",
            "17:25 - 18:45": "E",
            "18:50 - 20:10": "F",
            "20:15 - 21:35": "G"
        }
        horarios_evento = horario_texto.split(";")
        horarios_evento = [[x[:-14].strip(), x[-13:]] for x in horarios_evento]
        for horario in horarios_evento:
            if horario[1] in bloques:
                bloque = bloques[horario[1]]
                if len(horario[0]) > 2:
                    horarios = horario[0].split()
                    respuesta.extend([[h, bloque] for h in horarios])
                else:
                    respuesta.extend([[horario[0], bloque]])

    return respuesta


def parsear_csv(texto):
    ramos = {}

    for linea in reader(texto):
        datos_evento = {
            "id_ramo": linea[0],
            "nombre": linea[1],
            "creditos_asignatura": linea[2],
            "asignatura_referenciada": linea[3],
            "seccion": linea[4],
            # "descripcion_evento": linea[5],
            "horarios": linea[6],
            # "profesor": linea[7],
            "sede": linea[8],
            "categoria_paquete": linea[9],
            "paquete": linea[10],
            "vacantes_paquete": linea[11]
        }

        datos_evento["horarios"] = [*[[*h, linea[5]]
                                      for h in parsear_horario(datos_evento["horarios"])]]

        if linea[0] not in ramos:
            ramos[linea[0]] = [datos_evento]
        else:
            if [seccion for seccion in ramos[linea[0]] if seccion["paquete"] == datos_evento["paquete"]]:
                datos_seccion = [seccion for seccion in ramos[linea[0]]
                                 if seccion["paquete"] == datos_evento["paquete"]][0]
                if datos_evento["horarios"][0] not in datos_seccion["horarios"]:
                    datos_seccion["horarios"].extend(datos_evento["horarios"])
                # ramos[linea[0]].append(datos_evento)
                if "AYUD" in linea[5]:
                    datos_seccion["ayudante"] = linea[7]
                elif "LAB" in linea[5]:
                    datos_seccion["profesor_lab"] = linea[7]
                elif "profesor" not in datos_evento or datos_evento["profesor"] == "":
                    datos_seccion["profesor"] = linea[7]
            else:
                if "AYUD" in linea[5]:
                    datos_evento["ayudante"] = linea[7]
                elif "LAB" in linea[5]:
                    datos_evento["profesor_lab"] = linea[7]
                elif "profesor" not in datos_evento or datos_evento["profesor"] == "":
                    datos_evento["profesor"] = linea[7]
                ramos[linea[0]].append(datos_evento)
    return ramos
