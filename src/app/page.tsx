"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import AdvocateTable from "./components/AdvocateTable";

type Advocate = {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number | string;
  phoneNumber: string;
};

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
  }, []);

  const handleSearchChange = (term: string) => {
    const trimmedTerm = term.trim().toLowerCase();
    setSearchTerm(term);

    if (!trimmedTerm) {
      setFilteredAdvocates(advocates);
      return;
    }

    const filtered = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(trimmedTerm) ||
        advocate.lastName.toLowerCase().includes(trimmedTerm) ||
        advocate.city.toLowerCase().includes(trimmedTerm) ||
        advocate.degree.toLowerCase().includes(trimmedTerm) ||
        advocate.yearsOfExperience.toString().toLowerCase().includes(trimmedTerm) ||
        advocate.specialties.some((s) => s.toLowerCase().includes(trimmedTerm))
      );
    });

    setFilteredAdvocates(filtered);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onReset={handleResetSearch}
      />
      <br />
      <AdvocateTable advocates={filteredAdvocates} />
    </main>
  );
}