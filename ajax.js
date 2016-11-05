$('document').ready(function() {
    $.ajax({
        method: 'GET',
        url: 'data.json',
        dataType: 'json'
    }).done(function(data) {
        $.each(data, function(i, user) {
            $('ol#list').append('<li>' + user.name + ' -- ' + user.email + '</li>');
        });
    });
    $('button').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var url = $(this).attr('action');

        $.post(url, { name: name, email: email }).done(function(data) {
            e.preventDefault();
        })
    });




});
