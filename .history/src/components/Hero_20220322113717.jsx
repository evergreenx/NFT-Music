
import SolanaLogo from "../../public/assets/solanalogo.png";
import Marquee from "react-easy-marquee";



  const Hero = () =>{

    return (
      <div>
  <section class=" p-5  ">
    <div class="content text-white h-screen ">
      <div class="content__text py-20">
        <h2 class="heading__1 ">Music for NFT creators.</h2>

        <h3 class="heading__2">Digital Music for fans.</h3>

        <h5 class="hero__text py-5">
          Music NFTs will continue to revolutionize the way that artists and
          fans create community <br />together as we enter the upcoming year —
          undoubtedly changing the trajectory of <br /> countless budding music careers.
        </h5>
      </div>

      <div class="discover__more__container">
        <div class="powered__by">
          <p class="powered__by__text">Powered by</p>
          <img src={SolanaLogo} alt="Solana Logo" class="solana-logo" />
        </div>

        <button class="discover__more__button ">
          Discover More

          <div class="svg__icon">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </div>
        </button>


        
      </div>
    </div>

    <!-- <div class="hero__image -mt-10  w-96 ">
      <img src="../../public/assets/hero1.png" alt="" />
    </div> -->
  </section>

  <div class="border-2 border-x-0 bg-transparent">
  <Marquee duration={10000}>

     <div class="text-white uppercase font-light text-2xl flex space-x-4 ">
   <p>   new way to reach the new fan </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H33" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3C21.7519 7.10753 23.8841 12.4381 24 18C23.8841 23.5619 21.7519 28.8925 18 33C14.2481 28.8925 12.1159 23.5619 12 18C12.1159 12.4381 14.2481 7.10753 18 3V3Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

  <div class="text-white uppercase font-light text-2xl flex space-x-4 ">
   <p>   new way to reach the new fan </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H33" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3C21.7519 7.10753 23.8841 12.4381 24 18C23.8841 23.5619 21.7519 28.8925 18 33C14.2481 28.8925 12.1159 23.5619 12 18C12.1159 12.4381 14.2481 7.10753 18 3V3Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>


  </Marquee>

    </div>
  
  
  
  
  </div>

    
    )
      
    
  }


 export 
    


<style>
  .content {
    background-image: url("../../public/assets/hero1.png");
    background-size: contain;
    background-position: 752px -6px;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */

    /* background-position: center; */
  }
</style>
