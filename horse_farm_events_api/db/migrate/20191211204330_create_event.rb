class CreateEvent < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :type
      t.string :date
      t.string :time
    end
  end
end
