class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.string :image_url
      t.integer :price
      t.references :user

      t.timestamps
    end
  end
end
