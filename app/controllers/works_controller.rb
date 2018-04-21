class WorksController < ApplicationController
  def index
  end

  def show
    @work = Work.find_by(id: params[:id])
  end

  def new
    @work = Work.new()
  end

  def create
    @work = Work.new(title: params[:title], content: params[:content])
    if @work.save
      flash[:notice] = "おっけー"
      render("works/new")
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
    @work.content = params[:content]
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
