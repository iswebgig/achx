<template>
   <div class="" >
   
 </div>
</template>

<script>


export default {
 name: 'App',
 data() {
   return {
     username: "",
     authenticated: false
   }
 },
 components: {

 },
 methods: {
   submitUsername(username) {
      if(!username) {
        return alert('please provide a username');
      }

      this.authenticated = true;
   }
 }
 }
</script>

<style>
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
   background: #2c3e50;
 }
 .box {
   border: 1px solid gray;
 }

 .username {
   margin: 12px auto 7px auto;
   color: wheat;
 }

   .Botton {
   color: #fff;
   background-color: #4d555f;
   border-color: #303840;
   padding: 8px;
   font-weight: bolder;
 }
</style>