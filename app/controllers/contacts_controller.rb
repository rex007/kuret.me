class ContactsController < ApplicationController
	def new
		@contact=Contact.new
	end

	def create
		@contact=Contact.new(params[:contact])
		@contact.request = request
		if @contact.save
			respond_to do |format|
				format.js { render :nothing => true}
			end
		else
			flash.now[:error]= "Cannot send message"
			render :new
		end
	end
end
