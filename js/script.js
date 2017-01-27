/**
 * Created by Katsiaryna on 27/01/2017.
 */
$(document).ready(function(){

    $(".log-in-button").click(function(){
        var top=$(this).position().top;
        $(".log-in-pop-up").css({top: top+25, right: 0}).toggle();
    });

});

