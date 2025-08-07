"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import AdvocateTable from "./components/AdvocateTable";
import { Advocate } from "./types";
import './styles.css';

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

    //split search by spaces, ex. ["john", "doe"]
    const parts = trimmedTerm.split(/\s+/);

    const filtered = advocates.filter((advocate) => {

      const searchableString = [
        advocate.firstName,
        advocate.lastName,
        advocate.city,
        advocate.degree,
        advocate.yearsOfExperience.toString(),
        ...advocate.specialties,
      ]
        .map((s) => s.toLowerCase())
        .join(" ");

      return parts.every((part) => searchableString.includes(part));
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