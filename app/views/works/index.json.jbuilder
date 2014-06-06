json.array!(@works) do |work|
  json.extract! work, :id, :project, :description, :image
  json.url work_url(work, format: :json)
end
