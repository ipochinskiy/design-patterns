# Composite

The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

A tree control is a perfect example of a Composite pattern. The nodes of the tree either contain an individual object (leaf node) or a group of objects (a subtree of nodes).

All nodes in the Composite pattern share a common set of properties and methods which supports individual objects as well as object collections. This common interface greatly facilitates the design and construction of recursive algorithms that iterate over each object in the Composite collection.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-composite.jpg)

## Participants

The objects participating in this pattern are:

* Component -- in sample code: Node
	* declares the interface for objects in the composition
* Leaf -- in sample code: Node
	* represents leaf objects in the composition. A leaf has no children
* Composite -- in sample code: Node
	* represents branches (or subtrees) in the composition
	* maintains a collection of child components

In our example a tree structure is created from Node objects. Each node has a name and 4 methods: *add*, *remove*, *getChild*, and *hasChildren*. Node is fully recursive and there is no need for separate Component or Leaf objects.

A small Composite tree is built by adding nodes to parent nodes. Once complete we invoke traverse which iterates over each node in the tree and displays its name and depth (by showing indentation).

The log function is a helper which collects and displays results.