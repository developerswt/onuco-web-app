

<script>
export default {
  props: ['order_details', 'customer_details'],
  data(){
    return{
      script: `https://checkout.razorpay.com/v1/checkout.js`,
      
    }
  },
  methods :{ 
    async loadRazorPay(){
      return new Promise(resolve=>{
        const script = document.createElement('script')
        script.src = this.script
        script.onload = () =>{
          resolve(true)
        }
        script.onerror = () =>{
          resolve(false)
        }        
        document.body.appendChild(script)
      })      
    }
  },
  async created(){
    const result = await this.loadRazorPay()
    if(!result){
      alert('Failed to load razorpay script')
      return
    }
    const options = {
      // key: process.env.VUE_APP_RAZORPAY_ID,
    //   rzp_test_BwuKHgZsIM9AIo
      key: 'rzp_test_BwuKHgZsIM9AIo',
      amount: `199900`,
      currency: `INR`,
      name: `ArunKumar`,
      description: `Description of the payment`,
      // order_id: `1234`,
      image: `../assets/images/user.png`,
      handler: function(){
        // It is function executed on success
      },
      prefill: {
        name: `Arun Kumar`,
        email: `test@test.com`,
        contact: `Your customer contact`
      },
      notes: {
        "address": "Hello World"
      },
      theme: {
        "color": "blue"
      }  
    }; 
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
}
</script>

<style>
</style>
