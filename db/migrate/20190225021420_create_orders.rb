class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :vendor_id, null: false
      t.string :information, null: false
      t.boolean :shipped, null: false

      t.timestamps
    end

    add_index :orders, :vendor_id
  end
end
