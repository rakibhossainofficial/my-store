"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      feedback:
        "Amazing service and top-quality products. I’m a customer for life!",
    },
    {
      name: "James L.",
      feedback: "Fast delivery and great customer support. Highly recommended.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-gray-800 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
