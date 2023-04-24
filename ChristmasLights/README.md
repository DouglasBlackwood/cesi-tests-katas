# Kata Christmas Lights

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

Parce que vos voisins ne cessent de vous battre dans le concours de décoration
des maisons de Noël, vous avez décidé de déployer un million de lumières dans
une grille 1000x1000. De plus, comme vous avez été particulièrement gentil cette
année, le Père Noël vous a envoyé par courrier des instructions sur la manière
d'afficher la configuration lumineuse idéale.

- Les lumières de votre grille sont numérotées de 0 à 999 dans chaque direction.
- Les lumières à chaque coin sont à 0,0, 0,999, 999,999 et 999,0.

Les instructions indiquent s'il convient d'allumer, d'éteindre ou d'alterner
diverses plages incluses, présentées sous forme de paires de coordonnées. Chaque
paire de coordonnées représente les coins opposés d'un rectangle, inclusivement.
Une paire de coordonnées comme 0,0 à 2,2 fait donc référence à 9 lumières dans
un carré de 3x3. Les lumières commencent toutes par être éteintes. Pour vaincre
vos voisins cette année, il vous suffit d'installer vos lumières en suivant dans
l'ordre les instructions que le Père Noël vous a envoyées.

Exemple :

- "Allumer de 0,0 à 999,999" allume (ou laisse allumée) chaque lampe.
- "Basculer 0,0 à 999,0" fait basculer la première ligne de 1000 lumières, en éteignant celles qui sont allumées et en allumant celles qui sont éteintes.
- "Éteindre de 499,499 à 500,500" éteindra (ou laissera éteintes) les quatre lumières du milieu.

Instructions :

- Allumer de 887,9 à 959,629
- Allumer de 454,398 à 844,448
- Éteindre de 539,243 à 559,965
- Éteindre de 370,819 à 676,868
- Éteindre de 145,40 à 370,997
- Éteindre de 301,3 à 808,453
- Allumer de 351 678 à 951 908
- Basculer 720,196 à 897,994
- Basculer 831,394 à 904,860

**Après avoir suivi les instructions, combien de lampes sont allumées ?**

### Deuxième partie

Vous venez de terminer la mise en place de votre grille lumineuse gagnante
lorsque vous vous rendez compte que vous avez mal traduit le message du Père
Noël en Elfique nordique ancien. La grille lumineuse que vous avez achetée est
en fait dotée de commandes de luminosité individuelles ; chaque lumière peut
avoir une luminosité de zéro ou plus. Les lumières commencent toutes à zéro.

- L'expression "allumer" signifie en fait que vous devez augmenter la luminosité de ces lumières de 1.
- L'expression "éteindre" signifie en fait que vous devez diminuer la luminosité de ces lumières de 1, jusqu'à un minimum de zéro.
- L'expression "basculer" signifie en fait que vous devez augmenter la luminosité de ces lumières de 2.

**Quelle est la luminosité totale de toutes les lumières après avoir suivi les instructions du Père Noël ?**

Exemple :

- "Allumer de 0,0 à 0,0" augmente la luminosité totale de 1.
- "Basculer de 0,0 à 999,999" augmente la luminosité totale de 2000000.
