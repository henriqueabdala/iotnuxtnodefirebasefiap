<template>
  <div class="container" :class="{ on: status}" @click="toggle">
      <h1 class="title" :class="{ on: status}"> Arduino + Nuxt.JS</h1>
      <span class="btn__arduino" :class="{ on: status}">{{ status ? 'Apagar' :'Acender' }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: true, 
    }
  },
  methods: {
    toggle(){
      this.status = !this.status;
      this.$http.$post('/api/arduino', { "led": this.status })
    }
  },
  async fetch(){
    this.status = await this.$http.$get('/api/arduino')
  },

}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #696969;
  transition: 0.5s ease-in-out all;
}
.container.on{
  background-color: #f3ffbd;
}



.btn__arduino{
  text-transform: uppercase;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: 2rem;
  border: none;
  opacity: 0.75;
  background: #f3ffbd;
  color: #696969;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out all;
}
.btn__arduino.on{
  background: #696969;
  color: #f3ffbd;
}


.title {
  font-family:'Quicksand','Source Sans Pro',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1.6rem;
  color: #f3ffbd;
  letter-spacing: 1px;
}
.title.on{
  color: #696969;
}
</style>
