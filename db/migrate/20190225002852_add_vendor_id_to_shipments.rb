class AddVendorIdToShipments < ActiveRecord::Migration[5.2]
  def change
    add_column :shipments, :vendor_id, :integer, null: false
  end
end
