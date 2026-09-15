# Mijn Woorden

Mijn Woorden is een eenvoudige, offline woordenschattrainer voor Nederlands op B1- en B2-niveau. De app bevat 200 starterwoorden en bewaart de oefenvoortgang alleen op het apparaat.

## Wat werkt in deze versie

- 100 B1-woorden en 100 B2-woorden
- Nederlandse, Engelse en Perzische betekenissen
- de/het en meervoud voor zelfstandige naamwoorden
- tegenwoordige tijd, verleden tijd en voltooid deelwoord voor werkwoorden
- aparte flashcard- en werkwoordrondes
- knoppen Opnieuw, Moeilijk en Goed
- automatische herhaling van moeilijke woorden
- zoeken en filteren
- eigen lijsten plakken in de vorm `Nederlands; English; فارسی`
- offline gebruik na de eerste keer openen

## Lokaal testen op een computer

Open een terminal in deze map en voer uit:

```bash
python3 -m http.server 4173
```

Open daarna `http://localhost:4173` in Chrome of Edge. Open het project niet rechtstreeks als een `file://`-bestand, omdat offline installatie dan niet werkt.

## Installeren op Android

De map moet eerst via HTTPS op een website worden geplaatst. Open die URL daarna in Chrome op Android en kies **Installeren** of **Toevoegen aan startscherm**. Na installatie werkt de vocabulairetrainer als een zelfstandige app en is de bestaande woordenlijst offline beschikbaar.

## Nieuwe starterwoorden toevoegen

De ingebouwde lijst staat in `vocabulary.js`. Eigen woorden die via het scherm **Toevoegen** worden geïmporteerd, worden lokaal op het apparaat bewaard.

Een volgende versie kan een uitgebreid importschema toevoegen voor LINK+, inclusief werkwoordsvormen, thema's en taken.
