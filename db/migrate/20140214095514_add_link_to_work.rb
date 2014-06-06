class AddLinkToWork < ActiveRecord::Migration
  def change
    add_column :works, :link, :text
  end
end
