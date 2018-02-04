# Visitor

The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves. The new logic resides in a separate object called the Visitor.

Visitors are useful when building extensibility in a library or framework. If the objects in your project provide a `visit` method that accepts a Visitor object which can make changes to the receiving object then you are providing an easy way for clients to implement future extensions.

In most programming languages the Visitor pattern requires that the original developer anticipates functional adjustments in the future. This is done by including methods that accept a Visitor and let it operate on the original collection of objects.

Visitor is not important to JavaScript because it offers far more flexibility by the ability to add and remove methods at runtime.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-visitor.jpg)

## Participants

The objects participating in this pattern are:

* ObjectStructure -- in sample code: employees array
	* maintains a collection of Elements which can be iterated over
* Elements -- in sample code: Employee objects
	* defines an `accept` method that accepts visitor objects
	* in the `accept` method the visitor's visit method is invoked with 'this' as a parameter
* Visitor -- in sample code: ExtraSalary, ExtraVacation
	* implements a visit method. The argument is the Element being visited. This is where the Element's changes are made

In this example three employees are created with the Employee constructor function. Each is getting a 10% salary raise and 2 more vacation days. Two visitor objects, ExtraSalary and ExtraVacation, make the necessary changes to the employee objects.

Note that the visitors, in their visit methods, access the closure variables salary and vacation through a public interface. It is the only way because closures are not accessible from the outside. In fact, salary and vacation are not variables, they are function arguments, but it works because they are also part of the closure.

Notice the self variable. It is used to maintain the current context (stored as a closure variable) and is used in the visit method.
