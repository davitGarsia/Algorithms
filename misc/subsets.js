var subsets = function (nums) {
  const arr = [];
  nums.sort((a, b) => a - b);
  backtrack(arr, [], nums, 0);
  return arr;

  function backtrack(arr, tempArr, nums, start) {
    arr.push([...tempArr]);
    for (let i = start; i < nums.length; i++) {
      tempArr.push(nums[i]);
      backtrack(arr, tempArr, nums, i + 1);
      tempArr.pop();
    }
  }
};
