class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.references :user
      t.string :movie_link
      t.datetime :start_at
      t.datetime :end_at
      t.text :description

      t.timestamps
    end
  end
end
