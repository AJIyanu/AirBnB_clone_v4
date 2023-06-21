$(document).ready(function() {
    const $amenitylist = $("ul li");
    const amenity = [];

    $amenitylist.find('input[type="checkbox"]').on('change', function() {
        if ($(this).is(':checked')) {
        const checked = $(this).parent('li').text();
        amenity.push(checked);
        $('.amenities h4').text(amenity.join(' '));
        console.log('checked', checked);
    } else if ($(this).is(':not(:checked)')) {
        const unchecked = $(this).parent('li').text();
        amenity.splice(amenity.indexOf(unchecked), 1);
        if (amenity.length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
        $('.amenities h4').text(amenity.join(' '));
        }
        console.log('not checked')}
    });
});
