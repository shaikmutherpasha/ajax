$('document').ready(function() {
  $.ajax('http://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  }).then(function(data) {
    $.each(data, function(i, user) {
      $('div#list').append('<h4>' + user.title +'</h4><p>' + user.body + '</p>');
    });
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var $title = $('#title').val();
    var $body = $('#desc').val();
    var method = 'POST';
    var url = 'http://jsonplaceholder.typicode.com/posts';
    var data = { title: $title, body: $body , userId: 1 };
    Form(method, url, data);
    $('#title').val('');
    $('#desc').val('');
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
      $('div#list').prepend('<h4>' + data.title +'</h4><p>' + data.body + '</p>');
    }else {
      console.log(data);
    }
  }

  
});
