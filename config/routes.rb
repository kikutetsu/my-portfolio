Rails.application.routes.draw do
  get 'home/top'

  #works
  get 'works/' => 'works#index'
  get 'works/new' => 'works#new'
  post 'works/create' => 'works#create'
  get 'works/:id/edit' => 'works#edit'
  post 'works/:id/update' => 'works#update'
  get 'works/:id' => 'works#show'

  #notes
  get 'notes/' => 'posts#index'
  get 'notes/new' => 'posts#new'
  post 'notes/create' => 'posts#create'
  get 'notes/:id/edit' => 'posts#edit'
  post 'notes/:id/update' => 'posts#update'
  get 'notes/:id' => 'posts#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
