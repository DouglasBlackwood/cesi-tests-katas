# Kata Anagram Checker

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

Écrire une fonction qui détermine si deux chaînes de caractères sont des
**anagrammes** (c'est-à-dire qu'elles contiennent exactement les mêmes lettres,
avec la même fréquence, mais potentiellement dans un ordre différent).  

### Règles

1. La comparaison ne doit pas tenir compte de la casse.  
2. Les espaces, la ponctuation et les caractères spéciaux doivent être ignorés.  
3. La fonction doit retourner `true` si les chaînes sont des anagrammes, sinon `false`.  

### Exemples

- `"listen", "silent"` → `true`  
- `"anagram", "nagaram"` → `true`  
- `"Hello", "Olelh"` → `true`  
- `"rat", "car"` → `false`  
- `"A gentleman", "Elegant man"` → `true`  
