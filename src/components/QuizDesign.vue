<template>
    <div class="container">
        <div class="row rr">
            <div class=" col-lg-9">
                <p style="color: #0066CC;"><b>Subject </b>Quiz</p>

            </div>
            <div class=" col-lg-3  text-right">
                <el-button class="bt">Renew</el-button>
            </div>
        </div>
        <dev class="row">
            <dev class="col-lg-8">
                <el-card>
    <div class="card-body">
      <div class="paym row">
        <div class="col-md-6 col-sm-6">
          <label>Q 1 Question details go here...</label>
        </div>
      </div>
      <div class="row" style="border-top: 2px solid #BDC6CE;">
        <div class="col-md-12 col-sm-12 mt-2">
          <label>
            <el-checkbox v-model="answer1">ANSWER 1</el-checkbox>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <label>
            <el-checkbox v-model="answer2">ANSWER 2</el-checkbox>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <label>
            <el-checkbox v-model="answer3">ANSWER 3</el-checkbox>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <label>
            <el-checkbox v-model="answer4">ANSWER 4</el-checkbox>
          </label>
        </div>
      </div>
      <div class="row clr">
        <div class="col-md-12 col-sm-12">
          <p>Your answer is incorrect. <br>The correct answers are: Answer 2, Answer 3, and Answer 4</p>
        </div>
      </div>
    </div>
  </el-card>
  <el-card class="mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <p>Q 2 Question details go here...</p>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <p>Q 3 Question details go here...</p>
          </div>
        </div>
      </div>
    </el-card>

    <el-card style="margin-top: 20px;">
    <div class="card-body">
      <div class="paym row">
        <div class="col-md-6 col-sm-6">
          <p>Q 4 Question details go here...</p>
        </div>
      </div>
      
      <div class="row" style="border-top: 2px solid #BDC6CE;">
        <div class="col-md-12 col-sm-12 mt-2">
          <el-radio v-model="selectedAnswer" label="TRUE">TRUE</el-radio>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <el-radio v-model="selectedAnswer" label="FALSE">FALSE</el-radio>
        </div>
      </div>
      
      <div class="row color mt-5">
        <div class="col-md-12 col-sm-12">
          <p>Yes well done! <br>
            The correct answers are... </p>
        </div>
      </div>
    </div>
  </el-card>

      <el-card class="mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <p>Q 5 Question details go here...</p>
          </div>
        </div>
      </div>
    </el-card>
    </dev>
    <el-col :span="24" :lg="8">
    <el-card class="mt-3">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <p>Quiz Overview</p>
          </div>
          <div class="row">
            <el-col v-for="i in 6" :key="i" :span="2">
              <el-input v-model="values[i - 1]" class="mn" placeholder="value"></el-input>
            </el-col>
          </div>
          <div class="row">
            <el-col v-for="i in 6" :key="i" :span="2">
              <el-input  v-model="values[i + 4]" class="mn" placeholder="value"></el-input>
            </el-col>
          </div>
        </div>
      </div>
    </el-card>
  </el-col>
     </dev>
</div>
<div class="container row">
            <div class=" col-lg-9">
            </div>
            <div class=" col-lg-3  text-right">
                <el-button class="btn">SUBMITED</el-button>
            </div>
        </div>
    <div class="container-fluid"></div>
</template>
<script>
export default {
  data() {
    return {
      values: new Array(12).fill("1")
    };
  }
  // Your component logic goes here
};
</script>
<style scoped>
.bt {
    background-color: #0177FB;
    color: white;

}
.btn {
    background-color: #0177FB;
    color: white;
position: relative;
left:150px;
bottom:50px;
}
.rr {
    position: relative;
    top: 100px;
    margin-bottom: 105px;
}

.card {
    border-radius: 1.25rem;
    font-size: 14px;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 0.6rem 1.25rem 0rem;
}

@media (max-width:520px) {
    .row {

        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: inherit !important;
        margin-right: -15px;
        margin-left: -15px;
    }

    .card {
        border-radius: 1.25rem;
        font-size: 10px;
    }

}

.container-fluid {
    width: 100%;
    height: 120px;
    background-image: url('../assets/images/Group 246.png');
}
.clr{
    background-color: #FFECEC;
}
.color{
    background-color: #C9ECB1;
}
.mn{
    margin-right: 10px;
}
</style>
