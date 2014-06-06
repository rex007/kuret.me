class CreateBlogImages < ActiveRecord::Migration
  def change
    create_table :blog_images do |t|
      t.string :image
      t.string :blog_id

      t.timestamps
    end
  end
end
