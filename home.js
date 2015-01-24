var angul=document.getElementById("hi");

function main()
{
    var a=document.getElementById("contact_us");
    if(a.offsetTop - window.pageYOffset ===612)
    {
        var b=document.getElementById("form");
            b.style.marginRight="-27%";
        var c=document.getElementById("add_info");
        c.style.marginLeft="-20%";
        var z=setInterval(function(){
            if(b.style.marginRight == "-1%")
                clearInterval(z);
            b.style.marginRight=parseFloat(b.style.marginRight)+1+"%";
        },10);
        
        var x=setInterval(function(){
            if(c.style.marginLeft == "2%")
                clearInterval(x);
            c.style.marginLeft=parseFloat(c.style.marginLeft)+1+"%";
        },15);
    }
     
    /* adding color to header elements*/
    var m1=document.getElementById("id_why_yoga");
    var m2=document.getElementById("id_why_yoga1");
    var m3=document.getElementById("id_why_yoga3");
    var m4=document.getElementById("id_why_yoga4");
    var navigation_el=document.getElementsByTagName('b');
    
    if(m1.offsetTop -window.pageYOffset<=740 && m1.offsetTop-window.pageYOffset>579)
    {
        navigation_el[0].style.color="red";
    }
    else{
        navigation_el[0].style.color="orange";
    }
    if( m1.offsetTop - window.pageYOffset <=580 && m1.offsetTop -window.pageYOffset>=-220)
    {
        navigation_el[1].style.color="red";
                       
    }
    else{
        navigation_el[1].style.color="orange";
    }
    
    if(m2.offsetTop -window.pageYOffset <=630 && m2.offsetTop - window.pageYOffset>=-490)
    {
        navigation_el[2].style.color="red";
    }
    else{
        navigation_el[2].style.color="orange";
    }
    
    if(m3.offsetTop -window.pageYOffset <=631 && m3.offsetTop - window.pageYOffset>=-209)
    {
        navigation_el[3].style.color="red";
    }
    else{
        navigation_el[3].style.color="orange";
    }
    
    if(m4.offsetTop -window.pageYOffset <=85 && m4.offsetTop - window.pageYOffset>=-475)
    {
        navigation_el[4].style.color="red";
    }
    else{
        navigation_el[4].style.color="orange";
    }
    
    /*text animation --why yoga?*/
    var m6=document.getElementById('id_why_yoga2');
    
    if(m1.offsetTop-window.pageYOffset <= 580 && m1.offsetTop - window.pageYOffset>=140)
    {
        $(m1).animate({'marginLeft':'35%',opacity:'1'},1000);
        
    }
    if(m2.offsetTop -window.pageYOffset <=630 && m2.offsetTop - window.pageYOffset>=-490)
    {
        $(m2).animate({'marginLeft':'34%',opacity:'1'},1000);
    }
    if(m3.offsetTop -window.pageYOffset <=631 && m3.offsetTop - window.pageYOffset>=-209)
    {
        $(m3).animate({'marginLeft':'35%',opacity:'1'},1000);
    }
    if(m6.offsetTop-window.pageYOffset<=600 && m6.offsetTop-window.pageYOffset>=120)
    {
        $(m6).animate({'marginLeft':'25%',opacity:'1'},1000);
    }
    if(m4.offsetTop -window.pageYOffset <=578 && m4.offsetTop - window.pageYOffset>=98)
    {
        $(m4).animate({'marginLeft':'20%',opacity:'1'},1000);
    }
    
    /* course animation*/
    
    var x1=document.getElementById("dd1");
    var x2=document.getElementById("dd2");
    var x3=document.getElementById("dd3");
    
    $(x1).hover(function(){
    $(x1).css('border','20px solid white');
    },function(){
    $(x1).css('border','0px solid white');
  });
    
    $(x2).hover(function(){
    $(x2).css('border','20px solid white');
    },function(){
    $(x2).css('border','0px solid white');
  });
    
    $(x3).hover(function(){
    $(x3).css('border','20px solid white');
    },function(){
    $(x3).css('border','0px solid white');
  });
    
    
/* teacher's course animation*/
    
    var y1=document.getElementById('month_1_course');
    var y2=document.getElementById('month_3_course');
    var y3=document.getElementById('month_7_course');
    var y4=document.getElementById('month_12_course');
    
   
     $(y1).hover(function(){
    $(y1).css('border','20px solid white');
    },function(){
    $(y1).css('border','0px solid white');
  });
    
     $(y2).hover(function(){
    $(y2).css('border','20px solid white');
    },function(){
    $(y2).css('border','0px solid white');
  });
    
     $(y3).hover(function(){
    $(y3).css('border','20px solid white');
    },function(){
    $(y3).css('border','0px solid white');
  });
    
     $(y4).hover(function(){
    $(y4).css('border','20px solid white');
    },function(){
    $(y4).css('border','0px solid white');
  });
    
   
    /*lightbox js*/
    
    
  $(document).ready(function(){
    $('.lightbox').click(function(){
        $('.backdrop,.box').fadeIn(1000);
        /*$('.box').animate({'opacity':'1.0'},30,'linear');*/
        $('.backdrop,.box').css('display','block');
       /* $("body").css("overflow","hidden");*/
    });
    
    $('.close').click(function(){
        close_box();
    });
    
    $('.backdrop').click(function(){
        close_box();
    });
  });
    
      function close_box()
    {
        $('.backdrop, .box').fadeOut(400,function(){
             $('.backdrop,.box').css('display','none');
            window.scrollTo(0,1688);
           /* $("body").css("overflow","visible");*/
        });
    }
    
    
    /* lightbox2*/
    $(document).ready(function(){
    $('.lightbox1').click(function(){
        $('.backdrop1,.box1').fadeIn(1000);
        
        $('.backdrop1,.box1').css('display','block');
    
    });
    
    $('.close1').click(function(){
        close_box1();
    });
    
    $('.backdrop1').click(function(){
        close_box1();
    });
  });
    
      function close_box1()
    {
        $('.backdrop1, .box1').fadeOut(400,function(){
             $('.backdrop1,.box1').css('display','none');
            window.scrollTo(0,1688);
        });
    }
    
    
    /* lightbox3*/
    $(document).ready(function(){
    $('.lightbox2').click(function(){
        $('.backdrop2,.box2').fadeIn(1000);
        
        $('.backdrop2,.box2').css('display','block');
    
    });
    
    $('.close2').click(function(){
        close_box2();
    });
    
    $('.backdrop2').click(function(){
        close_box2();
    });
  });
    
      function close_box2()
    {
        $('.backdrop2, .box2').fadeOut(400,function(){
             $('.backdrop2,.box2').css('display','none');
            window.scrollTo(0,1688);
        });
    }    
    
    /* our team animation*/
    
    var pic1=document.getElementById("founder_pic");
    var pic2=document.getElementById("president_pic");
    var pic3=document.getElementById("director_pic");
    var logo1=document.getElementById("follow_founder");
    var logo2=document.getElementById("follow_president");
    var logo3=document.getElementById("follow_director");
    var fb_logo=document.getElementById("fb_logo");
    var tw_logo=document.getElementById("tw_logo");
    var google_logo=document.getElementById("google_logo");
    var fb_logo1=document.getElementById("fb_logo1");
    var tw_logo1=document.getElementById("tw_logo1");
    var google_logo1=document.getElementById("google_logo1");
    var fb_logo2=document.getElementById("fb_logo2");
    var tw_logo2=document.getElementById("tw_logo2");
    var google_logo2=document.getElementById("google_logo2");
    
    $(pic1).hover(function(){
        $(pic1).animate({'opacity':'1'},100);
        $(logo1).fadeIn(1000);
    },function(){
        $(pic1).animate({'opacity':'.6'},100);});
    
    $(pic2).hover(function(){
        $(pic2).animate({'opacity':'1'},100);
        $(logo2).fadeIn(1000);
    },function(){
        $(pic2).animate({'opacity':'.6'},100);});
    
    $(pic3).hover(function(){
        $(pic3).animate({'opacity':'1'},100);
        $(logo3).fadeIn(1000);
    },function(){
        $(pic3).animate({'opacity':'.6'},100);});
    
    
    $(fb_logo).hover(function(){
        $(fb_logo).animate({'opacity':'1'},100);
    },function(){
        $(fb_logo).animate({'opacity':'0.6'},100);
    });
    
    $(tw_logo).hover(function(){
        $(tw_logo).animate({'opacity':'1'},100);
    },function(){
        $(tw_logo).animate({'opacity':'0.6'},100);
    });
    
    $(google_logo).hover(function(){
        $(google_logo).animate({'opacity':'1'},100);
    },function(){
        $(google_logo).animate({'opacity':'0.6'},100);
    });
    
    
     $(fb_logo1).hover(function(){
        $(fb_logo1).animate({'opacity':'1'},100);
    },function(){
        $(fb_logo1).animate({'opacity':'0.6'},100);
    });
    
    $(tw_logo1).hover(function(){
        $(tw_logo1).animate({'opacity':'1'},100);
    },function(){
        $(tw_logo1).animate({'opacity':'0.6'},100);
    });
    
    $(google_logo1).hover(function(){
        $(google_logo1).animate({'opacity':'1'},100);
    },function(){
        $(google_logo1).animate({'opacity':'0.6'},100);
    });
    
    
     $(fb_logo2).hover(function(){
        $(fb_logo2).animate({'opacity':'1'},100);
    },function(){
        $(fb_logo2).animate({'opacity':'0.6'},100);
    });
    
    $(tw_logo2).hover(function(){
        $(tw_logo2).animate({'opacity':'1'},100);
    },function(){
        $(tw_logo2).animate({'opacity':'0.6'},100);
    });
    
    $(google_logo2).hover(function(){
        $(google_logo2).animate({'opacity':'1'},100);
    },function(){
        $(google_logo2).animate({'opacity':'0.6'},100);
    });
    
        
 
        
    
    
    
        
}
window.onscroll=main;


    
        










