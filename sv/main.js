const Configurator = require('w-srvr');


// *Creating a new server configurator:
const server = new Configurator();

// *Setting the finish flag:
let finish_signaled = false;

// *When process is interrupted, finishing the program:
process.on('SIGINT', finish);

// *When the process doesn't have any other task left:
process.on('exit', code => {
   // *Logging it out:
   console.log('Application finished');
});


server

   // *Setting the server port:
   .port(process.env.PORT)

   // *Mapping the static resources:
   .static
   .add('/static/libs',         '../node_modules')
   .add('/static/api',          '../api')
   .add('/static/pages',        '../pages')
   .add('/static/store',        '../store')
   .add('/static/controls',     '../controls')
   .add('/static/identity',     '../identity')
   .add('/static/elements',     '../elements')
   .add('/static/resources',    '../resources')
   .add('/static/components',   '../components')
   .add('/static/compositions', '../compositions')

   .index('../index.html',  {root_only:false})
   .done()

   // *Starting the server:
   .start()
   .then(info => {
      console.log(`Server started @ ${info.address.href}`);
   })
   .catch(err => {
      console.error(err);
      finish();
   });



/**
 * Finishes all the services, and then end the process
 */
function finish(){
   // *Checking if the finish signal has been set already, returning if it has:
   if(finish_signaled) return;

   // *Setting the finish signal:
   finish_signaled = true;

   // *Stopping the server:
   server.stop()
      // *Stopping the process:
      .then(() => process.exit(0))
      .catch(err => {
         // *If something bad happens:
         console.error(err);
         // *Stopping the process:
         process.exit(1);
      });
}
