$(function () {
  renderUserList()
  renderOfficeList()
  $('.user-list').on('click', 'button', function (event) {
    let id = $(this).data('id')
    deleteUser(id)
  })
  $('.office-list').on('click', 'button', function (event) {
    let id = $(this).data('id')
    deleteOffice(id)
  })
})
