function renderUserForm () {
  let form = `
  <div class='row'>
    <div class='col-md-10'>
       <input id ="name" name="name" type="text"/ class='col-md-12'>
    </div>
    <div class='col-md-2'>
      <button class='btn btn-default btn-sm'>Submit</button>
    </div>
  </div>
  `

  $('.user-form').append(form)
  $('.user-form').on('click', 'button', function (event) {
    $.ajax({
      url: `/users/`,
      type: 'POST',
      data: {name: $('#name').val()},
      success: function (user) {
        renderUserList()
      }
    })
  })
}
