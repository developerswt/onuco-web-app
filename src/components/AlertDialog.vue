<template>
    <div class="tr">
        <el-dialog v-model="centerDialogVisible" :show-close="false" :width="dialogWidth">
            <el-row>
                <el-col :sm="24">
                    <div class="my-header">
                    </div>
                </el-col>
                <el-col :sm="24">
                    <div class="my-header" style="padding: 14px;">
                        <span class="sdf">{{ title }}</span>
                        <p class="time">{{ message }}</p>
                        <div class="bottom">
                            <el-button text-class="button" type="primary" @click="close">Ok</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>

        </el-dialog>
    </div>
</template>
      
<script>
export default {
    name: 'AlertDialog',
    props: {
        title: String,
        message: String
    },
    data() {
        return {
            screenWidth: 0,
            centerDialogVisible: false,
            dialogWidth: '40%'
        }
    },
    mounted() {
        this.showModal();
        this.updateScreenwidth();
        this.onScreenResize();
    },

    methods: {
        showModal() {
            this.centerDialogVisible = true;
        },
        close() {
            this.centerDialogVisible = false;
        },
        updateScreenwidth() {
            this.screenWidth = window.innerWidth;
            console.log(window.innerWidth);
            if (this.screenWidth < 600) {
                this.dialogWidth = "80%"
            }
            console.log(this.dialogWidth);
        },
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.updateScreenWidth();
            })
        }
    }
}

</script>
      
<style scoped>
.button {
    padding: 0;
    min-height: auto;

}

.my-header {
    text-align: center;
}

.tr {
    font-size: 18px;
    color: #999;

}

.sdf {
    font-size: 22px;
    text-align: center;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.image {
    width: 70px;
    height: 70px;
}

.tr {
    width: 80% !important;
}

@media screen and (max-width: 600px) {
    .tr {
        width: 80% !important;
    }
}
</style>
      
      