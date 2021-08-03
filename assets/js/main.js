$(document).ready(function() {
    $(".header-brand i").click(function() {
        $(".main-toggle-btn").show("slow");
    });
    $(".navigation-category h6").click(function() {
        $(".navigation-category-items").toggle("slow");
    });
    $(".header-brand i").click(function() {
        $(".main-toggle-btn:before").show("slow");
    });
    $(".main-toggle-btn i").click(function() {
        $(".main-toggle-btn").hide("slow");
    });
    $(".main-toggle-btn i").click(function() {
        $(".main-toggle-btn").hide("slow");
    });
    $('.product-info-navigation li').on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.product-information-item').isotope({
            filter: selector,
        });
    });
    $('.product-color li').on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.product-item-image').isotope({
            filter: selector,
        });
    });
    $('.product-image-nav li').on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.product-item-image').isotope({
            filter: selector,
        });
    });
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});