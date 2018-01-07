# Factory Method

A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common. An example would be a collection of documents with a mix of Xml documents, Pdf documents, and Rtf documents.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-factory-method.jpg)

# Participants

The objects participating in this pattern are: 

* Creator -- in sample code: Factory
	* the 'factory' object that creates new products
	* implements 'factoryMethod' which returns newly created products
* AbstractProduct -- in samle code: Employee
	* declares an interface for products
* ConcreteProduct -- in sample code: FullTime, PartTime, Temporary, Contractor
	* the product being created
	* all products support the same interface (properties and methods)
