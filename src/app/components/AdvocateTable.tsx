import { Advocate } from "../types";
import AdvocateRow from "./AdvocateRow";

type AdvocateTableProps = {
  advocates: Advocate[];
};

export default function AdvocateTable({ advocates }: AdvocateTableProps) {
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