type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onReset: () => void;
};

export default function SearchBar({
  searchTerm,
  onSearchChange,
  onReset,
}: SearchBarProps) {
  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span>{searchTerm}</span>
      </p>
      <input
        style={{ border: "1px solid black" }}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button onClick={onReset}>Reset Search</button>
    </div>
  );
}