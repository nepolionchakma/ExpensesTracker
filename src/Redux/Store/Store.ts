import {configureStore} from '@reduxjs/toolkit';
import songSlice from '../Slices/SongSlice';
import {ThemeSlice} from '../Slices/ThemeSlice';

export const store = configureStore({
  reducer: {
    tracks: songSlice,
    theme: ThemeSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
