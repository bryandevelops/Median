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

story1 = Story.create!(
  title: "To be, or not to be: that is the question.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)
photo1 = open("https://median-aa-seeds.s3.amazonaws.com/num1.jpg")
story1.photo.attach(io: photo1, filename: "num1.jpg")

story2 = Story.create!(
  title: "This above all: to thine own self be true.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)
photo2 = open("https://median-aa-seeds.s3.amazonaws.com/num2.jpg")
story2.photo.attach(io: photo2, filename: "num2.jpg")

story3 = Story.create!(
  title: "Though this be madness, yet there is method in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)
photo3 = open("https://median-aa-seeds.s3.amazonaws.com/num3.jpg")
story3.photo.attach(io: photo3, filename: "num3.jpg")

story4 = Story.create!(
  title: "That it should come to this!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)
photo4 = open("https://median-aa-seeds.s3.amazonaws.com/num4.jpg")
story4.photo.attach(io: photo4, filename: "num4.jpg")

story5 = Story.create!(
  title: "There is nothing either good or bad, but thinking makes it so.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo5 = open("https://median-aa-seeds.s3.amazonaws.com/num5.jpg")
story5.photo.attach(io: photo5, filename: "num5.jpg")

story6 = Story.create!(
  title: "The lady doth protest too much, methinks.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo6 = open("https://median-aa-seeds.s3.amazonaws.com/num6.jpg")
story6.photo.attach(io: photo6, filename: "num6.jpg")

story7 = Story.create!(
  title: "In my mind's eye.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo7 = open("https://median-aa-seeds.s3.amazonaws.com/num7.jpg")
story7.photo.attach(io: photo7, filename: "num7.jpg")

story8 = Story.create!(
  title: "A little more than kin, and less than kind.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo8 = open("https://median-aa-seeds.s3.amazonaws.com/num8.jpg")
story8.photo.attach(io: photo8, filename: "num8.jpg")

story9 = Story.create!(
  title: "The play 's the thing wherein I'll catch the conscience of the king.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo9 = open("https://median-aa-seeds.s3.amazonaws.com/num9.jpg")
story9.photo.attach(io: photo9, filename: "num9.jpg")

story10 = Story.create!(
  title: "And it must follow, as the night the day, thou canst not then be false to any man.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo10 = open("https://median-aa-seeds.s3.amazonaws.com/num10.jpg")
story10.photo.attach(io: photo10, filename: "num10.jpg")

story11 = Story.create!(
  title: "Brevity is the soul of wit.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo11 = open("https://median-aa-seeds.s3.amazonaws.com/num11.jpg")
story11.photo.attach(io: photo11, filename: "num11.jpg")

story12 = Story.create!(
  title: "Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo12 = open("https://median-aa-seeds.s3.amazonaws.com/num12.jpg")
story12.photo.attach(io: photo12, filename: "num12.jpg")

story13 = Story.create!(
  title: "Rich gifts wax poor when givers prove unkind.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo13 = open("https://median-aa-seeds.s3.amazonaws.com/num13.jpg")
story13.photo.attach(io: photo13, filename: "num13.jpg")

story14 = Story.create!(
  title: "Do you think I am easier to be played on than a pipe?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo14 = open("https://median-aa-seeds.s3.amazonaws.com/num14.jpg")
story14.photo.attach(io: photo14, filename: "num14.jpg")

story15 = Story.create!(
  title: "I will speak daggers to her, but use none.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo15 = open("https://median-aa-seeds.s3.amazonaws.com/num15.jpg")
story15.photo.attach(io: photo15, filename: "num15.jpg")

story16 = Story.create!(
  title: "When sorrows come, they come not single spies, but in battalions.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo16 = open("https://median-aa-seeds.s3.amazonaws.com/num16.jpg")
story16.photo.attach(io: photo16, filename: "num16.jpg")

story17 = Story.create!(
  title: "Can one desire too much of a good thing?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
)
photo17 = open("https://median-aa-seeds.s3.amazonaws.com/num17.jpg")
story17.photo.attach(io: photo17, filename: "num17.jpg")

story18 = Story.create!(
  title: "I like this place and willingly could waste my time in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
)
photo18 = open("https://median-aa-seeds.s3.amazonaws.com/num18.jpg")
story18.photo.attach(io: photo18, filename: "num18.jpg")

story19 = Story.create!(
  title: "How bitter a thing it is to look into happiness through another man's eyes!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 10
)
photo19 = open("https://median-aa-seeds.s3.amazonaws.com/num19.jpg")
story19.photo.attach(io: photo19, filename: "num19.jpg")

story20 = Story.create!(
  title: "True is it that we have seen better days.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 10
)
photo20 = open("https://median-aa-seeds.s3.amazonaws.com/num20.jpg")
story20.photo.attach(io: photo20, filename: "num20.jpg")



# Images sources from https://www.cathryn-virginia.com/

