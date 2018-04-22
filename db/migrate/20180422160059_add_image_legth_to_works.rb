class AddImageLegthToWorks < ActiveRecord::Migration[5.1]
  def change
    add_column :works, :image_length, :integer
  end
end
