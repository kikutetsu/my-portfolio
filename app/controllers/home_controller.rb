class HomeController < ApplicationController
  def top
    @post = Post.find_by(id: 1)
    @posts = Post.all
  end
end
