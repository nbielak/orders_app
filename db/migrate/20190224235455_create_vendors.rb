class CreateVendors < ActiveRecord::Migration[5.2]
  def change
    create_table :vendors do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.integer :average_delivery_time

      t.timestamps
    end

    add_index :vendors, :name, unique: true
  end
end
