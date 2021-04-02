// Declaration of the variables navLinks and dropdown to define the tools for the following function and for-loop.

var navLinks = document.getElementsByClassName('main-menu')
var dropdowns = document.getElementsByClassName('dropdown')
console.log(navLinks)

//Javascript function to toggle the sub-menu to show on hover
function toggleDropdown() {
    console.log(this.children[1]);
    this.children[1].classList.toggle('show');
    }

//Javascript for-loop to listen for the event of mouse enter and mouse leave to activate the 'Show' CSS toggle.
for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseenter', toggleDropdown);
    navLinks[i].addEventListener('mouseleave', toggleDropdown);
}

function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // setting the size of the element to animate
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Defining the size of the header and content elements
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // when scrolling
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});