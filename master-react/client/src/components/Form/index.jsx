import { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubscription } from "../../features/subscribeSlice";

const Form = () => {
  const [email, setEmail] = useState("");
  // const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  const subscribed = useSelector((state) => state.subscribe.subscribed)

  const handleSubs = () => {
    if (email === "forbidden@gmail.com") {
      alert("Email is not allowed.");
      return;
    }

    if (email.includes("@") && email.includes("gmail.com")) {
      fetchData();
    } else {
      alert("Invalid email format.")
    }
  };

  const fetchData = async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const endpoint = subscribed ? "unsubscribe" : "subscribe";
      const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        const errorData = await response.json();
        alert(errorData.error);
      } else if (response.ok) {
        dispatch(toggleSubscription());
      } else {
        alert("An error occurred.");
      }

      alert(`${subscribed ? "unsubscribed" : "subscribed"}`)
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email"></label>
      {!subscribed && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      )}
      <button
        onClick={handleSubs}
        disabled={isLoading}
        style={{ opacity: isLoading ? 0.5 : 1 }}
      >
        {isLoading ? "Loading..." : subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </form>
  );
};

export default Form;
