import React, { useState } from "react";
import Label from "../ui/Label";
import { FaSearch } from "react-icons/fa";
import studentReportGetApi from "../../api/studentreportgetapi";
import { toast } from "react-toastify";

const ReportTopSection = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [isResult, setIsResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchStudent = async () => {
    try {
      setLoading(true);
      console.log(studentId);
      const data = await studentReportGetApi(studentId);
      console.log(data);
      setStudent(data.report);
      setIsResult(true);
      toast.success("Student report fetched successfully");
    } catch (error) {
      console.log(error);
      setIsResult(false);
      toast.error("Failed to fetch student report");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-4 bg-white rounded shadow-md border border-gray-300 w-full">
        <h1 className="text-[#125887] text-lg md:text-xl mb-4 font-semibold">
          Fetch Student Report
        </h1>

        <Label text="Student ID Number" />

        <div className="flex gap-3 w-full">
          <input
            type="text"
            placeholder="Enter ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded min-w-1/3"
          />

          <button
            onClick={fetchStudent}
            className="bg-[#125887] flex gap-2 items-center p-3 rounded text-white"
          >
            <FaSearch />
            <span>{loading ? "Fetching..." : "Fetch Records"}</span>
          </button>
        </div>
      </div>

      {isResult && student && (
        <>
          <div className="my-6 grid grid-cols-1 md:grid-cols-[35%_55%] gap-10">
            <div className="border border-gray-300 w-full shadow-md bg-white rounded p-6">
              <h1 className="text-center text-xl font-semibold">
                Name: {student.student.name}
              </h1>

              <h2 className="text-center text-md font-semibold text-[#125887]">
                Roll No: {student.student.rollNo}
              </h2>

              <hr className="border-gray-400 mt-5" />

              <div className="mt-5 grid grid-cols-2 gap-5">
                <h1 className="text-gray-600">
                  Faculty:
                  <br />
                  <span className="text-black font-medium text-lg">
                    {student.student.department}
                  </span>
                </h1>

                <h1 className="text-gray-600">
                  Semester:
                  <br />
                  <span className="text-black font-medium text-lg">
                    {student.student.semester}
                  </span>
                </h1>

                <h1 className="text-gray-600">
                  Current Percentage:
                  <br />
                  <span className="text-[#125887] font-medium text-lg">
                    {student.currentPerformance.overallPercentage}%
                  </span>
                </h1>

                <h1 className="text-gray-600">
                  Status(Risk Level):
                  <br />
                  <span className="text-[#125887] font-medium text-lg">
                    {student.currentPerformance.riskLevel}
                  </span>
                </h1>
              </div>
            </div>
            <div className="border border-gray-300 w-full shadow-md bg-white rounded p-6">
              <h1 className="text-center text-md font-semibold text-[#125887]">
                Academic Performance Overview
              </h1>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#125887]">
                  Subject-wise Current Performance
                </h2>
                <h2 className="text-lg font-semibold text-[#125887]">
                  Semester: {student.student.semester}
                </h2>
              </div>

              <table className="w-full border-collapse mb-5">
                <thead className="bg-[#125887] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Subject</th>
                    <th className="px-4 py-3 text-center">Percentage</th>
                    <th className="px-4 py-3 text-center">Grade</th>
                    <th className="px-4 py-3 text-center">Prediction</th>
                  </tr>
                </thead>

                <tbody>
                  {student.subjects.map((subject, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">{subject.subjectName}</td>

                      <td className="px-4 py-3 text-center">
                        {subject.percentage}%
                      </td>

                      <td className="px-4 py-3 text-center">{subject.grade}</td>

                      <td className="px-4 py-3 text-center">
                        {subject.prediction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-[94%]">
            <h1 className="text-lg font-semibold text-[#125887] mb-2">
              Subject Wise Improvement Factor
            </h1>
            <table className="w-full border-collapse mb-5">
              <thead className="bg-[#125887] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-4 py-3 text-center">Performance</th>
                  <th className="px-4 py-3 text-center">Suggestions</th>
                </tr>
              </thead>

              <tbody>
                {student.improvements.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">{data.subject}</td>

                    <td className="px-4 py-3 text-center">
                      {data.performance}
                    </td>

                    <td className="px-4 py-3 text-left text-gray-900">{data.suggestions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ReportTopSection;
