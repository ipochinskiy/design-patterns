## Bridge

The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).

The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-bridge.jpg)

## Participants

The objects participating in this pattern are:

* Client -- in sample code: the run() function.
	* calls into Abstraction to request an operation
* Abstraction
	** declares an interface for first level abstraction
	** maintains a reference to the Implementor
* RefinedAbstraction -- in sample code: Gestures, Mouse
	** implements and extends the interface defined by Abstraction
	** Implementor
	** declares an interface for second level or implementor abstraction
* ConcreteImplementor -- in sample code: Screen, Audio
	** implements the Implementor interface and defines its effects
