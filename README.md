# Dominion card-search app

## Overview

### What is this app for?
This app/website is a new resource for players of the popular [Dominion](https://boardgamegeek.com/boardgame/36218/dominion) card game, designed by Donald X Vaccarino and published by [Rio Grande Games](http://riograndegames.com/). The site's main feature is a searchable database of all cards in all Dominion expansions - including both editions of the base set and of Intrigue, and all promos. Users can search the complete card database (386 cards when I started the project, now 463 due to the recent release of the [Nocturne](https://boardgamegeek.com/boardgame/232452/dominion-nocturne) expansion whose cards I added as soon as they were made public) by cost, type(s), set, card name and card text. So if you want to know at a glance which cards cost less than 4 and refer to trashing, or which Prosperity cards explicitly interact with Treasure cards - or even just how many cards have "Village" in the name - you will be able to find these answers, and many more, within seconds.

The search results are shown as images of each card (I have obtained explicit permission from the publisher to use these images, via a private message on BoardGameGeek, for which I am very grateful), from which users can click through to a full page about each card. This page shows the card image, name,  its details in tabular form, a few brief lines of my own thoughts regarding the general uses of that card (missing for most cards at the time of writing) - and a link to the appropriate article on the [Dominion Strategy Wiki](http://wiki.dominionstrategy.com/index.php/Main_Page). The information given for each card includes links to any other cards which are mentioned, and popovers which can be clicked on to give definitions of common terms.

In addition to the card search page, there is a homepage giving a quick summary of the game and explaining the site's main features, a links page for other Dominion resources on the web, and a contact form. The latter is "fake", as nothing happens to any comments which are submitted - but the form does use client-side validation to flag to the user any errors they have made, both before and after submitting.

The site aims to be fully responsive, with user-friendly layouts on all screen sizes.

I have attempted to make copious comments on my code, so that it is easy to see what I was trying to achieve at each stage.

This app will serve as my submitted project for Stream 1 (Front End Development) of the [Code Institute's](https://www.codeinstitute.net/) Full Stack developer course.

## 3rd party code used

All code used in this project is my own, with the following exceptions:

- [AngularJS](https://angularjs.org/)
    - **AngularJS** has been used as the framework for this application. The 2-way databinding provided by Angular is what allows the search page to function, with much use of the `ng-model` directive to update the cards which will be shown when an "update search" button is next clicked. (When I first deployed the project it used the "full power" of Angular by having the search results display update with every single click and keypress - but I soon realised that this was unhelpful in most cases, and particularly frustrating when deleting text from one of the text search boxes in order to use a different search term.) Angular also allows a single html template to be used for all 386 pages referring to individual cards.

    A number of other non-core Angular packages have been used:
      
    - [Angular Route](https://github.com/angular/bower-angular-route) has been used to handle page routing.

    - [Angular Sanitize](https://github.com/angular/bower-angular-sanitize) is necessary for allowing html markup to be accessed and rendered correctly from Angular's databinding, as happens on the card pages.

    - [Angular Bootstrap](http://angular-ui.github.io/bootstrap/) is a library of Angular directives which replicate the effects of Bootstrap's JS widgets in a way which is fully compatible with Angular. It has been used here for the popovers which are found on the card pages, and for the collapsible mobile navigation menu.

    - [Angular Animate](http://angular-ui.github.io/bootstrap/) makes the Angular bootstrap components appear and disappear more smoothly.

- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** CSS has been used throughout, mainly for its responsive grid system, and also for easier styling of the forms and tables used on the site.

#### Other contributions
As a brand new coder, I have often relied on Google searches and Stack Overflow responses in order to solve problems which I had. The following were particularly vital pieces of help which I found online and think it is only right that I should acknowledge the source of:

- The custom directive found in my directive.js file has been taken directly from the answer by Stack Overflow contributor Joël on [this thread](http://stackoverflow.com/questions/17417607/angular-ng-bind-html-and-directive-within-it/). Until I discovered that thread, I had no idea why my popovers were not functioning - it turns out that ng-bind-html will not apply directives (such as those used by angular-bootstrap), and a custom directive such as this one is needed to replace it in such cases.

- I have used Flexbox to create the "sticky footer" (that is, force the footer to go to the bottom of the viewport, rather than always being just below the content and therefore unnaturally high on pages with less than a full page of content), following rather directly the code given [here](https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/) and in particular [here](http://stackoverflow.com/questions/36899807/flexbox-sticky-footer-not-working-in-safari-or-chrome-osx). The latter link gives the necessary modifications for the footer to display correctly on Safari.

Note that solutions to the "sticky footer" problem which rely on the footer having a fixed height do not work here, the footer being considerably higher on narrow screens, so Flexbox was required to keep the layout responsive.

- Another issue which required the use of Flexbox was keeping columns at a constant height in the bootstrap grid system, even if the amount of content differs. My CSS which fixes this is adapted from the code by Bryan Willis [here](http://codepen.io/bootstrapped/details/RrabNe/) - and can be seen in effect most obviously on the links page, and also on the homepage.

## Other tech used

- [npm](https://www.npmjs.com/)
    - **npm** is used to help manage some of the dependencies in the application

- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of the required libraries and frameworks