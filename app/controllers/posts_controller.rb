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
    @post = Post.new(content: params[:content], title: params[:title], main_image: "default.png")
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
    @post.title = params[:title]
    @post.content = params[:content]
    @post.main_image = params[:main_image]
    if params[:main_image]
      @post.main_image = "#{@post.id}.jpg"
      main_image = params[:main_image]
      File.binwrite("public/posts/main_images/#{@post.main_image}", main_image.read)
    else
      @post.main_image ||= "default.png"
    end
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
