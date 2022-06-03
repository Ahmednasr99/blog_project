class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :like
      t.belongs_to :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
