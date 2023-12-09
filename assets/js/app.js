$(function(){

    // search section start ==================
    
    $('.search_open_btn').on('click', ()=>{
        $('#search').addClass('open');
    });
    $('.search_close_btn').on('click', ()=>{
        $('#search').removeClass('open');
    })

    // search section end ==================
    
    // Cart section start ==================
    
    $('.cart_open_btn').on('click', ()=>{
        $('#cart').addClass('open');
    })
    $('.cart_close_btn').on('click', ()=>{
        $('#cart').removeClass('open');
    })

    // Cart section end ==================
    
    // Popup section start ==================
    
    $('.popup_close_btn').on("click", ()=>{
        $('#popup').addClass('open')
    })

    // Popup section end ==================
});

$(function () {
    //Banner Slider Activation
    $(".banner_slider").slick({
        arrows: false,
        dots: true,
        appendDots: $(".banner_slider_dots_container"),
        dotsClass: "banner_slider_dots",
        autoplay: true,
        fade:true,
        speed:1000
    });
});