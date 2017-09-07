function createUserList (users) {
  return users.map(user => `
      <li class='list-group-item'>
      <div class='row'>
        <div class='col-xs-4 h4'>
          ${user.name}
        </div>
        <div class='col-xs-6'>
          <div class='btn btn-success btn-sm'>${user.title}</div>
        </div>
        <div class='col-xs-2'>
          <button data-id='${user.id}' class='btn btn-warning btn-sm pull-right'>x</button>
        </div>
      </div>
      <div class='row'>
        <div class='col-xs-4'>
          <label class='pull-right' for='userOffice'>Working at</label>
        </div>
        <div class='col-xs-8'>
          <select data-id='${user.id}' class='custom-select col-xs-12 userOffice' name='userOffice'></select>
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

function updateUserOffice (userId, officeId) {
  $.ajax({
    url: `/users/${userId}`,
    type: 'PUT',
    data: {officeId},
    success: function (id) {
      renderUserList()
      renderOfficeList()
    }
  })
}

function renderUserList () {
  $.get('/users')
    .then(function (users) {
      let userList = $('.user-list')
      userList.empty()
      createUserList(users).forEach(el => userList.append(el))
    })
}
