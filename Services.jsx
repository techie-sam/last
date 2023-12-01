const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl my-5 text-[#132c49]">Services</h1>
      <p className="text-center max-w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, mollitia
        assumenda praesentium ad commodi laborum adipisci molestiae nam expedita
        magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium omnis ullam vel illum commodi laboriosam.
      </p>
      <div>
        <div className="md:flex gap-2 mt-10">
          <div className="border py-10 p-3 max-w-sm bg-[#a3cbff] hover:bg-slate-300 rounded hover:border-[#89b3e2] m-5">
            <h1 className="text-3xl py-3 text-center">Lorem</h1>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vero deserunt consequatur earum. Nostrum odit, atque fugit beatae
              nihil explicabo.
            </p>
          </div>

          <div className="border py-10 p-3 max-w-sm bg-[#a3cbff] hover:bg-slate-300 rounded hover:border-[#6FA0D9] m-5">
            <h1 className="text-3xl py-3 text-center">Dolor</h1>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vero deserunt consequatur earum. Nostrum odit, atque fugit beatae
              nihil explicabo.
            </p>
          </div>

          <div className="border py-10 p-3 max-w-sm bg-[#a3cbff] hover:bg-slate-300 rounded hover:border-[#6FA0D9] m-5">
            <h1 className="text-3xl py-3 text-center">Ipsum</h1>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              vero deserunt consequatur earum. Nostrum odit, atque fugit beatae
              nihil explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
