module ApplicationHelper
  def admin?
    return if @current_user && @current_user.user_type?
    return nil
  end
end
