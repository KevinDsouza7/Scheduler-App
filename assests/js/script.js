$(function () {
  displayCurrentDay();
  generateTimeBlocks();
  loadEvents();
  

  $('.container').on('click', '.saveBtn', function () {
    var hour = $(this).data('hour');
    saveEvent(hour, $('#hour-' + hour).val());
    updateColors();
  });
});

function displayCurrentDay() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
}

function generateTimeBlocks() {
  var container = $('.container');
  for (var hour = 9; hour <= 17; hour++) {
    var timeBlock = $('<div>').addClass('time-block row');
    timeBlock.append(
      $('<div>').addClass('hour col-md-1').text(getFormattedHour(hour)),
      $('<textarea>').addClass('description col-md-10').attr('id', 'hour-' + hour),
      $('<button>').addClass('saveBtn col-md-1').attr('data-hour', hour).html('<i class="fas fa-save"></i>')
    );
    container.append(timeBlock);
  }
}

function getFormattedHour(hour) {
  return dayjs().hour(hour).format('hA');
}

function loadEvents() {
  for (var hour = 9; hour <= 17; hour++) {
    var savedEvent = localStorage.getItem('event-' + hour);
    if (savedEvent) {
      $('#hour-' + hour).val(savedEvent);
    }
  }
}

