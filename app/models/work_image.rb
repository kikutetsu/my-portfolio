class WorkImage < ApplicationRecord
  belongs_to :work
  mount_uploader :image, ImagesUploader
end
