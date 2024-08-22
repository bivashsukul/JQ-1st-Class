$(document).ready(function(){

// ! mouseover, mouseout

// *ex1 show alert----------------
$('#btn1').on('click',function(){
alert('Hello');
})


// *ex=2 show /hide element----------------
$('#btnhi').on('click',function(){
  $('.text1').hide();
  })
$('#btnsh').on('click',function(){
  $('.text1').show();
  })
$('#btntog').on('click',function(){
  $('.text1').toggle();
  })

// *ex=3 show /hide element----------------
$('#btndi').on('click',function(){
  $('#div1').toggle(1000,function()
  {
    alert('finished')
  });
  })


// *ex=4 show /hide element----------------
$('#progres').on('click',function(){
  $('#idDi').toggle(3000,function(){
  });
  })

// * ex 5---------------
$('#textCh').on('click',function(){
$('h1').text('Hello')
})


// * ex = 6---------------
$('#textC').on('click',function(){
  $('.my-div,#h22,.my-para').html('<b>Hello</b>')
  })
  

// * ex =7 --------------
$('#appe').on('click',function(){
  $('#app').append(' [Nepal, India]')
  })
  

// * ex =8 --------------
$('#pre').on('click',function(){
  $('#pree').prepend(' [Nepal, India] ')
  })
  

// * ex =9 --------------
$('#befo').on('click',function(){
  $('#befor').before(myPara)
  })
  
var myPara=$('<p></p>').text('Bangladesh is a small Country .');


// * ex = 10 --------------
$('#aft').on('click',function(){
  $('#afte').after(myParag)
  })
  
var myParag=$('<p></p>').text('Bangladesh is a small Country .');

// * ex = 11 --------------
$('#attr').on('click',function(){
  $("a").attr("href", "https://jquery.com/");
  })
  
// * ex = 12 --------------
$('#sty').on('click',function(){
  /*$('.head').css("color","red")
  $('.head').css("fontSize","30px")
  $('.head').css("font-style","italic")*/
  //$('.head').css({"color":"yellow","fontSize":"30px","font-style":"italic"})
  $('.head').addClass("headdin headdin2")//css class add
  })
  
// * ex = 13 --------------
$('#eve').on('click',function(){
  $('.event').text("Amar Sonar Bangla")
  })
  

// * ex = 14--------------
$('#toogl').on('click',function(){
  $('.to').toggleClass("toogleclass")
  })
  


// * ex = 15--------------
$('#fadei').on('mouseover',function(){
  $('.fadei').fadeIn(3000)
  })
  
// * ex = 16--------------
$('#fadeou').on('mouseover',function(){
  $('.fadeo').fadeOut(3000)
  })
  
// * ex = 17--------------
$('#fadetogg').on('click',function(){
  $('.fadetog').fadeToggle(3000)
  })

// * ex = 18--------------
$('#slidu').on('click',function(){
  $('.my_div1').slideUp(3000)
  })

// * ex = 19--------------
$('#slidtogg').on('click',function(){
  $('.my_div2').slideUp(1000).delay(2000).slideDown(1000)
  })

// * ex = 20--------------
$('#anim').on('click',function(){
  $('.my_div3').animate({
    height:"200px",
    width:"550px",
    padding:"50px",
    marginLeft:"20px"
  },2000)

  })


// * ex = 21--------------
$("#jsprep").on('click',function(){
  $('#cofee').animate({
    opacity:0.20,
    left:"+50px",
    height:"toggle"
  },2000,function(){
    alert("complet");
  })
})

// * ex = 22--------------

// $( "#check1" ).on( "change", function() {
//     var $input = $( this );
//     $( "p" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
//       ".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
//       ".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
//   } )
//   .trigger( "change" );

// *ex 22
$('#dive').on("mouseover",function(){
  $('.divone').hide(2000);
})



// *ex 22
$('#dive').on("mouseover",function(){
  $('.divone').hide(2000);
})


// *ex = 23--------------
$('#divee').on("click",function(){
  $("h4").on("click",function(){
    $(this).hide();
  })

})

// *ex = 24--------------
$('#divee1').on("click",function(){
 $('.m_div1 p.lorem1').css({
  color:"red",
  fontSize:"25px",
 });
})


// *ex = 25--------------
$('#del').on("click",function(){
  $(idiv).hide().delay(1000).show(100);
 })
 
// *ex = 26--------------
$('#dell').on("click",function(){
  $('#idiv1').hide().delay(1000 ).show(100).delay(2000).slideUP(1000);
 })
 

// *ex=27 show /hide element----------------
$('#progres').on('click',function(){
  $('#idDiv').toggle(3000,function(){

  })
  $("#progres").val(ms);
  $("#proTime").val(prog);
  })

// *ex=28 show /hide element----------------
$('#ban').on('click',function(){
  $('.htm').html()
})

// *ex=29 show /hide element----------------
$('#ban1').on('click',function(){
  $('.htm1').html(function(index, oldContent){
    alert(oldContent);
    return "Bangladesh Is a Small Country"
  })
})
  


// *ex=30 show /hide element----------------
$('#text1').on('click',function(){
  $('.tex1').text("jon live in Bangladesh")
})
  
// *ex=31 show /hide element----------------
$('#text1').on('click',function(){
  $('.tex1').text("jon live in Bangladesh")
})
  

// *ex=32 dropdown----------------
$('#drop1').on('click',function(){
  $("#sel").text();
  alert ($("#sel").text());
})
$('#drop2').on('click',function(){
  alert ($("#sel :selected").text());
})

















































































































































  








//====================== CALCULATOR =======================
// * ex = calculator--------------

$('.calc_body .btn').on('click',function(calcuNumber){
  // $('.my_div3').animate({
  // alert("h")
  function calcuNumber(number){
    var calcuNumbers=$("result").val();
    $("#result").val(calcuNumbers + number)
  }
  })






// * ex = 14-================  FORM   =================
$('#loginbutt').on('click',function(){
  var password1 = $("#pass1").val();
  var password2 = $("#pass2").val();

  if(password1!="" && password2!=""){
    

    if(password1===password2){
      alert("successfully loging")
    }
    else{
     alert("Enter Currect password")
    }



  }else{
    alert("Please Eanter Password")
  }

  })
  

  // !  END------------
  });