# Adapter

The Adapter pattern translates one interface (an object's properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.

One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.

Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-adapter.jpg)

## Participants

The objects participating in this pattern are:

* Client -- in sample code: the run() function.
	* calls into Adapter to request a service
* Adapter -- in sample code: ShippingAdapter
	* implements the interface that the client expects or knows
* Adaptee -- in sample code: AdvancedShipping
	* the object being adapted
	* has a different interface from what the client expects or knows
