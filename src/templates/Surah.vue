<template>
  <Layout>
    <b-container class="py-5">
      <h1>{{ $page.surah.name }}</h1>
      <ul>
        <li v-for="(verse, index) in $page.surah.verses" :key="index">
          {{ verse.text }}
        </li>
      </ul>
    </b-container>
  </Layout>
</template>

<page-query>
  query getSurah($path: String!){
    surah: surah(path: $path){
      name
      name_translations {
        en
        id
      }
      number_of_ayah
      number_of_surah
      place
      recitation
      type
      verses {
        text
        translation_en
        translation_id
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.surah.name
    }
  }
}
</script>