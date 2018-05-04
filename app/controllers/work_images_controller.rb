class WorkImagesController < ApplicationController
  def edit
    @image = WorkImage.new
  end

  def upload
    @image = WorkImage.create({
        post_id: params[:id],
        image: params[:image]
    })
    flash[:notice] = '追加しました'
    redirect_to("/works/#{params[:id]}/edit")
  end

  def destroy
    @image = WorkImage.find_by(id: params[:image_id])
    @image.destroy
    flash[:notice] = '削除しました'
    redirect_to("/works/#{params[:id]}/edit")
  end
end
