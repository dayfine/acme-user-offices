$(function () {
  renderUserList()
  renderUserForm()
  renderOfficeList()
  renderOfficeForm()

  $('.user-list').on('click', 'button', function (event) {
    let id = $(this).data('id')
    deleteUser(id)
  })
  $('.office-list').on('click', 'button', function (event) {
    let id = $(this).data('id')
    deleteOffice(id)
  })
})
