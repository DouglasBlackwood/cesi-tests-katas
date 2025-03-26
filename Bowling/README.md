# Kata Bowling

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

Écrire une fonction qui calcule le **score d'une partie de bowling** à partir
d'une séquence de lancers.

### Règles

1. Une partie se compose de **10 frames**.  
2. Chaque frame contient jusqu'à **deux lancers**, sauf la dernière qui peut en
   contenir trois en cas de strike ou spare.  
3. Un **strike** (`X`) signifie qu'un joueur fait tomber les **10 quilles** en
   un seul lancer. Son score inclut **les 2 lancers suivants**.  
4. Un **spare** (`/`) signifie que le joueur fait tomber **10 quilles en deux
   lancers**. Son score inclut **le lancer suivant**.  
5. Une **frame normale** est la somme des quilles tombées en deux lancers.  
6. Les scores sont cumulés au fil des frames.  

### Exemples

- `"X X X X X X X X X X X X"` → `300` (partie parfaite)  
- `"9- 9- 9- 9- 9- 9- 9- 9- 9- 9-"` → `90`  
- `"5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5"` → `150`  
- `"X 7/ 9- X -8 8/ -6 X X X81"` → `167`  
