# Prototype

The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object. The Prototype pattern is also referred to as the Properties pattern.

An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object.

Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-prototype.jpg)

# Participants

The objects participating in this pattern are:

* Client -- in sample code: the run() function.
	* creates a new object by asking a prototype to clone itself
* Prototype -- in sample code: CustomerPrototype
	* creates an interfaces to clone itself
* Clones -- in sample code: Customer
	* the cloned objects that are being created
