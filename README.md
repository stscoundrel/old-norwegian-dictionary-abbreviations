# Old Norwegian Dictionary Abbreviations

Map abbreviations to full length words from "The Old Norwegian Language Dictionary".

The printed dictionary is full of abbreviations meant to save space in print. While working with online versions of the same source material, there is little use for these abbreviations. This library helps you map them back to their full length equilevants.

Related projects:
- [Old Norwegian Dictionary (Node.js)](https://github.com/stscoundrel/old-norwegian-dictionary).
- [Old Norwegian Dictionary Builder](https://github.com/stscoundrel/old-norwegian-dictionary-builder).

### Install

`yarn add old-norwegian-dictionary-abbreviations`

##### Usage

Find abbreviations from text content:

```javascript
import { findAbbreviations }  from 'old-norwegian-dictionary-abbreviations'

// Example definition from the dictionary.
const content = 'leyndarkofi, m. d. s., = leynikofi, leyniligrkofi, leyndr kofi. Bp. I, 25323; Mar.14811 jvf 37.';

// Returns map of abbreviations to meanings.
const result = findAbbreviations(content);

console.log(result);
// 'm.' => 'Masculin.',
// 'p.' => 'Pagina, side.',
// 's.' => 'substantiv.'

```

### Possible mistakes in abbreviations

These abbreviations were deciphered by hand from scans of the books from the 1800s. So there is plenty of room for mistakes. If you're aware of any, please raise an issue.

Different editions of the book also come with different lists of abbreviations, so likewise feel free to suggest any missing ones.

### About "Dictionary of the Old Norwegian Language"

_"Ordbog over det gamle norske Sprog"_ dictionary was published in late 1800s by Johan Fritzner. Its is the largest Old Norse to Norwegian dictionary, containing over 40 000 word definitions.
