Hyde-Y
======

<small>Forked from [Hyde-X](https://github.com/zyro/hyde-x)</small>

Enhanced port of the Jekyll "[Hyde](https://github.com/poole/hyde)" theme to the [Hugo](http://gohugo.io) site generator. Check below for a list of enhancements.

You can find a live site using this theme [here](http://andreimihu.com) and the corresponding source code [here](https://github.com/zyro/andreimihu.com).

* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)
* [Built-in colour themes](#built-in-colour-themes)
* [Tips](#tips)
* [Changes and enhancements from the original theme](#changes-and-enhancements-from-the-original-theme)
* [Attribution](#attribution)
* [Questions, ideas, bugs, pull requests?](#questions-ideas-bugs-pull-requests)
* [License](#license)

### Installation

```
$ cd your_site_repo/
$ mkdir themes
$ cd themes
$ git clone https://github.com/enten/hyde-y
```

See the [official Hugo themes documentation](http://gohugo.io/themes/installing) for more info.

### Usage

This theme expects a relatively standard Hugo blog/personal site layout:
```
.
└── content
    ├── post
    |   ├── post1.md
    |   └── post2.md
    ├── license.md        // this is used in the sidebar footer link
    └── other_page.md
```

Just run `hugo --theme=hyde-y` to generate your site!

### Configuration

An example of what your site's `config.toml` could look like. All theme-specific parameters are under `[params]` and standard Hugo parameters are used where possible.

``` toml
# config file (default is path/config.yaml|json|toml)
config = "config.toml"

# Site title
title = "Site title"

# theme to use (located in /themes/THEMENAME/)
theme = "hyde-y"

# URLs
baseurl = "http://example.com/" # hostname (and path) to the root eg. http://spf13.com/
canonifyurls = false
relativeurls = false # enable this to make all relative URLs relative to content root. Note that this does not affect absolute URLs.
uglyURLs = false # if true, use /filename.html instead of /filename/

# main directories
archetypedir = "archetype"
contentdir = "content"
dataDir = "data"
layoutdir = "layouts"
publishdir = "public"
staticdir = "static"

# building
buildDrafts = false # include content marked as draft
buildFuture = false # include content with publishdate in the future
defaultExtension = "html"
defaultLayout = "post"
destination = "" # filesystem path to write files to
disableLiveReload = false
disableRss = false # Do not build RSS files
disableSitemap = false # Do not build Sitemap file
footnoteAnchorPrefix = ""
footnoteReturnLinkContents = ""
languageCode = ""
metaDataFormat = "toml" # "yaml", "toml", "json"
noTimes = false # Don't sync modification time of files
paginate = 5
paginatePath = "page"
pluralizeListTitles = true # Pluralize titles in lists using inflect
pygmentsStyle = "monokai" # color-codes for highlighting derived from this style
pygmentsUseClasses = false # true: use pygments-css or false: color-codes directly
sitemap = ""
source = "" # filesystem path to read files relative from
watch = true # watch filesystem for changes and recreate as needed

# logging
verbose = false # verbose output
log = false # Enable Logging
logFile = "" # Log File path (if set, logging enabled automatically)
stepAnalysis = false # display memory and timing of different steps of the program
verboseLog = false # verbose logging

# editor
editor = "" # edit new content with this editor, if provided
newContentEditor = ""

[blackfriday]
    angledQuotes = true
    fractions = false
    plainIdAnchors = true
    extensions = ["hardLineBreak"]

[permalinks]
    # Optional. Change the permalink format for the 'post' content type.
    # The format shown here is the same one Jekyll/Octopress uses by default.
    post = "/blog/:year/:month/:day/:slug/"

[taxonomies]
    # Optional. Use if you want tags and lists.
    category = "categories"
    tag = "tags"

[author]
    name = "Your Name"
    email = "yourname@example.com"
    gravatarHash = "" # MD5 hash of your Gravatar email address
    sidebarDisplay = false
    copyrightDisplay = true

#
# All parameters below here are optional and can be mixed and matched.
#
[params]
    # Changes sidebar background and link/accent colours.
    # See below for more colour options.
    # This also works: "theme-base-08 layout-reverse", or just "layout-reverse".
    theme = "theme-base-00"

    # Select a syntax highight.
    # Check the static/css/highlight directory for options.
    highlight = "sunburst"

    # Text for the top menu link, which goes the root URL for the site.
    # Default (if omitted) is "Blog".
    home = "Blog"

    # Displays under the author name in the sidebar, keep it short.
    # You can use markdown here.
    tagline = "Short description about your site."

    # Used when a given page doesn't set its own.
    defaultDescription = "Your default page description"
    defaultKeywords = "your,default,page,keywords"

    # If false display full article contents in blog index.
    # Otherwise show description and 'read on' link to individual blog post page.
    # Default (if omitted) is true.
    truncate = true

    # If true display table of contents in pages
    toc = false

    # Optional, enable Disqus integration
    disqusShortname = "your_disqus_shortname"

    # Metadata used to drive integrations.
    googleAuthorship = "Your Google+ profile ID"
    googleAnalytics = "Your Google Analytics tracking code"

    # Sidebar social links, these must be full URLs.
    github = ""
    bitbucket = ""
    linkedin = ""
    googleplus = ""
    facebook = ""
    twitter = ""
    youtube = ""

    # Other social-like sidebar links
    rss = true  # switch to true to enable RSS icon link
    flattr = ""  # populate with your flattr uid
```

### Built-in colour themes

Hyde-Y provides 8 built-in colour themes by default, with the option to define more in your own custom CSS.

![Hyde-Y theme classes](https://github.com/enten/hyde-y/blob/master/images/theme-colours.png)

### Tips

* If you've added `theme = "hyde-y"` to your `config.toml`, you don't need to keep using the `--theme=hyde-y` flag!
* Pages where you specify `menu = "main"` in the front matter will be linked in the sidebar just below the `Blog` link.
* Use the exact permalink format above to maintain old links if migrating from Jekyll/Octopress.
* Although all of the syntax highlight CSS files under the theme's `static/css/highlight` are bundled with the site, only the one you choose will be included in the page and delivered to the browser.
* Change the favicon by providing your own as `static/favicon.png` in your site directory.
* Hugo makes it easy to override theme layout and behaviour, read about it [here](http://gohugo.io/themes/customizing).
* Pagination is set to 10 items by default, change it by updating `paginate = 10` in your `config.toml`.
* Set `truncate = false` in the `[params]` section of your `config.toml` to display full blog post contents in the index page, like the [base Hyde theme](https://github.com/poole/hyde) did.

### Changes and enhancements from the original theme

* Category labels and lists.
* Client-side syntax highlighting through [highlight.js](https://highlightjs.org/), sane fallback if disabled or no JS - infinitely more flexible than the standard Hugo highlighting.
* Disqus integration: comment counts listed under blog entry names in post list, comments displayed at the bottom of each post.
* Gravatar image in sidebar.
* Google Analytics integration.
* Google Authorship metadata.
* Sidebar link layout and footer format changes.
* Blog post list now contains only the post description, not the full contents.
* Paginated blog listing.
* [FontAwesome](http://fortawesome.github.io/Font-Awesome) social links.
* ...many other small layout tweaks!

### Attribution

Obviously largely a port of the awesome [Hyde](https://github.com/poole/hyde) theme.

### Questions, ideas, bugs, pull requests?

All feedback is welcome! Head over to the [issue tracker](https://github.com/enten/hyde-y/issues).

### License

Open sourced under the [MIT license](https://github.com/enten/hyde-y/blob/master/LICENSE).
