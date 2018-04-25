class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_current_user

  def set_current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def authenticate_user
    return if is_login?
    flash[:notice] = "ログインしてください"
    redirect_to("/login")
  end

  def check_admin_user
    return if is_admin?
    flash[:notice] = "権限がありません"
    redirect_to("/")
  end

  def is_admin?
    @current_user && @current_user.user_type?
  end

  def is_login?
    @current_user.present?
  end

  helper_method :is_admin?
  helper_method :is_login?
end
