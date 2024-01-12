// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useQuery } from "react-query";

const AllServices = () => {
  // const [allServices, setAllServices] = useState([]);

  const { data: allServices = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      return res.json();
    },
  });

  // useEffect(() => {
  //   fetch("service.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllServices(data));
  // }, []);

  console.log(allServices);
  return (
    <div className="mt-24 mb-20 lg:px-10  px-4 bg-white">
      <h4 className="text-4xl bg-white pb-10 text-center font-semibold">
        Our Awesome <span className="text-[#F63E7B]">Services</span>
        <div className="divider  "></div>
      </h4>
      <div className="grid bg-white lg:grid-cols-3 gap-10">
        {allServices.map((allService) => (
          <ServiceCard
            key={allService._id}
            allService={allService}
            refetch={refetch}
          ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
