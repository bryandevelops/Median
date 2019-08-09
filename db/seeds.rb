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
Response.destroy_all
Follow.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('stories')
ApplicationRecord.connection.reset_pk_sequence!('responses')
ApplicationRecord.connection.reset_pk_sequence!('follows')



# USERS

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



# DEMO USER


User.create!(
  fullname: "Guest User",
  email: "guestuser@gmail.com",
  password: "password",
)



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
  author_id: 2
)
photo2 = open("https://median-aa-seeds.s3.amazonaws.com/num2.jpg")
story2.photo.attach(io: photo2, filename: "num2.jpg")

story3 = Story.create!(
  title: "Though this be madness, yet there is method in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo3 = open("https://median-aa-seeds.s3.amazonaws.com/num3.jpg")
story3.photo.attach(io: photo3, filename: "num3.jpg")

story4 = Story.create!(
  title: "That it should come to this!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo4 = open("https://median-aa-seeds.s3.amazonaws.com/num4.jpg")
story4.photo.attach(io: photo4, filename: "num4.jpg")

story5 = Story.create!(
  title: "There is nothing either good or bad, but thinking makes it so.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo5 = open("https://median-aa-seeds.s3.amazonaws.com/num5.jpg")
story5.photo.attach(io: photo5, filename: "num5.jpg")

story6 = Story.create!(
  title: "The lady doth protest too much, methinks.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo6 = open("https://median-aa-seeds.s3.amazonaws.com/num6.jpg")
story6.photo.attach(io: photo6, filename: "num6.jpg")

story7 = Story.create!(
  title: "In my mind's eye.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo7 = open("https://median-aa-seeds.s3.amazonaws.com/num7.jpg")
story7.photo.attach(io: photo7, filename: "num7.jpg")

story8 = Story.create!(
  title: "A little more than kin, and less than kind.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo8 = open("https://median-aa-seeds.s3.amazonaws.com/num8.jpg")
story8.photo.attach(io: photo8, filename: "num8.jpg")

story9 = Story.create!(
  title: "The play 's the thing wherein I'll catch the conscience of the king.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
)
photo9 = open("https://median-aa-seeds.s3.amazonaws.com/num9.jpg")
story9.photo.attach(io: photo9, filename: "num9.jpg")

story10 = Story.create!(
  title: "And it must follow, as the night the day, thou canst not then be false to any man.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 10
)
photo10 = open("https://median-aa-seeds.s3.amazonaws.com/num10.jpg")
story10.photo.attach(io: photo10, filename: "num10.jpg")

story11 = Story.create!(
  title: "Brevity is the soul of wit.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)
photo11 = open("https://median-aa-seeds.s3.amazonaws.com/num11.jpg")
story11.photo.attach(io: photo11, filename: "num11.jpg")

story12 = Story.create!(
  title: "Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)
photo12 = open("https://median-aa-seeds.s3.amazonaws.com/num12.jpg")
story12.photo.attach(io: photo12, filename: "num12.jpg")

story13 = Story.create!(
  title: "Rich gifts wax poor when givers prove unkind.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo13 = open("https://median-aa-seeds.s3.amazonaws.com/num13.jpg")
story13.photo.attach(io: photo13, filename: "num13.jpg")

story14 = Story.create!(
  title: "Do you think I am easier to be played on than a pipe?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo14 = open("https://median-aa-seeds.s3.amazonaws.com/num14.jpg")
story14.photo.attach(io: photo14, filename: "num14.jpg")

story15 = Story.create!(
  title: "I will speak daggers to her, but use none.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo15 = open("https://median-aa-seeds.s3.amazonaws.com/num15.jpg")
story15.photo.attach(io: photo15, filename: "num15.jpg")

story16 = Story.create!(
  title: "When sorrows come, they come not single spies, but in battalions.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo16 = open("https://median-aa-seeds.s3.amazonaws.com/num16.jpg")
story16.photo.attach(io: photo16, filename: "num16.jpg")

story17 = Story.create!(
  title: "Can one desire too much of a good thing?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo17 = open("https://median-aa-seeds.s3.amazonaws.com/num17.jpg")
story17.photo.attach(io: photo17, filename: "num17.jpg")

story18 = Story.create!(
  title: "I like this place and willingly could waste my time in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo18 = open("https://median-aa-seeds.s3.amazonaws.com/num18.jpg")
story18.photo.attach(io: photo18, filename: "num18.jpg")

story19 = Story.create!(
  title: "How bitter a thing it is to look into happiness through another man's eyes!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
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

story21 = Story.create!(
  title: "For ever and a day.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)
photo21 = open("https://median-aa-seeds.s3.amazonaws.com/num21.jpg")
story21.photo.attach(io: photo21, filename: "num21.jpg")

story22 = Story.create!(
  title: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)
photo22 = open("https://median-aa-seeds.s3.amazonaws.com/num22.jpg")
story22.photo.attach(io: photo22, filename: "num22.jpg")

story23 = Story.create!(
  title: "Now is the winter of our discontent.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo23 = open("https://median-aa-seeds.s3.amazonaws.com/num23.jpg")
story23.photo.attach(io: photo23, filename: "num23.jpg")

story24 = Story.create!(
  title: "A horse! a horse! my kingdom for a horse!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo24 = open("https://median-aa-seeds.s3.amazonaws.com/num24.jpg")
story24.photo.attach(io: photo24, filename: "num24.jpg")

story25 = Story.create!(
  title: "Conscience is but a word that cowards use, devised at first to keep the strong in awe.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo25 = open("https://median-aa-seeds.s3.amazonaws.com/num25.jpg")
story25.photo.attach(io: photo25, filename: "num25.jpg")

story26 = Story.create!(
  title: "So wise so young, they say, do never live long.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo26 = open("https://median-aa-seeds.s3.amazonaws.com/num26.jpg")
story26.photo.attach(io: photo26, filename: "num26.jpg")

story27 = Story.create!(
  title: "Off with his head!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo27 = open("https://median-aa-seeds.s3.amazonaws.com/num27.jpg")
story27.photo.attach(io: photo27, filename: "num27.jpg")

story28 = Story.create!(
  title: "The king's name is a tower of strength.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo28 = open("https://median-aa-seeds.s3.amazonaws.com/num28.jpg")
story28.photo.attach(io: photo28, filename: "num28.jpg")

story29 = Story.create!(
  title: "The world is grown so bad, that wrens make prey where eagles dare not perch.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
)
photo29 = open("https://median-aa-seeds.s3.amazonaws.com/num29.jpg")
story29.photo.attach(io: photo29, filename: "num29.jpg")

story30 = Story.create!(
  title: "O Romeo, Romeo! wherefore art thou Romeo?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 10
)
photo30 = open("https://median-aa-seeds.s3.amazonaws.com/num30.jpg")
story30.photo.attach(io: photo30, filename: "num30.jpg")

story31 = Story.create!(
  title: "It is the east, and Juliet is the sun.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)
photo31 = open("https://median-aa-seeds.s3.amazonaws.com/num31.jpg")
story31.photo.attach(io: photo31, filename: "num31.jpg")

story32 = Story.create!(
  title: "Good Night, Good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)
photo32 = open("https://median-aa-seeds.s3.amazonaws.com/num32.jpg")
story32.photo.attach(io: photo32, filename: "num32.jpg")

story33 = Story.create!(
  title: "What's in a name? That which we call a rose by any other name would smell as sweet.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo33 = open("https://median-aa-seeds.s3.amazonaws.com/num33.jpg")
story33.photo.attach(io: photo33, filename: "num33.jpg")

story34 = Story.create!(
  title: "Wisely and slow; they stumble that run fast.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo34 = open("https://median-aa-seeds.s3.amazonaws.com/num34.jpg")
story34.photo.attach(io: photo34, filename: "num34.jpg")

story35 = Story.create!(
  title: "Tempt not a desperate man.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo35 = open("https://median-aa-seeds.s3.amazonaws.com/num35.jpg")
story35.photo.attach(io: photo35, filename: "num35.jpg")

story36 = Story.create!(
  title: "For you and I are past our dancing days.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo36 = open("https://median-aa-seeds.s3.amazonaws.com/num36.jpg")
story36.photo.attach(io: photo36, filename: "num36.jpg")

story37 = Story.create!(
  title: "O! she doth teach the torches to burn bright.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo37 = open("https://median-aa-seeds.s3.amazonaws.com/num37.jpg")
story37.photo.attach(io: photo37, filename: "num37.jpg")

story38 = Story.create!(
  title: "It seems she hangs upon the cheek of night like a rich jewel in an Ethiope's ear.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo38 = open("https://median-aa-seeds.s3.amazonaws.com/num38.jpg")
story38.photo.attach(io: photo38, filename: "num38.jpg")

story39 = Story.create!(
  title: "See, how she leans her cheek upon her hand! O that I were a glove upon that hand, that I might touch that cheek!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
)
photo39 = open("https://median-aa-seeds.s3.amazonaws.com/num39.jpg")
story39.photo.attach(io: photo39, filename: "num39.jpg")

story40 = Story.create!(
  title: "Not stepping o'er the bounds of modesty.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 10
)
photo40 = open("https://median-aa-seeds.s3.amazonaws.com/num40.jpg")
story40.photo.attach(io: photo40, filename: "num40.jpg")

story41 = Story.create!(
  title: "In a hole in the ground there lived a hobbit.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)
photo41 = open("https://median-aa-seeds.s3.amazonaws.com/num41.jpg")
story41.photo.attach(io: photo41, filename: "num41.jpg")

story42 = Story.create!(
  title: "It does not do to leave a live dragon out of your calculations, if you live near him.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)
photo42 = open("https://median-aa-seeds.s3.amazonaws.com/num42.jpg")
story42.photo.attach(io: photo42, filename: "num42.jpg")

story43 = Story.create!(
  title: "May the wind under your wings bear you where the sun sails and the moon walks.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)
photo43 = open("https://median-aa-seeds.s3.amazonaws.com/num43.jpg")
story43.photo.attach(io: photo43, filename: "num43.jpg")

story44 = Story.create!(
  title: "Where there's life there's hope.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)
photo44 = open("https://median-aa-seeds.s3.amazonaws.com/num44.jpg")
story44.photo.attach(io: photo44, filename: "num44.jpg")

story45 = Story.create!(
  title: "So comes snow after fire, and even dragons have their endings.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)
photo45 = open("https://median-aa-seeds.s3.amazonaws.com/num45.jpg")
story45.photo.attach(io: photo45, filename: "num45.jpg")

story46 = Story.create!(
  title: "You have nice manners for a thief and a liar,' said the dragon.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 6
)
photo46 = open("https://median-aa-seeds.s3.amazonaws.com/num46.jpg")
story46.photo.attach(io: photo46, filename: "num46.jpg")

story47 = Story.create!(
  title: "May the hair on your toes never fall out!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 7
)
photo47 = open("https://median-aa-seeds.s3.amazonaws.com/num47.jpg")
story47.photo.attach(io: photo47, filename: "num47.jpg")

story48 = Story.create!(
  title: "The road goes ever on and on",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 8
)
photo48 = open("https://median-aa-seeds.s3.amazonaws.com/num48.jpg")
story48.photo.attach(io: photo48, filename: "num48.jpg")

story49 = Story.create!(
  title: "Never laugh at live dragons, Bilbo you fool!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 9
)
photo49 = open("https://median-aa-seeds.s3.amazonaws.com/num49.jpg")
story49.photo.attach(io: photo49, filename: "num49.jpg")

story50 = Story.create!(
  title: "I finally invent something that works!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 10
)
photo50 = open("https://median-aa-seeds.s3.amazonaws.com/num50.jpg")
story50.photo.attach(io: photo50, filename: "num50.jpg")

# Images sources from https://www.cathryn-virginia.com/



# RESPONSES

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 1,
  story_id: 1,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 1,
  story_id: 2,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 1,
  story_id: 3,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 1,
  story_id: 4,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 1,
  story_id: 5,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 2,
  story_id: 6,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 2,
  story_id: 7,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 2,
  story_id: 8,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 2,
  story_id: 9,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 2,
  story_id: 10,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 3,
  story_id: 11,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 3,
  story_id: 12,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 3,
  story_id: 13,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 3,
  story_id: 14,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 3,
  story_id: 15,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 4,
  story_id: 16,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 4,
  story_id: 17,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 4,
  story_id: 18,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 4,
  story_id: 19,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 4,
  story_id: 20,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 5,
  story_id: 21,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 5,
  story_id: 22,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 5,
  story_id: 23,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 5,
  story_id: 24,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 5,
  story_id: 25,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 6,
  story_id: 26,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 6,
  story_id: 27,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 6,
  story_id: 28,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 6,
  story_id: 29,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 6,
  story_id: 30,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 7,
  story_id: 31,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 7,
  story_id: 32,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 7,
  story_id: 33,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 7,
  story_id: 34,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 7,
  story_id: 35,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 8,
  story_id: 36,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 8,
  story_id: 37,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 8,
  story_id: 38,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 8,
  story_id: 39,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 8,
  story_id: 40,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 9,
  story_id: 41,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 9,
  story_id: 42,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 9,
  story_id: 43,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 9,
  story_id: 44,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 9,
  story_id: 45,
)

Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 10,
  story_id: 46,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 10,
  story_id: 47,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 10,
  story_id: 48,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 10,
  story_id: 49,
)
Response.create!(
  body: Faker::TvShows::Seinfeld.quote,
  author_id: 10,
  story_id: 50,
)



# FOLLOWS

Follow.create!(
  follower_id: 1,
  followee_id: 2,
)
Follow.create!(
  follower_id: 1,
  followee_id: 3,
)
Follow.create!(
  follower_id: 1,
  followee_id: 4,
)
Follow.create!(
  follower_id: 1,
  followee_id: 5,
)
Follow.create!(
  follower_id: 2,
  followee_id: 6,
)
Follow.create!(
  follower_id: 2,
  followee_id: 7,
)
Follow.create!(
  follower_id: 2,
  followee_id: 8,
)
Follow.create!(
  follower_id: 2,
  followee_id: 9,
)
Follow.create!(
  follower_id: 2,
  followee_id: 10,
)
Follow.create!(
  follower_id: 3,
  followee_id: 1,
)
Follow.create!(
  follower_id: 3,
  followee_id: 2,
)
Follow.create!(
  follower_id: 3,
  followee_id: 4,
)
Follow.create!(
  follower_id: 3,
  followee_id: 5,
)
Follow.create!(
  follower_id: 3,
  followee_id: 6,
)
Follow.create!(
  follower_id: 3,
  followee_id: 7,
)
Follow.create!(
  follower_id: 3,
  followee_id: 8,
)
Follow.create!(
  follower_id: 3,
  followee_id: 9,
)
Follow.create!(
  follower_id: 3,
  followee_id: 10,
)
Follow.create!(
  follower_id: 4,
  followee_id: 1,
)
Follow.create!(
  follower_id: 4,
  followee_id: 2,
)
Follow.create!(
  follower_id: 4,
  followee_id: 3,
)
Follow.create!(
  follower_id: 4,
  followee_id: 6,
)
Follow.create!(
  follower_id: 4,
  followee_id: 5,
)
Follow.create!(
  follower_id: 5,
  followee_id: 6,
)
Follow.create!(
  follower_id: 5,
  followee_id: 7,
)
Follow.create!(
  follower_id: 5,
  followee_id: 8,
)
Follow.create!(
  follower_id: 5,
  followee_id: 9,
)
Follow.create!(
  follower_id: 5,
  followee_id: 10,
)
Follow.create!(
  follower_id: 6,
  followee_id: 1,
)
Follow.create!(
  follower_id: 6,
  followee_id: 2,
)
Follow.create!(
  follower_id: 6,
  followee_id: 3,
)
Follow.create!(
  follower_id: 6,
  followee_id: 4,
)
Follow.create!(
  follower_id: 6,
  followee_id: 5,
)
Follow.create!(
  follower_id: 7,
  followee_id: 6,
)
Follow.create!(
  follower_id: 7,
  followee_id: 4,
)
Follow.create!(
  follower_id: 7,
  followee_id: 8,
)
Follow.create!(
  follower_id: 7,
  followee_id: 9,
)
Follow.create!(
  follower_id: 7,
  followee_id: 10,
)
Follow.create!(
  follower_id: 8,
  followee_id: 1,
)
Follow.create!(
  follower_id: 8,
  followee_id: 2,
)
Follow.create!(
  follower_id: 8,
  followee_id: 3,
)
Follow.create!(
  follower_id: 8,
  followee_id: 4,
)
Follow.create!(
  follower_id: 9,
  followee_id: 5,
)
Follow.create!(
  follower_id: 9,
  followee_id: 6,
)
Follow.create!(
  follower_id: 9,
  followee_id: 7,
)
Follow.create!(
  follower_id: 9,
  followee_id: 8,
)
Follow.create!(
  follower_id: 9,
  followee_id: 10,
)
Follow.create!(
  follower_id: 10,
  followee_id: 1,
)
Follow.create!(
  follower_id: 10,
  followee_id: 2,
)
Follow.create!(
  follower_id: 10,
  followee_id: 5,
)
Follow.create!(
  follower_id: 10,
  followee_id: 6,
)
Follow.create!(
  follower_id: 10,
  followee_id: 7,
)

