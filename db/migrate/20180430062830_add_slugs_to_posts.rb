class AddSlugsToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :slug, :string, default: 'default'
  end
end
