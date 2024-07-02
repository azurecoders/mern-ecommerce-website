import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Great products and excellent service!",
    imageUrl: "https://picsum.photos/100/100?random=15",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "I love shopping here. Highly recommended!",
    imageUrl: "https://picsum.photos/100/100?random=16",
  },
  {
    id: 3,
    name: "Mike Johnson",
    feedback: "A wonderful shopping experience.",
    imageUrl: "https://picsum.photos/100/100?random=17",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
