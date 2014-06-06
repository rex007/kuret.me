class Contact < MailForm::Base
	include MailForm::Delivery
	attribute :name, :validate => true
	attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	attribute :message, :validate => true


	append :remote_ip, :user_agent

	def headers
		{
			:to => "rex007@gmail.com",
			:subject => "Contact from Kuret site",
			:from => %("#{name}" <#{email}>)
		}
	end
end