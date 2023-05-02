// 'use client';
// import React, { useState } from 'react';


// interface SearchFormProps {
//   title?: string;
//   author?: string;
//   location?: string;
// }

// const SearchForm: React.FC<SearchFormProps> = ({ 
//   title,
//   author,
//   location,
//  }) => {


//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//           Title
//         </label>
//         <input
//           id="title"
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md"
//         />
//       </div>
//       <div>
//         <label htmlFor="author" className="block text-sm font-medium text-gray-700">
//           Author
//         </label>
//         <input
//           id="author"
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md"
//         />
//       </div>
//       <div>
//         <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//           Location
//         </label>
//         <input
//           id="location"
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchForm;
