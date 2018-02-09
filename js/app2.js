$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

const title = "My first Blog Post";
const content = "This is my <strong>first</strong> post.";

// This next line uses jQuery to select an h2 within HTML, which has the id "blogTitlePreview", to insert title, which is a constant called a couple lines above. The line after works the same way, only a div with a certain class from html is targeted and a different variable, called above, is inserted into said div.
$('#blogTitlePreview').text(title);
$('#blogContentPreview').html(content); /* I used HTML here because the const content has HTML in it and if I use the text method JS won't recognize the HTML because it things the HTML is part of a string -- and rightfully so. */
// Rather than using "title" and "content" in the 2 lines above, I could have just typed in what I wanted to add but saving what I want to add to called variables at the top looks a lot cleaner, plus it's easier to find/change title/content later