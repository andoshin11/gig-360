class Api::EventsController < Api::AbstractController
  # skip_before_action :reject_unauthorized_user, only: [:services]
  before_action :set_event, only: [:show]

  def index
    @events = Event.all
  end

  def show
  end

  def create
    event = params[:event]
    start_at = event[:startAt].present? ? DateTime.parse(event[:startAt]) : nil
    end_at = event[:endAt].present? ? DateTime.parse(event[:endAt]) : nil

    puts start_at
    puts end_at

    event_hash = {
      title: event[:title],
      description: event[:description],
      start_at: start_at,
      end_at: end_at,
      movie_link: event[:movieLink],
      user_id: current_user.id
    }

    Event.create(event_hash)

    render json: { success: 'Success!' }, status: 200
  rescue
    render json: { error: 'Create failed' }, status: 422
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

end
