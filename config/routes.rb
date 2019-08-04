Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :stories,  only: [:index, :show, :create, :update, :destroy]

=begin
    resources :users do
      resources :stories, only: [:index]
    end
=end
  end
end
