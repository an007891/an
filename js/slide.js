//whole 메뉴 열고닫기
function whole_menu_box(i){
  var calDiv = jQuery("#whole_menu_box");
  if(i == 1){
   calDiv.show().animate({top:50},1000)
  }else{
   calDiv.animate({top:-400},1000,function(){
    calDiv.hide();
   })
  }
 }