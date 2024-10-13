<template>

    <div class="navBar">
        <div class="link">
            <h3 class="liking">Acceuil</h3>
            <h3 class="liking">Utilisateur</h3>
            <h3 class="liking">Paramètre</h3>
        </div>

        <div class="profil">
            <div class="notif">
                <div class="notification show">
                    <i class="pi pi-bell " style="font-size: 18px; color: white;"></i>
                    <h4 class="text">Notification</h4>
                </div>
                <div class="Mail show">
                    <i class="pi pi-envelope" style="font-size: 18px; color: white;"></i>
                    <h4 class="text">Mail</h4>

                </div>
            </div>
            <div class="photo" @click="show.showDescFunc()">P</div> <!--Fonction atao agnaty click fa tsy variable-->
            <div class="showProfil" v v-if="show.showDesc">
                <div class="sectionItem">
                    <h3 class="textSection">Compte</h3>
                </div>

                <div class="items">
                    <h3 class="item">Lorem</h3>
                    <h3 class="item">Lorem</h3>
                    <h3 class="item">Lorem</h3>
                </div>
            </div>
        </div>

    </div>


</template>

<script setup>
import "primeicons/primeicons.css"

import { useShow } from "@/stores/show";

const show = useShow(); //call Show in show.js


</script>

<style scoped>
.navBar {
    height: 10vh;
    background-color: #434955;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link {
    width: 60%;
    display: flex;
    margin: 20px;
}

.liking {
    padding: 0px 10px;
    color: #d4d2d2;
}

.liking:hover {
    background-color: #1D222B;
}

.profil {

    width: 20%;
    text-align: right;
    display: flex;
    justify-content: space-between;
}

.photo {
    background-color: rgb(255, 127, 127);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    margin-right: 10px;
}

.showProfil {
    position: absolute;
    background-color: #434955;
    color: rgb(221, 214, 214);
    width: 190px;
    top: 70px;
    border-radius: 10%;
    text-align: left;
}

.sectionItem {
    background-color: #72767e;
    border-radius: 10px 10px 0px 0px;
    padding: 5px;

}

.item {
    color: #fff;
    padding: 4px 10px;
}

.item:hover {
    background-color: #97999e;
}

.notif {

    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.text {
    color: #fff;
    position: absolute;
    display: none;
    padding: 2px 5px;
    border-radius: 2px;
    background-color: rgb(158, 157, 157);
}

.show:hover .text {

    display: block;
}
</style>