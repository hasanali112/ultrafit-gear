const Navbar = () => {
  return (
    <header className="bg-[#282828] text-white h-[130px]">
      <nav className="">
        <div className="flex justify-between items-center w-full max-w-[1400px] px-[20px] mx-auto pt-4 pb-4 h-[75px]">
          <div>
            <h1 className="text-3xl font-bold">Ultra Fit</h1>
          </div>
          <div>
            <input
              type="search"
              name=""
              id=""
              className="border w-[400px] h-[40px]"
            />
          </div>
          <div className="flex gap-3">
            <h1>Dashboard</h1>
            <h1>need help</h1>
          </div>
        </div>
        <div className="bg-[#211f1f]">
          <ul className="w-full max-w-[1400px] px-[20px] mx-auto pt-6 flex h-[60px] ">
            <li>Home</li>
            <li>Products</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
