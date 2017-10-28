<?php require 'header.php' ?>


<section class="game-introduction game-features">
    <!-- <div class="container"> -->
        <div class="row">
            <div class="col-md-4">
                <h1>PURCHASE TICKET</h1>
                <form id="card-details-form" method="POST" action="">
                    <H2 class="text-center">Card Details</H2>
                  <div class="col-md-12 form-group">
                  <div class="col-md-6">
                    <input type="text" class="form-control" name="holder_fname" placeholder="Firstname" autofocus>
                  </div>

                  <div class="col-md-6">
                    <input type="text" class="form-control" name="holder_lname" placeholder="Lastname">
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <div class="col-md-12">
                    <input type="text" class="form-control" name="card_number" placeholder="Card Number">
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <div class="col-md-12">
                    <input type="text" class="form-control" name="exp_date" placeholder="MM/YY">
                  </div>
                </div>

                <div class="col-md-12 form-group">
                  <div class="col-md-6">
                  <select class="form-control" name="card_type">
                      <option value="">--Select Card Type--</option>
                      <option value="MasterCard">MasterCard</option>
                      <option value="Verve">Verve</option>
                      <option value="Visa">Visa</option>
                  </select>
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" name="cvc" placeholder="Valid CVC Code" maxlength="3">
                  </div>
                </div>     
                    <button type="submit" class="btn btn-danger center-block">GO</button>
                </form>


            </div>
            <!-- card details -->
            <div class="col-md-4">
                <img src="img/cover.jpg" class="img-responsive">                
            </div>
            <div class="col-md-4">
            	<iframe  height="650px" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7182802022476!2d3.1854343143162214!3d6.681779895168988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b993098dfb261%3A0x836e0638b55b9b62!2sCovenant+University%2C+Ota%2C+Ogun+State%2C+Nigeria!5e0!3m2!1sen!2sng!4v1508842874672"  frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
</section>


<?php require 'footer.php'?>
