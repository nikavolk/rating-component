# Rating component

Interactive rating component using HTML, SCSS, React.

# Live URL

https://nvstudio.si/rating-component/

# How it works

User chooses a rating from 1 to 5. Upon clicking on the submit button,
a thank you page renders, showing which rating was chosen.
If no rating was chosen, a "You have not selected a rating" is shown instead.

State persists between going back and forth between pages, resets upon refresh.

# What I've learned:

- basics of SASS (using variables and nesting)
- basics of useState
- basics of React Router (linking from one page to another)
- passing props through Router's Link
- using useLocation hook for rendering passed props in Link
- basics of GIT (commit, push, setting up SSL key) and Github
- using build to deploy the project to a web server

# Considerations

The CSS file seems like a mess. It would have been better to split
the styles pertaining to each component, decided against it due to
the small size of the project. Will implement this in a future project.

Coding challenge by frontendmentor.io
