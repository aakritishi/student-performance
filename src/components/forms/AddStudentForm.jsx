import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import studentPostApi from "../../api/studentpostapi";

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    className: "",
    semester: "",
    faculty: "",
    age: "",
    gender: "",
    attendance: "",
    subjects: [],
    facultyRemarks: "",
  });
  const [error, setError] = useState("");

  const addSubject = () => {
    setFormData({
      ...formData,
      subjects: [
        ...formData.subjects,
        {
          subjectName: "",
          assignmentMarks: "",
          terminalMarks: "",
          remarks: "",
        },
      ],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubjectChange = (index, e) => {
    const { name, value } = e.target;

    const updatedSubjects = [...formData.subjects];

    updatedSubjects[index][name] = value;

    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await studentPostApi(formData);
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="p-6">
      <form className="w-full rounded border-none" onSubmit={handleSubmit}>
        <h1 className="md:text-left text-center font-medium text-lg md:text-xl mb-2">
          Add Student Form
        </h1>
        <Label text="Student Name" htmlFor="name" />

        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
        />

        <Label text="Roll Number" htmlFor="rollNumber" />

        <Input
          type="number"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          placeholder="Enter roll number"
        />

        <Label text="Class Name" htmlFor="className" />

        <Input
          type="text"
          name="className"
          value={formData.className}
          onChange={handleChange}
          placeholder="Enter class name"
        />

        <Label text="Semester" htmlFor="semester" />

        <Input
          type="number"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          placeholder="Enter your semester"
        />

        <Label text="Faculty" htmlFor="faculty" />

        <Input
          type="text"
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
          placeholder="Enter faculty name"
        />

        <Label text="Age" htmlFor="age" />

        <Input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter student age"
        />

        <Label text="Attendance" htmlFor="attendance" />

        <Input
          type="number"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          placeholder="Enter student attendance"
        />

        <Label text="Gender" htmlFor="gender" />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mt-1"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <h2 className="text-lg font-medium mt-6 mb-3">Subjects</h2>

        {formData.subjects.map((subject, index) => (
          <div key={index} className="border border-gray-400 p-4 rounded mb-4">
            <h3 className="font-medium mb-2">Subject {index + 1}</h3>

            <Label text="Subject Name" htmlFor={`subjectName-${index}`} />

            <Input
              type="text"
              name="subjectName"
              value={subject.subjectName}
              onChange={(e) => handleSubjectChange(index, e)}
              placeholder="Enter subject name"
            />

            <Label
              text="Assignment Marks"
              htmlFor={`assignmentMarks-${index}`}
            />

            <Input
              type="number"
              name="assignmentMarks"
              value={subject.assignmentMarks}
              onChange={(e) => handleSubjectChange(index, e)}
              placeholder="Enter assignment marks"
            />

            <Label text="Terminal Marks" htmlFor={`terminalMarks-${index}`} />

            <Input
              type="number"
              name="terminalMarks"
              value={subject.terminalMarks}
              onChange={(e) => handleSubjectChange(index, e)}
              placeholder="Enter terminal marks"
            />

            <Label text="Remarks" htmlFor={`remarks-${index}`} />

            <Input
              type="text"
              name="remarks"
              value={subject.remarks}
              onChange={(e) => handleSubjectChange(index, e)}
              placeholder="Enter remarks"
            />
          </div>
        ))}

        <Button type="button" onClick={addSubject} className="mb-4">
          Add Subject
        </Button>

        <Label text="Faculty Remarks" htmlFor="facultyRemarks" />

        <Input
          type="text"
          name="facultyRemarks"
          value={formData.facultyRemarks}
          onChange={handleChange}
          placeholder="Enter faculty remarks"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddStudentForm;
