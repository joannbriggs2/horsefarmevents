# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.create([
  { name: 'Frazier Farm', 
    address: '35 Middle Road Tpke Woodbury, Connecticut', 
    email: 'corinne@frazierfarmct.com',
    phone: '(203) 263-2627',
    contact: 'Corinne Gagnon',
    website: 'http://frazierfarmct.com'},
    {name: 'Sperry View Farm', 
    address: '91 Bethway Rd Bethany, Connecticut', 
    email: '',
    phone: '(203) 915-8293',
    contact: 'Vicki Hammers-O’Neil',
    website: 'http://sperryviewfarm.com'},
    {name: 'Mountain Valley Equestrian Center', 
    address: '235 East Flat Hill Road, Southbury, CT 06488', 
    email: 'Kate.Hornbecker@gmail.com',
    phone: '(203) 509-9060',
    contact: '',
    website: 'https://mountainvalleyequestriancenter.com'},
    {name: 'Fox Crossing Equestrian', 
    address: '210 South Street PO Box 221 Morris, CT 06763', 
    email: '',
    phone: '(860) 567-1788',
    contact: 'Cindy Italiaander',
    website: 'http://www.foxcrossingequestrian.com'},
    

])
