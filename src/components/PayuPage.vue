<template>
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
  