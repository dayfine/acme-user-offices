function createOfficeList (offices) {
  return offices.map(office => `
      <li class='list-group-item'>
        <div class='row h2'>
          <div class='col-xs-10'>${office.name}</div>
          <div class='col-xs-2'>
            <button data-id='${office.id}' class='btn btn-warning btn-sm'>x</button>
          </div>
        </div>

        <div>${office.location}</div>
        <div>Phone: ${office.phone}</div>
        <div>${office.users.length} Users</div>
      </li>
    `)
}

function deleteOffice (id) {
  $.ajax({
    url: `/offices/${id}`,
    type: 'DELETE',
    success: function (id) {
      renderOfficeList()
    }
  })
}

function renderOfficeList () {
  $.get('/offices')
    .then(function (offices) {
      let officeList = $('.office-list')
      officeList.empty()
      createOfficeList(offices).forEach(el => { officeList.append(el) })
      offices.forEach(office => {
        let option = `<option value='${office.id}'>${office.fulladdress}</option>`
        $('.userOffice').each(function () { $(this).append(option) })
      })
    })
}
