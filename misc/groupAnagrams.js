var groupAnagrams = function (strs) {
  const mp = new Map();

  for (const s of strs) {
    const sortedStr = s.split("").sort().join("");

    if (!mp.has(sortedStr)) {
      mp.set(sortedStr, []);
    }

    mp.get(sortedStr).push(s);
    console.log(mp.get(sortedStr));
  }
  const anagrams = [...mp.values()];
  console.log(anagrams);

  return anagrams;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);
