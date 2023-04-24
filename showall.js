$(function () {
    $('.hid').click(function () {
        $(this).siblings('.showall').slideToggle('slow');
    })
});

$('.hid').on('click',function(){
$('.showall').slideToggle('slow');

});