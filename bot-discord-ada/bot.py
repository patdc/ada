import json
import os
import discord
import datetime
from dotenv import load_dotenv
from urllib import request
from urllib.error import HTTPError

load_dotenv()
WEBHOOK_URL = os.getenv('WEBHOOK_URL')

# Creation message dans un dictionnaire

phrases = {
    'arrivee': "Il est 10 heure, j'espère que vous êtes prêt pour coder.",
    'pause_midi': "12h30 ? ne serait-ce pas l'heure de manger ?",
    'journalisation': "Il est 17h20, pensez à journaliser.",
    'cloture': "C'est l'heure de la clôture.",
    'test': "ceci est un test"
}

# Recherche de la date


def messagesEnvoyes():
    now = datetime.datetime.now()
    dayToday = now.strftime("%A")
    timeEvent = now.strftime("%H:%M:%S")
    print("time:", timeEvent)

    contenu = timeEvent
    # if timeEvent == "10:00" and dayToday != "Saturday" and dayToday != "Sunday":
    #     contenu = phrases['arrivee']
    # elif timeEvent == "12:30" and dayToday != "Saturday" and dayToday != "Sunday":
    #     contenu = phrases['pause_midi']
    # elif timeEvent == "17:20" and dayToday != "Saturday" and dayToday != "Sunday":
    #     contenu = phrases['journalisation']
    # elif timeEvent == "17:40" and dayToday != "Saturday" and dayToday != "Sunday":
    #     contenu = phrases['cloture']
    # else:
    #     contenu = "non"

    # Paramètres d'en-tête de la requête
    entete = {
        'Content-Type': 'application/json',
        'user-agent':
            'Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/2.0.0.11'
    }

    objetEnvoye = {
        "content": contenu
    }

    # Construction de la requête

    req = request.Request(url=WEBHOOK_URL,
                          data=json.dumps(objetEnvoye).encode('utf-8'),
                          headers=entete,
                          method='POST')

    # l26 'dumps' tranforme la chaine de charactère pour json en utf-8

    # Emission de la requête
    try:
        if contenu != "non":
            response = request.urlopen(req)
        # print(response.status)
        # print(response.reason)
        # print(response.headers)
    except HTTPError as e:
        print('ERROR')
        print(e.reason)
        # print(e.headers)
        print(e.file.read())


def update():
    import time

    while True:
        messagesEnvoyes()
        time.sleep(5)


update()
