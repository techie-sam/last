
const Footer = () => {
  return (
    <footer>
      {/* Footer content goes here */}
      <footer className="footer flex p-5 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-center">Useful Links</p>
            <a href="/privacy" className="text-sm mt-4 text-center">
              NextGen.
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Yoaco filling station
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Along Ilorin road
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Ogbomoso
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              +2234080000456
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              info@nextgen.com
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-center">Our Departments</p>
            <a href="/privacy" className="text-sm mt-4 text-center">
              Accident and Emergency
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Outpatient Department
            </a>
            <a href="/privacy" className="text-sm mt-4 text-center">
              Inpatient Department
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Nursing Department
            </a>
            <a href="/privacy" className="text-sm mt-4 text-center">
              Pharmacy Department
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Other Department
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-center">Our Service</p>
            <a href="/privacy" className="text-sm mt-4 text-center">
              Emergency Services
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Surgical Services
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Medical Services
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Critical Care Services
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Diagnostic Services
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Specialty clinics
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-center"> Our Newsletter</p>
            <a href="/privacy" className="text-sm mt-4 text-center">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm mt-4 text-center">
              Terms of Service
            </a>
            <div className="pt-4">
              <button className="bg-green-200 text-black w-[10rem] h-[3rem] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
