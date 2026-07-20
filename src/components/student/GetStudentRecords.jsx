import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import studentGetApi from "../../api/studentgetapi";
import { toast } from "react-toastify";

const GetStudentRecords = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await studentGetApi();
      setStudents(data);
      toast.success("Students records fetched successfully");
    } catch (error) {
      console.error("Failed to fetch students:", error);
      toast.error("Failed to fetch students records");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full overflow-x-auto overflow-y-auto min-h-full mt-4">
      <h1 className="text-lg my-2 font-medium">Student Details</h1>

      <table className="w-full border border-gray-300 text-center">
        <thead>
          <tr className="border-y border-gray-300">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Roll No</th>
            <th className="px-4 py-3">First Name</th>
            <th className="px-4 py-3">Last Name</th>
            <th className="px-4 py-3">Gender</th>
            <th className="px-4 py-3">Department</th>
            <th className="px-4 py-3">Semester</th>
            <th className="px-4 py-3">Attendance</th>
            <th className="px-4 py-3">Average Marks</th>
            <th className="px-4 py-3">Risk Level</th>
            <th className="px-4 py-3">Predicted Performance</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student._id} className="border-b border-gray-200">
                <td className="px-4 py-3">{student._id}</td>

                <td className="px-4 py-3">{student.rollNo}</td>

                <td className="px-4 py-3">{student.firstName}</td>

                <td className="px-4 py-3">{student.lastName}</td>

                <td className="px-4 py-3">{student.gender}</td>

                <td className="px-4 py-3">{student.department}</td>

                <td className="px-4 py-3">{student.semester}</td>

                <td className="px-4 py-3">{student.attendance}</td>

                <td className="px-4 py-3">{student.averageMarks}</td>

                <td className="px-4 py-3">{student.riskLevel}</td>

                <td className="px-4 py-3">{student.predictedPerformance}</td>

                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    <FaEdit className="text-blue-500 cursor-pointer text-xl" />
                    <MdDelete className="text-red-500 cursor-pointer text-xl" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="text-center py-4">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetStudentRecords;
