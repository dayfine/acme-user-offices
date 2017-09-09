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
  $('.user-list').on('change', 'select', function (event) {
    let userId = $(this).data('id'), officeId = $(this).val()
    updateUserOffice(userId, officeId)
  })

  /**
   * TO DOs
   * - get autocomplete and office form to work
   * - make option selected for user's office
   * - look into the problem where options disappear
   *
   */
})
