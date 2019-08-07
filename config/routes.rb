Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :stories,  only: [:index, :show, :create, :update, :destroy] do
      resources :responses, only: [:index, :create, :update, :destroy]
    end
    resources :responses,  only: [:show]
    resources :follows, only: [:index, :create, :destroy]
  end
end
