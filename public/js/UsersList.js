function createUserList (users) {
  return users.map(user => `
      <li class='list-group-item'>
      <div class='row'>
        <div class='col-md-4 h4'>
          ${user.name}
        </div>
        <div class='col-md-6'>
          <div class='btn btn-success btn-sm'>${user.title}</div>
        </div>
        <div class='col-md-2'>
          <button data-id='${user.id}' class='btn btn-warning btn-sm pull-right'>x</button>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-4'>
          <label class='pull-right' for='userOffice'>Working at</label>
        </div>
        <div class='col-md-8'>
          <select class='custom-select col-md-12 userOffice' name='userOffice'></select>
        </div>
      </div>
      </li>
    `)
}

function deleteUser (id) {
  $.ajax({
    url: `/users/${id}`,
    type: 'DELETE',
    success: function (id) {
      renderUserList()
    }
  })
}

function updateUserOffice (id) {
}

function renderUserList () {
  $.get('/users')
    .then(function (users) {
      let userList = $('.user-list')
      userList.empty()
      createUserList(users).forEach(el => userList.append(el))
    })
}
