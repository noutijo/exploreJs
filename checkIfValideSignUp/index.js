/******   @oreolnoumodong@outlook.com    ************/

document.getElementById('root').innerHTML =

  `

    <div>
    <p class="img-content" ><img src="./logo.png" alt="Logo nooutidev" class="img-logo"> nooutidev</p>

    </div>

    <div class="content-left">
      <p class= "title">  Juin nooutidev Community</p>
    </div>

    <div class="main">


       <p class= "title">  <span class="color-pink"> CHECK  </span>  <span class="bg-black"> ifValideSignUp </span> </p>
       
       <div class="block-input">
         <span>Email adress  </span>
         <input type="text" class="border-solid-radius" id="firstNumber">
           <span class="color-pink" id="invalidEmail"> Invalid Email  </span> 
       </div>

       <div class="block-input">
           <span>First name  </span>
           <input type="text" class="border-solid-radius" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class="block-input">
           <span>Last name  </span>
           <input type="text" class="border-solid-radius" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class="block-input">
           <span>Date of birth  </span>
           <input type="text" class="border-solid-radius" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class="block-input">
           <span>Country  </span>
           <input type="text" class="border-solid-radius" id="firstNumber">
           <span class="color-pink" id="invalidFirstName"> There must be an error  </span> 
       </div>

       <div class="block-input">
           <span>The nooutidev family of companies may keep me informed with personalized emails about products and services. See our Privacy Policy for more details or to opt-out at any time.  </span>

           <p><input type="checkbox" class="border-solid-radius" id="firstNumber">Please contact me via email</p>

           <span span > By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.</span> 
       </div>

       <div class="block-input">
         <input type="button" value="Create account" onclick="displayResult()">
       </div>
       
    </div>
    
    `