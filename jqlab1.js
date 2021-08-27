$('p:eq(1)').attr('id', 'mhh');
$('#fp').remove();
$('#fdiv').css(
    {
        backgroundColor: 'grey',
        color: 'white'
    }
);

$(':button').click(function() {
    $('#mhh').append('<p id="tp">Hello world!</p>')
});

$('#4p').hide();

$('#sdiv').hover(
        function () {
          $('#4p').text('About to select a link ...').show();
        }, 
        function () {
          $('#4p').hide();
        }
      );