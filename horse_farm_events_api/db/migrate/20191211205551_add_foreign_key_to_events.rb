class AddForeignKeyToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :venue_id, :integer

  end
end
