<template>
  <div class="container">
    <div class="datos">
      <p type="Placa"><label></label></p>
      <p type="Marca"><label></label></p>
      <p type="Modelo"><label></label></p>
      <p type="Color"><label></label></p>
      <p type="Precio"><label></label></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
p::before {
  content: attr(type);
  display: block;
}
label{
    border: solid 1px black;
    width: 30px;
}
</style>