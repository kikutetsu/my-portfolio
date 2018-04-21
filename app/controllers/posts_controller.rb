class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def new
    @post = Post.new()
  end

  def create
    @post = Post.new(content: params[:content])
    if @post.save
      flash[:notice] = "おっけー"
      render("posts/new")
    else
      flash[:notice] = "だめー"
      render("posts/new")
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = Post.find_by(id: params[:id])
    @post.content = params[:content]
    if @post.save
      flash[:notice] = "おっけー"
      redirect_to("/posts/#{@post.id}")
    else
      flash[:notice] = "だめー"
      render("posts/edit")
    end
  end

  def destroy
  end
end
