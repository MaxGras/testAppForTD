var $input = $("#inputPaymentSlider");
$(document).ready(function () {
    $(".js-range-slider").ionRangeSlider({
        type: "single",
        min: 1100,
        max: 500000,
        skin: "round",
        force_edges: true,
        hide_min_max: true,
        onStart: function(data) {
            $input.prop("value", Math.round(data.from * 6.54)+" PLN");
        },
        onChange: function(data) {
            $input.prop("value", Math.round(data.from * 6.54)+" PLN");
        }
    })
});
