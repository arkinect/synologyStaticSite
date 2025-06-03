$(function() {
    if (Cookies.get('nzt_readmoreactive')) {
        $(".bottom-buttons .read-more").parents('.trip-details').find('.extended-part').show();
        $('.trip-details').find('.read-more').addClass('open').text('View less');
    }
    var dateFormat = "mm/dd/yy",
        from = $("#from_date").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
            minDate: 0
        }).on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to_date").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        }).on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }
});
$(document).ready(function() {
    $(".trip-explorer .trip-details .bottom-buttons .read-more").click(function() {
        $(this).parents('.trip-details').find('.extended-part').slideToggle('fast', function() {
            if (!$(this).parents('.trip-details').find('.read-more').hasClass('open')) {
                Cookies.set('nzt_readmoreactive', '1', {
                    expires: 7
                });
                $(".bottom-buttons .read-more").parents('.trip-details').find('.extended-part').show();
                $('.trip-details').find('.read-more').addClass('open').text('View less');
            } else {
                $('.trip-details').find('.read-more').removeClass('open').text('Read more');
                $(".bottom-buttons .read-more").parents('.trip-details').find('.extended-part').hide();
                Cookies.remove('nzt_readmoreactive');
            }
        });
    });
    $("#availability-modal .close").click(function(e) {
        $('#availability-modal').toggleClass('open');
        $('html').toggleClass('fancybox-enabled');
        e.preventDefault();
    });
    var $grid = $('.grid').imagesLoaded(function() {
        $grid.masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
    });
   
    if ($("#wh-special").length == 0) {
        $('.trip-explorer-slider').owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            autoPlay: false,
            stopOnHover: true,
            lazyLoad: true,
            transitionStyle: "fade",
            "afterAction": function(el) {
				console.log("afteraction");
                this.$owlItems.removeClass('active');
                this.$owlItems.eq(this.currentItem).addClass('active');
            }
        });
        $('.testimonials_slider').owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            autoPlay: true,
            stopOnHover: true,
            transitionStyle: "fade"
        });
        $(".testimonials_section .owl-item .item").show();
        $(".check-dates").click(function(e) {
            $('#availability-modal').toggleClass('open');
            $('html').toggleClass('fancybox-enabled');
            e.preventDefault();
        });
    }
    var owlcarousel = $('.trip-gallery').owlCarousel({
        singleItem: true,
        lazyLoad: true,
        navigation: false,
        pagination: true,
        autoPlay: false,
        stopOnHover: true,
        transitionStyle: "fade",
        autoHeight: true,
        "afterAction": function(el) {
			console.log("afteraction3");
            this.$owlItems.removeClass('active');
            this.$owlItems.eq(this.currentItem).addClass('active');
            setTimeout(addNumbersToPagination, 1000);
			yall();
        }		
    });

    $('.trip-next-day, .trip-next-day-text').click(function() {
        owlcarousel.trigger('owl.next');
        return false;
    });
    $('.trip-previous-day, .trip-previous-day-text').click(function() {
        owlcarousel.trigger('owl.prev');
        return false;
    });
    $("a.share").on("click", function(e) {
        $("#st-1.sharethis-inline-share-buttons").toggleClass("not-visible");
        e.preventDefault();
    });
    var view = $(".right-blog-posts .container");
    var itemWidth = $('.right-blog-posts .post').width() + 10;
    var move = itemWidth;
    var nrItems = $('.right-blog-posts .post').length - 3;
    var sliderLimit = nrItems * (-itemWidth);
    $(".right-blog-posts .right-arrow").click(function() {
        var currentPosition = parseInt(view.css("left"));
        if (currentPosition >= sliderLimit) view.stop(false, true).animate({
            left: "-=" + move
        }, {
            duration: 400
        });
        else {
            $(".right-blog-posts .right-arrow").addClass('hide');
            $(".right-blog-posts .left-arrow").removeClass('hide');
        }
    });
    $(".right-blog-posts .left-arrow").click(function() {
        var currentPosition = parseInt(view.css("left"));
        if (currentPosition < 0) view.stop(false, true).animate({
            left: "+=" + move
        }, {
            duration: 400
        });
        else {
            $(".right-blog-posts .right-arrow").removeClass('hide');
            $(".right-blog-posts .left-arrow").addClass('hide');
        }
    });
    $('.owl-item').each(function() {
        var i = 1;
        $(this).find('.owl-page span').each(function() {
            $(this).text(i);
            i++;
        });
    })

    function scrollToAnchor(aid) {
        var aTag = $("a[name='" + aid + "']");
        $('html,body').animate({
            scrollTop: aTag.offset().top - 250
        }, 'slow');
    }
    $(".to-the-choices-good-sir").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().parent().find(".trip-details .extended-part").show();
        scrollToAnchor('the-choices');
    });
	
	jQuery.expr[':'].icontains = function(a, i, m) {
	  return jQuery(a).text().toUpperCase()
		  .indexOf(m[3].toUpperCase()) >= 0;
	}; 	
	
    if ($("#wh-special").length == 1) {
		
        $("#tab-titles-highlights").click(function(e) {
            fireHighlightsTab(e);
        });
        $("#tab-titles-faqs").click(function(e) {
            fireFAQTab(e);
        });		
        $("#tab-titles-day-by-day").click(function(e) {
            fireDayByDayTab(e);
        });
        $("#tab-titles-photos").click(function(e) {
            firePhotosTab(e);
        });
        $("#tab-titles-reviews").click(function(e) {
            fireReviewsTab(e);
        });
        $("#tab-titles-check-dates, .bottom-buttons .check-dates, #secondary-show-dates, #t-show-dates").click(function(e) {
            fireDatesTab(e);
        });
        $("#tab-titles-brochure").click(function(e) {
            fireBrochureTab(e);
        });
        
        var tabtarget = location.href.substr(location.href.indexOf('#')+1);
        if(tabtarget == 'day-by-day') {
            fireDayByDayTab();
        }        
        if(tabtarget == 'photos') {
            firePhotosTab();
        }        
        if(tabtarget == 'faq') {
            fireFAQTab();
        }  
        if(tabtarget == 'dates') {
            fireDatesTab();
        }          
        if(tabtarget == 'highlights') {
            fireHighlightsTab();
        }
        if(tabtarget == 'brochure') {
            fireBrochureTab();
        }        
        if(tabtarget == 'reviews') {
            fireReviewsTab();
        }                
    }
});
function addNumbersToPagination() {
    $('.trip-gallery.owl-carousel').each(function() {
        var i = 1;
        $(this).find('.owl-page span').each(function() {
            $(this).text(i);
            i++;
        });
    });
}
function fireDatesTab(e){
    $("#tab-titles a").removeClass("active");
    $("#tab-titles-check-dates").addClass("active");
    $(".single-tab").hide();
    $("#tab-check-dates").show();
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000);    
    e.preventDefault();
}
function fireFAQTab(e) {
    $("#tab-titles a").removeClass("active");
    $("#tab-titles-faqs").addClass("active");
    $(".single-tab").hide();
    $("#tab-faqs").show();
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000);
    e.preventDefault();
    
    $("#search-the-faqs:visible").submit(function(e) {
        e.preventDefault();
        var searchparam =$(".search-faqs:visible .input-field").val();
        if(searchparam == "") {
            $(".faq-category").show();
        } else {
            $(".faq-category").hide();
            $(".faq-category:icontains('" + searchparam + "')").show();	
        }
    });	

    $("#clean-faq:visible .faq-question-title").on("click",function(e) {
        e.preventDefault();
        if($(this).children().first().hasClass("active")) {
            $(".faq-question-answer").removeClass("active-question");
            $(this).children().first().removeClass("active");
        } else {
        $("#clean-faq .faq-question-title a").removeClass("active");
        $(this).children().addClass("active");
        $(".faq-question-answer").removeClass("active-question");
        $(this).next().addClass("active-question");			
        }
    })	
}
function fireHighlightsTab(e) {
    $("#tab-titles a").removeClass("active");
    $("#tab-titles-highlights").addClass("active");
    $(".single-tab").hide();
    $("#tab-main").show();
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000);    
    e.preventDefault();
}
function fireBrochureTab(e) {
    $("#tab-titles a").removeClass("active");
    $("#tab-titles-brochure").addClass("active");
    $(".single-tab").hide();
    $("#tab-get-brochure").show();
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000);
    e.preventDefault();
}
function fireReviewsTab(e) {
    //e.preventDefault();
    $("#tab-titles a").removeClass("active");
    $("#tab-titles-reviews").addClass("active");
    $(".single-tab").hide();
    $("#tab-review").show();
    $(".testimonials_slider .item:lt(3)").show();
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000);
    e.preventDefault();
}

