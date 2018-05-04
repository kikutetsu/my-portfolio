class AddContentToWorks < ActiveRecord::Migration[5.1]
  def change
    add_column :works, :content, :text
  end
end
