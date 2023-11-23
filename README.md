# social-network-api

Version 1
Deployed 22 November 2023


App demo: https://drive.google.com/file/d/1DG3_IxPRcGxLxEghmMX49oLc3PSTAnhP/view

## Description

The Challenge for Module #18 asked us to create a NoSQL Social Network API that could get, update, and delete users, as well as get, update, and delete their thoughts. We were also tasked with giving users the ability to add friends, and to add reactions to their thoughts. 

## Usage

To use this app, clone the app files into your favorite code editor. Link the connection file in the config folder to the database of your choice. Run the server file, and the database will populate with the seed data. You can run the routes in Insomnia (or a similar program) to see how they work.


## Challenges

The biggest issue with this project was working with the reactions and friends, as sort of sub-tables within Users and Thoughts, respectively. It was tricky to access them and to render the data, but once that was figured out, everything was pretty straightforward. It also took me far too long to realize that we have moved routes into a separate folder from the controllers, but that was simple enough to parse, too.


## Credits

Tutor Dru Sanchez provided guidance. TA Ian Darland helped with debugging in office hours.



## License

Please refer to the license in the repo.

---