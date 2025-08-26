import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  { title: 'RESTAURANTS', content: 'This is the content for Item 1' },
  { title: 'SCHOOL', content: 'This is the content for Item 2' },
  { title: 'SHOPPING MALL', content: 'This is the content for Item 3' },
  { title: 'HOSPITAL', content: 'This is the content for Item 4' },
  { title: 'Item 5', content: 'This is the content for Item 5' },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleContent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item
  };

  return (
    <div className="space-y-4">
      {accordionData.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-md">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleContent(index)}
          >
            <span>{item.title}</span>
            <span>{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="p-4 bg-gray-50">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
