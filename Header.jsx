import headerImg from './assets/hero-bg.jpg';
const Header = () => {
  return (
    <section className="py-20 h-screen justify-center">
      <div className="flex md:h-full md:absolute z-10 top-5 md:top-20 justify-center items-center">
        <div className="max-w-[1/3] px-10">
          <h3 className="text-2xl md:text-5xl text-center font-extrabold">
            WELCOME TO NEXT GEN
          </h3>
          <p className="text-sm text-center py-5">
            We Lorem Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem
            ipsum dol
          </p>
        </div>
      </div>

      <div className="md:relative">
        <img src={headerImg} className="w-full h-full-"></img>
      </div>
    </section>
  );
};

export default Header;
