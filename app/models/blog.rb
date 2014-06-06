class Blog < ActiveRecord::Base
    has_many :blog_images
    accepts_nested_attributes_for :blog_images, allow_destroy: :true
   
     def to_param
                "#{id}-#{title.parameterize}"
     end
end
