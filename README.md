# cowpea
Find synonyms that rhyme, a tool for poets.

## Installation

```sh
npm i cowpea;

```

## Usage

```JavaScript
import cowpea from 'cowpea';
await cowpea.find('frozen', 'aged');
```

```JSON
[
  {
    "word": [
      "frozen",
      "aged"
    ],
    "swap": [
      "cold",
      "old"
    ],
    "description": "frozen/aged: Instead of frozen use cold, instead of aged use old. Then rhyme cold with old."
  }
]
```
