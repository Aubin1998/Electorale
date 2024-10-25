<template>
    <div>
        <div class="nav">
            <h4>Home/setting</h4>
        </div>
        <div class="card">
            <WorkspaceAnneeElectorale v-if="show.showAnneElectoral" />
            <WorkspaceGenreElection v-if="show.showGenreElection" />
            <WorkspaceListeElecteurs v-if="show.showListeElecteurs" />
            <WorkspaceFiltrageRecherche v-if="show.showFiltrageRecherche" />
            <WorkspaceActionsGestion v-if="show.showActionsGestion" />
            <WorkspaceSurveillance v-if="show.showSurveillance" />
            <WorkspaceParQuartier v-if="show.showParQuartier" />
            <WorkspaceParRegion v-if="show.showParRegion" />
            <WorkspaceAjoutUtilisateur v-if="show.showAjoutUtilisateur" />
            <WorkspaceListeUtilisateurs v-if="show.showListeUtilisateurs" />
            <WorkspaceChanger v-if="show.showChanger" />
            <WorkspaceElecteurInscrit v-if="show.showElecteurInscrit" />
            <WorkspaceBureauActifs v-if="show.showBureauActifs" />
            <WorkspaceTauxParticipationGlobal v-if="show.showTauxParticipation" />
            <WorkspaceNombreTotalVotes v-if="show.showNombreTotalVotes" />
            <WorkspaceMesTaches v-if="show.showMesTaches" />
            <WorkspaceAutres v-if="show.showAutres" />






        </div>
    </div>
</template>

<script setup>
//creationElectorale
import WorkspaceAnneeElectorale from "@/components/creationElectorale/WorkspaceAnneeElectorale.vue";
import WorkspaceGenreElection from "@/components/creationElectorale/WorkspaceGenreElection.vue";
//gestionElecteurs
import WorkspaceListeElecteurs from "@/components/gestionElecteurs/WorkspaceListeElecteurs.vue";
import WorkspaceFiltrageRecherche from "@/components/gestionElecteurs/WorkspaceFiltrageRecherche.vue";
import WorkspaceActionsGestion from "@/components/gestionElecteurs/WorkspaceActionsGestion.vue";
import WorkspaceSurveillance from "@/components/gestionElecteurs/WorkspaceSurveillance.vue";
//gestion bureaux
import WorkspaceParQuartier from "@/components/gestionBureaux/WorkspaceParQuartier.vue";
import WorkspaceParRegion from "@/components/gestionBureaux/WorkspaceParRegion.vue";
//gestion utilisateur
import WorkspaceAjoutUtilisateur from "@/components/gestionUtilisateur/WorkspaceAjoutUtilisateur.vue";
import WorkspaceListeUtilisateurs from "@/components/gestionUtilisateur/WorkspaceListeUtilisateurs.vue";
import WorkspaceChanger from "@/components/gestionUtilisateur/WorkspaceChanger.vue";
//statistiques
import WorkspaceElecteurInscrit from "@/components/Statistiques/WorkspaceElecteurInscrit.vue";
import WorkspaceBureauActifs from "@/components/Statistiques/WorkspaceBureauActifs.vue";
import WorkspaceTauxParticipationGlobal from "@/components/Statistiques/WorkspaceTauxParticipationGlobal.vue";
import WorkspaceNombreTotalVotes from "@/components/Statistiques/WorkspaceNombreTotalVotes.vue";
//historiques
import WorkspaceMesTaches from "@/components/historiques/WorkspaceMesTaches.vue";
import WorkspaceAutres from "@/components/historiques/WorkspaceAutres.vue";




















import { useShow } from "@/stores/show";
const show = useShow(); //call Show in show.js
</script>

<style scoped>
.card {
    background-color: #434955;
    width: 96%;
    height: 76vh;
    margin: 0 auto;
    align-content: center;
    border-radius: 10px;
    box-shadow: 0px 0px 2px rgb(134, 132, 132);

}

.nav {
    background-color: #4349553a;
    width: 100%;
    color: #d4d2d2;
    margin-bottom: 20px;
    padding-left: 20px;



}

.nav h4 {
    font-weight: 700;
}
</style>