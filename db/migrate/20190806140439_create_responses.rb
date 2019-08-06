class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.text :string, null: false
      t.integer :author_id, null: false
      t.integer :story_id, null: false

      t.timestamps
    end
    add_index :author_id
    add_index :story_id, unique: true
  end
end
