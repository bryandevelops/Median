# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  url        :string
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_one_attached :photo
end
