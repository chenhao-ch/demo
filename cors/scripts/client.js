(function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.server.com/demo/cors/data.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = xhr.responseText;
      console.info("response Data %O", data);
      throw new Error("client.js load server data error");
    }
  };
  xhr.send();
})();
