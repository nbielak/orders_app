# == Schema Information
#
# Table name: shipments
#
#  id              :bigint(8)        not null, primary key
#  tracking_number :integer          not null
#  address         :string           not null
#  delivered       :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  order_id        :integer          not null
#  delivery_time   :integer          not null
#  vendor_id       :integer          not null
#

class Shipment < ApplicationRecord
    validates :order_id, :tracking_number, presence: true, uniqueness: true

    belongs_to :vendor,
        foreign_key: :vendor_id,
        class_name: :Vendor

end
