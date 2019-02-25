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

require 'test_helper'

class VendorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
