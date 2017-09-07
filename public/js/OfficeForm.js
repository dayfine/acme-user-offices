function renderOfficeForm () {
  let form = `
  <div>
    <div class='row h5'>
      <div class='col-xs-2'>
        <label for='location'>Location</label>
      </div>
      <div class='col-xs-10'>
        <input class='col-xs-12' id ="location" name="location" type="text"/>
      </div>
    </div>
    <div class='row h5'>
      <div class='col-xs-2'>
        <label for='officename'>Name</label>
      </div>
      <div class='col-xs-7'>
        <input class='col-xs-12' id ="officename" name="officename" type="text"/>
      </div>
      <div class='col-xs-3'>
        <button class='btn btn-primary btn-sm pull-right'>Submit</button>
      </div>
    </div>
  </div>
  `

  $('.office-form').append(form)
  $('.office-form').on('click', 'button', function (event) {
    $.ajax({
      url: `/offices/`,
      type: 'POST',
      data: {name: $('#officename').val(), location: $('#location').val()},
      success: function (office) {
        renderOfficeList()
      }
    })
  })
}
