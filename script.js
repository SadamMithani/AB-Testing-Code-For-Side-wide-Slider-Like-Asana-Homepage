    // Asana Like slider script
    //==========================
    jQuery('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>').appendTo("head");
    jQuery('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>').appendTo("head");
    jQuery('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>');
    jQuery("#av_section_9").after('\
        <div class="slider-section">\
            <div class="slider-section-container">\
                <h1>Key features</h1>\
                <div class="container-content">\
                    <div class="img-content content-resize">\
                        <div class="img-blocks ">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Import orders" class="desk-tab-img">\
                        </div>\
                        <div class="img-blocks">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Plan routes" class="desk-tab-img">\
                            </div> \
                        <div class="img-blocks">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Send routes to drivers" class="desk-tab-img">\
                        </div>   \
                        <div class="img-blocks">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Live tracking" class="desk-tab-img">\
                        </div> \
                        <div class="img-blocks tip-pooling">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Order tracking" class="desk-tab-img">\
                        </div> \
                        <div class="img-blocks">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Proof of delivery" class="desk-tab-img">\
                        </div> \
                        <div class="img-blocks">\
                            <img src=" INSERT YOUR IMAGE HERE" alt="Customer feedback" class="desk-tab-img">\
                        </div> \
                        <div class="img-blocks">\
                            <img src= "INSERT YOUR IMAGE HERE" alt="Analytics" class="desk-tab-img">\
                        </div> \
                    </div>\
                </div>\
                    <ul class="feature-column">\
                    </ul>\
            </div>\
        </div>'
    );
    var addcontent = setInterval(function () {
        jQuery(" .slider-section .slick-dots li button").before(
            '<div class="progress-bar"><span class="percentage liveprogress"></span></div>'
        );
        jQuery(" .slider-section .slick-dots li:nth-child(1) button").append(
            '<div class="content-title">Import orders</div><div class="subtext">Upload orders from a CSV or Excel file. Multiple order parameters supported. Customer details available for future orders.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Import orders"></div>'
        );
        jQuery(" .slider-section .slick-dots li:nth-child(2) button").append(
            '<div class="content-title">Plan routes</div><div class="subtext">Efficient multi-stop routes right away. Routes optimized with all your parameters. Mid-day orders slide easily into workflow. </div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Plan routes" class="desk-tab-img"></div> '
        );
        jQuery(" .slider-section .slick-dots li:nth-child(3) button").append(
            `<div class="content-title">Send routes to drivers</div><div class="subtext">Routes go directly to drivers' phones. Orders, schedule, navigation in a single app. Mid-route changes immediately on driver screen.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Send routes to drivers" class="desk-tab-img"></div>`
        );
        jQuery(" .slider-section .slick-dots li:nth-child(4) button").append(
            `<div class="content-title">Live tracking</div><div class="subtext">Shows where your drivers are at any time. What's done, who's on time, who's behind. Last-minute, rush orders easy to assign.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Live tracking" class="desk-tab-img"></div>`
        );
        jQuery(" .slider-section .slick-dots li:nth-child(5) button").append(
            '<div class="content-title">Order tracking</div><div class="subtext">Share estimated times of arrival with customers. Customizable text & email notifications. Automatic status updates.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Order tracking" class="desk-tab-img"></div> '
        );
        jQuery(" .slider-section .slick-dots li:nth-child(6) button").append(
            '<div class="content-title">Proof of delivery</div><div class="subtext">Capture signatures, photos & notes in the Mobile App. Eliminate paperwork and improve accuracy. Resolve customer inquiries seamlessly.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Proof of delivery" class="desk-tab-img"></div> '
        );
        jQuery(" .slider-section .slick-dots li:nth-child(7) button").append(
            '<div class="content-title">Customer feedback</div><div class="subtext">Get feedback at the moment of service. Solidify reputation and grow customer loyalty. Private ratings and comments - a click away.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src=" INSERT YOUR IMAGE HERE" alt="Customer feedback" class="desk-tab-img"></div> '
        );
        jQuery(" .slider-section .slick-dots li:nth-child(8) button").append(
            '<div class="content-title">Analytics</div><div class="subtext">Automatically generated from your route data. Identify high performers with easy-to-compare results. Detailed and at-a-glance stats.</div><div class="AccordionMediaCarousel__mobile-only-media"><img src= " INSERT YOUR IMAGE HERE" alt="Analytics" class="desk-tab-img"></div> '
        );
        if (jQuery(" .slider-section .slick-dots li button div").length > 0) {
            clearInterval(addcontent);
        }
        jQuery(" .feature-column button .content-title , .feature-column button .subtext,  .feature-column button .AccordionMediaCarousel__mobile-only-media").remove();
    });


    // jQuery(window).on("load", function () {
    var slidereLoaded = setInterval(function () {
    	  //jQuery('.field-cta').addClass('active');
    	if (jQuery.fn.slick) {
                    clearInterval(slidereLoaded);
        jQuery(".img-content").slick({
            dots: true,
            infinite: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 8000,
            arrows: false,
            // asNavFor: ".feature-column",
            swipe: false,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
        jQuery('.feature-column').slick({
            prevArrow: '<div class= "arrows a-left control-c prev slick-prev"><img src=" LEFT ARROW " alt="Left Arrow" ></div>',
            nextArrow: '<div class="a-right control-c next slick-next"><img src=" RIGHT ARROW " alt="Right Arrow" ></div>',
            dots: true,
            autoplay: true,
            autoplaySpeed: 8000,
            // asNavFor: '.img-content',
            focusOnSelect: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 2,
            variableWidth: true,
            pauseOnHover: false,
            pauseOnFocus: false,

        });
		
		jQuery('.freeze-button').on('click' , function(){
    		jQuery('.field-cta').click();
		})
        // Asana Like slider Behaviour
        //============================
        jQuery(' .slider-section .img-content .slick-dots li button').on('mouseenter', function () {
            jQuery(".feature-column").slick('slickPause');
            jQuery(".img-content").slick('slickPause');
        });
        jQuery(' .slider-section .img-content .slick-dots li button').on('mouseleave', function () {
            jQuery(".feature-column").slick('slickPlay');
            jQuery(".img-content").slick('slickPlay');
        });
        jQuery(' .slider-section .img-content .slick-dots li button').on('mouseenter', function () {
            jQuery(' .img-content .progress-bar').addClass("filled");
        }).on('mousemove', function () {
            jQuery(' .img-content .progress-bar').addClass("filled");
        });
        jQuery(' .slider-section .img-content .slick-dots li button').on('click', function () {
            jQuery(' .img-content .progress-bar').removeClass("filled");
            // jQuery('.spz-14001 .slick-dots li.slick-active .progress-bar').addClass('paused');
            jQuery(this).find('.progress-bar').addClass('filled');
        });
        jQuery(' .slider-section .img-content .slick-dots li button').on('mouseleave', function () {
            jQuery(' .img-content .progress-bar').removeClass("filled");
        });

        var temp = 0;
        document.addEventListener('scroll', function () {

            if (jQuery(" .slider-section").isInViewport()) {
                if (temp == 0) {
                    jQuery(".feature-column").slick('slickPlay');
                    jQuery(".img-content").slick('slickPlay');
                    const elm = document.querySelectorAll(' .img-content ul li.slick-active .progress-bar');
                    elm.forEach((ele, ind) => {
                        var newone = ele.cloneNode(true);
                        ele.parentNode.replaceChild(newone, ele);
                    })
                    temp = 1;
                }
            } else {
                jQuery(".feature-column").slick('slickPause');
                jQuery(".img-content").slick('slickPause');
                temp = 0;
            }
        });
        // over 
		}
    });