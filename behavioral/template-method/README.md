# Template Method

The Template Method pattern provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps. This pattern is designed to offer extensibility to the client developer.

Template Methods are frequently used in general purpose frameworks or libraries that will be used by other developer. An example is an object that fires a sequence of events in response to an action, for example a process request. The object generates a 'preprocess' event, a 'process' event and a 'postprocess' event. The developer has the option to adjust the response to immediately before the processing, during the processing and immediately after the processing.

An easy way to think of Template Method is that of an algorithm with holes. It is up to the developer to fill these holes with appropriate functionality for each step.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-template-method.jpg)

## Participants

The objects participating in this pattern are:

* AbstractClass -- in sample code: datastore
	* offers an interface for clients to invoke the templateMethod
	* implements template method which defines the primitive Steps for an algorithm
	* provides the hooks (through method overriding) for a client developer to implement the Steps
* ConcreteClass -- in sample code: mySql
	* implements the primitive Steps as defined in AbstractClass

This is an example where we use JavaScript's prototypal inheritance. The inherit function helps us establish the inheritance relationship by assigning a base object to the prototype of a newly created descendant object.

The datastore function represents the AbstractClass and mySql represents the ConcreteClass. mySql overrides the 3 template methods: connect, select, and disconnect with datastore-specific implementations.

The template methods allow the client to change datastore (SQL Server, Oracle, etc.) by adjusting (filling in the blanks) only the template methods. The rest, such as, the order of the steps, stays the same for any datastore.
