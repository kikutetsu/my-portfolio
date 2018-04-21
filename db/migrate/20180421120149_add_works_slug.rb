class AddWorksSlug < ActiveRecord::Migration[5.1]
  def change
    add_column :works, :slug, :string
  end
end
