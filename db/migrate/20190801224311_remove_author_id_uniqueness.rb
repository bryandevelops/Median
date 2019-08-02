class RemoveAuthorIdUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :stories, :author_id
    add_index :stories, :author_id
  end
end
