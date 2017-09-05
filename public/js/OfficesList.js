function createOfficeList (offices) {
  return offices.map(office => `
      <li class='list-group-item'>
        <div class='row h2'>
          <div class='col-md-10'>${office.name}</div>
          <div class='col-md-2'>
            <div data-id='${office.id}' class='btn btn-warning btn-sm'>x</div>
          </div>
        </div>

        <div>${office.location}</div>
        <div>Phone: ${office.phone}</div>
        <div>${office.users.length} Users</div>
      </li>
    `)
}

function deletOffice (id) {
  $.get('/offices')
    .then(function (offices) {
      let officeList = $('.office-list')
      createOfficeList(offices).forEach(el => officeList.append(el))
    })
}

function renderOfficeList () {
  $.get('/offices')
    .then(function (offices) {
      let officeList = $('.office-list')
      createOfficeList(offices).forEach(el => officeList.append(el))
    })
}
