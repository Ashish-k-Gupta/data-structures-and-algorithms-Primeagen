/* Arrays are contingous (unbreaking) memory space.
 you can defined the size of that memory you want. 
 Later you can also defined the size of each element which 
 can be stored those slots.

    Insertion: If you try to insert an element into a fixed-size array that is already full, you will typically overwrite an existing value. If you try to insert an element into the middle of a fixed-size array, you have to shift every element that comes after it to the right to make space. This shifting is a very slow and inefficient operation.

    Deletion: You are correct that you don't actually "delete" something from memory in the same way you might delete a file. Also deletion is also basically insertion When you delete an element from an array, one of two things typically happens:

    Logical Deletion: You set the value to 0, null, or some other placeholder, but the space it occupied still exists. The size of the array remains unchanged.

    Physical Deletion: All the elements that came after the deleted item are shifted to the left to fill the gap. This also takes time and processing power. The total size of the raw memory space often remains the same even after this shifting.

This is the key trade-off with arrays: they offer extremely fast read and write access to any element, but they are very slow for insertions and deletions because of the need to shift elements to maintain their contiguous structure.
*/


let age = [17, 18,19, 20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,37.2, 38];
let c = age.indexOf(69)
console.log(c);