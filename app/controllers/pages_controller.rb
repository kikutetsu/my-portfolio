class PagesController < ApplicationController
  before_action :authenticate_user

  def about
    # @posts = Post.where(post_status: "opened").order('id desc').limit(6)
  end
end
