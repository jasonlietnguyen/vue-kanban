<template>
  <div class="homepage">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <a class="navbar-brand" href="#">
    <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" alt="" width="150px">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-toggler-right">
          <li class="nav-item">
            <router-link class="btn" to="/register"><button type="button" class="btn btn-success">Register</button></router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn" to="/login"><button type="button" class="btn btn-primary">Log In</button></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2 class="title">Trello lets you work more <br> collaboratively and get more done.</h2>
          <h5>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding
            way.
          </h5>
          <br>
          <button type="button" class="btn btn-success">Sign Up - It's Free</button><br><br>
          <p>Already use Trello? <a href="http://localhost:8080/#/login">Log In.</a></p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/155358fcb5830aa596ac191b15bb0bb2/trello-collaborate-home.png"
            alt="" width="100%">
          <br><br><br>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'homepage',
    data() {
      return {

      }

    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  i {
    color: white;
  }

  .logo {
    color: white;
    font-size: 40px;
  }

  h2 {
    margin-top: 100px;
    color: white;
    font-weight: 900;
    text-align: left;
  }

  h5 {
    margin-top: 20px;
    color: white;
    text-align: left;
  }

  p {
    text-align: left;
    color: white;
  }

  button {
    margin-left: 0;
    cursor: pointer;
  }

  img {
    margin-top: -70px;
  }
</style>