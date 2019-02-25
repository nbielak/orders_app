# == Schema Information
#
# Table name: orders
#
#  id          :bigint(8)        not null, primary key
#  vendor_id   :integer          not null
#  information :string           not null
#  shipped     :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Order < ApplicationRecord
    validates :vendor_id, :information, presence: true

    belongs_to :vendor,
        foreign_key: :vendor_id,
        class_name: :Vendor

    def ship!
        self.shipped = true 
        self.save!
    end
end
