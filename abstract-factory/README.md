# Abstract Factory

An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

Suppose we have two Abstract Factories whose task it is to create page controls, such as, buttons, textboxes, radio buttons, and listboxes. One is the Light Factory which creates controls that are white and the other the Dark Factory which creates controls that are black. Both Factories creates the same types of controls, but they differ in color, which is their common theme. This is an implementation of the Abstract Factory pattern.

Over time the Abstract Factory and Factory Method patterns have merged into a more general pattern called Factory. A Factory is simply an object that creates other objects.

You may be wondering why you would want to leave the responsibility of the construction of objects to others rather than simply calling a constructor function with the new keyword directly. The reason is that that constructor functions are limited in their control over the overall creation process and sometimes you will need to hand over control to a factory that has broader knowledge.

This includes scenarios in which the creation process involves object caching, sharing or re-using of objects, complex logic, or applications that maintain object and type counts, and objects that interact with different resources or devices. If your application needs more control over the object creation process, consider using a Factory.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-abstract-factory.jpg)

## Participants

The objects participating in this pattern are: 

* AbstractFactory -- declares an interface for creating products
* ConcreteFactory -- a factory object that 'manufactures' new products (in sample code: EmployeeFactory, VendorFactory)
* Products -- the product instances being created by the factory (in sample code: Employee, Vendor)
* AbstractProduct -- declares an interface for the products that are being created
