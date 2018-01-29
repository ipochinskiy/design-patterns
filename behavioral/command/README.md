# Command

The Command pattern encapsulates actions as objects. Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request. These requests are called events and the code that processes the requests are called event handlers.

Suppose you are building an application that supports the Cut, Copy, and Paste clipboard actions. These actions can be triggered in different ways throughout the app: by a menu system, a context menu (e.g. by right clicking on a textbox), or by a keyboard shortcut.

Command objects allow you to centralize the processing of these actions, one for each operation. So, you need only one Command for processing all Cut requests, one for all Copy requests, and one for all Paste requests.

Because commands centralize all processing, they are also frequently involved in handling Undo functionality for the entire application.

![](http://www.dofactory.com/images/diagrams/javascript/javascript-command.jpg)

## Participants

The objects participating in this pattern are:
* Client -- in sample code: the run() function
	* references the Receiver object
* Receiver -- in sample code: Calculator
	* knows how to carry out the operation associated with the command
	* (optionally) maintains a history of executed commands
* Command -- in sample code: Command
	* maintains information about the action to be taken
* Invoker -- in our sample code: the user pushing the buttons
	* asks to carry out the request

In our example we have a calculator with 4 basic operations: add, subtract, multiply and divide. Each operation is encapsulated by a Command object.

The Calculator maintains a stack of commands. Each new command is executed and pushed onto the stack. When an undo request arrives, it simply pops the last command from the stack and executes the reverse action.

JavaScript's function objects (and callbacks) are native command objects. They can be passed around like objects; in fact, they are true objects.
