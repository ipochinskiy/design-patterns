# Flyweight

The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.

Essentially Flyweight is an 'object normalization technique' in which common properties are factored out into shared flyweight objects. (Note: the idea is similar to data model normalization, a process in which the modeler attempts to minimize redundancy).

An example of the Flyweight Pattern is within the JavaScript engine itself which maintains a list of immutable strings that are shared across the application.

Other examples include characters and line-styles in a word processor, or 'digit receivers' in a public switched telephone network application. You will find flyweights mostly in utility type applications such as word processors, graphics programs, and network apps; they are less often used in data-driven business type applications.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-flyweight.jpg)

## Participants

The objects participating in this pattern are:

* Client -- in sample code: Computer
	* calls into FlyweightFactory to obtain flyweight objects
* FlyweightFactory -- in sample code: FlyweightFactory
	* creates and manages flyweight objects
	* if requested, and a flyweight does not exist, it will create one
	* stores newly created flyweights for future requests
* Flyweight -- in sample code: Flyweight
	* maintains intrinsic data to be shared across the application

In our example code we are building computers. Many models, makes, and processor combinations are common, so these characteristics are factored out and shared by Flyweight objects.

The FlyweightFactory maintains a pool of Flyweight objects. When requested for a Flyweight object the FlyweightFactory will check if one already exists; if not a new one will be created and stored for future reference. All subsequent requests for that same computer will return the stored Flyweight object.

Several different computers are added to a ComputerCollection. At the end we have a list of 7 Computer objects that share only 2 Flyweights. These are small savings, but with large datasets the memory savings can be significant.
