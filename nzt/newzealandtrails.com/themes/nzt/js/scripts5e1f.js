$(document).ready(function() {
  if($(".BookingFormPage2021").length == 0) {
      console.log("styling-selects");
      $('.custom-select select').each(function() {
          var $this = $(this),
              numberOfOptions = $(this).children('option').length;
          $this.addClass('s-hidden');
          $this.wrap('<div class="select"></div>');
          $this.after('<div class="styledSelect"></div>');
          var $styledSelect = $this.next('div.styledSelect');
          $styledSelect.text($this.children('option').eq(0).text());
          $styledSelect.text($this.children('option:selected').text());
          var $list = $('<ul />', {
              'class': 'options'
          }).insertAfter($styledSelect);
          for (var i = 0; i < numberOfOptions; i++) {
              $('<li />', {
                  text: $this.children('option').eq(i).text(),
                  rel: $this.children('option').eq(i).val()
              }).appendTo($list)
          }
          var $listItems = $list.children('li');
          $styledSelect.click(function(e) {
              e.stopPropagation();
              $('div.styledSelect.active').each(function() {
                  $(this).removeClass('active').next('ul.options').hide();
                  $(this).parent().parent().removeClass('focus')
              });
              $(this).toggleClass('active').next('ul.options').toggle();
              $(this).parent().parent().toggleClass('focus')
          });
          $styledSelect.parent().prev().click(function(e) {
              e.stopPropagation();
              $(this).parent().toggleClass('focus').find('ul.options').toggle()
          });
          var indexselected = $this.children('option:selected').index();
          $listItems.eq(indexselected).addClass('selected');
          $listItems.click(function(e) {
              e.stopPropagation();
              $('.options li').removeClass('selected');
              $(this).addClass('selected');
              $styledSelect.text($(this).text()).removeClass('active');
              $styledSelect.parent().parent().removeClass('focus');
              $this.val($(this).attr('rel'));
              $list.hide();
              $this.trigger("change")
          });
          $(document).click(function() {
              $styledSelect.removeClass('active');
              $styledSelect.parent().parent().removeClass('focus');
              $list.hide()
          });
          return $(this)
      });
    }

    if($(".ContactUsPage").length == 1) {
      console.log("hit");
      queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      if(urlParams.has('trip')) {
        var tt = urlParams.get('trip');
        if(tt == 'gw') {
          $("#field_147TheNewZealandGreatWalkAdventure").prop("checked", true)
        } else if(tt == 'whwt') {
          $("#field_147WorldHeritageWalkingTour").prop("checked", true)
        } else if(tt == 'kc') {
          $("#field_147KiwiClassic").prop("checked", true)
        } else if(tt == 'mp') {
          $("#field_147Masterpiece").prop("checked", true)
        } else if(tt == 'gc') {
          $("#field_147TheGrandExplorer").prop("checked", true)
        } else if(tt == 'ss') {
          $("#field_147PureSouth").prop("checked", true)
        } else if(tt == 'ps') {
          $("#field_147PureSouth").prop("checked", true)
        } else if(tt == 'sn') {
          $("#field_147SweetNorth").prop("checked", true)
        } else {

        }
      }
    }


    $(".fancybox").fancybox({
        smallBtn: !0,
        infobar: !0,
        buttons: !0,
        helpers: {
            title: {
                type: 'inside'
            }
        },
        onComplete: function(instance, slide) {
            var imageWidth = $('.fancybox-slide--complete .fancybox-placeholder').width();
            var imageHeight = $('.fancybox-slide--complete .fancybox-placeholder').outerHeight();
            var bottom = $(window).height() - imageHeight;
            bottom = bottom / 2;
            $(".fancybox-close-small").css({
                'top': imageHeight * -1 - 1
            })
            $('.fancybox-container--ready .fancybox-caption-wrap').outerWidth(imageWidth);
            $('.fancybox-container--ready .fancybox-caption-wrap').css({
                'top': ($(window).height() / 2) + (imageHeight / 2),
                'opacity': '1'
            });
            (function($, sr) {
                var debounce = function(func, threshold, execAsap) {
                    var timeout;
                    return function debounced() {
                        var obj = this,
                            args = arguments;

                        function delayed() {
                            if (!execAsap) func.apply(obj, args);
                            timeout = null
                        };
                        if (timeout) clearTimeout(timeout);
                        else if (execAsap) func.apply(obj, args);
                        timeout = setTimeout(delayed, threshold || 100)
                    }
                }
                jQuery.fn[sr] = function(fn) {
                    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr)
                }
            })(jQuery, 'smartresize');
            $(window).smartresize(function() {
                var imageWidth = $('.fancybox-slide--complete .fancybox-placeholder').width();
                var imageHeight = $('.fancybox-slide--complete .fancybox-placeholder').outerHeight();
                var bottom = $(window).height() - imageHeight;
                bottom = bottom / 2;
                $('.fancybox-container--ready .fancybox-caption-wrap').outerWidth(imageWidth);
                $('.fancybox-container--ready .fancybox-caption-wrap').css({
                    'bottom': bottom,
                    'opacity': '1'
                })
            })
        },
        beforeMove: function(instance, slide) {
            $('.fancybox-container--ready .fancybox-caption-wrap').css({
                'transform': 'translate(-50%, 200%)',
                'opacity': '0'
            })
        },
        afterMove: function(instance, slide) {
            $('.fancybox-container--ready .fancybox-caption-wrap').css({
                'transform': 'translate(-50%, 0%)',
                'opacity': '1'
            })
        },
        beforeClose: function(instance, slide) {
            $('.fancybox-caption-wrap').css({
                'transition': 'none',
                'opacity': '0'
            })
        }
    });
    $('.free-magazine-form input').change(function() {
        if ($(this).val()) {
            $(this).parent().parent().parent().addClass('stayopen')
        }
    });
    $("body").click(function() {
        $('.free-magazine .dropdown').removeClass('stayopen')
    })
    $("#quick-form-submit").click(function(e) {
        if (jQuery("#header .free-magazine-form #quick-form-email").val() == "") {
            e.preventDefault();
            jQuery("#header .free-magazine-form #quick-form-email").css("border", "1px solid red")
        }
    });
    $(".drop-j").val('j')
})
