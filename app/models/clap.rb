# == Schema Information
#
# Table name: claps
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  story_id    :integer          not null
#  response_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Clap < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: 'Story'

  # belongs_to :response,
  #   primary_key: :id,
  #   foreign_key: :response_id,
  #   class_name: 'Response'
end
