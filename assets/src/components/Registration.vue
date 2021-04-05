<template>
  <div class="main-container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
          <div class="login-container">
            <div class="center">
              <h1>
                <i class="ace-icon fa fa-leaf green"></i>
                <span class="red">Ace</span>
                <span class="white" id="id-text2">Application</span>
              </h1>
              <h4 class="blue" id="id-company-text">&copy; Company Name</h4>
            </div>

            <div class="space-6"></div>

            <div class="position-relative">

              <div id="signup-box" class="signup-box visible widget-box no-border">
                <div class="widget-body">
                  <div class="widget-main">
                    <h4 class="header green lighter bigger">
                      <i class="ace-icon fa fa-users blue"></i>
                      New User Registration
                    </h4>

                    <div class="space-6"></div>
                    <p> Enter your details to begin: </p>

                    <form>
                      <fieldset>
                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input v-model="registerData.email" type="email" class="form-control" placeholder="Email" />
															<i class="ace-icon fa fa-envelope"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input v-model="registerData.password" type="password" class="form-control" placeholder="Password" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input v-model="registerData.plainPassword"  type="password" class="form-control" placeholder="Repeat password" />
															<i class="ace-icon fa fa-retweet"></i>
														</span>
                        </label>

                        <label class="block">
                          <input type="checkbox" class="ace" />
                          <span class="lbl">
															I accept the
															<a href="#">User Agreement</a>
														</span>
                        </label>

                        <div class="space-24"></div>

                        <div class="clearfix">
                          <button type="reset" class="width-30 pull-left btn btn-sm">
                            <i class="ace-icon fa fa-refresh"></i>
                            <span class="bigger-110">Reset</span>
                          </button>

                          <button v-on:click="userRegistration()" type="button" class="width-65 pull-right btn btn-sm btn-success">
                            <span class="bigger-110">Register</span>

                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>

                  <div class="toolbar center">
                    <a href="#" data-target="#login-box" class="back-to-login-link">
                      <i class="ace-icon fa fa-arrow-left"></i>
                      Back to login
                    </a>
                  </div>
                </div><!-- /.widget-body -->
              </div><!-- /.signup-box -->
            </div><!-- /.position-relative -->

            <div class="navbar-fixed-top align-right">
              <br />
              &nbsp;
              <a id="btn-login-dark" href="#">Dark</a>
              &nbsp;
              <span class="blue">/</span>
              &nbsp;
              <a id="btn-login-blur" href="#">Blur</a>
              &nbsp;
              <span class="blue">/</span>
              &nbsp;
              <a id="btn-login-light" href="#">Light</a>
              &nbsp; &nbsp; &nbsp;
            </div>
          </div>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.main-content -->
  </div><!-- /.main-container -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "Registration",
  computed: mapGetters(["registerData"]),
  methods: mapActions(["userRegistration"]),
}
</script>

<style scoped>

</style>