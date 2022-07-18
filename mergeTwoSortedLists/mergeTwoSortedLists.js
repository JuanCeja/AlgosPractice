// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// ===============================================================================

let list1 = [1,2,4];
let list2 = [1,3,4];

let list3 = [];
let list4 = [];

let list5 = [];
let list6 = [0];

var mergeTwoLists = function(list1, list2) {
    let outputArray = [];

    if (list1.length === 0 && list2.length === 0) return null;
    if(list1.length === 0){
        outputArray = list2;
    }
    if(list2.length === 0){
        outputArray = list1;
    }

    for (let i = 0; i < list1.length; i++){
        if(list1[i] === list2[i]){
            outputArray.push(list1[i]);
            outputArray.push(list2[i]);
        }
        if(list1[i] < list2[i]){
            outputArray.push(list1[i]);
            outputArray.push(list2[i]);
        }
    }
    return outputArray;
};

console.log(mergeTwoLists(list1, list2));
// Output: [1,1,2,3,4,4]

console.log(mergeTwoLists(list3, list4));
// Output: []

console.log(mergeTwoLists(list5, list6));
// Output: [0]