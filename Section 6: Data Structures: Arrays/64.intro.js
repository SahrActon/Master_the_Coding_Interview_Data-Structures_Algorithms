const string = ['a', 'b', 'c', 'd']
console.log(string + '\n')

// accessing the array
/** The time complexity is - O(1)
 *  because all of the elements are indexed **/
console.log(string[1] + '\n')

// Push - This will add an item at the last index of the array
/** The time complexity is - O(1)
 *  because we are just adding at the end of the array **/
string.push('e')
console.log(string + '\n')

//Pop - This will remove the last item from the array
/** The time complexity is - O(1)**/
string.pop();
string.pop();
console.log(string + '\n');

// This will add x at the beginning of our array
/** The time complexity is - O(n)
 *    0    1    2     3
 *  ['a', 'b', 'c', 'd']
 *
 *  to this
 *     0   1    2     3    4
 *  ['x', 'a', 'b', 'c', 'd']
 *
 *  because we are shifting all of our numbers up by 1 after adding the "x"- Our time complexity is O(n)
 * **/

string.unshift('x')
console.log(string + '\n');


// adding data in the middle of the array
/** The time complexity is - O(n)
 * The worst case will be 0(n) operation because we can splice at the end
 * **/
string.splice(2, 0, "thomas")
console.log(string + '\n');