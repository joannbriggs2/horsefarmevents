class CreateVenue < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.string :contact
      t.string :website
      t.string :phone
      t.string :email
    end
  end
end
