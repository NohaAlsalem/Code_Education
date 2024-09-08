<template>
    <div class="bg-gray-50">
<!-- <form>
    <input type="text" v-model="QRValue">
</form> -->
<qrcode-vue  :value="namee" :size="300" level="H"/>
    </div>
</template>
<script>
import QrcodeVue from'qrcode.vue'
export default{
components:{
    QrcodeVue
},
props:{
    namee:'',
},
mounted(){
    console.log(this.namee);
    this.QRValue=this.namee;
},
data(){
    return {
        QRValue:null,
    }
},
}
</script>