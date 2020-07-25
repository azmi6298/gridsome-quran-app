<template>
  <Layout>
    <b-container class="py-5">
       <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="right"
      ></b-pagination>

      <b-table
        id="my-table"
        :items="$page.allSurah.edges"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        sticky-header
        small
        hover
      >
      </b-table>
    </b-container>
  </Layout>
</template>

<page-query>
{
  allSurah(order: ASC) {
    edges {
      node{
        number_of_surah
        number_of_ayah
        name
        name_translations {
          en
          id
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      perPage: 20,
      currentPage: 1,
      fields: [
        { key: 'node.number_of_surah', label: 'No.'},
        { key: 'node.name', label: 'Surah Name'},
        { key: 'node.name_translations.en', label: 'EN Translation'},
        { key: 'node.name_translations.id', label: 'ID Translation'},
        { key: 'node.number_of_ayah', label: 'Total Ayah'}
      ]
    }
  },
  computed: {
    rows() {
      return this.$page.allSurah.edges.length
    }
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
