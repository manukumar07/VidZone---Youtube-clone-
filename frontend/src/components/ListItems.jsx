function ListItems() {
  const categories = [
    "All",
    "Music",
    "Movie musicals",
    "India national cricket team",
    "News",
    "1990s",
    "South cinema",
    "Live",
    "Dubbing",
    "comedy",
    "Cricket",
    "Football",
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto hide-scroll-bar px-4 py-2">
        <div className="flex space-x-4 flex-nowrap">
          {categories.map((category) => (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListItems;
