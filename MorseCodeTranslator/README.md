# Kata Morse Code Translator

## Installation

```bash
npm install
```

## Exécuter les tests

```bash
npm test
```

## Énoncé

Écrire une fonction capable de traduire un texte en **code Morse** et inversement.  

### Règles

1. Chaque lettre est traduite en code Morse selon l'alphabet Morse international.  
2. Les mots sont séparés par un slash et les lettres par un espace.  
3. La fonction doit pouvoir traduire du texte vers le Morse et du Morse vers le texte.  
4. La casse des lettres doit être ignorée.  
5. Les caractères non pris en charge doivent être ignorés.  

### Exemples

- `SOS` → `... --- ...`  
- `Hello World` → `.... . .-.. .-.. --- / .-- --- .-. .-.. -..`  
- `.... . .-.. .-.. ---` → `HELLO`  
- `.-- --- .-. .-.. -..` → `WORLD`  
