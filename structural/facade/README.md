# Facade

The Facade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

The intent of the Facade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

On the server, in a multi-layer web application you frequently have a presentation layer which is a client to a service layer. Communication between these two layers takes place via a well-defined API. This API, or facade, hides the complexities of the business objects and their interactions from the presentation layer.

Another area where Facades are used is in refactoring. Suppose you have a confusing or messy set of legacy objects that the client should not be concerned about. You can hide this code behind a Facade. The Facade exposes only what is necessary and presents a cleaner and easy-to-use interface.

Facades are frequently combined with other design patterns. Facades themselves are often implemented as singleton factories.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-facade.jpg)

## Participants

The objects participating in this pattern are:

* Facade -- in sample code: Mortgage
	* knows which subsystems are responsible for a request
	* delegates client requests to appropriate subsystem objects
* Sub Systems -- in sample code: Bank, Credit, Background
	* implements and performs specialized subsystem functionality
	* have no knowledge of or reference to the facade

The Mortgage object is the Facade in the sample code. It presents a simple interface to the client with only a single method: *applyFor*. Eut underneath this simple API lies considerable complexity.

The applicant's name is passed into the Mortgage constructor function. Then the *applyFor* method is called with the requested loan amount. Internally, this method uses services from 3 separate subsystems that are complex and possibly take some time to process; they are Bank, Credit, and Background.

Based on several criteria (bank statements, credit reports, and criminal background) the applicant is either accepted or denied for the requested loan.
