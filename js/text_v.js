jQuery($ => {
  let $doc = $(document);
  let $light = $('.content1');

  $(document).on('mousemove', e => {
    let pageX = e.pageX;
    let pageY = e.pageY;
   
    function setShadow($el) {
      let shadowMax = parseInt($el.css("font-size"), 10) / 10;
      let shadowMidPoints = [
        $el.offset().left + $el.width() / 2,
        $el.offset().top + $el.height() / 2
      ];
      let shadowX = ($doc.width() - pageX) / $doc.width() * -shadowMax /5;
      let shadowY = (shadowMidPoints[1] - pageY) / $doc.height() * shadowMax;
       $el.css('text-shadow', `${shadowX*-2}px ${shadowY*-2}px ${shadowMax/2}px rgba(255,255,255,.7)`);
     }
    
      $('.shadow').each(function(){
      let $this = $(this);
      setShadow($this);
    });
  });
});