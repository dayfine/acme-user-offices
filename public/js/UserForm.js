function renderUserForm () {
  let form = `
  <div>
    <div class='row h5'>
      <div class='col-md-12'>
      <input class='col-md-12' id ="username" name="username" type="text"/>
      </div>
    </div>
    <div class='row h5'>
    <div class='col-md-12'>
      <label for='title'>Title</label>
      <select class='custom-select' id='title' name='title'>
         <option>Choose...</option>
         <option value='Intern'>Intern</option>
         <option value='Associate'>Associate</option>
         <option value='Sr. Associate'>Sr. Associate</option>
         <option value='Manager'>Manager</option>
         <option value='Director'>Director</option>
         <option value='Managing'>Managing Director</option>
      </select>
      <button class='btn btn-primary btn-sm pull-right'>Submit</button>
    </div>
    </div>
  </div>
  `

  $('.user-form').append(form)
  $('.user-form').on('click', 'button', function (event) {
    $.ajax({
      url: `/users/`,
      type: 'POST',
      data: {name: $('#username').val(), title: $('#title').val()},
      success: function (user) {
        renderUserList()
      }
    })
  })
}
