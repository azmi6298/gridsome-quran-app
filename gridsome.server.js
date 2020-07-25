// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json')

    const surahCollection = actions.addCollection('Surah')

    console.log('Started Seeding Data')

    for (const surah of data) {
      let path = `/surah/${surah.number_of_surah}`
      let { data: {verses} }  = await axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${surah.number_of_surah}.json`)
      
      surahCollection.addNode({
        id: surah.number_of_surah,
        name: surah.name,
        path: path,
        name_translations: surah.name_translations,
        number_of_ayah: surah.number_of_ayah,
        place: surah.place,
        recitation: surah.recitation,
        type: surah.type,
        verses: verses
      })

      console.log(`${surah.name} seeded (${surah.number_of_surah}/114)`)
    }
    
    console.log('Finished Seeding Data')
  })
}
