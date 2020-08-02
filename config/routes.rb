Rails.application.routes.draw do

  root 'static_pages#home'
  get '/help', :to => 'static_pages#help'

  get '/auth/:provider/callback', :to => 'sessions#callback'
  post '/auth/:provider/callback', :to => 'sessions#callback'
  get '/auth/failure', :to => 'sessions#failure'

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
