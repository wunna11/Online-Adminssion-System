import { useState } from "react";
import AuthBgLayout from "../components/AuthBgLayout";
import ProgressBar from "../components/ProgressBar";
import PersonalInfo from "./PersonalInfo";
import "../../css/custom.css";
import { ProgressContext } from "../../context/ProgressContext";

function ApplicationForm() {
  const [id, setId] = useState(0);

  const personalInfoSubmit = (data: any) => {
    console.log("data", data);
    setId(1);
  };

  return (
    <ProgressContext.Provider value={{ id }}>
      <AuthBgLayout>
        <div className="overflow-y-auto scrollbar-hide h-[700px]">
          <h3 className="font-bold text-[20px] text-gray-800">
            Please fill out this form to continue your application progress.
          </h3>
          <ProgressBar />
          <PersonalInfo onClick={personalInfoSubmit} />
        </div>
      </AuthBgLayout>
    </ProgressContext.Provider>
  );
}

export default ApplicationForm;
