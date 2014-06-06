class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

 before_filter :load

  def load
        @bios= Bio.all
        @contact = Contact.new
        @works = Work.all
        @skills = Skill.all
        @blogs = Blog.all
  end
end
