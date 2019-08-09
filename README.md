# Median

Median is a Medium application clone that allows users to publish their own stories. Whether amateur or professional, short or extended, Median is the perfect hub for any form of social journalism.

## Technologies

For the Frontend, Median uses a combination of React for the Framework, Redux for State Management, and ES6 JavaScript to generate a single-page experience for the User. On the Backend it uses the Ruby on Rails framework for Data Management. Lastly, jQuery was used to generate all the AJAX requests to the Backend.

## Features

* User Authentication
* Stories (Posts)
* Responses (Commenting on Stories)
* Follows and Feed
* Claps (Likes)

### User Authentication

* New users can sign-up, existing users can log-in, and logged in users can log-out
* A demo log-in is made accessible for quick guest access to the website
* Certain features become inaccessible without first being logged in (commenting, follows, etc.)

![login](https://github.com/bryandevelops/Median/blob/master/app/assets/images/readme_images/login.jpeg)

* Errors render within the Modal if incorrect or insufficient information has been entered by a user

![signup](https://github.com/bryandevelops/Median/blob/master/app/assets/images/readme_images/signup.jpeg)

### Stories

* When logged in, users have the ability to publish 'stories' onto their profile with a title, body and image
* Users can update or delete any of their published stories

![story](https://github.com/bryandevelops/Median/blob/master/app/assets/images/readme_images/story.jpeg)


### Responses

* When logged in, users are able to leave a 'response' under any published story
* Users can update or delete any of their published responses

![response](https://github.com/bryandevelops/Median/blob/master/app/assets/images/readme_images/response.png)

### Follows and Feed

* When logged in, users can follow/unfollow other users and on each profile it also displays a count for all followers/following
* Users have a feed of all of their published stories on their profile beginning with their latest published Story

![profile](https://github.com/bryandevelops/Median/blob/master/app/assets/images/readme_images/profile.jpeg)


#### Future Features

1. A feed of the Stories from the authors a user follows
1. Claps
1. Bookmarks
1. Categories
