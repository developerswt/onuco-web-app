<template>
<div class="container">
    <!-- <h5>Profile Delete</h5> -->
    <div class="container" style="margin-top: 72px;">
        <div>
            <label for="productDropdown">Select Name:</label>
            <el-select v-model="selectedTypes" @change="emitSelectedType" placeholder="Please Select">
                <el-option v-for="product in products" :key="product.id" :value="product.id" :label="product.userName"></el-option>
            </el-select>
        </div>
        <div class="table-responsive" style="background-color: white;">
            <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>User CognitoId</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ selectedProduct.id }}</td>
                        <td>{{ selectedProduct.userName }}</td>
                        <td>{{ selectedProduct.status }}</td>
                        <td>{{ selectedProduct.userCognitoId }}</td>

                        <td>
                            <div class="button-row">

                                <button @click="deleteProduct(selectedProduct.userCognitoId)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    <Confirmation ref="Confirmation" />
</div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import Confirmation from './Confirmation.vue';
import {
    ElSelect,
    ElOption,
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput
} from 'element-plus';

export default {
    name: "AddTypes",
    components: {
        Confirmation,
        ElSelect,
        ElOption,
        ElButton,
        ElDialog,
        ElForm,
        ElFormItem,
        ElInput,
    },
    emits: ['selected-type-changed'],

    data() {
        return {
            products: [],
            selectedTypes: '',
            formVisible: false,
            selectedProduct: {
                id: '',
                userName: '',
                status: '',
                userCognitoId: ''
            },

        };
    },
    computed: {
        isTableVisible() {
            return !!this.selectedTypes;
        },
    },
    watch: {
        selectedtype: {
            immediate: true,
            handler() {
                this.loadData();
            },
        },
    },
    created() {
        this.loadData();
    },
    methods: {

        emitSelectedType() {
            this.$emit('selected-type-changed', this.selectedTypes);
            this.loadData();
            this.loadProductDetails();
        },
        async loadData() {
            try {
                const res = await AxiosInstance.get(`/DeleteProfile`);
                this.products = res.data.filter(product => product.status === "Pending");
                this.loadProductDetails();
                console.log(this.products);

            } catch (error) {
                //    console.log("hi");
                //    console.error(error);
                //  }
                this.isLoading = false;
                console.log(error.response.data.Message);

                this.$refs.Confirmation.open(error.response.data.Message);

            }
        },

        toggleForm() {
            this.formVisible = !this.formVisible;
        },
        async loadProductDetails() {
            const selectedProduct = this.products.find(product => product.id === this.selectedTypes);
            if (selectedProduct) {
                this.selectedProduct = {
                    ...selectedProduct
                };
            }
        },

        async deleteProduct(userCognitoId) {
            try {
                const confirmed = await this.$refs.Confirmation.open(
                    "Are you sure?"
                );
                if (!confirmed) {
                    return;
                }

                const res = await AxiosInstance.post(`/DeleteProfile/ApproveDeleteRequest?requestId=` + userCognitoId);

                await this.loadData();
                this.loadProductDetails();

                this.selectedTypes = '';

                this.$refs.Confirmation.open("deleted successfully.");
            } catch (error) {
                this.isLoading = false;
                if (error.response && error.response.data && error.response.data.message) {
                    console.log("Error message:", error.response.data.message);
                    this.$refs.Confirmation.open(error.response.data.message);
                }
            } finally {
                this.isLoading = false;
            }
        }

    },
};
</script>

<style scoped>
.frm {
    padding: 20px;
    border: 1px solid black;
    width: 90%;
    background-color: #fff;
}

.frm {
    max-width: 400px;
    margin-left: 20px;
    margin-top: -20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 1px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 22px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
}

.btn2 {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 22px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

}

.btn1 {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    padding: 22px 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 80px;
    position: relative;
    top: 64px;
    left: 0px;
    font-weight: 600;
    font-size: 15px;
}

@media (max-width: 520px) {
    .btn1 {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
        padding: 18px 17px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 80px;
        position: relative;
        top: 110px;
        left: -15px;

    }
}

button:hover {
    background-color: #007bff;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
    position: relative;
    margin: 10% auto;
}

.modal-content {
    position: relative;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
    padding: 15px;
    border-bottom: 1px solid #ccc;
    background-color: #f8f9fa;
}

.modal-body {
    padding: 15px;
}

.size {
    width: 470px;
}

.button-row {
    display: flex;
}

.button-row button {
    margin-right: 10px;
}

.bn {
    padding: 10px 31px;
    font-weight: 600;
    font-size: 15px;
}

.form-container {
    max-width: 400px;
    margin: auto;
}

/* Custom form styling */
.custom-form {
    padding: 20px;
}

/* Custom button styling */
.custom-btn {
    text-align: center;
    margin-top: 20px;
}

.table {
    width: 100%;
    margin-bottom: 0px !important;
    color: #212529;
}
</style>
