/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

if number is divisible by 2 (store the divider) divide it, take divided number, is this divisable by 2?

if not divide by 3, 4, 5, etc.*/


var primeFactor = function(n) {

	
	var primeFactors = [];

	for (var d = 2; d <= 10000; d++) {
		if (n%d===0) {
			n /= d;
			primeFactors.push(d);
		}
	}
	return primeFactors;
};

primeFactor(600851475143);

/*best way of doing this below!

const long numm = 600851475143;
long newnumm = numm;
long largestFact = 0;
 
int counter = 2;
while (counter * counter <= newnumm) {
    if (newnumm % counter == 0) {
        newnumm = newnumm / counter;
        largestFact = counter;
    } else {
        counter++;
    }
}
if (newnumm > largestFact) { // the remainder is a prime number
    largestFact = newnumm;
}*/