// Function to animate counting for specified elements
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
        // Duration of the animation
        duration: 4000,
        // Easing function for the transition
        easing: "swing",
         /**
         * Callback function called for each animated property of each animated element. 
         * This function modifies the Tween object to change the value of the property before it is set.
         */
          step: function (value) {
                      // Round the value and update the text content

            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  // Counter variable initialization
  let a = 0;
  // Event listener for window scroll

  $(window).scroll(function () {
  // Calculate the offset of the ".numbers" element from the top of the window
  let oTop = $(".numbers").offset().top - window.innerHeight;
    // Check if the counter has not been triggered and the window has scrolled to the specified position
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  
  
  /**
 * Sticky Navigation
 * When the user scrolls to a certain position, add or remove the "sticky" class to the navigation bar.
 */
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
  // Calculate the offset of the ".section-2" element from the top of the window
  let oTop = $(".section-2").offset().top - window.innerHeight;
    // Check if the window has scrolled to the specified position and add or remove the "sticky" class accordingly
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });
  