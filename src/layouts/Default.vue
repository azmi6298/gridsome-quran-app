<template>
  <div class="layout">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">{{ $static.metadata.siteName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-form-input 
            id="search" 
            v-model="searchTerm"
            type="text" 
            placeholder="Search ...">
          </b-form-input>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ID</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <g-link
      v-for="result in searchResults"
      :key="result.id"
      :to="result.path"
      class="navbar-item">
      {{ result.title }}
    </g-link>

    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin'
export default {
  mixins: [Search]
}
</script>
