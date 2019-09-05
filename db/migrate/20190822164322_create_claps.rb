class CreateClaps < ActiveRecord::Migration[5.2]
  def change
    create_table :claps do |t|
      t.integer :user_id, null: false
      t.integer :story_id, null: false
      t.integer :response_id, null: false

      t.timestamps
    end
    add_index :claps, :user_id
    add_index :claps, :story_id
    add_index :claps, :response_id
    add_index :claps, [:user_id, :story_id], unique: true
    add_index :claps, [:user_id, :response_id], unique: true
  end
end
