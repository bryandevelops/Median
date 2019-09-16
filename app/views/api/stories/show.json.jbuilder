json.partial! "api/stories/story", story: @story

json.clap_count @story.total_claps.count

json.responses do
  @story.responses.each do |response|
    json.set! response.id do
      json.partial! "api/responses/response", response: response
    end
  end
end