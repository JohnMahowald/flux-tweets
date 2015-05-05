Rails.application.routes.draw do
  root to: "users#new"

  resources :users

  namespace :api do
    resources :tweets
  end
end
