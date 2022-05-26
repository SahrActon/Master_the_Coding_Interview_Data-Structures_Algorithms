/** There are two types of array
 * 1. Dynamic array's -
 *  - The can grow as the number of inputs grow
 *
 * 2. Static array's -
 *  - They are fixed in size
 *
 *  Which one is better
 *   Dynamic arrays allows you to have an array that grows in size
 *   but if you care about memory then you can use static sttays
 * */

const string = ['a', 'b', 'c', 'd', 'e']

string.push('e') // this is normally O(1) - But can be O(1)

// This can be O(n) because we might need to copy the array to a new /different memory allocation.
// and because of this copying process it means that we have to copy all the elements one by one