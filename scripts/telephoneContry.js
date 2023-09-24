const input_1 = document.querySelector("#phone_1");
const input_2 = document.querySelector("#phone_2");
window.intlTelInput(input_1, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
const iti_1 = window.intlTelInput(input_1, {
    separateDialCode: true, showFlags: false, customPlaceholder: function () { return '' }
});
window.intlTelInput(input_2, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
const iti_2 = window.intlTelInput(input_2, {
    separateDialCode: true, showFlags: false, customPlaceholder: function () { return '' }
});
