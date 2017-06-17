json.event do
  json.(
    @event,
    :id, :title, :description, :movie_link
  )
  json.set! :start_at, @event.start_at.strftime("%Y/%m/%d %X")
  json.set! :end_at, @event.end_at.strftime("%Y/%m/%d %X")
  json.user do
    json.(
      @event.user,
      :id, :email
    )
  end
end
