module.exports = {
  title: null,
  description: 'Research data library',
  themeConfig: {
    logo: 'https://nyu.databrary.org/web/images/logo/databrary-nav.svg',
    nav: [
      { text: 'Home', link: 'https://databrary.org' },
      { text: 'Resources', link: '/resources/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      // resources
      '/resources/': [
        ['', 'Resources'],
        ['getting_started', 'Getting Started'],
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
        ''
      ]
    }
  },
}	
