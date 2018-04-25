class UsersController < ApplicationController
  # before_action :check_admin_user, except: %i[login_form login logout]

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
    @user = User.new(name: params[:name], password: params[:password], user_type: params[:user_type][:admin])
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
    @user.user_type = params[:user_type][:admin]
    if @user.save
      flash[:notice] = "おっけー"
      redirect_to("/users/")
    else
      flash[:notice] = "だめー"
      render("users/edit")
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    flash[:notice] = "削除しました"
    redirect_to("/users")
  end

  def login_form
  end

  def login
    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      flash[:notice] = "ろぐいーん"
      redirect_to("/works")
    else
      flash[:notice] = "できませんでしたー"
      render("users/new")
    end
  end

  def logout
    session[:user_id] = nil
    flash[:notice] = "ろぐあーうと"
    redirect_to("/")
  end

  def ensure_correct_user
    if @current_user.id != params[:id].to_i
      flash[:notice] = "できませんでしたー"
      redirect_to("/")
    end
  end
end
