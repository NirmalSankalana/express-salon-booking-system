import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { loadState } from "./browserStorage";

// export default configureStore({
//   reducer: {
//     services: serviceReducer,
//   },
// });

export default configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";

// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export default configureStore({
// //   reducer: {
// //     services: serviceReducer,
// //   },
// // });

// export const store = configureStore({
//   reducer: persistedReducer,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
