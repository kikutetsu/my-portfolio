class WorksController < ApplicationController
  before_action :check_admin_user, except: %i[show index]
  before_action :authenticate_user, only: %i[show index]

  def index
    @works = Work.all
  end

  def show
    @work = Work.find_by(id: params[:id])
  end

  def new
    @work = Work.new()
  end

  def create
    @work = Work.new(title: params[:title], category: params[:category][:name], slug: params[:slug], description: params[:description], image_length: params[:image_length])
    if @work.save
      flash[:notice] = "作成しました"
      redirect_to("/works/#{@work.id}")
    else
      flash[:notice] = "作成できませんでした"
      render("works/new")
    end
  end

  def edit
    @work = Work.find_by(id: params[:id])
  end

  def update
    @work = Work.find_by(id: params[:id])
    @work.title = params[:title]
    @work.category = params[:category][:name]
    @work.slug = params[:slug]
    @work.description = params[:description]
    @work.image_length = params[:image_length]
    if @work.save
      flash[:notice] = "保存しました"
      redirect_to("/works/#{@work.id}")
    else
      flash[:notice] = "保存できませんでした"
      render("works/edit")
    end
  end

  def destroy
    @work = Work.find_by(id: params[:id])
    @work.destroy
    flash[:notice] = "削除しました"
    redirect_to("/works")
  end
end
