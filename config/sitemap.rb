# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "http://www.kuret.me"
SitemapGenerator::Sitemap.create_index = true
SitemapGenerator::Sitemap.ping_search_engines('http://kuret.me/sitemap.xml.gz')
SitemapGenerator.verbose = false
SitemapGenerator::Sitemap.create do
  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #
  # Examples:
  #
  add 'blog'

  add '/blogs'
    add blogs_path, :priority => 0.9, :changefreq => 'daily'

      Blog.find_each do |blog|
        add blogs_path(blog), :lastmod => blog.updated_at
      end
        
  add '/bios'
    add bios_path, :priority => 0.9, :changefreq => 'monthly'

      Bio.find_each do |bio|
        add bio_path(bio), :lastmod => bio.updated_at
      end
  
  add '/works'
  #

     add works_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add all articles:
  #
     Work.find_each do |work|
       add work_path(work), :lastmod => work.updated_at
     end
  add '/contact', :changefreq => 'monthly'
end
