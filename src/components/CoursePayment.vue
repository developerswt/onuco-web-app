<template>
    <div class="ll" >
      <div class="container">
        <div class="kk">
          <p class="clr" style="color: #0066CC;"><b>Course</b> Payment</p>
          <div class="card" style="margin-top: 20px;">
            <div class="card-body" >
    
              <div class="circle" > <img src="../assets/images/Tick.png" style="width: 160px; height: 160px;"></div>
              <p  class="head text-center mt-4"> <i class="bi bi-check"></i>Successfully subscribed the subjects</p>
            <div>
            <button class="bt text-center mt-4">Download Payment Details</button>
          </div>
          <div class="mt-2">
            <button class="bt1 text-center"> <img src="../assets/images/logout.png"> Your Subscribed Subjects</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid"></div>
  </div>
</template>
<script>

</script>
<style scoped>
.circle {
   
   position: relative;
   text-align: center;
}

.head{
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 30px/35px var(--unnamed-font-family-segoe-ui);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 30px/35px Segoe UI;
letter-spacing: 0px;
color: #08C122;
opacity: 1;
}
.bt{
    border-color: #0177FB;
    color: #0177FB;
  position: relative;
  left: 395px;
}
.bt1{
    color: white;
    background-color: #0177FB;
    position: relative;
  left: 394px;
}
.ll{
  padding-top: 8%;
}
@media (min-width: 768px) and (max-width: 1024px){
    .bt{
        position: relative;
  left: 205px;
    }
    .bt1{
        position: relative;
  left: 205px;
    }
   .ll{
    padding-top: 20%;
   }
}
@media (min-width: 100px) and (max-width: 700px){
    .bt{
        position: relative;
  left: 30px;
    } 
    .bt1{
        position: relative;
  left: 30px;
    }
    .ll{
    padding-top: 20%;
   }
}
.container-fluid {
    width: 100%;
    height: 120px;
    background-image: url('../assets/images/Group 246.png');
}
</style>
