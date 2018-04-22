class Post < ApplicationRecord
  validates :content, {presence: true}
  validates :title, {presence: true}
  validates :tag, {presence: true}
end
