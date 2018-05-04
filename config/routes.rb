Rails.application.routes.draw do
  root 'home#top'

  #users
  get 'login' => 'users#login_form'
  post 'login' => 'users#login'
  post 'logout' => 'users#logout'

  #works
  get 'works/' => 'works#index'
  get 'works/category/:slug' => 'works#category'
  get 'works/new' => 'works#new'
  post 'works/create' => 'works#create'
  get 'works/:id/edit' => 'works#edit'
  post 'works/:id/update' => 'works#update'
  post 'works/:id/destroy' => 'works#destroy'
  get 'works/:id' => 'works#show'

  #notes
  get 'notes/' => 'posts#index'
  get 'notes/category/:slug' => 'posts#category'
  get 'notes/new' => 'posts#new'
  post 'notes/create' => 'posts#create'
  get 'notes/:id/edit' => 'posts#edit'
  get 'notes/:id/image_upload' => 'post_images#edit'
  post 'notes/:id/image_upload/:image_id/destroy' => 'post_images#destroy'
  post 'notes/:id/upload' => 'post_images#upload'
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
  get 'users/posts' => 'users#posts_index'
  get 'users/posts/:id' => 'users#posts_show'
  get 'users/works' => 'users#works_index'
  get 'users/works/:id' => 'users#works_show'
  get 'users/:id' => 'users#show'

  get '*path', controller: 'application', action: 'render_404'
end
