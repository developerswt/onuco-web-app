<template>
  <div class="container">
    <section class="main">
      <div class="row" style="justify-items: center;">
        <div class="col-sm-6 cardpd">
          <div class="card">
            <div class="box">
              <div class="content">
                <h3 class="head">Salary</h3>

              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 cardpd">
          <div class="card">
            <div class="box">
              <div class="content">
                <h3 class="head"> Salary Due</h3>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 cardpd">
          <div class="card">
            <div class="box">
              <div class="content">
                <div class="table-responsive">
                  <table id="dataTable" class="table table-bordered" width="50px" cellspacing="0">
                    <thead>
                      <header style="color:black; font-size:large; align-items: center !important;">Invoice</header>
                      <tr>
                        <th>Payment Date</th>
                        <th>Amount</th>

                      </tr>
                    </thead>

                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 cardpd">
          <div class="card kk">
            <div class="box">
              <div class="content">
                <h3 class="head">Account Details</h3>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
<script>

</script>
<style scoped>
.card {
  position: relative;
  min-width: 200px;
  height: 140px;

  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2),
    inset -2px -2px 10px rgba(255, 255, 255, 0.1),
    2px 2px 10px rgba(0, 0, 0, 0.3), -2px -2px 10px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin: 10px;
  transition: 0.5s;
}

.card:nth-child(1) .box .content a {
  background: #2196f3;
}

.card:nth-child(2) .box .content a {
  background: #e91e63;
}

.card:nth-child(3) .box .content a {
  background: #23c186;
}

.card .box {
  position: absolute;
  top: 20px;
  left: 10px;
  right: 10px;
  /* bottom: 20px; */
  /* background: #2a2b2f; */
  border-radius: 15px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}



.card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

.card .box .content {
  text-align: center;
}

.card .box .content h2 {
  position: absolute;
  top: 0px;
  right: 30px;
  font-size: 3.2rem;
  color: rgba(41, 37, 37, 0.1);
}

.card .box .content h3 {
  color: black;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #0d4b7e;
  font-size: 19px;
}

.card .box .content p {
  font-weight: 300;
  color: rgb(41, 40, 40);
  z-index: 1;
  transition: 0.5s;
  text-align: justify;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 17px;
  color: black;
  overflow: visible !important;
}

.card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
@media screen and (max-width:520px) {
  .card .box .content h2 {
    position: absolute;
    top: 0px;
    left: 0;
    font-size: 2.7rem;
    color: rgba(41, 37, 37, 0.1);
  }

  .kk {
    margin-bottom: 100px;
  }
}

.card {
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}


@media (min-width: 100px) and (max-width: 700px) {
  .card {
    height: 140px;
    position: relative;
    min-width: 260px;
  }

  .scroll {
    height: 250px;
    overflow: auto;
  }

}

.view {
  height: 240px;
}
</style>