Rails.application.routes.draw do
  root 'home#top'

  #users
  get 'login' => 'users#login_form'
  post 'login' => 'users#login'
  post 'logout' => 'users#logout'

  #works
  get 'works/' => 'works#index'
  get 'works/new' => 'works#new'
  post 'works/create' => 'works#create'
  get 'works/:id/edit' => 'works#edit'
  post 'works/:id/update' => 'works#update'
  post 'works/:id/destroy' => 'works#destroy'
  get 'works/:id' => 'works#show'

  #notes
  get 'notes/' => 'posts#index'
  get 'notes/new' => 'posts#new'
  post 'notes/create' => 'posts#create'
  get 'notes/:id/edit' => 'posts#edit'
  post 'notes/:id/update' => 'posts#update'
  post 'notes/:id/destroy' => 'posts#destroy'
  get 'notes/:id' => 'posts#show'

  #users
  get 'users/' => 'users#index'
  get 'users/new' => 'users#new'
  post 'users/create' => 'users#create'
  get 'users/:id/edit' => 'users#edit'
  post 'users/:id/update' => 'users#update'
  post 'users/:id/destroy' => 'users#destroy'
  get 'users/:id' => 'users#show'
end
