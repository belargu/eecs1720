
window.onload = function() {
    //create sidebar for every page
    $(".sidebar").append(" \
    <header>belargu</header> \
    \
    <nav class=\"tocolor\"> \
        <button onclick=\"document.location='index.html'\">home</button> \
        <button onclick=\"document.location='words.html'\">words</button> \
        <button onclick=\"document.location='images.html'\">images</button> \
        <button onclick=\"document.location='sounds.html'\">sounds</button> \
        <button onclick=\"document.location='videos.html'\">videos</button> \
        <button onclick=\"document.location='games.html'\">games</button> \
        <button onclick=\"document.location='about.html'\">about</button> \
    </nav> \
    <form action=\"action_page.php\" class=\"tocolor\"> <!-- search bar; unusable right now --> \
        <button type=\"submit\"><i class=\"fa fa-search\"></i></button> \
        <input type=\"text\" placeholder=\"search\" name=\"search\" > \
    </form> \
    \
    <button class=\"house\">house mode</button>"
    );

    console.log("test");
}
