class Work < ApplicationRecord
  validates :title, {presence: true}
  validates :category, {presence: true}
  validates :slug, {presence: true}
  validates :image_length, {presence: true}
end
