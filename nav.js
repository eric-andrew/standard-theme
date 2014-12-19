  $(function() {
    var navigation = {};
    var toggleButton, navMenu, navHeight, navWidth, navWrapper, socialLinks, secNav, content, control, body;

    toggleButton = $('#menu-toggle');
    navMenu = $('.slideIn');
    navHeight = $(window).height();
    navWidth = navMenu.outerWidth();
    navWrapper = $('.standard-nav-menu-wrapper');
    socialLinks = $('#social-links');
    secNav = $('.secondary-wrapper #secondary-nav');
    content = $('.standard-nav-menu li a');
    control = $('.standard-dropdown');


    navigation.close = function(){
      navMenu.animate({left:-navWidth}, 500, function() {
        navMenu.hide().removeClass('toggled');
        navMenu.css('height', 0);
      });
    }

    navigation.open = function() {
      navMenu.css('height', navHeight);
      navMenu.show().addClass('toggled').animate({left:0}, 500);
    }

    navigation.dropdowns = function() {
      control.hide().removeClass('no-js-fallback');
      $('nav li ul.standard-nav-menu').hover(
        $('nav li').hover(
        function () {
          $('ul', this).stop().slideDown(100);
        },
        function () {
          $('ul', this).stop().slideUp(100);
        })
      )
    }

    navigation.accordions = function() {
      control.hide().removeClass('no-js-fallback');
      var accordion = content.has(control);

      content.on('click',function(){
        if( accordion && control.hasClass('slideToggled') ) {
          //e.preventDefault();
          control.slideUp(250, function(){
           $(this).removeClass('slideToggled');
          });
        } else if(accordion) {
          //e.preventDefault();
          $(this).siblings(control).slideDown(250).addClass('slideToggled');
        }
      });
    }

    if((toggleButton).is(':visible')){
      secNav.detach().appendTo(navWrapper);
      socialLinks.detach().appendTo(navWrapper);
      navMenu.css({left: -navWidth}).hide();
      navigation.accordions();

    } else { navigation.dropdowns(); }


    toggleButton.on('click' , function(e) {
      if ( navMenu.hasClass('toggled') ) {
        e.preventDefault();
        navigation.close();
      } else {
        e.preventDefault();
        navigation.open();
      }
    });


    $(document).on('click', function(event) {
      if ( navMenu.hasClass('toggled') && !$(event.target).is(toggleButton) && !$(event.target).closest(navMenu).length) {
        navigation.close();
      }
    });

    return navigation;

} () );

