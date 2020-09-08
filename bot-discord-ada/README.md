# 2020-08-31-Bot_Discord
Bot discord en python

Projet sur 2 semaines
Participants : Patricia, Gwenaelle

- Intaller les lib discord et python-dotenv
- Suivre le tuto sur https://www.writebots.com/discord-bot-token/ pour la création du bot et recevoir le token d'authentification
- Ajouter le token au variables d'environement -> set (windows) / export (linux) nom de la variables=Token
  example "set DISCORD_TOKEN=XXXXXXXXXXXX"

## A faire :
- Faire que le bot puisse intéragir sur le serveur
- Automatiser une alarme
- rappeler régulièrement pendant les horaires de la journée de faire une pause, s'hydrater et s'étirer
  - potentiellement rappeler de se laver les mains, porter un masque et respecter les distances de sécurité
### Petit plus :
- Créer un Bot sera interactif : il posera des questions aux membres de l’espace Slack, et proposera ensuite un résumé des réponses.
Par exemple, il pourrait s’adresser à chaque membre de l’espace pour leur demander où est-ce qu’il·els mangent ce midi, et poster à l’heure du déjeuner un récapitulatif des réponses reçues.

## Objectifs pédagogiques :
- Découvrir une documentation
- Chercher des exemples de code
- Comprendre ce qu’est un webhook et comment s’en servir
- Mettre en forme du contenu pour être accepté par un service tiers
- Ecrire du code capable de faire des requêtes de façon autonome et gérer les cas d’erreur
- Automatiser l’appel d’un bout de code à intervalle régulier
