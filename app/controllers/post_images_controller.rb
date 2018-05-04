class PostImagesController < ApplicationController
  def edit
    @image = PostImage.new
  end

  def upload
    @image = PostImage.create({
        post_id: params[:id],
        image: params[:image]
    })
    redirect_to("/notes/#{params[:id]}/edit")
  end
end
