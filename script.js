$(document).ready(function(){
    $("#infoBtn").hover(
        function(){
            $(this).css("color","blue");
            $("#info").toggle();
        },
        function(){
            $(this).css("color","black");
            $("#info").toggle();
        });
});

function toggleID(id){
	$("#"+id).toggle();
}