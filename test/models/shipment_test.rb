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
#  delivery_status :string           not null
#

require 'test_helper'

class ShipmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
