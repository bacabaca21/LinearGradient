$(document).ready(function() {



var cssPopis = $('h3'),
      color1 = $('.color1'),
      color2 = $('.color2'),
        body = $('#gradient'),
      button = $('button');
 

$('h3').show(setGradient);

function linearGradient() {

       background = body.css({
              background : 'linear-gradient(to right, ' 
                          + color1.val()+ ',' 
                          + color2.val()+ ')'
               });
      cssPopis.text( body.attr('style') );
};


function colorChange () {

      color1 = color1.attr("value","#"+Math.floor(Math.random() * 0x1000000).toString(16));
      color2 = color2.attr("value","#"+Math.floor(Math.random() * 0x1000000).toString(16));
      linearGradient();
};

function setGradient() {
      linearGradient();
};

button.on('click', colorChange);
button.on('click', colorChange);
color1.on('input', setGradient);
color2.on('input', setGradient);
  




























});