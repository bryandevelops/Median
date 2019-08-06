# == Schema Information
#
# Table name: responses
#
#  id         :bigint           not null, primary key
#  string     :text             not null
#  author_id  :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Response < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: 'Story'
end
