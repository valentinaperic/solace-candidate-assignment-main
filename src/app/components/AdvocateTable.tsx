import React from "react";
import AdvocateRow from "./AdvocateRow";

type Advocate = {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string;
  phoneNumber: string;
};

export default function AdvocateTable({ advocates }: { advocates: Advocate[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate, idx) => (
          <AdvocateRow key={idx} advocate={advocate} />
        ))}
      </tbody>
    </table>
  );
}