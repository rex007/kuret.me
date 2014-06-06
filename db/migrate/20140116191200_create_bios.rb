class CreateBios < ActiveRecord::Migration
  def change
    create_table :bios do |t|
      t.text :content

      t.timestamps
    end
  end
end
