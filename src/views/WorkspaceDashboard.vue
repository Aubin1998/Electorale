<template>
    <div class="container">
        <div class="sideBar">
            <div class="logo">Logo</div>
        </div>
        <div class="cont">

            <WorkspaceNavigation />
            <div class="containte">
                containte</div>
        </div>
    </div>


</template>

<script setup>
import WorkspaceNavigation from "@/components/WorkspaceNavigation.vue";

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
    border-radius: 4px
}

.container {

    height: 100vh;
    display: flex;

}



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
</style>