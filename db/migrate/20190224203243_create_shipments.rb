class CreateShipments < ActiveRecord::Migration[5.2]
  def change
    create_table :shipments do |t|
      t.integer :order_number, null: false
      t.string :vendor, null: false
      t.integer :tracking_number, null: false
      t.string :address, null: false
      t.boolean :delivered, null: false
      t.string :delivery_time, null: false

      t.timestamps
    end

    add_index :shipments, :order_number, unique: true
    add_index :shipments, :tracking_number, unique: true
  end
end
