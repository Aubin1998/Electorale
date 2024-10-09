<template>
  <div class="login">

    <div class="container">
      <div class="formulaire">
        <h3 class="bienvenu">Se connecté</h3>
        <h4 class="subtitle">Entrez votre compte</h4>
        <div class="inputForm">
          <div class="itemContainer">
            <input type="text" placeholder="Votre email" class="input" v-model="pseudo" />
          </div>
          <div class="itemContainer">
            <input type="text" placeholder="Votre Mot de passe" class="input" v-model="mdp" />
          </div>

        </div>
        <div class="btnlogin" @click="verify">
          <h3>Se connécter</h3>
        </div>
        <h5>
          <span @click="show.showSingUpFunc()" class="forgotPass">Mots de passe oublié?</span>
        </h5>
      </div>
      <div class="formulaire1">
        <div class="contain">
          <h3 class="bienvenu">Inscription</h3>

          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quisquam enim, consectetur consequatur, nulla
            quae porro voluptatum.
          </h5>
          <div class="btnInscrit" @click="verify">
            <h3>S'inscrire</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";
import { useShow } from "../stores/show";
import { Service } from "@/plugins/service";
import { useAuthentificationStore } from "../stores/authentification";
import { ref } from "vue";
import { Cookies } from "@/plugins/cookies";

// create some variable as ref
const pseudo = ref("");
const mdp = ref("");

// instance my plugins
const url = new URL();
const service = new Service();
const cookies = new Cookies();
const authentification = useAuthentificationStore();

function verify() {
  // make form's data on an object
  let requestData = {
    pseudo: pseudo.value,
    motDePasse: mdp.value,
  };

  console.log(requestData);

  // check if form is OK
  if (service.verifyFormIfOK(requestData)) {
    cookies.delete("accessToken");
    cookies.delete("idPersonne");
    cookies.delete("status");
    authentification.check(
      service.stringTrim(pseudo.value),
      service.stringTrim(mdp.value)
    );
  } else console.log("invalid form");
}

const show = useShow();

// my plugins
import { URL } from "@/plugins/url";
</script>

<style scoped>
.login {
  background-color: #2A303D;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 60%;
  height: 60vh;
  display: flex;
  position: absolute;
  background-color: #2A303D;
  border-radius: 10px;
  /* box-shadow: 0px 0px 5px #a2b5cb; */
}

.logo {
  width: 50%;
  height: 100%;
  background-color: #e6f2ff;
  border-radius: 0px 20px 20px 0px;
  /* background-image: url("../../public/bg1.png");
  background-size: contain;
  background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.formulaire {
  width: 50%;
  height: 100%;
  background-color: #212631;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0px 0px 5px #9d9ea041;
  padding: 5%;
  justify-content: center;
  align-items: center;
}

.formulaire1 {
  width: 50%;
  height: 100%;
  background-color: #6261CC;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 0px 0px 5px #9d9ea041;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contain {
  text-align: center;
  font-weight: 700;
  color: #fff;
}



.bienvenu {
  font-weight: 700;
  font-size: 30px;
}

.subtitle {
  font-weight: 700;

}

.inputForm {
  margin-top: 30px;
}

.itemContainer {
  width: 100%;
  margin: 10px 2px;
}

.input {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #aaaac5;
  background-color: #212631;
  color: #fff;
}

.btnlogin {
  padding: 10px;
  margin: 30px auto;
  background-color: #6261CC;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  text-align: center;
}

.btnInscrit {
  padding: 10px;
  margin: 50px auto;
  background-color: #4E4EA3;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  text-align: center;
}

.btnlogin:hover,
.btnInscrit:hover {
  opacity: 0.7;
  transition: 0.5s;
}


.btnlogin h3,
.btnInscrit h3 {
  font-weight: 700;
}

.forgotPass {
  color: #e6f2ff;
  display: block;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
}

label {
  display: block;
  font-weight: 600;
  width: 100%;
}
</style>
