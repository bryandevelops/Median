json.stories do 
  @subs.map do |story|
    json.set! story.id do
      json.partial! "api/stories/story", story: story
    end
  end
end

json.claps @subs.pluck(:id).uniq

json.id @story.id