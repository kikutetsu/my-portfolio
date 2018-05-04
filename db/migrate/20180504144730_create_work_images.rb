class CreateWorkImages < ActiveRecord::Migration[5.1]
  def change
    create_table :work_images do |t|
      t.string :image
      t.integer :work_id

      t.timestamps
    end
  end
end
