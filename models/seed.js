module.exports = (User) => {
  return Promise.all([
    User.create({
      name: 'Nate River',
      title: 'Director',
      office: {
        name: '575 Fifth Ave',
        address: '575 5th Ave',
        city: 'New York',
        state: 'NY',
        zip: '10017',
        phone: '646-867-2613',
        location: [40.756405, -73.978249]
      }
    }),
    User.create({
      name: 'Mihael Keehl',
      title: 'Director',
      office: {
        name: '115 Broadway',
        address: '115 Broadway Street',
        city: 'New York',
        state: 'NY',
        zip: '10006',
        phone: '855-593-8765',
        location: [40.724904, -74.016370]
      }
    }),
    User.create({
      name: 'L Lawliet',
      title: 'Managing Director',
      office: {
        name: '205 Hudson',
        address: '205 Hudson St',
        city: 'New York',
        state: 'NY',
        zip: '10013',
        phone: '855-593-9675',
        location: [40.723739, -74.008115]
      }
    })
  ])
  .then(users => users)
}
