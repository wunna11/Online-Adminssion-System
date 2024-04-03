import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";
import { classNames } from "../../lib/helper";

const Line = () => {
  return (
    <svg
      width="231"
      height="2"
      viewBox="0 0 231 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H230.667" stroke="#212121" strokeDasharray="4 4" />
    </svg>
  );
};

const Right = () => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9322 2.61816L6.82898 12.7214C6.74098 12.8097 6.63642 12.8798 6.52129 12.9276C6.40615 12.9754 6.28272 13 6.15806 13C6.03339 13 5.90996 12.9754 5.79483 12.9276C5.6797 12.8798 5.57513 12.8097 5.48714 12.7214L1.06697 8.30124C0.97886 8.21314 0.90897 8.10854 0.861287 7.99342C0.813604 7.8783 0.789063 7.75492 0.789063 7.63032C0.789062 7.50572 0.813604 7.38234 0.861287 7.26722C0.90897 7.15211 0.97886 7.04751 1.06697 6.9594C1.15507 6.8713 1.25967 6.80141 1.37479 6.75372C1.4899 6.70604 1.61328 6.6815 1.73789 6.6815C1.86249 6.6815 1.98587 6.70604 2.10098 6.75372C2.2161 6.80141 2.3207 6.8713 2.4088 6.9594L6.15885 10.7094L15.592 1.2779C15.7699 1.09996 16.0112 1 16.2629 1C16.5145 1 16.7559 1.09996 16.9338 1.2779C17.1117 1.45584 17.2117 1.69718 17.2117 1.94882C17.2117 2.20047 17.1117 2.4418 16.9338 2.61974L16.9322 2.61816Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};

const data = [
  { id: 1, title: "Personal Info", number: "1" },
  { id: 2, title: "Require Documents", number: "2" },
  { id: 3, title: "Apply Program", number: "3" },
  { id: 4, title: "Successful", number: "4" },
];

interface ProgressBarParams {
  id: number;
  title: string;
  number: string;
}

const lastElement = data[data.length - 1];

function ProgressBar() {
  const { id } = useContext(ProgressContext);

  return (
    <div className="flex py-12 px-[60px]">
      {data.map((item: ProgressBarParams) => (
        <div key={item.id}>
          <div className="flex space-x-2">
            <div
              // className={classNames(
              //   item.id == id ? "bg-primary" : "bg-white-50",
              //   "flex items-center justify-center rounded-full w-10 h-10 border-2 border-gray-200"
              // )}
              className="flex bg-primary items-center justify-center rounded-full w-10 h-10 border-2 border-gray-200"
            >
              {item.id == id ? (
                <Right />
              ) : (
                <p className="text-gray-200 font-bold">{item.number}</p>
              )}
            </div>

            {item.id != lastElement.id && (
              <div className="flex items-center justify-center">
                <Line />
              </div>
            )}
          </div>
          <p className="text-gray-800 font-medium text-[16px]">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
