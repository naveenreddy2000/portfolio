
$(".centered").hide();

$("#img1").hover(function(){
    $("#img1").fadeTo(50,0.5);
    this.style.cursor="pointer";
    $("#txt1").show();
    $("#txt1").fadeTo(1,1);
  },function(){
    $("#img1").fadeTo(50,1);
    $("#txt1").hide();
    $("#txt1").fadeTo(1,0);
  });

$("#img2").hover(function(){
    $("#img2").fadeTo(50,0.5);
    this.style.cursor="pointer";
    $("#txt2").show();
    $("#txt2").fadeTo(1,1);
  },function(){
    $("#img2").fadeTo(50,1);
    $("#txt2").hide();
    $("#txt2").fadeTo(1,0);
  });

  $("#img3").hover(function(){
    $("#img3").fadeTo(50,0.5);
    this.style.cursor="pointer";
    $("#txt3").show();
    $("#txt3").fadeTo(1,1);
  },function(){
    $("#img3").fadeTo(50,1);
    $("#txt3").hide();
    $("#txt3").fadeTo(1,0);
  });