<template>
    <div>
        <div class="container-fluid">
            <SideBar />
            <router-view :key="$route.fullPath" />
        </div>
    </div>
</template>

<script>

import SideBar from './SideBar.vue'
export default {
    name: "AdminPanelWorld",
    components: {
        SideBar,
    },
    data() {
        return {

        }
    },
}
</script>


<style scoped>
.container-fluid {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
}

.pgs {
    width: 100%;
    padding-right: 0px;
    margin-right: auto;
    margin-left: auto;
}
</style>
