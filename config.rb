# Assets directories
set :css_dir, 'Pocket/assets/css'
set :fonts_dir, 'Pocket/assets/fonts'
set :images_dir, 'Pocket/assets/img'
set :js_dir, 'Pocket/assets/js'

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

activate :directory_indexes

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
