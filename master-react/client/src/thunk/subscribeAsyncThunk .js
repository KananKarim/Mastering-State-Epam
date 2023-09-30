import { createAsyncThunk } from "@reduxjs/toolkit";

export const subscribeAsyncThunk = createAsyncThunk("subscribe", async (email) => {
  const endpoint = subscribed ? "unsubscribe" : "subscribe";
  const response = await fetch(`http://localhost:3000/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (response.status === 422) {
    return { error: await response.json().error };
  } else if (response.ok) {
    dispatch(toggleSubscription())
    return { success: true };
  } else {
    return { error: "An error occurred." };
  }
});