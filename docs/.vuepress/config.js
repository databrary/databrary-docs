module.exports = {
  title: null,
  description: 'Research data library',
  themeConfig: {
    logo: 'https://nyu.databrary.org/web/images/logo/databrary-nav.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Support', link: '/support/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      // support
      '/support/': [
        '',
        ['user', 'User Guide'],
        ['institutions', 'Guide for Institutions'],
        ['templates', 'Template documents'],
        ['policies', 'Policies']
      ],

      // about
      '/about/': [
        '',
        ['team', 'Our Team']
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  },
}	
