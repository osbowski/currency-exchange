<template>
  <tr>
    <td>{{ currencyName }}</td>
    <td>{{ currencyValue ? currencyValue : "Exchange rate not added" }}</td>
  </tr>
</template>

<script>
export default {
  props: ["currencyName", "currencyValue"],
};
</script>
