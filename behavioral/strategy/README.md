# Strategy

The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

Say we like to test the performance of different sorting algorithms to an array of numbers: shell sort, heap sort, bubble sort, quicksort, etc. Applying the Strategy pattern to these algorithms allows the test program to loop through all algorithms, simply by changing them at runtime and test each of these against the array. For Strategy to work all method signatures must be the same so that they can vary without the client program knowing about it.

In JavaScript the Strategy pattern is widely used as a plug-in mechanism when building extensible frameworks. This can be a very effective approach.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-strategy.jpg)

## Participants

The objects participating in this pattern are:

* Context -- in sample code: Shipping
	* maintains a reference to the current Strategy object
	* supports interface to allow clients to request Strategy calculations
	* allows clients to change Strategy
* Strategy -- in sample code: UPS, USPS, Fedex
	* implements the algorithm using the Strategy interface

In this example we have a product order that needs to be shipped from a warehouse to a customer. Different shipping companies are evaluated to determine the best price. This can be useful with shopping carts where customers select their shipping preferences and the selected Strategy returns the estimated cost.

Shipping is the Context and the 3 shipping companies UPS, USPS, and Fedex are the Strategies. The shipping companies (strategies) are changed 3 times and each time we calculate the cost of shipping. In a real-world scenario the calculate methods may call into the shipper's Web service. At the end we display the different costs.
