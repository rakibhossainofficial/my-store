"use client";

export default function Features() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your orders delivered in record time with our trusted partners.",
    },
    {
      title: "Premium Quality",
      desc: "Only the best products, carefully selected for our customers.",
    },
    {
      title: "24/7 Support",
      desc: "We’re here to help at any hour, any day.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
