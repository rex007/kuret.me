class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :project
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