function firePhotosTab(e) {
    //e.preventDefault();
    $("#tab-titles a").removeClass("active");
    $("#tab-titles-photos").addClass("active");
    $(".single-tab").hide();
    $("#tab-photo").show();
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000);   
    e.preventDefault();
}

function fireDayByDayTab(e) {

    $("#tab-titles a").removeClass("active");
    $("#tab-titles-day-by-day").addClass("active");
    $(".single-tab").hide();
    $("#tab-day-by-day").show();
	/*
    var owlcarousel = $('.trip-explorer-slider').owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        autoPlay: false,
        stopOnHover: true,
        transitionStyle: "fade",
        "afterAction": function(el) {
			console.log("afteraction2");
            this.$owlItems.removeClass('active');
            this.$owlItems.eq(this.currentItem).addClass('active');
            setTimeout(addNumbersToPagination, 1000);
        }
    });
	
	*/
	
    $('html, body').animate({
        scrollTop: $("#wh-special").offset().top - 125
    }, 1000); 
    //e.preventDefault();    
}	

$(function() {
	/*
	var owlgal = $('.trip-explorer-slider .trip-image').owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: false,
		autoPlay: false,
		stopOnHover: true,
		transitionStyle: "fade",
	});		

	owlgal.on('drag.owl.carousel', function(event) {
		console.log("hi");
	});		
	*/
	$(".see-itinerary").click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$("#go-itinerary").offset().top-55},1000)
	})
});