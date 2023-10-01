import { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubscription } from "../../features/subscribeSlice";
import { subscribeEmail } from "../../thunk/subscribeThunk";

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
      dispatch(subscribeEmail({email,subscribed}));
    } else {
      alert("Invalid email format.")
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
