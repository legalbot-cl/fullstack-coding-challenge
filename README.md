# Legalbot coding challenge

## About

The mission, should you choose to accept it, is to build a Fullstack authentication app (frontend + backend). Users of this app should be able to create an account (register), login with its credentials, and navigate to a Home blank page.

## Minimal Requirements

### Build a frontend using Angular2+ or React with:

1. A "Create an account" page with a form asking the user to provide: 
- - Name: required, at least three characters long
- - Lastname: optional
- - Gender: required
- - Email: required, should be a valid email string
- - Password. required, should contain at least one special character (ie: $%&...) and be at least eight characters long

Logged users should not be able to access this "Create an account" page.

2. A "Login" page to login the user with Email and Password. Logged users should not be able to access the "Login" page

3. A "Home" page for logged users. This Home page could be a page with just a "Logout" button to logout. None Logged user should not be able to access this "Home" page

### Build a backend on NodeJS or Python with

1. An API with necessary endpoints to provide services to the frontend (Create an account, Register a user)

## Extra Mile

1. Bundle everything on a docker-compose file
2. Write unit test for at least one component/page (Login, Register, Home)


