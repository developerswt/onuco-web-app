<!-- <template>
  <div class="" style="padding-left: 20%;">
    <button style="margin-top: 10%;margin-bottom: 20%;align-items: center;" @click="redirectToPayU">Pay with PayU</button>
  </div>
</template>
  
<script>
export default {
  methods: {
    redirectToPayU() {
      // Replace the following URL with the actual PayU payment URL.
      const payULink = 'https://secure.payu.in/_payment';

      // Prepare payment data
      const paymentData = {
        key: 'JPM7Fg',
        txnid: 'txnid97057394560', // Replace with a unique transaction ID
        amount: '1999.00', // Payment amount in INR
        productinfo: 'Description of the payment',
        firstname: 'ArunKumar',
        email: 'test@test.com',
        phone: 'Your customer contact',
        surl: 'https://yourdomain.com/success', // Redirect URL on success
        furl: 'https://yourdomain.com/failure', // Redirect URL on failure
        service_provider: 'payu_paisa', // Set as 'payu_paisa' for PayU
      };

      // Create a hidden form and submit it to PayU
      const form = document.createElement('form');
      form.action = payULink;
      form.method = 'POST';

      for (const key in paymentData) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();
    },
  },
};
</script>
   -->

<!-- PaymentComponent.vue -->
<template>
  <div>
    <button @click="initiatePayment" style="padding-top: 5%;">Pay with PhonePe</button>
  </div>
</template>

<script>
export default {
  name: 'PayuPage',
  methods: {
    initiatePayment() {
      // Make API call to initiate payment
      // Use Axios to make a POST request to your server
      axios.post('https://developer.phonepe.com/v1/reference/pay-api#pay-request-for-web-flow', { amount: 0 })
        .then(response => {
          // Handle the response
          const paymentUrl = response.data.paymentUrl;
          window.location.href = paymentUrl; // Redirect the user to PhonePe payment page
        })
        .catch(error => {
          console.error('Error initiating payment:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
