<script setup>


import WorkspaceLogin from "./views/WorkspaceLogin.vue";

import WorkspaceSinginUp from "./views/WorkspaceSinginUp.vue";

import WorkspaceDashboard from "./views/WorkspaceDashboard.vue";
import { useShow } from "./stores/show";

const show = useShow(); //call Show in show.js



</script>

<template>
  <div class="app">

    <WorkspaceLogin v-if="show.showLogin" />
    <WorkspaceSinginUp v-if="show.showSingUp" />
    <WorkspaceDashboard v-if="show.showDashboard" />

   <!--<Teleport to="body">
      <WorkspaceProfil />
    </Teleport> -->

  </div>
</template>

<style scoped></style>
