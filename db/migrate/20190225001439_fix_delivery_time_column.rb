class FixDeliveryTimeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :shipments, :delivery_time
    add_column :shipments, :delivery_time, :integer, null: false
  end
end
