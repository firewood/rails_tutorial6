class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :provider, null: false, default: ''
      t.string :uid, null: false, default: ''
      t.string :name, null: false, default: ''
      t.string :handle, null: false, default: ''

      t.timestamps
    end
  end
end
