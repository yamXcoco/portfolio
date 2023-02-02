jQuery(document).ready(function(){
   $('h3').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h3').css('text-shadow', +rYP/10+'px '+rXP/80+'px  rgba(0,159,227,.2), '+rYP/6+'px '+rXP/40+'px rgba(227,6,19,.2) , '+rXP/70+'px '+rYP/12+'px rgba(255,237,0,.8)');
   });
});
