Rails.application.routes.draw do
  root :to => 'pages#index'
  resources :users
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  # get '/high_score' => 'user#edit'
end
