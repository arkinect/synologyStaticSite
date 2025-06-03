/* 
var nzdrate;
var audrate;
var gbprate;
var eurrate;
var cadrate;
if (jQuery(".TripPage").length || jQuery(".CombinationsPage").length) {
    $.getJSON("https://api.bravenewcoin.com/rates.json", function(data) {
        $.each(data.rates, function(i, v) {
            if (v.id_currency == "NZD") {
                nzdrate = (v.rate);
            }
            if (v.id_currency == "AUD") {
                audrate = (v.rate);
            }
            if (v.id_currency == "GBP") {
                gbprate = (v.rate);
            }
            if (v.id_currency == "EUR") {
                eurrate = (v.rate);
            }
            if (v.id_currency == "CAD") {
                cadrate = (v.rate);
            }
        });
    });
};



jQuery(".convert-currency").click(function(e) {
        e.preventDefault();
        console.log("1");
        $("#currencyselect ul, .currencyselecttarget ul").addClass("showme");
        $(".custom-select.currencyselect").addClass("hidden");
        $("#currencyselect, .currencyselecttarget").toggleClass("hidden");
        $("#currencyselect, .currencyselecttarget").find('.styledSelect').addClass("active");
});

$("#currencyselect select, .currencyselecttarget select").change(function() {
    jQuery("#currencyselect, .currencyselecttarget").toggleClass("hidden");
    if ($(this).val() == "NZD") {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            replacementprice = parseInt(parseInt(baseprice.replace(/\,/g, '') / nzdrate));
            jQuery(this).find(".currency-price").text(numberWithCommas(replacementprice));
            jQuery(this).find(".currency-title").text("NZD");
            jQuery(this).find(".currency-symbol").text("$");
        });
    } else if ($(this).val() == "AUD") {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            console.log("baseprice: " + baseprice);
            replacementprice = parseInt(parseInt(baseprice.replace(/\,/g, '') / audrate));
            console.log("audrate: " + audrate);
            console.log("repalcement: " + replacementprice);
            jQuery(this).find(".currency-price").text(numberWithCommas(replacementprice));
            jQuery(this).find(".currency-title").text("AUD");
            jQuery(this).find(".currency-symbol").text("$");
        });
    } else if ($(this).val() == "EUR") {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            replacementprice = parseInt(parseInt(baseprice.replace(/\,/g, '') / eurrate));
            jQuery(this).find(".currency-price").text(numberWithCommas(replacementprice));
            jQuery(this).find(".currency-title").text("EUR");
            jQuery(this).find(".currency-symbol").text("€");
        });
    } else if ($(this).val() == "GBP") {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            replacementprice = parseInt(parseInt(baseprice.replace(/\,/g, '') / gbprate));
            jQuery(this).find(".currency-price").text(numberWithCommas(replacementprice));
            jQuery(this).find(".currency-title").text("GBP");
            jQuery(this).find(".currency-symbol").text("£");
        });
    } else if ($(this).val() == "CAD") {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            replacementprice = parseInt(parseInt(baseprice.replace(/\,/g, '') / cadrate));
            jQuery(this).find(".currency-price").text(numberWithCommas(replacementprice));
            jQuery(this).find(".currency-title").text("CAD");
            jQuery(this).find(".currency-symbol").text("$");
        });
    } else if ($(this).val() == "CAD") {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            replacementprice = parseInt(parseInt(baseprice.replace(/\,/g, '') / cadrate));
            jQuery(this).find(".currency-price").text(numberWithCommas(replacementprice));
            jQuery(this).find(".currency-title").text("CAD");
            jQuery(this).find(".currency-symbol").text("$");
        });
    } else {
        jQuery.each(jQuery(".currency-price-block"), function(key, value) {
            baseprice = jQuery(this).find(".base-price").text();
            jQuery(this).find(".currency-price").text(numberWithCommas(baseprice));
            jQuery(this).find(".currency-title").text("USD");
            jQuery(this).find(".currency-symbol").text("$");
        });
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$(".currency-price").each(function() {
    $(this).text(numberWithCommas($(this).text()));
});
*/