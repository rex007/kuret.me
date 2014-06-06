class MainController < ApplicationController

  def index
  	starting_year = 1998
  	@years_of_experience = (Time.now.strftime("%Y").to_i) - starting_year
  	@bios= Bio.all
  	@contact = Contact.new
  	@works = Work.all.order("created_at DESC")
  	@skills = Skill.all
        @blogs = Blog.all.order("created_at DESC").limit(2)
  	@client = Twitter::REST::Client.new do |config|
	  config.consumer_key        = "rjff2Gue1qFv1nUsamy7Jg"
	  config.consumer_secret     = "hW3vbTEd0c5WypFb4dFHtucpTzgazqBTT1Dktr3fY7s"
	  config.access_token        = "84047853-Piq1HiaoRK3o10griTK7orBspxnxayK5g5X5Qhj5H"
	  config.access_token_secret = "mAb0kyCIIQw9FMXjUxPuSy0NQGMOLV3iLjwFARCmNfAUp"
	end
  end

end








