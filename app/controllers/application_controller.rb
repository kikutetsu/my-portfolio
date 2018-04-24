class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_current_user

  def set_current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def authenticate_user
    return if @current_user
    flash[:notice] = "ログインしてください"
    redirect_to("/")
  end

  def check_admin_user
    return if @current_user && @current_user.user_type?
    flash[:notice] = "権限がありません"
    redirect_to("/")
  end
end
