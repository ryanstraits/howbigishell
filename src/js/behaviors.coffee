$ ->
  # Toggle something when a checkbox input is clicked
  $(".toggle input").click (e) ->
    div = $(this).parent().data('toggle-id')
    $(div + ' input').prop("checked", false) # uncheck all boxes
    $(div).toggleClass('hide')
    return

  # Uncheck all boxes if "none"
  $('.none-of-these input').click (e) ->
    $(this).closest('.quiz-box').find('input').prop("checked", false)
    $(this).prop("checked", true)
    return

  # Uncheck "none" if others selected"
  $('.checkbox-container input').click (e) ->
    unless $(this).parent().hasClass('none-of-these')
      $(this).closest('.quiz-box').find('.none-of-these input').prop("checked", false)


