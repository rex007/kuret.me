json.array!(@skills) do |skill|
  json.extract! skill, :id, :name, :procents
  json.url skill_url(skill, format: :json)
end
