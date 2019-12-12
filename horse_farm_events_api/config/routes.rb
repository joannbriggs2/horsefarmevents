Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :events, only: [:index]
  # resources :venues, only: [:index, :show] do 
  #   resources :events, only: [:create, :show, :update, :destroy]
  # end

  resources :venues do
    resources :events
  end
end
