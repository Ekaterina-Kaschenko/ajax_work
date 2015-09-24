  
  $.ajax({
    url: 'http://ekaterina-kaschenko.github.io/AJAX/index1.html',
    success: function(data) {
     $(document.body).append(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
  
    $.ajax({
    url: 'http://ekaterina-kaschenko.github.io/AJAX/index2.html',
    success: function(data) {
     $(document.body).append(data);
    },
    error: function(data) {
      console.log(data);
    }
  });

      $.ajax({
    url: 'http://ekaterina-kaschenko.github.io/AJAX/index3.html',
    success: function(data) {
     $(document.body).append(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
  //   $.ajax({
  //   dataType: 'json',
  //   url: 'json/script2.json',
  //   success: function(data) {
  //     $(document.body).append(data)},
  //   error: function(data) {
  //     console.log(data)
  //   }
  // });

  //   $.ajax({
  //   dataType: 'json',
  //   url: 'json/script3.json',
  //   success: function(data) {
  //     $(document.body).append(data)
  //   },
  //   error: function(data) {
  //     console.log(data);
  //   }
  // });

  //   var firstImg = document.createElement('img');
  //   document.body.appendChild(firstImg);
  //   firstImg.style.width = "200px";
  //   firstImg.style.height = "auto";
  //   firstImg.style.float = "left";
  //   firstImg.style.marginRight = "20px";
  //   firstImg.setAttribute('src', 'img/js1.jpg');

  //   var secondImg = document.createElement('img');
  //   document.body.appendChild(secondImg);
  //   secondImg.style.width = "200px";
  //   secondImg.style.height = "auto";
  //   secondImg.style.float = "left";
  //   secondImg.style.marginRight = "20px";
  //   secondImg.setAttribute('src', 'img/js2.png');

  //   var thirdImg = document.createElement('img');
  //   document.body.appendChild(thirdImg);
  //   thirdImg.style.width = "200px";
  //   thirdImg.style.height = "auto";
  //   thirdImg.style.float = "left";
  //   thirdImg.style.marginRight = "20px";
  //   thirdImg.setAttribute('src', 'img/js3.jpg');