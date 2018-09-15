class HomeController < ApplicationController
  def top
    @works = Work.all
  end
end
