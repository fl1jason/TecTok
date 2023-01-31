# TecTok
## Description
TecTok is a blog site where users can read and post concise blogs about new developments in the tech world.

For this project, we collaborated as a group to build a full-stack app using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.

## User Story

* As a user, I want to be able to access short, up-to-date blog posts.

* As a user, I want to see a list of blog posts when I log in to the blog site.

* As a registered user, I want to be able to write and delete my own posts.


## Functionality

* The `/` homepage route renders a list of blogposts on the site.

* The `/project/:id` route renders an individual blog's details based on the route parameter id.

* The `/login` route renders a form to log in and a form to create a new account.

* An existing user can enter their credentials on the login page to create a session on the server.

* A new user can create an account on the login page and then be immediately logged in with a session.

* The `/profile` route renders the logged-in user's blogs and a form to create a new blog.

* Only a logged in user can visit the `/profile` route.

* A logged in user is redirected to `/profile` when they try to visit `/login` again.

* A user on the profile page can use the form to create a new blog in the database.

* A user on the profile page can select a "Delete" button to remove their blog from the database.

* A logged-in user can select a "Logout" button to remove their session.

* The session for a logged-in user expires after a set time.

* The API routes to create and delete posts are protected from non logged-in users.

* The code is organized using MVC architecture.

* The views are rendered with Handlebars.js templates.

<img width="1440" alt="Screenshot 2023-01-24 4" src="https://user-images.githubusercontent.com/113778804/215885799-214766d9-147b-43a5-a03f-ce8e0c710418.png">
<img width="1440" alt="Screenshot 2023-01-24  3 (1)" src="https://user-images.githubusercontent.com/113778804/215885960-0b012823-e083-42ff-b29b-6dadc28a3f48.png">
<img width="1440" alt="TekTok screenshot2" src="https://user-images.githubusercontent.com/113778804/215886122-875a6708-c67d-48be-9226-c0527e50dca8.png">
<img width="1440" alt="TekTok screenshot1" src="https://user-images.githubusercontent.com/113778804/215886221-2d285fbc-203d-4f63-98ab-84d601f0420a.png">


## Deployment
The blog site is deployed on Heroku via the URL ..................

## Contributors
Seema Bibi, Winnie Thomas, Adiba Sajid, Oskar Zaorski, Keesha Murray.
