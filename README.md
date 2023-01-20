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

## Deployment
The blog site is deployed on Heroku via the URL ..................

## Contributors
Seema Bibi, Winnie Thomas, Adiba Sajid, Oskar Zaorski, Keesha Murray.



# License
MIT License

Copyright (c) 2023 Keesha Murray

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

