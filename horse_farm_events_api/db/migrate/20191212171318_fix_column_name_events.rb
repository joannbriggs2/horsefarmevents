class FixColumnNameEvents < ActiveRecord::Migration[6.0]
  def change
    rename_column :events, :type, :eventtype
  end
end
