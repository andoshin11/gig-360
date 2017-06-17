class Event < ApplicationRecord
  belongs_to :user, inverse_of: :events
end
