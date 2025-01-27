import React, { useState } from "react";

const App = () => {
  const categories = [
    {
      name: "Social",
      apps: ["Facebook", "Instagram", "Twitter", "Snapchat"],
    },
    {
      name: "Games",
      apps: ["PUBG", "Call of Duty", "Candy Crush", "Among Us"],
    },
    {
      name: "News",
      apps: ["Inshorts", "Way2News", "Google News", "Flipboard"],
    },
    { name: "Food", apps: ["Zomato", "Swiggy", "Uber Eats", "Domino's"] },
  ];
  const appImages = {
    Facebook:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcP0ZcWRME2hXax1sPPgNtutzs7H0ZQv2vw&s",
    Instagram:
      "https://i.pinimg.com/736x/8f/8f/b4/8f8fb43ce828a22c91c0b59f55fb91b3.jpg",
    Twitter:
      "https://i.pinimg.com/736x/39/8c/25/398c25a4436e5b8ca72f141084cdc66e.jpg",
    Snapchat:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVlB_Sf8zGpwrB_Jq7eppTq_w7bk3iTqtkg&s",
    PUBG: "https://www.freeiconspng.com/thumbs/pubg/pubg-circle-battlegrounds-photo-23.png",
    "Call of Duty":
      "https://www.freeiconspng.com/thumbs/call-of-duty-png/call-of-duty-png-transparent-0.png",
    "Candy Crush":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ5uok6RXS6weIrPE9Rk6fYd8MD1kxs8c0w&s",
    "Among Us":
      "https://w7.pngwing.com/pngs/422/910/png-transparent-among-us-thumbnail.png",
    Inshorts:
      "https://startuparticle.com/wp-content/uploads/2024/04/674bfe169655425.Y3JvcCwyODU4LDIyMzUsMCwxMjA.png",
    Way2News:
      "https://png.pngtree.com/png-vector/20210601/ourmid/pngtree-latest-breaking-news-png-image_3369122.jpg",
    "Google News":
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_news_logo.png",
    Flipboard:
      "https://w7.pngwing.com/pngs/481/609/png-transparent-flipkart-social-icons-color-icon.png",
    Zomato:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png",
    Swiggy:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    "Uber Eats":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPIesmmKD1ijGWV4gcmUM8MXAvAMUJdjZEA&s",
    "Domino's":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC8fgIHEv1gCrsCekfZlOHqoxqOlaXpx-KA&s",
  };
  const [showAll, setShowAll] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCategory, setSelectCategory] = useState(categories);

  // combine all is selected

  const allApps = categories.flatMap((category) => category.apps);
  console.log(allApps);

  const filterApps = (showAll ? allApps : selectCategory.apps).filter((app) =>
    app.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filterApps);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold bg-slate-100 w-full py-2 rounded border border-blue-500 text-center">
        App Store
      </h1>
      {/* {Search-Bar} */}
      <div className="relative mb-6 w-full max-w-md mt-10">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute left-3 top-2">🔍</span>
      </div>
      {/* {Categories} */}
      <div className="flex justify-center space-x-1  lg:space-x-4 mb-6">
        <button
          className={`lg:px-10 lg:py-2 px-2 font-mono py-1 rounded-md text-[10px] lg:text-sm font-medium ${
            showAll
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
          onClick={() => {
            setShowAll(true);
            setSearchTerm("");
          }}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.name}
            className={`lg:px-10 lg:py-2 px-2 font-mono py-1 rounded-md mx-2 text-[10px] lg:text-sm font-medium ${
              !showAll && selectCategory.name === category.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
            onClick={() => {
              setSelectCategory(category);
              setSearchTerm("");
              setShowAll();
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      {/* {Flter-Apps} */}
      <div className="grid lg:grid-cols-7 grid-cols-4 lg:gap-4 gap-2 max-w-xl">
        {filterApps.length > 0 ? (
          filterApps.map((app, index) => (
            <div key={index}>
              <img
                src={appImages[app]}
                className="lg:w-16 w-10 lg:h-16 h-10 border border-pink-600 border-spacing-3 lg:p-2 p-1 rounded-full mb-2"
                alt={app}
              />
              <p className="text-[11px] font-mono lg:text-[14px] break-words truncate text-center font-medium">
                {app}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-2 sm:col-span-4 text-center">
            No apps found
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
