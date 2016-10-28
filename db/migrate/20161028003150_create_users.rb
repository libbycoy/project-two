class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :password
      t.integer :highest_score

      t.timestamps null: false
    end
  end
end
