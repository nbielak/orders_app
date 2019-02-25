class DeleteOrderNumberAndVendor < ActiveRecord::Migration[5.2]
  def change
    remove_column :shipments, :vendor
    remove_column :shipments, :order_number

    add_column :shipments, :order_id, :integer, null: false

    add_index :shipments, :order_id, unique: true
  end
end
