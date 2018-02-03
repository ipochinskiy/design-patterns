# Memento

The Memento pattern provides temporary storage as well as restoration of an object. The mechanism in which you store the object’s state depends on the required duration of persistence, which may vary.

You could view a database as an implementation of the Memento design pattern in which objects are persisted and restored. However, the most common reason for using this pattern is to capture a snapshot of an object’s state so that any subsequent changes can be undone easily if necessary.

Essentially, a Memento is a small repository that stores an object’s state. Scenarios in which you may want to restore an object into a state that existed previously include: saving and restoring the state of a player in a computer game or the implementation of an undo operation in a database.

In JavaScript Mementos are easily implemented by serializing and de-serializing objects with JSON.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-memento.jpg)

## Participants
The objects participating in this pattern are:

* Originator -- in sample code: Person
	* implements interface to create and restore mementos of itself (hydrate and dehydrate)
	* the object which state is temporary being saved and restored
* Memento -- in sample code: JSON representation of Person
	* internal state of the Originator object in some storage format
* CareTaker -- in sample code: CareTaker
	* responsible for storing mementos
	* just a repository; does not make changes to mementos

The sample code creates two persons named Mike and John are created using the Person constructor function. Next, their mementos are created which are maintained by the CareTaker object.

We assign Mike and John bogus names before restoring them from their mementos. Following the restoration we confirm that the person objects are back to their original state with valid names.

The Memento pattern itself with CareTaker etc. is rarely used in JavaScript. However, JSON is a highly effective data format that is extremely useful in many different data exchange scenarios.
