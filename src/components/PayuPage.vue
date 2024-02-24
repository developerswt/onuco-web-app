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
<!-- <template>
    <div>
      <button @click="initiatePayment">Make Payment</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      initiatePayment() {
        // Replace these values with your actual PhonePe payment gateway URL and transaction data
        const phonePePaymentUrl = 'https://phonepe.com/pay?'; // Replace with the actual PhonePe URL
        const transactionData = {
          "merchantId": "MERCHANTUAT",
          "merchantTransactionId": "MT7850590068188104",
          "merchantUserId": "MUID123",
          "amount": 10000,
          "redirectUrl": "https://webhook.site/redirect-url",
          "redirectMode": "REDIRECT",
          "callbackUrl": "https://webhook.site/callback-url",
          "mobileNumber": "9999999999",
          "paymentInstrument": {
            "type": "PAY_PAGE"
          }
          // transaction: 'your_transaction_id',
          // amount: 'your_amount',
          // pa: 'your_merchant_id',
          // pn: 'your_merchant_name',
          // mc: 'your_merchant_code',
          // tn: 'your_transaction_note',
          // cu: 'your_currency_code',
          // url: 'your_redirect_url',
          // surl: 'your_success_url',
          // furl: 'your_failure_url',
        };
  
        // Construct the PhonePe payment URL with query parameters
        const paymentUrl = phonePePaymentUrl + new URLSearchParams(transactionData);
  
        // Redirect the user to the PhonePe payment gateway
        window.location.href = paymentUrl;
      },
    },
  };
  </script>
   -->

   <!-- <template>
    <div>
      <button @click="initiatePayment">Pay with PhonePe</button>
    </div>
  </template>
  
  <script>
  import PhonePe from 'phonepe-sdk';
  
  export default {
    data() {
      return {
        phonePe: null,
      };
    },
    methods: {
      initiatePayment() {
        // Initialize PhonePe with your API credentials
        this.phonePe = new PhonePe({
          clientId: 'YOUR_CLIENT_ID',
          clientSecret: 'YOUR_CLIENT_SECRET',
          environment: 'sandbox', // or 'production'
        });
  
        // Create a payment request
        const paymentRequest = this.phonePe.createPaymentRequest({
          amount: 1000, // The amount in paisa (1 INR = 100 paisa)
          order_id: 'ORDER123',
          returnUrl: 'https://yourwebsite.com/payment-callback', // Callback URL
          returnMessage: 'Payment completed successfully',
          failedReturnMessage: 'Payment failed',
          returnURL: 'https://yourwebsite.com/payment-success', // Success URL
          failedReturnURL: 'https://yourwebsite.com/payment-failed', // Failed URL
          phoneNumber: 'CUSTOMER_PHONE_NUMBER',
        });
  
        // Start the PhonePe payment process
        paymentRequest.startPayment();
      },
    },
  };
  </script>
   -->

  <!-- PaymentComponent.vue -->
<!-- <template>
  <div>
    <h1>Phone Pay Integration</h1>
    <form @submit.prevent="submitForm">
      <div class="payment-container">
        <label for="amountEnterByUsers">Enter Amount</label>
        <input v-model="amount" type="number" name="amountEnterByUsers" id="amountEnterByUsers">
        <button @click="initiatePayment" type="submit">Pay Now</button>
      </div>
    </form>  
  </div>  
</template>

<style scoped>
.payment-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 5%;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // Your PhonePe API endpoint
      phonePeApiEndpoint: 'https://api.phonepe.com/v3/payment',
      // Other necessary data
      amount: 100,
      orderId: 'YOUR_ORDER_ID',
      merchantId: 'YOUR_MERCHANT_ID',
      // Add more data as needed
    };
  },
  methods: {
    async initiatePayment() {
      try {
        const response = await axios.post(this.phonePeApiEndpoint, {
          amount: this.amount,
          orderId: this.orderId,
          merchantId: this.merchantId,
          // Add more parameters as required by the PhonePe API
        });

        // Handle the response and initiate the payment process
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    },
    // Add more methods for handling the payment flow
  },
};
</script> -->


