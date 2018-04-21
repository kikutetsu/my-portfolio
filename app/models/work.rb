class Work < ApplicationRecord
  validates :title, {presence: true}
  validates :category, {presence: true}
  validates :slug, {presence: true}
end
