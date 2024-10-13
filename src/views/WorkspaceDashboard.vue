<template>
    <div class="container">
        <div class="sideBar">
            <div class="logo">Logo</div>
        </div>
        <div class="cont">
            <div class="navBar">
                <div class="link">
                    <h3 class="liking">Lorem</h3>
                    <h3 class="liking">Lorem</h3>
                    <h3 class="liking">Lorem</h3>



                </div>

                <div class="profil">
                    <div class="notif">
                        <div class="notification">N</div>
                        <div class="Mail">M</div>
                    </div>
                    <div class="photo">P</div>
                </div>

            </div>
            <div class="containte">containte</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {

    height: 100vh;
    display: flex;

}

.containte {
    background-color: #1D222B;
    height: 90vh;
    padding: 20px;
    box-shadow: 0px 0px 2px rgb(134, 132, 132);
    border-radius: 4px
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

.cont {
    width: 80%;
    background-color: #434955
}

.navBar {
    height: 10vh;
    background-color: #434955;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link {
    background-color: rgb(172, 127, 255);
    width: 60%;
    display: flex;
    margin: 20px;
}

.liking {
    padding: 0px 10px;
}

.profil {
    background-color: rgb(15, 26, 12);
    width: 30%;
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

.notif {
    background-color: rgb(255, 127, 206);
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>