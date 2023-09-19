var permute = function (nums) {
  const list = [];
  backtrack(list, [], nums);
  return list;
};

function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
}
