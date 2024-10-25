<template>
    <div class="sideBar">
        <div class="logo">Logo</div>
        <div class="container">

            <!-- section-->
            <div class="section">
                <div class="sectionTitle">
                    <h4>ELECTION</h4>
                </div>
                <div class="sectionContainer">
//for election
                    <div class="itemSection " 
                    :class="{ active: show.showElectionActive == true }">
                        <i class="pi pi-id-card" style="font-size: 18px; color: white;"></i>
                        <h4 
                        @click="show.setSelectSideBar('Création élection')"
                        >Création électorale
                    </h4>
                        <WorkspaceSubSectionElections v-if="show.showElection" />
                    </div>
//for candidats
                    <div class="itemSection" @click="show.showCandidatFunc()">
                        <i class="pi pi-user" style="font-size: 18px; color: white;"></i>
                        <h4>Gestion des candidats</h4>
                        <WorkspaceSubSectionCandidats v-if="show.showCandidat" />
                    </div>
//for electeur
                    <div class="itemSection" 
                    :class="{ active: show.showElecteursActive == true }">
                        <i class="pi pi-users" style="font-size: 18px; color: white;"></i>
                        <h4 
                        @click="show.setSelectSideBar('Gestion des électeurs')">Gestion des électeurs</h4>
                        <WorkspaceSubSectionElecteurs v-if="show.showElecteur" />
                    </div>
//for bureaux
                    <div class="itemSection"  
                    :class="{ active: show.showBureauxActive == true }">
                        <i class="pi pi-building" style="font-size: 18px; color: white;"></i>
                        <h4
                        @click="show.setSelectSideBar('Gestion des bureaux')">Gestion des bureaux</h4>
                        <WorkspaceSubSectionBureaux v-if="show.showBureau" />
                    </div>
//for utilisateurs
                    <div class="itemSection" 
                    :class="{ active: show.showUtilisateurActive == true }">
                        <i class="pi pi-sitemap" style="font-size: 18px; color: white;"></i>
                        <h4 
                        @click="show.setSelectSideBar('Gestion des utilisateurs')">Gestion des utilisateurs</h4>
                        <WorkspaceSubSectionUtilisateurs v-if="show.showUtilisateur" />
                    </div>
//for Statistiques
                    <div class="itemSection"
                    :class="{ active: show.showStatistiquesActive == true }">
                        <i class="pi pi-chart-bar" style="font-size: 18px; color: white;"></i>
                        <h4
                        @click="show.setSelectSideBar('Statistiques')">Statistiques</h4>
                        <WorkspaceSubSectionStatistiques v-if="show.showStatistique" />
                    </div>

//for Historique
                    <div class="itemSection" 
                    :class="{ active: show.showHistoriqueActive == true }">
                        <i class="pi pi-history" style="font-size: 18px; color: white;"></i>
                        <h4
                        @click="show.setSelectSideBar('Historique')">Historique</h4>
                        <WorkspaceSubSectionHistoriques v-if="show.showHistorique" />
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>

<script setup>
import WorkspaceSubSectionElections from "@/components/subsections/WorkspaceSubSectionElections.vue";
import WorkspaceSubSectionCandidats from "@/components/subsections/WorkspaceSubSectionCandidats.vue";
import WorkspaceSubSectionElecteurs from "@/components/subsections/WorkspaceSubSectionElecteurs.vue";
import WorkspaceSubSectionBureaux from "@/components/subsections/WorkspaceSubSectionBureaux.vue";
import WorkspaceSubSectionUtilisateurs from "@/components/subsections/WorkspaceSubSectionUtilisateurs.vue";
import WorkspaceSubSectionStatistiques from "@/components/subsections/WorkspaceSubSectionStatistiques.vue";
import WorkspaceSubSectionHistoriques from "@/components/subsections/WorkspaceSubSectionHistoriques.vue";


import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js

</script>

<style scoped>
.sideBar {
    width: 20%;
    background-color: #434955;
    padding: 0px 20px 20px 20px;
    border-right: 1px solid rgba(134, 132, 132, 0.514);
}

.logo {
    background-color: brown;
    height: 10vh;
    text-align: center;
}

.container {
    width: 100%;
    height: 82vh;
    margin-top: 22px;
    color: #434955;
}

.sectionTitle {
    background-color: #72767e;
    padding: 10px 20px;
    color: #eaedf4;
    font-weight: 700;
    border-radius: 5px 5px 0px 0px;
}

.sectionTitle h4 {

    color: #eaedf4;
    font-weight: 700;
}

.itemSection {
    display: flex;
    padding: 10px 20px;
    align-items: center;
}

.itemSection h4 {
    padding-left: 20px;
    color: #fff;
    font-weight: 500;
}

/*.itemSection:hover {

    background-color: #56575a;
}
*/
.active {
    background-color: aquamarine;
}
</style>