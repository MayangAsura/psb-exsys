import React from "react";
import ExamItemCover from "./ExamItemCover";
import { FaPencilAlt } from "react-icons/fa";

const ExamItem = (props) => {
  const { icon, title, description } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <ExamItemCover icon={icon} title={title} />
        <div className="flex">
          <div className="flex-0 my-3 mr-2">
            <p className="text-base  font-bold text-gray-600">Status</p>
            <p className="text-gray-400">{description}</p>
          </div>
          <button className="flex flex-1 bg-green-600 rounded-md py-5 px-2 mt-20 hover:bg-green-200">
            <FaPencilAlt className="mr-1" /> Mulai
          </button>

        </div>
      </div>
    </div>
  );
};

export default ExamItem;
