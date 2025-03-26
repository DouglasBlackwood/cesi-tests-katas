# Kata String Calculator

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

Écrire une fonction `add` qui prend en entrée une chaîne de caractères contenant
des nombres séparés par des virgules et retourne leur somme.  

### Règles

1. Une chaîne vide retourne `0`.  
2. Une seule valeur retourne cette valeur sous forme de nombre.  
3. Deux nombres séparés par une virgule sont additionnés.  
4. La fonction doit supporter un nombre quelconque de nombres en entrée.  
5. La fonction doit supporter les sauts de ligne comme séparateurs en plus de la virgule.  
6. Un délimiteur personnalisé peut être spécifié en début de chaîne sous la forme `//[délimiteur]\n[nombres]`.  
7. Les nombres négatifs ne sont pas autorisés et doivent lever une exception.  

### Exemples

- `""` → `0`  
- `"1"` → `1`  
- `"1,2"` → `3`  
- `"1,2,3,4"` → `10`  
- `"1\n2,3"` → `6`  
- `"//;\n1;2"` → `3`  
- `"//|\n1|2|3"` → `6`  
- `"-1,2"` → **Exception : nombres négatifs interdits**  
