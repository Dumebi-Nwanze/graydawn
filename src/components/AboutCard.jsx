/* eslint-disable react/prop-types */
function AboutCard({ heading, description }) {
  return (
    <div className="max-w-xl mx-auto bg-gray-900 shadow-lg  overflow-hidden flex flex-col border border-white">
      <div className="h-40 bg-cover bg-center">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
          alt=""
        />
      </div>
      <div className="p-4 flex-1 flex flex-col items-start justify-between border-t border-white ">
        <div>
          <h2 className="text-2xl font-medium mb-2 text-white">{heading}</h2>
          <p className="text-white text-lg font-light">{description}</p>
        </div>

        <button className="mt-4 text-blue-500 btn-black px-8 py-4 border border-white hover:text-black text-lg font-medium">
          See More
        </button>
      </div>
    </div>
  );
}

export default AboutCard;
