import React from "react";

const reviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 4,
    comment: "Great product, really enjoyed using it!",
    imageUrl: "https://picsum.photos/100/100?random=1",
  },
  {
    id: 2,
    user: "Jane Smith",
    rating: 5,
    comment: "Amazing quality and great customer service.",
    imageUrl: "https://picsum.photos/100/100?random=2",
  },
  {
    id: 3,
    user: "Mike Johnson",
    rating: 3,
    comment: "Decent product for the price.",
    imageUrl: "https://picsum.photos/100/100?random=3",
  },
  // Add more reviews as needed
];

const ReviewsSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex items-start">
              <img
                src={review.imageUrl}
                alt={review.user}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-yellow-500 mr-2">
                    {Array.from(
                      { length: Math.floor(review.rating) },
                      (_, index) => (
                        <span key={index}>★</span>
                      )
                    )}
                    {review.rating % 1 !== 0 && <span>★</span>}
                  </div>
                  <div className="text-lg text-gray-700">{review.rating}/5</div>
                </div>
                <div className="text-gray-900 font-bold">{review.user}</div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
