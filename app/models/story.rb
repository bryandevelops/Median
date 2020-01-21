# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :responses,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: 'Response'
  
  has_many :claps,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: 'Clap'

  # has_many :claps,
  #   through: :author,
  #   source: :claps,
  #   dependent: :destroy
    
  has_one_attached :photo
end
