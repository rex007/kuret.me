json.array!(@bios) do |bio|
  json.extract! bio, :id, :content
  json.url bio_url(bio, format: :json)
end
