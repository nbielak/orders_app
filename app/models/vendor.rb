# == Schema Information
#
# Table name: vendors
#
#  id                    :bigint(8)        not null, primary key
#  name                  :string           not null
#  address               :string           not null
#  average_delivery_time :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Vendor < ApplicationRecord
    validates :name, :address, null: false, uniqueness: true

    has_many :shipments,
        dependent: :destroy
    
    has_many :orders

    def avg_delivery
        Shipment.where(vendor_id: self.id).average(:delivery_time).to_i
    end
end
