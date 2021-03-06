Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  post 'api/users/:id/follow', to: 'api/users#follow', defaults: {format: :json}
  delete 'api/users/:id/follow', to: 'api/users#unfollow', defaults: {format: :json}
  get 'api/users/:id/subscribers', to: 'api/users#subscribers', defaults: {format: :json}
  get 'api/users/:id/subscriptions', to: 'api/users#subscriptions', defaults: {format: :json}

  post 'api/stories/:id/clap', to: 'api/stories#clap', defaults: {format: :json}
  delete 'api/stories/:id/clap', to: 'api/stories#unclap', defaults: {format: :json}
  get 'api/stories/:id/total_claps', to: 'api/stories#total_claps', defaults: {format: :json}

  namespace :api, defaults: {format: :json} do
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :stories, only: [:index, :show, :create, :update, :destroy] do
      resources :responses, only: [:index, :create, :update, :destroy]
    end
    # resources :responses, only: [:show]
    # resources :follows, only: [:index, :create, :destroy]
    resources :claps, only: [:create, :destroy]
  end
end
