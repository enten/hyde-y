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
# hostname (and path) to the root eg. http://spf13.com/
baseurl = "http://www.example.com"

# Site title
title = "Your site"

# Language
languageCode = "en-EN"

# theme to use (located in /themes/THEMENAME/)
theme = "hyde-y"

# pagination
paginate = 5
paginatePath = "page"

[permalinks]
    post = "/:year/:month/:day/:slug/"

[taxonomies]
    tag = "tags"
    topic = "topics"

[author]
    name = "Your Name"
    email = "yourname@example.com"
    gravatarHash = "" # MD5 hash of your Gravatar email address
    sidebarDisplay = false
    copyrightDisplay = true

[[menu.main]]
    name = "Posts"
    identifier = "posts"
    url = "/post/"

[[menu.main]]
    name = "Tags"
    identifier = "tags"
    url = "/tags/"

#
# All parameters below here are optional and can be mixed and matched.
#
[params]
    # Displays under the author name in the sidebar, keep it short.
    # You can use markdown here.
    tagline = "Short description about your site"

    # Text for the top menu link, which goes the root URL for the site.
    # Default (if omitted) is "Home".
    home = "Home"

    # Changes sidebar background and link/accent colours.
    # See below for more colour options.
    # This also works: "theme-base-08 layout-reverse", or just "layout-reverse".
    theme = "theme-base-00"

    # Select a syntax highight.
    # Check the static/css/highlight directory for options.
    highlight = "sunburst"

    # Enable Disqus integration
    disqusShortname = "your_disqus_shortname"

    # Google Analytics.
    googleAnalytics = "Your Google Analytics tracking code"

    # Sidebar social links.
    github = "" # Your Github profile ID
    bitbucket = "" # Your Bitbucket profile ID
    linkedin = "" # Your LinkedIn profile ID (from public URL)
    googleplus = "" # Your Google+ profile ID
    facebook = "" # Your Facebook profile ID
    twitter = "" # Your Twitter profile ID
    youtube = ""  # Your Youtube channel ID
    flattr = ""  # populate with your flattr uid
    rss = true  # switch to true to enable RSS icon link

[blackfriday]
    angledQuotes = true
    fractions = false
    hrefTargetBlank = false
    latexDashes = true
    plainIdAnchors = true
    extensions = []
    extensionmask = []

```

## Menu

Create `data/Menu.toml` to configure the sidebar navigation menu. Example below.

```toml
[about]
    Name = "About"
    URL = "/about"

[posts]
    Name = "Posts"
    Title = "Show list of posts"
    URL = "/post"

[tags]
    Name = "Tags"
    Title = "Show list of tags"
    URL = "/tags"
```

### Built-in colour themes

Hyde-Y provides 8 built-in colour themes by default, with the option to define more in your own custom CSS.

![Hyde-Y theme classes](https://github.com/enten/hyde-y/blob/master/images/theme-colours.png)

### Tips

* If you've added `theme = "hyde-y"` to your `config.toml`, you don't need to keep using the `--theme=hyde-y` flag!
* Although all of the syntax highlight CSS files under the theme's `static/css/highlight` are bundled with the site, only the one you choose will be included in the page and delivered to the browser.
* Change the favicon by providing your own as `static/favicon.png` in your site directory.
* Hugo makes it easy to override theme layout and behaviour, read about it [here](http://gohugo.io/themes/customizing).
* Pagination is set to 10 items by default, change it by updating `paginate = 10` in your `config.toml`.

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
