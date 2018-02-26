$(function() { 
    
    var index = 0;
    var size = 7;
    
    var step = 100 / size;
    
    var colors = ["#D73131", "black", "#FA1159", "#FF162E", "#0068FF", "#2BB651", "#191919"];
    var pages = ["iteachyou.html", "spud.html?spud", "yip.html", "firestat.html", "donutfighter.html", "warriorsvoice.html", "routes.html"];
    
    $("#carousel_content").css("width", size + "00%");
    
    
    var hide_click_interval = setInterval(function () {
        
            $("#click_more").animate({opacity : '0.0', bottom : '20pt'}, 200);
        
        }, 2000); 
    
    function goToIndex(_index) {
        
        index = _index;
        
        $("#carousel_content").css("transform","translate3d(" + (index * -step) + "%, 0.0, 0.0)");
        $("#carousel_content").css("background-color", colors[index]);
        
        clearInterval(hide_click_interval);
        $("#click_more").animate({opacity : '1.0', bottom : '60pt'}, 100);
        
        hide_click_interval = setInterval(function () {
        
            $("#click_more").animate({opacity : '0.0', bottom : '20pt'}, 200);
        
        }, 2000); 
        
    }
    
    $("#carousel_content").click(function() { 
        
        location.href = pages[index];
       
    }); 
    
    var buttons = [];
    
    $("#forward_button").click(function() { 
        
        if (index + 1 == size)
            goToIndex(0);
        else goToIndex(index + 1);
        
        last_button.css("opacity", "0.5");
        last_button = buttons[index];
        last_button.css("opacity", "1.0");
       
    }); 
    
    $("#back_button").click(function() { 
        
        if (index == 0)
            goToIndex(size - 1);
        else goToIndex(index - 1);
        
        last_button.css("opacity", "0.5");
        last_button = buttons[index];
        last_button.css("opacity", "1.0");
       
    }); 
    
    
    var final_string = "";
    
    for (var i = 0; i < size; i++) {
        
        final_string = final_string + "<th><center><div class=\"tab\" id=\"tab_" + i + "\"></div></center></th>";
        
    }
    
    $("#tabs").html(final_string);
    
    var last_button = $("#tab_0");
    last_button.css("opacity", "1.0");
    
    for (var i = 0; i < size; i++) {
        
        buttons.push($("#tab_" + i));
        
         $("#tab_" + i).click(function() { 
             
             last_button.css("opacity", "0.5");
             last_button = $(this);
             last_button.css("opacity", "1.0")
             
             var num = $(this).attr('id').replace("tab_", "");
             goToIndex(parseInt(num));
             
         });
        
    }
    
    
});
