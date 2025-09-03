   import { configureStore } from "@reduxjs/toolkit";
   import authreducer from './reducer'

   export  const store = configureStore({ reducer: { auth: authreducer }});

 