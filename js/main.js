$(document).ready(function () {

    //====================== Load Images from Flickr ======================
    $(function () {
        var flickrID = '139917624@N04'; //YOUR FLICKR ID

        $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=' + flickrID + '&size=b&lang=en-us&format=json&jsoncallback=?', function (data) {

            $.each(data.items, function (i, item) {
                // Replace each image URL from _m (small) to _b (large size)
                // https://www.flickr.com/services/api/misc.urls.html
                var img = (item.media.m).replace('_m.jpg', '_b.jpg'),
                    title = (item.title);


                // Append images to respective grids
                $('<figure class="cell"><a href="' + img + '" class="pop-up"><img src="' + img + '" alt="' + title + '" title="' + title + '"/></a><figcaption class="caption">' + title + '</figcaption></figure>').appendTo('#column-grid .wrap, #masonry-grid .wrap');
            });
        })

        //

    });

    //====================== BACK TO TOP ==================================

    $("#footer a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 900, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
    });

});

//====================== Fancy box ======================

$(document).ready(function () {
    $(".pop-up").fancybox({
        'titleShow': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'easingIn': 'easeOutBack',
        'easingOut': 'easeInBack'
    });
});
