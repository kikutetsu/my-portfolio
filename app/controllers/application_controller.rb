class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_current_user

  rescue_from ActiveRecord::RecordNotFound, with: :render_404
  rescue_from ActionController::RoutingError, with: :render_404
  rescue_from Exception, with: :render_500

  def render_404
    render 'errors/404', status: 404, layout: 'application', content_type: 'text/html'
  end

  def render_500
    render 'errors/500', status: 500, layout: 'application', content_type: 'text/html'
  end

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
    flash[:notice] = "編集権限がありません"
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
