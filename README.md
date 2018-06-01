# ProStock Systems Client

 * [Prostock Systems Deployed Site](http://mmontoya.me/Prostock-Systems-Client/)


Pro[stock] Systems is a full-stack application that allows registered users to be able to keep track of their inventory of parts, specifially repair parts of any kind.

I made this application with the intent of helping my previous employer with their in-store inventory of repair parts. Keeping a record of specific parts will cut costs

![alt text](https://i.imgur.com/D0PbLl5.png)

---
## Technologies Used
  * HTML /Bootstrap
  * CSS/SASS
  * JavaScript
  * jQuery
  * Handlebars
  * Atom
  * Version Control: Github
  * Terminal
  * Google Chrome
---
## Installation
  1. Fork and clone this repository.
  2. Change into a new directory.
  3. `npm install` dependencies.
  4.  Go to [`README.md`](README.md) and review information.
---
## Pro[Stock] Systems API Links

* [ProStock Systems Github Repo](https://github.com/Matty-Montoya/ProStock-Systems-API)
* [ProStock Systems Heroku Link](https://prostock-systems.herokuapp.com/)
---
## Planning

  I knew that this was a project that I've wanted to create for quite some time. During my time at my previous job, there was not a system of keeping track of repair parts that were ordered from store to store basis. It was then that I knew I wanted to develop a site that would allow a user to keep track of their specific stores repair inventory, seperate from their actual product inventory.

  ### Wireframes, ERD & User Stories

  Attached are the initial Wireframes and Entity Relationship Diagram that I had invisioned for the project.

  #### Wireframe
  In this wireframe, you'll notice that I wanted to have a detailed landing page with information about the project/company, a jumbotron with a image, and a section with specifics of what the site entails.

  ![alt text](https://i.imgur.com/dyYbJ7R.jpg)


  #### ERD & User Stories
  Here you'll notice the entity relational diagram that showcases what I relationships between tables that I wanted to create. A user would have many collections of which would in turn have many parts. This would allow the user to keep track of parts based on their collections.

  ![alt text](https://i.imgur.com/hfaXv7S.jpg)

  ##### User Stories
  The user stories go as follows:

     1.As a user, I want to be able to browse a wide assortment of parts based on their collections.
     2.As a user, I want to be able to create a supply order for parts.
     3.As a user, I want to be able to edit my supply order with removing, adding, or changing quantities of parts.
     4.As a user, I want to be able to be able to delete a supply order.
     5.As a user, I want to be able to view past supply orders.
     6.As a user, I want to be able to reorder pre-exsisting supply orders.
     7.As a user, I want to be able to add comments to orders.
---

### Development Process

As I mentioned before, I knew that this was a project that I wanted to create for quite some time. Going into the project, we had the option to interact with a new framework, Ember, or continuing using a browser template to create the front end client. Since I ran across technical issue with Ember on my laptop, I decided to work with the browser template for the front end.

In regards to the backend API, I knew that the types of relations that I would be creating would work best with Ruby on Rails and as such I decided to use it. Rails would allow me to have `has_many` and `belongs_to` relations betweens the user and the other tables.

Going into the project, I knew that I wanted the Collection and Part tables to be ProtectedController as they would require authorization to index and show specific collections and parts. I originally wanted the tables to only allow routes for index and show; however, as I began developing I came across a rabbit hole that forced me to reconsider the path of the project. I came to the realization that if I seeded the information into the database, it would take a tremendous amount of time and would limit what I wanted the user to do.

As such, I decided to set this task aside as a later rendition of what this project would be and focus on creating `CRUD` actions on one resource `Parts` that the user would be able to create, read, update, and destroy an inventory of parts. This would in turn allow the user to have better control over their specific inventory.

This project was failry similar in design to [Jammate](https://github.com/Matty-Montoya/JamMate) and as such I took inspiration in regards to setting up the layout and desgin of the site with the assistance of handlebars. A user would be able to create a part and handlebars would load that information after making a successful AJAX request from the API.

Some issues that I ran across while working with this project were having the user only be able to speficially see only their posts. I felt as though creating this project was a great refresher working with Ruby on Rails, JavaScript, and jQuery.


---

### Unsolved Problems & Future Features

* An unsolved problem that I plan on getting to in the future is the relationship between collections and parts. This would allow the user to select a collection and be presented with all the parts pertaining to that collection.
* In the future, I want to incorporate `Toast` or `Toastr`. These are jQuery plugins that would allow for a better notification interface.
* CSS Styling.
* In the Inventory Controllers, I want all forms to be nested within this div seperated by tabs using bootstrap.
* When clicking on the update button, I want the form fields to have pre-exsisting data loaded into the input fields.
