Rails.application.routes.draw do
  get 'home/top'

  #works
  get 'works/' => 'works#index'
  get 'works/new' => 'works#new'
  post 'works/create' => 'works#create'
  get 'works/:id/edit' => 'works#edit'
  post 'works/:id/update' => 'works#update'
  get 'works/:id' => 'works#show'

  #posts
  get 'posts/' => 'posts#index'
  get 'posts/new' => 'posts#new'
  post 'posts/create' => 'posts#create'
  get 'posts/:id/edit' => 'posts#edit'
  post 'posts/:id/update' => 'posts#update'
  get 'posts/:id' => 'posts#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
