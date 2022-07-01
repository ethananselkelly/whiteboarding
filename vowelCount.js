function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelCount = str.split('').filter(char => vowels.includes(char)).length
  return vowelCount;
}