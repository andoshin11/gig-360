json.items do
  json.array!(@items) do |item|
    json.(
      item,
      :id, :name, :description, :price, :image_url
    )
  end
end
