// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Read Quran',
  siteUrl: 'https://azmi6298.github.io',
  pathPrefix: '/gridsome-quran-app',
  plugins: [
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['name'],
        collections: [
          {
            typeName: 'Surah',
            indexName: 'Surah',
            fields: ['name']
          }
        ]
      }
    }
  ]
}
