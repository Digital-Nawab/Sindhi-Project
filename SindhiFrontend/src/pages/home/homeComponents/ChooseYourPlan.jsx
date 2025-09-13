import React, { useState } from "react";
import { Check } from "lucide-react";

function ChooseYourPlan() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: 499,
      desc: "Great for small businesses getting started",
      features: [
        "Enhanced profile listing",
        "Up to 25 products",
        "Basic analytics",
        "Priority support",
      ],
      save: "Save 15% per year",
    },
    {
      name: "Professional",
      price: 999,
      desc: "Perfect for growing businesses",
      features: [
        "Unlimited products",
        "Advanced analytics & insights",
        "Featured listing placement",
        "Priority customer support",
      ],
      save: "Save 35% per year",
      best: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large businesses with specific needs",
      features: [
        "Everything in Premium",
        "Custom integrations",
        "Dedicated account manager",
        "White-label solutions",
      ],
      save: "Save 75% per year",
    },
  ];

  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Choose Your Perfect Plan
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Flexible pricing plans designed to grow with your business. Start free
          and upgrade as you scale.
        </p>

        <div className="flex items-start justify-center gap-4 mt-6  ">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
              isYearly ? "bg-black" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isYearly ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-4xl border p-8 shadow-sm transition 
        ${
          plan.best
            ? "border-gray-300 bg-white shadow-md -mt-8 z-10 "
            : "border-gray-200 bg-white"
        }`}
            >
              {plan.best && (
                <span className="absolute top-4 right-4 bg-[#E82600] text-white text-xs font-semibold px-3 py-2 rounded-full">
                  Best Plan
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {plan.price === "Custom" ? (
                  "Custom"
                ) : (
                  <>
                    ₹{isYearly ? plan.price * 10 : plan.price}
                    <span className="text-sm font-medium text-gray-600">
                      /Month
                    </span>
                  </>
                )}
              </p>

              <p className="mt-2 text-gray-600 text-sm">{plan.desc}</p>

              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-gray-900" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-3xl bg-black text-white py-2 font-small hover:bg-gray-900 transition">
                Get Started
              </button>

              <p className="mt-3 text-xs text-gray-500">{plan.save}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseYourPlan;
