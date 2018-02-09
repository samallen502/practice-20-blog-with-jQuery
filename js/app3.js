// It's important to hide this here, so that it doesn't appear until after the click handler runs.
$('#flashMessage').hide();

$('#previewButton').click(function() {
    const title = $('#blogTitleInput').val(); /* Calling the val method on this id will log whatever the user types into the blogTitleInput field, which is a text box on the preview.*/
    const content = $('#blogContentInput').val();
    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content); /* I used HTML here because the const content has HTML in it and if I use the text method JS won't recognize the HTML because it things the HTML is part of a string -- and rightfully so. */
    // After the above function for the preview button runs, our old jQuery for the submission will run, giving the user the impression of responsiveness.
    $('#flashMessage').slideDown(1000).delay(3000).slideUp();
});