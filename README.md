This project came in several phases.

*** PHASE 1 ***

index + app: This is not a functioning blog. This is more of a demonstration of how jQuery works, using a blog with a new feature being added for context. See app.js for code with comments.

Inspired by: https://teamtreehouse.com/library/animating-elements-with-jquery
https://teamtreehouse.com/library/blog-previewer-changing-content-inside-elements

Ultimately, I learned that you can chain jQuery commands or, if you so desire, code how the chain appears to make your code human-readable (requires situational use of judgment).  I also learned that jQuery commands ike "fadeIn" override other commands like "slideDown", so not all jQuery animations "play nicely" with one another. Also important in jQuery is using the appropriate camelCase syntax; I had some bugs simply because I didn't respect the proper syntax out of ignorance!

*** PHASE 2 ***

index2 + app2: The purpose of this exercise was simply to show how I could use jQuery from JS to insert text and HTML, changing how a page displays from jQuery.

Inspired by:
https://teamtreehouse.com/library/blog-previewer-changing-content-inside-elements

*** PHASE 3 ***

index3 + app3: Say you want to allow the user to enter the user's own title and own content, click the preview button, and receive confirmation of what was submitted. This exercise shows how that's done. This exercise also took PHASE 1's results and moved them into the click handler, so that not only does the preview button display the user's entered title and content -- but also a neat click confirmation, as well!