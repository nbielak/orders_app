# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_25_021420) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.integer "vendor_id", null: false
    t.string "information", null: false
    t.boolean "shipped", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["vendor_id"], name: "index_orders_on_vendor_id"
  end

  create_table "shipments", force: :cascade do |t|
    t.integer "tracking_number", null: false
    t.string "address", null: false
    t.boolean "delivered", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "order_id", null: false
    t.integer "delivery_time", null: false
    t.integer "vendor_id", null: false
    t.string "delivery_status", null: false
    t.index ["order_id"], name: "index_shipments_on_order_id", unique: true
    t.index ["tracking_number"], name: "index_shipments_on_tracking_number", unique: true
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.integer "average_delivery_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_vendors_on_name", unique: true
  end

end
