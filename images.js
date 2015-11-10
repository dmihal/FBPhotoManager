function loadImages() {
  var imgContainer = document.getElementById('images');
  FB.api('/me/photos', function(response) {
    for (var i = 0; i < response.data.length; i++) {
      var photo = response.data[i];
      var img = document.createElement('img');
      img.src = photo.picture;
      imgContainer.appendChild(img);
    };
  });
}
