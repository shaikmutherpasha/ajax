$('document').ready(function() {
  $.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  }).then(function(data) {
    $.each(data, function(i, user) {
      $('ol#list').append('<li>' + user.title +
                          '</li>' + '<br>');
    });
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var $title = $('#title').val();
    var method = 'POST';
    var url = 'http://jsonplaceholder.typicode.com/posts';
    var data = { title: $title, body: 'foobar', userId: 1 };
    Form(method, url, data);
    $('#title').val('');
  });

  // POST adds a random id to the object sent
  function Form(method, url, data) {
    $.ajax({
      method: method,
      url: url,
      data: data,
      success: function(data) {
        callBack(method, data);
      },
      error: function(data) {
        console.log(data);
      }
    });
  }

  function callBack(method, data){
    if (method == 'POST') {
      $('ol#list').prepend('<li>' + data.title +'</li>');
    }else {
      console.log(data);
    }
  }
});
