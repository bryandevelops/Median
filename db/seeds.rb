# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Story.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('stories')

# USERS

User.create!(
  fullname: "Guest User",
  email: "guest_user@testing.com",
  password: "password"
)

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  name = "#{first_name} #{last_name}"

  User.create!(
    fullname: name,
    email: Faker::Internet.email(name: name, separators: '_' ),
    password: "#{name.split.join("").downcase}"
  )
end


# STORIES


# title = Faker::Hipster.sentence
# body = Faker::Hipster.paragraph_by_chars(characters: 25, supplemental: false)

# story = Story.new(
#   title: title,
#   body: body,
#   url: nil,
#   author_id: 1
# )

# photo = open("https://s3.amazonaws.com/median-aa-seeds/num1.jpg")

# story.photo.attach(io: photo, filename: "num1.jpg")
# story.save!

# https://www.cathryn-virginia.com/

