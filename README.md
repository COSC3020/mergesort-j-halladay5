[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The time complexity for checking to see if the list size is less than 1 is constant time; Then it will go into two for loops. The first for loop determines the sizes of the subarrays to be merged. Each time
the size will be multiplied by 2 until it reaches n, so the number of iterations is $\log n$, where n is the input size. The inner for loop will add the size to itself until it reaches n, so it will iterate n/2 
times. Inside the inner for loop is where we will call the mSort function and initialize variables to pass to the function. The variable values will take constant time. The mSort function will initialize our index
positions, taking constant time, and then entering a while loop. Inside we will compare our first values of each subarray and determine. If it's in the correct place, then it will increase the index. If not, all 
previous values in the array until min1 will shift over one, and the value is now inserted where min1(the value it was compared to ) was. This will happen until either the first index reaches the middle of the
two subarrays, or the last index reaches the end. In each case, the starting index increases by one until it reaches the middle, so the while loop will iterate at maximum, 1/2 n times. With this in mind, each time
the mSort function is called, the while loop will run n/2 times, and the mSort function will be called n/2 times. 

All together the time complexity of this implementation is $\ ( \frac{n}{2} \cdot \frac{n}{2} \cdot log n ) = ( \frac{n^2}{4} \cdot log n ) \in \Theta(n^2 log n) $.

Sources used for inplace merging: https://www.youtube.com/watch?v=xleF7ykgcHY
