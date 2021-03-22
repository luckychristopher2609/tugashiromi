$.getJSON(
 "https://mangamint.kaedenoki.net/api/manga/page/1",
 function(data){
     console.log(data);
     var icon = data.manga_list[0].thumb;
     var icon1 = data.manga_list[1].thumb;
     var icon2 = data.manga_list[2].thumb;
     var title = data.manga_list[0].title;
     var title1 = data.manga_list[1].title;
     var title2 = data.manga_list[2].title;
     var chapter = data.manga_list[0].chapter;
     var chapter1 = data.manga_list[1].chapter;
     var chapter2 = data.manga_list[2].chapter;

     var manga = data.manga_list;
    
     $(".icon").attr("src", icon);
     $(".icon1").attr("src", icon1);
     $(".icon2").attr("src", icon2);
     $(".title").append(title);
     $(".title1").append(title1);
     $(".title2").append(title2);
     $(".chapter").append(chapter);
     $(".chapter1").append(chapter1);
     $(".chapter2").append(chapter2);
     $(".popularmangatitle").append(manga[1].title);
     $(".popularmangatitle1").append(manga[4].title);
     $(".popularmangatitle2").append(manga[5].title);
     $(".popularmangaimg").attr("src", manga[3].thumb);
     $(".popularmangaimg1").attr("src", manga[4].thumb);
     $(".popularmangaimg2").attr("src", manga[5].thumb);
     $('.type').append(manga[3].type);
     $('.type1').append(manga[4].type);
     $('.type2').append(manga[5].type);
     $('.updatedon').append(manga[3].updated_on);
     $('.updatedon1').append(manga[4].updated_on);
     $('.updatedon2').append(manga[5].updated_on);
 }   
);

$.getJSON(
    "https://mangamint.kaedenoki.net/api/",
    function(data){
        console.log(data);

        $('.email').append(data.find_me_on.instagram);
        $('.github').append(data.find_me_on.github);
        $('.facebook').append(data.find_me_on.facebook);
    }   
   );