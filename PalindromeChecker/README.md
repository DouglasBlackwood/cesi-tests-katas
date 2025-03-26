# Kata Palindrome Checker

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

Écrire une fonction qui détermine si une chaîne de caractères est un
**palindrome** (se lit de la même façon dans les deux sens, en ignorant la casse
et la ponctuation).  

### Règles

1. Une chaîne vide ou d’un seul caractère est considérée comme un palindrome.  
2. La comparaison ne doit pas tenir compte de la casse.  
3. Les espaces, la ponctuation et les caractères spéciaux doivent être ignorés.  
4. La fonction doit retourner `true` si la chaîne est un palindrome, sinon `false`.  

### Exemples

- `"racecar"` → `true`  
- `"RaceCar"` → `true`  
- `"A man, a plan, a canal: Panama"` → `true`  
- `"hello"` → `false`  
- `"No 'x' in Nixon"` → `true`  
