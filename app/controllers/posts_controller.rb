class PostsController < ApplicationController
  before_action :check_admin_user, except: %i[show index category]

  def index
    @posts = Post.where(post_status: "opened")
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def category
    @posts = Post.where("tag = ?", params[:slug])
    render("posts/index")
  end

  def new
    @post = Post.new()
  end

  def create
    @post = Post.new(content: params[:content], title: params[:title], tag: params[:post][:tag], main_image: "default.png", post_status: params[:post][:status], slug: params[:slug])
    if @post.save
      flash[:notice] = "作成しました"
      render("posts/new")
    else
      flash[:notice] = "作成できませんでした"
      render("posts/new")
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = Post.find_by(id: params[:id])
    @post.title = params[:title]
    @post.tag = params[:post][:tag]
    @post.content = params[:content]
    @post.main_image = params[:main_image]
    @post.post_status = params[:post][:status]
    @post.slug = params[:slug]
    if params[:main_image]
      @post.main_image = "#{@post.id}.jpg"
      main_image = params[:main_image]
      File.binwrite("public/posts/main_images/#{@post.main_image}", main_image.read)
    else
      @post.main_image ||= "default.png"
    end
    if @post.save
      flash[:notice] = "保存しました"
      redirect_to("/notes/#{@post.id}")
    else
      flash[:notice] = "保存できませんでした"
      render("posts/edit")
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    flash[:notice] = "削除しました"
    redirect_to("/users/posts")
  end
end
