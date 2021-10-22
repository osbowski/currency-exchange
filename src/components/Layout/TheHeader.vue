<template>
  <va-navbar color="primary" class="mb-5">
    <template #left>
      <va-navbar-item>Currencies Converter</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item
        ><router-link to="/add">Add exchange rate</router-link></va-navbar-item
      >
      <va-navbar-item
        ><router-link to="/currencies"
          >Currencies View</router-link
        ></va-navbar-item
      >
      <va-navbar-item
        ><router-link to="/converter"
          >Convert to PLN</router-link
        ></va-navbar-item
      >
    </template>
  </va-navbar>
</template>
