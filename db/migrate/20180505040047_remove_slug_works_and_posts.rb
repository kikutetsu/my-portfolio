class RemoveSlugWorksAndPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :works, :slug, :string
    remove_column :works, :image_length, :integer
    remove_column :posts, :slug, :string
    remove_column :posts, :main_image, :string
  end
end
