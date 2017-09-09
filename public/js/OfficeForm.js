function renderOfficeForm () {
  function AddOfficeForm () {
    let form = `
    <div>
      <div class='row h5'>
        <div class='col-xs-3'>
          <label for='location'>Location</label>
        </div>
        <div class='col-xs-9'>
          <input class='col-xs-12' id ="location" name="location" type="text"/>
        </div>
      </div>
      <div class='row h5'>
        <div class='col-xs-3'>
          <label for='officename'>Name</label>
        </div>
        <div class='col-xs-6'>
          <input class='col-xs-12' id ="officename" name="officename" type="text"/>
        </div>
        <div class='col-xs-3'>
           <button class='btn btn-primary btn-sm pull-right'>Submit</button>
        </div>
      </div>
    </div>
    `
    $('.office-form').empty()
    $('.office-form').append(form)
  }

  AddOfficeForm()

  let loc = {}
  let elem = $('#location')[0]
  const autocomplete = new google.maps.places.Autocomplete(elem)

  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace()
    console.log(place)
    console.log(place.geometry)
    loc = {
      address: place.formatted_address,
      location: [place.geometry.location.lat(), place.geometry.location.lng()]
    }
  })

  $('.office-form').on('click', 'button', function (event) {
    $.ajax({
      url: `/offices/`,
      type: 'POST',
      data: {
        name: $('#officename').val(),
        address: loc.address,
        location: loc.location
      },
      success: function (office) {
        renderOfficeList()
      }
    })
  })
}
