<template>
    <div class="container">
        <WorkspaceSideBar />
        <div class="cont">


            <WorkspaceNavigation />
            <div class="containte">
                <WorkspaceContainte />
            </div>
        </div>
    </div>



</template>

<script setup>
import WorkspaceNavigation from "@/components/WorkspaceNavigation.vue";
import WorkspaceSideBar from "@/components/WorkspaceSideBar.vue";
import WorkspaceContainte from "@/components/WorkspaceContainte.vue";



</script>

<style scoped>





















































.cont {
    width: 80%;
    background-color: #434955
}

.containte {
    background-color: #1D222B;
    height: 90vh;
    padding: 20px;
    box-shadow: 0px 0px 2px rgb(134, 132, 132);
    border-radius: 4px;
    /* display: flex;
    justify-content: center;
    align-items: center;*/

}

.container {

    height: 100vh;
    display: flex;

}
</style>