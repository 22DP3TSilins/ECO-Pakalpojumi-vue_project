import express from "express";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe("YOUR_STRIPE_SECRET_KEY"); // Replace with your actual secret key

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { cart, total, email } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: email,
    line_items: cart.map(item => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    })),
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel"
  });

  res.json({ id: session.id });
});

app.listen(5000, () => console.log("Server running on port 5000"));
