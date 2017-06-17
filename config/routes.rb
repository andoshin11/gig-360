Rails.application.routes.draw do
  resources :events
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#index'

  namespace :api, defaults: { format: :json } do

    resource :events, only: [] do
      post :create
    end
  end
end
