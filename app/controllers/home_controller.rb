class HomeController < ApplicationController
  before_action :authenticate_user
  def top
    @works = Work.all
  end
end
