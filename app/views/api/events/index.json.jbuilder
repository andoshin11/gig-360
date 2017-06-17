json.events do
  json.array!(@events) do |event|
    json.(
      event,
      :id, :title, :description, :start_at, :end_at, :movie_link
    )
  end
end
