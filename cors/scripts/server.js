
(function() {
  // server域名下的js
  // console.log('[server]: ', 'js运行开始.');
  // throw new Error("server.js run error");
  // console.log('[server]', 'js运行结束.');

  ///////////////////////////
  // file
  var $ = function (id) {
    return document.getElementById(id);
  };

  var file = $('file');
  file.addEventListener('change', function (e) {
    var files = e.target.files;
    for(var i = 0, f; f = files[i]; i++) {
      // if() {
      //
      // }
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log('file: \n', e.target.result.split('\n')[0]);
      }
      reader.readAsText(f);
    }
  });

  ////////////////////////
  // image
  var canvas = $('canvas');
  var ctx = canvas.getContext('2d');

  var image = new Image();
  // image.src = 'http://www.client.com/demo/cors/images/img.jpg';
  image.src = 'http://www.server.com/demo/cors/images/img.jpg';

  image.onload = function () {
    ctx.drawImage(image, 0, 0);
    var imageData = canvas.toDataURL('image/jpg');

    console.log('imageData: \n', imageData);
  };


})();
