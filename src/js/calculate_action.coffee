$ ->
  # $('#calculate').on 'click', ->
  #   blocks_array = []
  #   denoms_array = []
  #   $("#question-first input:checked").each( ->
  #     blocks_array.push($(this).val())
  #   )
  #   $("#question-second input:checked").each( ->
  #     denoms_array.push($(this).val())
  #   )

  #   calc = new Calculate(blocks_array, denoms_array)
  #   console.log calc.whosSafe()


    # $.post('/calculate', $('#quiz').serialize())
    #   .done (data) ->
    #     $('#result').html data
    #     scroll_to('#result')
    #     return

  $(document).on 'click', '#retake', (event) ->
    $('#quiz').trigger('reset')
    $('#question-second').addClass('hide')
    scroll_to('#question-first')
    return