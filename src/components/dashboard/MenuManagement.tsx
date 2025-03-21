import { useState } from 'react';

const MenuManagement = () => {
  const [sections, setSections] = useState([
    {
      title: 'Sides',
      description: 'Pick one as a perfect companion to a main or enjoy 2-3 per person on their own.',
      items: [
        {
          name: 'Sweet potato fries',
          description: 'Double fried for extra crunchiness.',
          price: 6.00,
          image: 'https://images.unsplash.com/photo-1585443835125-d85820a16e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Corn salad',
          description: 'A sweet corn salad with feta and jalapeño',
          price: 4.00,
          image: 'https://images.unsplash.com/photo-1468777675496-5782faaea55b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    },
    {
      title: 'Mains',
      description: 'Pick one as a perfect companion to a main or enjoy 2-3 per person on their own.',
      items: [
        {
          name: 'Corn salad',
          description: 'Double fried for extra crunchiness.',
          price: 6.00,
          image: 'https://images.unsplash.com/photo-1596464716122-58411e193c81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }
  ]);

  return (
    <div className="p-6 max-w-[830px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Menu creator</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Publish menu
        </button>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="mb-8 container">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-4">{section.description}</p>

          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add an item
          </button>
        </div>
      ))}

      <button className="w-full mt-6 border border-blue-600 text-blue-600 px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add a section
      </button>
    </div>
  );
};

export default MenuManagement;