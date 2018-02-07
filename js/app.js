/* There is a message that we want to appear when a certain event occurs, so first we are going to select the flashMessage element and hide it in the background. Later, an event will occur, which will trigger the message to reveal itself. */

/* Commenting out all of the below code because I found a more efficient way to accomplish the same thing, chaining together jQuery! */
//$('#flashMessage').hide();
//$('#flashMessage').fadeIn(2000); /* This will fade the once-hidden message in. By default, the fadeIn happens in 400 ms because that's what jQuery animations run at by default.  However, you can pass 2000 to tweak how quickly the fade occurs. 2000 md = 2 seconds. Also, I don't think that fadeIn and slideDown can co-exist. Tried that during this project and got burned.*/
//$('#flashMessage').slideDown(1000); /* Using this instead of fadeIn since it's complimentary to the slideUp animatin. */
//$('#flashmessage').delay(3000); /* This gives the user 3 sec to read the message that slides down. */
//$('#flashMessage').slideUp(); /* This will make the message slide up. */

/*You can also chain jQuery like this to make a shorter version of what's commented out above. */
$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

/* HERE'S AN ALTERNATIVE METHOD TO CHAIN jQUERY BUT STILL HAVE YOUR CODE BE HUMAN-READABLE:

$('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();
);

/* BTW, the capitalized D in slideDown is necessary. My code was bugged because I didn't capitalize D. Picky! */