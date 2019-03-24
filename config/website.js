const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Adrian Badiu - web developer', // Navigation and Site Title
  siteTitleAlt: 'abadiu', // Alternative Site title for SEO
  siteTitleShort: 'abadiu', // short_name for manifest
  siteHeadline: 'Southampton based web developer', // Headline for schema.org JSONLD
  siteUrl: 'https://abadiu.xyz', // Domain of your site. No trailing slash!
  siteLanguage: 'enGB', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'I am a web developer living in Southampton loooking for new opportunities',
  author: 'Adrian Badiu', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@AdrianBadiu', // Twitter Username
  ogSiteName: 'Adrian Badiu', // Facebook Site Name
  ogLanguage: 'en_GB', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
