const ServiceModal = ({ serviceModal }) => {
  const { name, image, details, price } = serviceModal;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form>
            <img src={image} className="w-24" alt="" />
            <h3 className="font-bold text-lg mt-2">{name}</h3>
            <p className="text-[#F63E7B] font-semibold">${price}</p>
            <p className="py-4">{details}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceModal;
