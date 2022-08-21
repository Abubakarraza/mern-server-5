import { configureStore } from '@reduxjs/toolkit';

import UserSlices from '../slices/UserSlices';

const Store = configureStore({
    reducer: {
        user: UserSlices,
       
        
    }
});
export default Store;