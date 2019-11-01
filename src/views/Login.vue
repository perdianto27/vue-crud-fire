<template>
  <div class="login">
    <div class="container-fluid">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <form>
              <div class="form-group">
                  <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                  <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
              </div>    
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from '../firebase'
export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
      return {
          name:null,
          email:null,
          password:null
      }
  },
  methods:{
      login(){
        fb.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
          $('#login').modal('hide')
            this.$router.replace('admin');  
          })
          .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
              } else {
                  alert(errorMessage);
              }
              console.log(error);
        });
      },
      register(){
        fb.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                $('#login').modal('hide')
                
                db.collection("profiles").doc(user.user.uid).set({
                    name: this.name
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
                this.$router.replace('admin');
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>