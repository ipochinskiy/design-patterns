# Iterator

The Iterator pattern allows clients to effectively loop over a collection of objects

A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized iterator.

Today, many languages have Iterators built-in by supporting 'for-each'-type constructs and IEnumerable and IEnumerator interfaces.

The Iterator pattern allows JavaScript developers to design looping constructs that are far more flexible and sophisticated.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-iterator.jpg)

## Participants

The objects participating in this pattern are:

* Client -- in sample code: the run() function
	* references and invokes Iterator with collection of objects
* Iterator -- in sample code: Iterator
	* implements iterator interface with methods `first()`, `next()`, etc
	* keeps track of current position when traversing collection
* Items -- in sample code: Items
	* individual objects of the collection being traversed

The Iterator object maintains a reference to the collection and the current position. It also implements the 'standard' Iterator interface with methods like: `first`, `next`, `hasNext`, `reset`, and `each`.

Two looping methods are used: a built-in for loop and a newly created `each` method. The for loop uses the `first`, `hasNext`, and `next` methods to control the iteration. The `each` method does internally exactly the same (i.e. runs a for loop), but to the client the syntax has been greatly simplified.
