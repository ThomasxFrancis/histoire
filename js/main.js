$(document).ready(function() {
  var $itemsWrap = $('.items');
  var $items = $itemsWrap.find('.item');
  var $slider = $('.slider');
  var itemsWrapWidth = $items.length * 100;
  var minSliderValue = -(itemsWrapWidth - 100);

  $slider
    .attr('min', minSliderValue)
    .val(minSliderValue);

  $itemsWrap.css({
    width: itemsWrapWidth + 'vw',
    left: minSliderValue + 'vw'
  })

  $slider.on('input', function() {
    $itemsWrap.css('left', this.value + 'vw');
  });
})
