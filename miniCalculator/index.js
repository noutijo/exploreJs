
/******   @oreolnoumodong@outlook.com    ************/

document.getElementById('root').innerHTML =

    `
    <p class="img-content" ><img src="./logo.png" alt="Logo nooutidev" class="img-logo"> nooutidev</p>
    <div class="main border-solid-radius">
       <p class= "title">  <span class="color-pink"> MINI  </span>  <span class="bg-black"> Calculator </span> </p>
       
       <div class="block-input">
         <p>First value  </p>
         <input type="text" class="border-solid-radius" id="firstNumber">
       </div>

       <div class="block-input">
         <p>Second value  </p>
         <input type="text" class="border-solid-radius" id="secondNumber">
       </div>

       <div class="block-input">

        <p>Operation  </p>

       <select id="operation" class="border-solid-radius">
            <option value="plus">+</option>
            <option value="moins">-</option>
            <option value="multiplication">*</option>
            <option value="division">/</option>
       </select>
       </div>

       <div class="block-input">
        <hr>
       </div>

       <div class="block-input">
         <p> Result: <span class="color-pink" id="finalResult"> 0  </span> </p> 
       </div>

       <div class="block-input">
         <input type="button" value="CALCULATED" onclick="displayResult()">
       </div>
       
    </div>
    
    `
