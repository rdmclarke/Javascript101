/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

/*this sounds like it needs a for loop. We test each number using modulas testting upto 1000. where the multiple has no remainder we need to store this in a seperate variable.*/

var multipleThreeFive = function(n) {

    var totalCount = 0;
    
    for (var i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
        	totalCount += i;
        }
    }
/* The return needs to be placed outside the for loop. It is not part of the loop. If it is placed inside it just returns 0.*/
    return totalCount;
};

multipleThreeFive(1000);


/*WHATEVER YOU DO DO NOT PUT THE SEMI COLON AFTER THE IF STATEMENT! THIS ALMOST DOUBLES THE ANSWER*/
