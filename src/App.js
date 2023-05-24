import "./App.css";
import { Card } from "./components/Card";

function App() {
  const plans = [
    {
      title: "Personal Testeds",
      price: 9,
      redactedPrice: 11.99,
      para: "Perfect for when you want to host your personal blog or a hobby side project.",
      features: [
        "2 Core Xeon CPU",
        "1 GB RAM",
        "30 GB SSD",
        "1 TB Transfèr",
        "99.9% Uptime",
      ],
    },
    {
      title: "Business",
      price: 15,
      redactedPrice: 19.99,
      popular: "Most Popular",
      para: "Perfect for hosting blogs with lots of traffic or heavy development projects.",
      features: [
        "4 Core Xeon CPU",
        "2 GB RAM",
        "100 GB SSD",
        "3 TB Transfer",
        "99.9% Uptime",
        "Free Domain & SSL",
        "Free DNS Management",
      ],
    },
    {
      title: "Enterprise",
      price: 25,
      redactedPrice: 29.99,
      para: "Perfect for hosting production websites & API with high traffic load.",
      features: [
        "8 Core Xeon CPU",
        "8 GB RAM",
        "300 GB SSD",
        "Unlimited Transfer",
        "99.99% Uptime",
        "Free Domain & SSL",
        "Free DNS Management",
        "Free Offsite Backup",
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Affordable Pricing</h1>
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <br /> elusmod tempor incididunt ut labore et dolore magna aliqua.
      </h6>
      <div className="container row  cardCustom">
        {plans.map((plan) => (
          <Card {...plan} key={plan.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
