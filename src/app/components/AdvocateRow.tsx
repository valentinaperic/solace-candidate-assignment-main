import React from "react";
import { Advocate } from "../types";

export default function AdvocateRow({ advocate }: { advocate: Advocate }) {
  return (
    <tr>
      <td>{advocate.firstName}</td>
      <td>{advocate.lastName}</td>
      <td>{advocate.city}</td>
      <td>{advocate.degree}</td>
      <td>
        {advocate.specialties.map((s, index) => (
          <div key={index} className="specialty-tag">
            {s}
          </div>
        ))}
      </td>
      <td>{advocate.yearsOfExperience}</td>
      <td>{advocate.phoneNumber}</td>
    </tr>
  );
}