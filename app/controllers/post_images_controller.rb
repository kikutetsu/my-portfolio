class PostImagesController < ApplicationController
  def edit
    @image = PostImage.new
  end

  def upload
    @image = PostImage.create({
        post_id: params[:id],
        image: params[:image]
    })
    flash[:notice] = '追加しました'
    redirect_to("/notes/#{params[:id]}/edit")
  end

  def destroy
    @image = PostImage.find_by(id: params[:image_id])
    @image.destroy
    flash[:notice] = '削除しました'
    redirect_to("/notes/#{params[:id]}/edit")
  end
end
