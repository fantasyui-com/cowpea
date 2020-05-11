import rhymes from 'rhyme';
import thesaurus from 'thesaurus';
import rhymingPart from 'rhyming-part';


async function rhyme(input) {
  return new Promise(function(resolve, reject) {
    rhymes(function(r) {
      resolve(r.rhyme(input));
    });
  })
}

async function synonym(input) {
  return new Promise(function(resolve, reject) {
    resolve(thesaurus.find(input));
  })
}


async function find(word1, word2) {
  let peas = [];
  const synonyms1 = await synonym(word1);
  const synonyms2 = await synonym(word2);

  for (let synonym1 of synonyms1) {
    let part1 = rhymingPart(synonym1);

    for (let synonym2 of synonyms2) {
      if (synonym1 != synonym2) {
        let part2 = rhymingPart(synonym2);
        if (part1 == part2) {
          peas.push({
            word: [word1, word2],
            swap: [synonym1, synonym2],
            description: `${word1}/${word2}: Instead of ${word1} use ${synonym1}, instead of ${word2} use ${synonym2}. Then rhyme ${synonym1} with ${synonym2}.`
          });
        }
      }
    }
  }
  return peas;
}

export default {
  rhyme,
  synonym,
  find
};
