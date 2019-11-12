<template>
  <div class="container">
    <form >
      <div id="divSignin" class="container">
        <div class="row">
          <h1 id="RegText">Sign Up</h1>
        </div>
        <br>
        <div class="col-sm-4 my-sm-2">
          <strong id="name" for="inputfname">Name:</strong>
          <input
            v-model="content.name"
            class="form-control"
            name="name"
            placeholder="Enter Name"
           
            required
          />
        </div>

        <div class="col-sm-4 my-sm-2">
          <strong id="username" for="inputfname">Username:</strong>
          <input
            v-model="content.username"
            class="form-control"
            name="username"
            placeholder="Enter Username"
            required
          />
        </div>

        <div class="col-sm-4 my-sm-2">
          <strong id="address" for="inputEmail">Address:</strong>
          <input
            required
            type="text"
            class="form-control"
            v-model="content.address"
            placeholder="Enter Address"
          />
        </div>
        <div class="col-sm-4 my-sm-2">
          <strong id="email" for="inputEmail">Email:</strong>
          <input
            required
            type="email"
            class="form-control"
            v-model="content.email"
            placeholder="Enter Email"
          />
        </div>

        <div class="col-sm-4 my-sm-2">
          <strong id="pass" for="inputPassword">Password:</strong>
          <input
            required
            type="password"
            v-model="content.password"
            class="form-control"
            name="password"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>

        <div class="col-sm-4 my-sm-2">
            <label id="conpass" for="inputConPassword">Confirm Password:</label>
            <input
              v-model="content.conpassword"
              required
              type="password"
              class="form-control"
              id="inputConPassword"
              placeholder="Confirm Password"
            />
          <span></span>
        </div>
        <br>
        <center>
        <button id="btnSubmit" type="submit" class="btn btn-primary" @click="submit">Register</button>
        <br>
        <br>
        <a>Already have an account?&nbsp;</a>
        <router-link to="/Login">Sign in</router-link>
        </center>
       
        <br>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
h1 {
  color: $warning !important;
  font-weight: bold;
}
#username {
  color: $warning !important;
  font-weight: bold;
}
#name {
  color: $warning !important;
  font-weight: bold;
}
#pass {
  color: $warning !important;
  font-weight: bold;
}
#address {
  color: $warning !important;
  font-weight: bold;
}
#email {
  color: $warning !important;
  font-weight: bold;
}
#conpass {
  color: $warning !important;
  font-weight: bold;
}
a {
  color: blue;
  //color: $warning !important;
  //font-weight: bold;
  text-decoration: underline;
}
</style>

<style>
#divSignin {
  float: right;
  width: 400px;
  background: #80bfff;
  mix-blend-mode: normal;
  opacity: 0.8;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}


#RegText {
  width: 400px;
  background-color: #0086b3;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
}

.form-control {
  width:350px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0 auto;
  float: none;
}
#btnSubmit {
  border-radius: 25px;
  border: 3px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #0086b3;
  width: 128px;
  height: 52px;
  color: white;
  font-weight: bold;
  font-size: 12px;
}

</style>

<script>
import AUTH from "services/auth";
import jquery from "jquery";
export default {
  data() {
    return {
      auth: AUTH,
      content: {
        username: "",
        email: "",
        password: "",
        conpassword: ""
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.content.username),
        sessionStorage.setItem("Email", this.content.email),
        sessionStorage.setItem("Password", this.content.password);
      if (
        this.content.username == "" ||
        this.content.email == "" ||
        this.content.password == "" ||
        this.content.conpassword == ""
      ) {
        this.$swal.fire(
          "Please provide inputs",
          "Inputs are required!",
          "warning"
        );
      } else if (this.content.password != this.content.conpassword) {
        this.$swal.fire("Password Mismatch!", "Type properly!", "error");
      } else {
        AUTH.register(
          this.content.username,
          this.content.password,
          this.content.email,
          this.content.conpassword
        );
        this.$swal.fire("You are registered!", "Nice one!", "success");
      }

      let link = `http://localhost:3000/db/create/${this.content.username}/ ${
        this.content.email
      }/${this.content.password}`;
      // let link = `http://localhost:3000/db/update/${this.content.username}/ ${this.content.email}/${this.content.password}`;
      // let link = `http://localhost:3000/db/delete/${this.content.username}/ ${this.content.email}/${this.content.password}`;
      jquery
        .ajax({
          url: link,
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          alert(response.username);
        });
    }
  }
};
</script>