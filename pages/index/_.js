navigation.addRoute('index', '/', {

   data(){
      return { };
   },

   mounted(){ },

   methods: { },

   template:
      html`
      <div class="index-page content-page">
         <header class="-header">
            <div class="-title-container">
               <div class="-thumb-container">
                  <div class="-thumb"></div>
                  <!--
                  <div class="-thumb-echo"></div>
                  <div class="-thumb-echo"></div>
                  <div class="-thumb-echo"></div>
                  <div class="-thumb-echo"></div>
                  --><!--
                  <svg>
                     <path class="st7" d="M50,25c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25z M50,62.5c-6.9,0-12.5-5.6-12.5-12.5 c0-6.9,5.6-12.5,12.5-12.5S62.5,43.1,62.5,50C62.5,56.9,56.9,62.5,50,62.5z"/>
                  </svg>-->

                  <svg class="donut-svg" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">
                     <g class="donut-container">
                     	<linearGradient
                           id="donut-gradient-1"
                           class="donut-gradient-1"
                           gradientUnits="userSpaceOnUse"
                           x1="0.1874"
                           y1="54.358"
                           x2="99.8126"
                           y2="45.642">
                     		<stop offset="0"/>
                     		<stop offset="1"/>
                     	</linearGradient>
                        <linearGradient
                           id="donut-gradient-2"
                           class="donut-gradient-2"
                           gradientUnits="userSpaceOnUse"
                           x1="13.7689"
                           y1="40.2919"
                           x2="86.2311"
                           y2="59.7081">
                     		<stop offset="0"/>
                     		<stop offset="1"/>
                     	</linearGradient>
                        <linearGradient
                           id="donut-gradient-3"
                           class="donut-gradient-3"
                           gradientUnits="userSpaceOnUse"
                           x1="29.0297"
                           y1="36.3817"
                           x2="70.9703"
                           y2="63.6183">
                     		<stop offset="0"/>
                     		<stop offset="1"/>
                     	</linearGradient>
                        <path class="donut-shape" d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M50,87.5c-20.7,0-37.5-16.8-37.5-37.5
                           c0-20.7,16.8-37.5,37.5-37.5S87.5,29.3,87.5,50C87.5,70.7,70.7,87.5,50,87.5z"/>
                        <path class="donut-shape" d="M50,12.5c-20.7,0-37.5,16.8-37.5,37.5c0,20.7,16.8,37.5,37.5,37.5S87.5,70.7,87.5,50
                     		C87.5,29.3,70.7,12.5,50,12.5z M50,75c-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S63.8,75,50,75z"/>
                        <path class="donut-shape" d="M50,25c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25z M50,62.5c-6.9,0-12.5-5.6-12.5-12.5
                           c0-6.9,5.6-12.5,12.5-12.5S62.5,43.1,62.5,50C62.5,56.9,56.9,62.5,50,62.5z"/>
                     </g>
                  </svg>

               </div>
               <span class="-title">Potentii</span>
            </div>
         </header>
         <div class="content-wrapper">
            <main></main>
         </div>
      </div>
      `
});
