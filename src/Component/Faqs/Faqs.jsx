import React, { useState } from "react";

const faqs = [
  { 
    question: "What services does Prime Basement Renovations provide?",
    answer: "Prime Basement Renovations provides services including finishing, remodeling, custom designs, moisture control, soundproofing, and more tailored to your needs." 
  },
  { 
    question: "How long does a typical basement renovation take?",
    answer: "A typical basement renovation takes about 4-8 weeks, depending on the complexity and scope of the project." 
  },
  { 
    question: "Do I need permits for a basement renovation?",
    answer: "Yes, most basement renovations require permits. We’ll guide you through the process to ensure compliance with local building codes." 
  },
  { 
    question: "Do I need permits for a basement renovation?",
    answer: "Yes, most basement renovations require permits. We’ll guide you through the process to ensure compliance with local building codes." 
  },
  { 
    question: "Do I need permits for a basement renovation?",
    answer: "Yes, most basement renovations require permits. We’ll guide you through the process to ensure compliance with local building codes." 
  },
  { 
    question: "Do I need permits for a basement renovation?",
    answer: "Yes, most basement renovations require permits. We’ll guide you through the process to ensure compliance with local building codes." 
  },
  { 
    question: "Do I need permits for a basement renovation?",
    answer: "Yes, most basement renovations require permits. We’ll guide you through the process to ensure compliance with local building codes." 
  },
  // Add more FAQs in the same format
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-black rounded-t-lg font-semibold text-white"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