<!-- <template>
  <div>
    <h2>PhonePe Payment Gateway</h2>
    <label for="amount">Amount:</label>
    <input type="text" v-model="amount" id="amount" />
    <button @click="initiatePayment">Pay</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      amount: "",
      mid: "MERCHANTUAT", // Replace with your actual MID
      saltKey: "53201aea-9942-482f-952a-7bc6c6102453", // Replace with your actual Salt Key
      saltIndex: "1", // Replace with your actual Salt Index
      payApi: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
    };
  },
  methods: {
    async initiatePayment() {
  try {
    const response = await axios.post(
      this.payApi,
      {
        mid: this.mid,
        salt_key: this.saltKey,
        salt_index: this.saltIndex,
        amount: this.amount,
        // Add other required parameters
      },
      {
        headers: {
          'Content-Type': 'application/json',
          // Add any other required headers
        },
      }
    );

    // Redirect to the payment page
    window.location.href = response.data.payment_url;
  } catch (error) {
    console.error("Error initiating payment:", error);
    // Handle errors here
  }
},
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style> -->


<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="makePayment">
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div class="mt-2">
            <input
id="name" v-model="data.name" name="name" type="name" autoComplete="name" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="Mobile" class="block text-sm font-medium leading-6 text-gray-900">
            Mobile
          </label>
          <div class="mt-2">
            <input
id="Mobile" v-model="data.mobile" name="mobile" autoComplete="Mobile" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="Amount" class="block text-sm font-medium leading-6 text-gray-900">
            Amount
          </label>
          <div class="mt-2">
            <input
id="Amount" v-model="data.amount" name="amount" autoComplete="Amount" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="MUID" class="block text-sm font-medium leading-6 text-gray-900">
            MUID
          </label>
          <div class="mt-2">
            <input
id="MUID" v-model="data.muid" name="muid" autoComplete="MUID" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div></div>
        <div>
          <button
type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Pay
          </button>
        </div>
      </form>
      <button @click="increment">Click</button>
      <button>{{ count }}</button>
    </div>
  </div>
</template>

<script>
import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export default {
  name: 'PayuPage',
  data() {
    return {
      data: {
        name: "DemoTest",
        mobile: "999999999",
        amount: "10",
        muid: "nuid-909090",
      },
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
        this.$store.dispatch('incrementCount');
    },
    generateUUID() {
      return uuidv4().toString(36).slice(-6);
    },
    async makePayment() {
  const transactionId = "Tr-" + this.generateUUID();
  const merchantId = "PGTESTPAYUAT";


  const payload = {
    merchantId: merchantId,
    merchantTransactionId: transactionId,
    merchantUserId: 'MUID-' + this.generateUUID(),
    name: 'vijay',
    amount: 10000,
    redirectUrl: `http://localhost:5000/SemesterDetails`,
    redirectMode: "POST",
    callbackUrl: `http://localhost:5000/SemesterDetails`,
    mobileNumber: '9999999999',
    shortName: 'vijay',
    message: 'introduction video',
    email: 'vijaya.kumarQuantumberg.com',
    paymentInstrument: {
      type: "PAY_PAGE"
    },
  };

  // Filter out undefined values before sending the request
  const filteredPayload = Object.fromEntries(
    Object.entries(payload).filter(([value]) => value !== undefined)
  );

  const dataPayload = JSON.stringify(filteredPayload);
  const dataBase64 = btoa(dataPayload);
  console.log("Request Payload:", dataBase64);

  const fullURL = "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
  const dataSha256 = sha256(dataBase64 + fullURL);
  const checksum = dataSha256 + "###" + "1";
  const UAT_PAY_API_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

  try {
    const response = await axios.post(UAT_PAY_API_URL, { request: dataBase64 }, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
    });
    const redirectURL = response.data.data.instrumentResponse.redirectInfo.url;

    if(response.status === 200) {

      const jsonData = {
        UserId: "2345676",
        CourseId: 1,
        TransactionId: transactionId,
        NumberOfMonth: 30
      };
      const SubscriptionApi = await axios.post("http://localhost:5000/StateManagement",jsonData);
      if(SubscriptionApi.status === 201) {
        window.location.href = redirectURL;
      }
    }
  } catch (error) {
    console.error("Error making payment:", error);
    // Handle payment processing errors here
  }
}

    
  }
};
</script>

<style scoped>
/* Add your component styles here */
</style>
