import { createAsyncThunk } from "@reduxjs/toolkit";

export const subscribeEmail = createAsyncThunk(
    'subscribe/subscribeEmail',
    async ({email,subscribed}, { rejectWithValue }) => {
      try {
        const endpoint = subscribed ? "unsubscribe" : "subscribe";
        const response = await fetch(`http://localhost:3000/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          return rejectWithValue(errorData);
        }
  
        return response.json();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  