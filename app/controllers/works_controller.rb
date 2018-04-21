class WorksController < ApplicationController
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
    @work = Work.new(title: params[:title], category: params[:category], slug: params[:slug], description: params[:description])
    if @work.save
      flash[:notice] = "おっけー"
      redirect_to("/works/#{@work.id}")
    else
      flash[:notice] = "だめー"
      render("works/new")
    end
  end

  def edit
    @work = Work.find_by(id: params[:id])
  end

  def update
    @work = Work.find_by(id: params[:id])
    @work.title = params[:title]
    @work.category = params[:category]
    @work.slug = params[:slug]
    @work.description = params[:description]
    if @work.save
      flash[:notice] = "おっけー"
      redirect_to("/works/#{@work.id}")
    else
      flash[:notice] = "だめー"
      render("works/edit")
    end
  end

  def destroy
  end
end
