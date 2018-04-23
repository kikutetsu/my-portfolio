class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def new
    @user = User.new()
  end

  def create
    @user = User.new(name: params[:name], password: params[:password])
    if @user.save
      flash[:notice] = "おっけー"
      redirect_to("/users/")
    else
      flash[:notice] = "だめー"
      render("users/new")
    end
  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.name = params[:name]
    @user.password = params[:password]
    if @user.save
      flash[:notice] = "おっけー"
      redirect_to("/users/")
    else
      flash[:notice] = "だめー"
      render("users/edit")
    end
  end

end
