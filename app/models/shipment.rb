# == Schema Information
#
# Table name: shipments
#
#  id              :bigint(8)        not null, primary key
#  order_number    :integer          not null
#  vendor          :string           not null
#  tracking_number :integer          not null
#  address         :string           not null
#  delivered       :boolean          not null
#  delivery_time   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Shipment < ApplicationRecord
    validates :order_number, :tracking_number, presence: true, uniqueness: true
    validates :vendor, :address, :delivered, :delivery_time, presence: true
end
