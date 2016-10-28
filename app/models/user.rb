# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  name          :text
#  email         :text
#  password      :text
#  highest_score :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ActiveRecord::Base
end
