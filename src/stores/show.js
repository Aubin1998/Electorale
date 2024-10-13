import { defineStore } from "pinia";
import { ref } from "vue";

export const useShow = defineStore('Show', () =>{
  const showLogin = ref(true )
  const showSingUp = ref(false)
  const showDashboard = ref(false)




  function showLoginFunc() {
    showLogin.value = true
    showSingUp.value = false

    
  }
  function showSingUpFunc() {
    showLogin.value = false
    showSingUp.value = true
    
  }
  function showDashboardFunc() {
    showLogin.value = false
    showSingUp.value = false
    showDashboard.value = true

    
  }



  return{
    showLogin,
    showLoginFunc,

    showSingUp,
    showSingUpFunc,

    showDashboard,
    showDashboardFunc


  }



})