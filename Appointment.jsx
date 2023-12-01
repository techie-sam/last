const Appointment = () => {
  return (
    <>
      <div className="bg-[#a3c3e9] rounded  p-8 my-16  m-auto ">
        <h2 className="text-[#1c497d] text-3xl mx-auto py-6 font-weight-400 text-center">
          Make an appointment
        </h2>
        <p className="py-4 justify-center text-center ">
          At Next Gen, we understand that your time is valuable. That's why we
          offer a variety of convenient ways to schedule your nextx appointment.
          We are also happy to accept walk-in appointments for our urgent care
          services. Simply come to our location during our walk-in hours and you
          will be seen by a provider as soon as possible.
        </p>
        <div className="text-center pt-3 mb-4 w-80">
          <input
            type="text"
            placeholder="Your Name"
            name="FirstName"
            className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3"
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3"
          />
          <input
            type="text"
            placeholder="Appointment Date"
            name="Appointment"
            className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3"
          />
          <div className="w-80 text-center">
            <select className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3">
              <option>Select Department</option>
              <option>Accident and Emergency (A&E)</option>
              <option>Outpatient Department (OPD)</option>
              <option>Inpatient Department (IPD)</option>
              <option>Nursing Department</option>
              <option>Pharmacy Department</option>
              <option>Radiology Department</option>
              <option>Laboratory Department</option>
              <option>nesthesiology</option>
              <option>Cardiology</option>
              <option>Dermatology</option>
              <option>Gastroenterology</option>
            </select>
            <select className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3">
              <option>Select Doctor</option>
              <option>Dr. Aayaan A.</option>
              <option>Dr. Paul O.</option>
              <option>Dr Sana I.</option>
              <option>Dr. Sam B.</option>
              <option>Nurse Ayo</option>
              <option>Nurse Lola</option>
              <option>Nurse Jasmine</option>
              <option>Dr James </option>
              <option>Dr. Femi</option>
              <option>Dr Ayo</option>
              <option>Dr Fatimah</option>
            </select>
            <textarea
              placeholder="Message (optional) "
              className="border border-[#6FA0D9] w-full m-2 h-[2.5rem] bg-gray-50 border sm:text-sm rounded-md text-black outline-none focus:border-2 transition-all block w-full p-3"
            ></textarea>
          </div>
        </div>
        <div className="text-center rounded-3xl">
          <button className="btn1 w-[14rem] h-[2.5rem] mb-5 rounded">
            Make an Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Appointment;
