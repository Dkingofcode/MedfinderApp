import { SearchFilters } from "@/types";

// Filter Sidebar
export const FilterSidebar = ({ 
    filters,
    onFilterChange 
  }: { 
    filters: SearchFilters;
    onFilterChange: (filters: SearchFilters) => void;
  }) => (
    <div className="w-64 space-y-6 rounded-lg border bg-white p-4">
      <div>
        <h3 className="mb-2 font-semibold">Sort By</h3>
        <select 
          className="w-full rounded border p-2"
          value={filters.sortBy}
          onChange={(e) => onFilterChange({
            ...filters,
            sortBy: e.target.value as SearchFilters['sortBy']
          })}
        >
          <option value="price">Price</option>
          <option value="distance">Distance</option>
          <option value="rating">Rating</option>
        </select>
      </div>
  
      <div>
        <h3 className="mb-2 font-semibold">Distance</h3>
        <input
          type="range"
          min="1"
          max="50"
          value={filters.radius}
          onChange={(e) => onFilterChange({
            ...filters,
            radius: parseInt(e.target.value)
          })}
          className="w-full"
        />
        <span className="text-sm text-gray-600">{filters.radius}km radius</span>
      </div>
  
      <div>
        <h3 className="mb-2 font-semibold">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange.min}
            onChange={(e) => onFilterChange({
              ...filters,
              priceRange: {
                ...filters.priceRange,
                min: parseInt(e.target.value)
              }
            })}
            className="w-full rounded border p-2"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange.max}
            onChange={(e) => onFilterChange({
              ...filters,
              priceRange: {
                ...filters.priceRange,
                max: parseInt(e.target.value)
              }
            })}
            className="w-full rounded border p-2"
          />
        </div>
      </div>
  
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({
              ...filters,
              inStockOnly: e.target.checked
            })}
          />
          <span>In Stock Only</span>
        </label>
      </div>
    </div>
  );