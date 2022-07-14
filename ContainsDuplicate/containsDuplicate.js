var nums = [1, 2, 3, 1];
var nums1 = [1, 2, 3, 4];
var nums2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
    var numbers = {};

    for (var i = 0; i < nums.length; i++) {

        let aNum = nums[i];

        if (numbers[aNum]) {
            return true;
        } else {
            numbers[aNum] = true;
        }
    }
    return false;
};

console.log(containsDuplicate(nums));
// Output: true

console.log(containsDuplicate(nums1));
// Output: false

console.log(containsDuplicate(nums2));
// Output: true