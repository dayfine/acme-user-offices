function createUserList (users) {
  return users.map(user => `
      <li class='list-group-item'>
      <div class='row'>
        <div class='col-md-4 h4'>
          ${user.name}
        </div>
        <div class='col-md-6'>
          <button class='btn btn-success btn-sm'>${user.title}</button>
        </div>
        <div class='col-md-2'>
          <div data-id='${user.id}' class='btn btn-warning btn-sm pull-right'>x</div>
        </div>
      </div>
      <div class='row'>
        <div class='col-md-12'>
          <select class='col-md-12'></select>
        </div>
      </div>
      </li>
    `)
}

function renderUserList () {
  $.get('/users')
    .then(function (users) {
      let userList = $('.user-list')
      createUserList(users).forEach(el => userList.append(el))
    })
}
