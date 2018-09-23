class WorkImagesController < ApplicationController
  protect_from_forgery except: :upload
  def edit
    @image = WorkImage.new
  end

  def upload
    respond_to do |format|
      format.html {
        @image = WorkImage.create({
            work_id: params[:id],
            image: params[:image]
        })
        flash[:notice] = '追加しました'
        redirect_to("/works/#{params[:id]}/edit")
      }
      format.json {
        @image = WorkImage.create({
            work_id: params[:id],
            image: params[:image]
        })
        response = {"image": @image.image}
        render json: response
      }
    end
  end

  def destroy
    @image = WorkImage.find_by(id: params[:image_id])
    @image.destroy
    flash[:notice] = '削除しました'
    redirect_to("/works/#{params[:id]}/edit")
  end
end
