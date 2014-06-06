class Work < ActiveRecord::Base
	mount_uploader :image, WorkImageUploader
end
