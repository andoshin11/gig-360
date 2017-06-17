Rails.application.routes.draw do
  resources :events
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#index'
  get 'store' => 'static_pages#store'

  namespace :api, defaults: { format: :json } do

    resource :events, only: [] do
      get '/:id', to: 'events#show'
      collection do
        get :index
        post :create
      end
    end
  end
end
