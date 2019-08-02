class RemoveStoryUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :url
  end
end
