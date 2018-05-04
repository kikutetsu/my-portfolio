class Work < ApplicationRecord
  has_many :work_images
  mount_uploader :image, ImagesUploader
  validates :title, {presence: true}
  validates :category, {presence: true}
  validates :slug, {presence: true}
  validates :image_length, {presence: true}

  def previous
    Work.where('created_at <= ? and id < ?', self.created_at, self.id).order(id: :desc).first
  end

  def next
    Work.where('created_at >= ? and id > ?', self.created_at, self.id).order(id: :asc).first
  end
end
