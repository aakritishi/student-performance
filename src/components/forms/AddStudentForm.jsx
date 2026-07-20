import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import studentPostApi from "../../api/studentpostapi";
import { toast } from "react-toastify";

const emptySubject = {
  subjectCode: "",
  subjectName: "",
  internalMarks: "",
  assignmentMarks: "",
  terminalExamMarks: "",
};

const initialFormData = {
  firstName: "",
  lastName: "",
  rollNo: "",
  semester: "",
  department: "",
  gender: "",
  attendance: "",
  currentSubjects: [],
  previousSemester: { semester: "", gpa: "", percentage: "", performance: "" },
  behaviour: {
    discipline: "",
    communication: "",
    teamwork: "",
    participation: "",
    homeworkCompletion: "",
    punctuality: "",
  },
};

const SUBJECT_FIELDS = [
  ["subjectCode", "Subject Code", "text"],
  ["subjectName", "Subject Name", "text"],
  ["internalMarks", "Internal Marks", "number"],
  ["assignmentMarks", "Assignment Marks", "number"],
  ["terminalExamMarks", "Terminal Exam Marks", "number"],
];

const BEHAVIOUR_FIELDS = [
  ["discipline", "Discipline"],
  ["communication", "Communication"],
  ["teamwork", "Teamwork"],
  ["participation", "Participation"],
  ["homeworkCompletion", "Homework Completion"],
  ["punctuality", "Punctuality"],
];

const AddStudentForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNestedChange = (section, e) =>
    setFormData({
      ...formData,
      [section]: { ...formData[section], [e.target.name]: e.target.value },
    });

  const handleSubjectChange = (index, e) => {
    const updated = [...formData.currentSubjects];
    updated[index] = { ...updated[index], [e.target.name]: e.target.value };
    setFormData({ ...formData, currentSubjects: updated });
  };

  const addSubject = () =>
    setFormData({
      ...formData,
      currentSubjects: [...formData.currentSubjects, { ...emptySubject }],
    });

  const removeSubject = (index) =>
    setFormData({
      ...formData,
      currentSubjects: formData.currentSubjects.filter((_, i) => i !== index),
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // console.log(formData);
    try {
      await studentPostApi(formData);
      toast.success("Student added successfully!");
      setFormData(initialFormData);
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
      toast.error("Failed to add student.");
    }
  };

  return (
    <div className="p-6">
      <form className="w-full rounded border-none" onSubmit={handleSubmit}>
        <h1 className="md:text-left text-center font-medium text-lg md:text-xl mb-2">
          Add Student Form
        </h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <Label text="Roll Number" htmlFor="rollNo" />
        <Input required type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="Enter roll number" />

        <Label text="Student Name" htmlFor="firstName" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="pl-3 py-3 rounded border border-gray-400 w-full mb-3" />
          <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="pl-3 py-3 rounded border border-gray-400 w-full mb-3" />
        </div>

        <Label text="Department" htmlFor="department" />
        <Input required type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Enter department name" />

        <Label text="Semester" htmlFor="semester" />
        <select required name="semester" value={formData.semester} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 mt-1 mb-3">
          <option value="">Select Semester</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <Label text="Attendance" htmlFor="attendance" />
        <Input required type="number" name="attendance" value={formData.attendance} onChange={handleChange} placeholder="Enter student attendance" />

        <Label text="Gender" htmlFor="gender" />
        <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-3 mb-3 mt-1">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <h2 className="text-lg font-medium mt-6 mb-3">Previous Semester</h2>
        <Label text="Previous Semester Number" htmlFor="prevSemester" />
        <Input required type="number" name="semester" value={formData.previousSemester.semester} onChange={(e) => handleNestedChange("previousSemester", e)} placeholder="enter previous sem number" />

        <Label text="GPA" htmlFor="gpa" />
        <Input required type="number" step="0.01" name="gpa" value={formData.previousSemester.gpa} onChange={(e) => handleNestedChange("previousSemester", e)} placeholder="enter gpa" />

        <Label text="Percentage" htmlFor="percentage" />
        <Input required type="number" name="percentage" value={formData.previousSemester.percentage} onChange={(e) => handleNestedChange("previousSemester", e)} placeholder="enter percentage" />

        <Label text="Performance" htmlFor="performance" />
        <select required name="performance" value={formData.previousSemester.performance} onChange={(e) => handleNestedChange("previousSemester", e)} className="w-full border border-gray-300 rounded-md p-3 mb-3 mt-1">
          <option value="">Select Performance</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>

        <h2 className="text-lg font-medium mt-6 mb-3">Current Subjects</h2>
        {formData.currentSubjects.map((subject, index) => (
          <div key={index} className="border border-gray-400 p-4 rounded mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Subject {index + 1}</h3>
              <button type="button" onClick={() => removeSubject(index)} className="text-red-500 text-sm">Remove</button>
            </div>
            {SUBJECT_FIELDS.map(([name, label, type]) => (
              <React.Fragment key={name}>
                <Label text={label} htmlFor={`${name}-${index}`} />
                <Input required type={type} name={name} value={subject[name]} onChange={(e) => handleSubjectChange(index, e)} placeholder={`Enter ${label.toLowerCase()}`} />
              </React.Fragment>
            ))}
          </div>
        ))}
        <Button type="button" onClick={addSubject} className="mb-4">Add Subject</Button>

        <h2 className="text-lg font-medium mt-6 mb-3">Behaviour (rate 1–5)</h2>
        {BEHAVIOUR_FIELDS.map(([key, label]) => (
          <div key={key}>
            <Label text={label} htmlFor={key} />
            <select required name={key} value={formData.behaviour[key]} onChange={(e) => handleNestedChange("behaviour", e)} className="w-full border border-gray-300 rounded-md p-3 mb-3 mt-1">
              <option value="">Select rating</option>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddStudentForm;