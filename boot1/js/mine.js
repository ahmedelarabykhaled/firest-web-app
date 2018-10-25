var img = document.getElementById("img");

var reach = true;

$(window).scroll(function(){
    var x = $(window).scrollTop();
console.log(x); 
    if(x>1000 & reach == true)
        {
            reach = false;
            var i = 0;
            var l = 0;
            var j = 0;
            var m = 0;
            var t =  setInterval(function(){
                $("#like").html(i);
                if(i < 973)
                    {
                        i+=5;
                    }
                $("#home").html(j);
                if(j < 573)
                    {
                        j+=5;
                    }
                $("#comment").html(l);
                if(l < 373)
                    {
                        l+=5;
                    }
                $("#bulb").html(m);
                if(m < 1273)
                    {
                        m+=5;
                    }

            }, 10);
        }
    
    
    if(x > 20)
        {
            $("nav").css("backgroundColor","white");
            $("nav").css("height","60px");
            img.innerHTML = "<img src='boot1/images/logo-dark.png' class='ml-5'/>"
            $(".bt").css("backgroundColor","green");
            $(".bt").css("color","white");
            $(".navbar-light .navbar-nav .nav-link").css("color","black");
            $(".navbar-nav").css("margin-top","0px");
            $(".bt").hover(function(){
                $(this).css("backgroundColor","white");
                $(this).css("color","green");
            },function(){
                $(".bt").css("backgroundColor","green");
            $(".bt").css("color","white");
            })
        }
    if(x < 20)
        {
            $("nav").css("backgroundColor","transparent");
            $("nav").css("height","80px")
            img.innerHTML = "<img src='boot1/images/logo-light.png' class='ml-5'/>";
            $(".bt").css("backgroundColor","white");
            $(".bt").css("color","green");
            $(".navbar-light .navbar-nav .nav-link").css("color","white");
            $(".navbar-nav").css("margin-top","0px");
            $(".bt").hover(function(){
                $(this).css("backgroundColor","green");
                $(this).css("color","white");
            },function(){
                $(".bt").css("backgroundColor","white");
            $(".bt").css("color","green");
            })
        }    
})

