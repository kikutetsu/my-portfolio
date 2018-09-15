class HomeController < ApplicationController
  before_action :authenticate_user
  def top
    @works = Work.all.order('id desc').limit(6)
  end
end
