$(document).ready(function() {
    $(".particles-dots, .particles-dots-noanime").each(function(index) {
      var elementId = 'particles-dots-' + index;
      $(this).attr('id', elementId);
  
      var isNoAnimation = $(this).hasClass('particles-dots-noanime');
      var particlesConfig = {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#ffffff"
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,                    // حرکت همیشه فعال است
            "speed": isNoAnimation ? 0.01 : 6, // سرعت خیلی کم برای نقاط ثابت
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": !isNoAnimation,
              "mode": "grab"
            },
            "onclick": {
              "enable": !isNoAnimation,
              "mode": "push"
            },
            "resize": true
          }
        },
        "retina_detect": true
      };
  
      setTimeout(function() {
        particlesJS(elementId, particlesConfig);
      }, 500);
    });
  });
  