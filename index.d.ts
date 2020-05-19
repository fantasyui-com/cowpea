declare module 'cowpea' {
  export function rhyme(input: string): Promise<string[]>;
  export function synonym(input: string): Promise<string[]>;
  export function find(word1: string, word2: string): Promise<{ word: string[]; swap: string[]; description: string; }[]>;
}
