class AddDeliveryStatusToShipment < ActiveRecord::Migration[5.2]
  def change
    add_column :shipments, :delivery_status, :string, null: false
  end
end
