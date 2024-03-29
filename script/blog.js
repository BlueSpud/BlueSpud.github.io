$(function() {

var final_string = "";
var xml_file = window.location.href.split("?")[1];

$.ajax({

       type: "GET",
	   url: "data/" + xml_file + ".xml",
	   dataType: "xml",
	   success: function(xml) {

           $(xml).find('entry').each(function(){

                var title = $(this).find('title').text();
                var preview = $(this).find('preview').text();
                var date = $(this).find('date').text();

                var image_string = "";
                var video_string = "";

                var image_name = $(this).find('image').text();
                var video_link = $(this).find('video').text();

                if (image_name.length > 0)
                  image_string = "<img src=\"" + image_name + "\" class=\"image_border image_width\">";

                  if (video_link.length > 0)
                     video_string = "<br><center><video class=\"image_border image_width\" controls><source src=\"" + video_link + "\" type=\"video/mp4\"></video></center>";

                final_string = final_string + "<div class=\"logan_blurb\"><div class=\"logan_blurb_header\">" + title + "</div>" + image_string + video_string + "<p>" + preview + "...</p><a href=\"blogpage.html?" + title + "#" + xml_file + "\"> Continue Reading</a><div class=\"date\">" + date + "</div></div>";

           });

           $('#blog').html(final_string);

	   }

    });




});
