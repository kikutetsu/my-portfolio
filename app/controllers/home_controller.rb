class HomeController < ApplicationController
  before_action :authenticate_user
  def top
    @works = Work.all.limit(6)
  end
end
