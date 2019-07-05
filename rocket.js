$(document).ready(function() {
    x = $("#lol").position().left;
    y = $("#lol").position().top;
    
    $("#lol").css({top: y, left: x})

    $("#lol").on("click", function(event){
        setInterval(function(){
            if(y>0){
                $("#lol").css({top: y--, left: x++ });
            } else if( $("#fail").length==0){
                window.location.href = "index.html";
            } else {
                window.location.href = "index2.html";
            }

        }, 10);
    });
});
 