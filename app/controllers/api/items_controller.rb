class Api::ItemsController < Api::AbstractController
  # skip_before_action :reject_unauthorized_user, only: [:services]
  # before_action :set_event, only: [:show]

  def index
    @items = Item.all
  end

end
