$(function() {
          
var final_string = "";
var url_scheme = window.location.href.split("?")[1].split("#");
var story = url_scheme[0].replace(/%20/g, " ");
var xml_file = url_scheme[1];
    
$.ajax({
    
       type: "GET",
	   url: "data/" + xml_file + ".xml",
	   dataType: "xml",
	   success: function(xml) {
           
           $(xml).find('entry').each(function(){

               var title = $(this).find('title').text();
               
               if (title == story) {
               
                    var content = $(this).find('content').text().replace(/\\n/g, "</p><p>");
                    var date = $(this).find('date').text();
               
                    var image_string = "";
                    var video_string = "";
                   
                    var image_name = $(this).find('image').text();
                    var video_link = $(this).find('video').text();
                   
                    if (image_name.length > 0)
                       image_string = "<img src=\"" + image_name + "\" width=\"65%\" class=\"image_border\">";
                   
                    if (video_link.length > 0)
                       video_string = "<br><center><video width=\"65%\" class=\"image_border\" controls><source src=\"" + video_link + "\" type=\"video/mp4\"></video></center>";
                    
                    final_string = final_string + "<div class=\"logan_blurb\"><div class=\"logan_blurb_header\">" + title + "</div>" + image_string + video_string + "<p>" + content + "</p><div class=\"date\">" + date + "</div></div>";
                   
                   $('title').html(title);
                   
               }
               
           });
           
           $('#blogentry').html(final_string);   
           
	   }
    
    });
    
    
});