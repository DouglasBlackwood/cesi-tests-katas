# Kata ohce

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

ohce est un programme en ligne de commande qui affiche l'inverse de ce qui est
saisi.

Il respecte cependant certaines règles.

1. Au lancement du programme, il vous salue en fonction de l'heure, en espagnol:
   1. Entre 20h et 6h, ohce vous salue avec "¡Buenas noches < your name >!".
   2. Entre 6h et 12h, ohce vous salue avec "¡Buenos días < your name >!".
   3. Entre 12h et 20h, ohce vous salue avec "¡Buenas tardes < your name >!".
2. Lorsque vous saisissez un palindrome, ohce affiche l'inverse et ajoute
   "¡Bonita palabra!".
3. Vous pouvez arrêter ohce en saisissant "Stop!" et il répondra "Adios < your
   name >" avant de stopper.

Voici un exemple d'utilisation d'ohce.

```bash
$ ohce Pedro
> ¡Buenos días Pedro!
$ hola
> aloh
$ oto
> oto
> ¡Bonita palabra!
$ stop
> pots
$ Stop!
> Adios Pedro
```

## Astuces

Pour afficher du texte dans la console, vous pouvez utiliser `console.log()`.

Pour récupérer la saisie de l'utilisateur, vous pouvez utiliser [cet exemple de code][1].

Pour tester le texte affiché par le programme, vous devrez utiliser [les fonctions de Mock de Jest][2].

[1]: https://www.kindacode.com/article/node-js-getting-user-input-from-console-2-approaches/#Using_self-written_code
[2]: https://jestjs.io/docs/mock-functions
