class Post < ApplicationRecord
  validates :content, {presence: true}
  validates :title, {presence: true}
  validates :tag, {presence: true}
  validates :slug, {presence: true}

  def previous
    Post.where('created_at <= ? and id < ? and post_status = ?', self.created_at, self.id, 'opened').order(id: :desc).first
  end

  def next
    Post.where('created_at >= ? and id > ? and post_status = ?', self.created_at, self.id, 'opened').order(id: :asc).first
  end
end
