/******   @oreolnoumodong@outlook.com    ************/

document.getElementById('root').innerHTML =

  `

    <div class="content-left">
   
    <p class="img-content" ><img src="./logo.png" alt="Logo nooutidev" class="img-logo"> nooutidev</p>

     <div>
      <p class="community"> <img src="./images/icon.community_logo.png" alt="Icon community" class="img-community"> Join <span class="color-pink">nooutidev</span> Community</p>
    </div>


    <div class="powerBy">
        <p> <span class="img-content">Powered by |</span> <span class="color-pink">nooutidev</span></p>
    </div>

    </div>

  

       <div class="main">

       <p class= "title">  <span class="color-pink"> CHECK  </span>  <span class="bg-black"> ifValideSignUp </span> </p>
       
       <div class="block-input">
         <span>Email adress  </span>
         <input type="text"  id="firstNumber">
           <span class="color-pink" id="invalidEmail"> Invalid Email  </span> 
       </div>

       <div class="block-input">

       <div class="input-left">
           <span>First name  </span>
           <input type="text" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

      <div class="input-right">
           <span>Last name  </span>
           <input type="text" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       </div>

       <div class= "block-input">
           <span>password </span>
           <input type="password" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

        <div class= "block-input">
           <span>Confirmed password  </span>
           <input type="password" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class= "block-input">
           <span>Date of birth  </span>
           <input type="text" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class="block-input">
           <span>Country  </span>
           
           <select id="operation" class="border-solid-radius">
            <option value="plus">Cameroun </option>
            <option value="moins">USA</option>
            <option value="multiplication">Tunisie</option>
            <option value="division">Canada</option>
       </select>

           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class="block-input">
           <span>The <span class="color-pinks">nooutidev family of companies</span> may keep me informed with <span class="color-pinks">personalized</span> emails about products and services. See our <span class="color-pinks">Privacy Policy</span> for more details or to opt-out at any time.  </span>

           <p><input type="checkbox" class="border-solid-radius" id="firstNumber">  Please contact me via email</p>

           <span> By clicking Create account, I agree that I have read and accepted the <span class="color-pinks">Terms of Use</span> and <span class = "color-pinks"> Privacy Policy </span>.</span>
       </div>

       <div class="block-input-bottom">
         <input type="button" value="Create account" onclick="displayResult()">
       </div>

      
       <div class="block-input">
        <hr>
       </div>

       <div class="block-input">
         <span>Protected by reCAPTCHA and subject to the Google <span class="color-pinks"> Privacy Policy</span> and </span><span class="color-pinks">Terms of Service.</span> 
       </div>
       
    </div>
    
    `