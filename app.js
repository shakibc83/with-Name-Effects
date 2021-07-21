$(document).ready(function () {
        let userName;
        let userNameH1;
        $(".sec-enter-name-btn").click(function () {
                if (document.getElementById("sec-enter-name-input").value === "") {
                        alert("name cannot be empty");
                } else {
                        $(".enter-name-section").fadeOut("slow");
                        userName = document.getElementById("sec-enter-name-input").value;
                        userNameH1 = document.getElementById("user-name-h1");
                        userNameH1.innerHTML = userName;
                }
        });
        console.log(userName);
        // let dataText = "HELLO, *" + userName + "* HAVE SEND A SPECIAL GIFT FOR YOU, *open this, enter your name, and see magic!* and don't forget *" + userName + "* is the first one doing this-->";
        // $(".whatsapp").attr("data-text") = dataText;

        /* --whatsapp share-*/
        var isMobile = {
                Android: function () {
                        return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                        return navigator.userAgent.match(/IEMobile/i);
                },
                any: function () {
                        return (
                                isMobile.Android() ||
                                isMobile.BlackBerry() ||
                                isMobile.iOS() ||
                                isMobile.Opera() ||
                                isMobile.Windows()
                        );
                }
        };
        $(document).on("click", ".whatsapp", function () {
                if (isMobile.any()) {
                        var text =
                                "HELLO, *" +
                                userName +
                                "* HAVE SEND A SPECIAL GIFT FOR YOU, *open this, enter your name, and see magic!* and don't forget *" +
                                userName +
                                "* is the first one doing this-->";
                        var url = $(this).attr("data-link");
                        var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
                        var whatsapp_url = "whatsapp://send?text=" + message;
                        window.location.href = whatsapp_url;
                } else {
                        alert("Please share this article in mobile device");
                }
        });
});

      // function test(){
      //     var userName = document.getElementById("sec-enter-name-input").value;
      //     console.log(userName);
      // }

      particlesJS('particles-js',
  
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": ["#FBFB09","#F92E06","#78F906","#1BCFC1"]
          },
          "shape": {
            "type": ["circle","star","triangle","polygon"],
            "stroke": {
              "width": 0,
              "color": "#"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 0,
              "speed": 2,
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    
    );