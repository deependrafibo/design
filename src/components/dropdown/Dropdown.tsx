import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CustomCheck, CustomX, CustomSearch } from '../../assets/icons';
import { DropdownProps, Option } from './types';
import { Input } from '../../components/ui/input';
import { Spinner } from '../../components/ui/spinner';

export const Dropdown: React.FC<DropdownProps> = ({
  label = 'Dropdown',
  options,
  placeholder = 'Select an option',
  multi = false,
  searchable = false,
  paginated = false,
  loading = false,
  selected,
  width = 'min-w-[200px]',
  labelClassName,
  className,
  optionStyle,
  onChange,
  onLoadMore,
  onSearch,
  required = false,
  rank,
  disabled,
  hasError = false,
  errorMessage = '',
  showTick = true,
  deselectable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<Option[] | Option | null>(multi ? [] : null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedOptions, setDisplayedOptions] = useState<Option[]>(options);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const scrollTriggeredRef = useRef(false);

  const isControlled = selected !== undefined;
  const currentValue = isControlled ? selected : internalSelected;

  useEffect(() => {
    setDisplayedOptions(options);
  }, [options]);

  const handleSelect = (option: Option) => {
    if (multi) {
      const selectedList = Array.isArray(currentValue) ? [...currentValue] : [];
      const exists = selectedList.find((item) => item.value === option.value);
      // Prevent deselection if deselectable is false
      if (!deselectable && exists) return;
      const updated = exists ? selectedList.filter((item) => item.value !== option.value) : [...selectedList, option];

      if (!isControlled) setInternalSelected(updated);
      onChange?.(updated);
    } else {
      const current = currentValue as Option | null;
      const isSame = current?.value === option.value;
      // Prevent deselection if deselectable is false
      if (!deselectable && isSame) {
        setIsOpen(false);
        return;
      }
      const updated = isSame ? null : option;

      if (!isControlled) setInternalSelected(updated);
      onChange?.(updated);
      if (!multi) setIsOpen(false);
    }
  };

  const removeOption = (option: Option) => {
    if (multi && Array.isArray(currentValue)) {
      const updated = currentValue.filter((item) => item.value !== option.value);
      if (!isControlled) setInternalSelected(updated);
      onChange?.(updated);
    } else {
      if (!isControlled) setInternalSelected(null);
      onChange?.(null);
    }
  };

  const isSelected = (option: Option) => {
    if (multi && Array.isArray(currentValue)) {
      return currentValue.some((item) => item.value === option.value);
    }
    return (currentValue as Option)?.value === option.value;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    onSearch?.(value);

    if (!value) {
      setDisplayedOptions(options);
      return;
    }

    const filtered = options.filter((option) => {
      const labelString = typeof option.label === 'string' ? option.label : String(option.label);
      return labelString.toLowerCase().includes(value) || option.value.toLowerCase().includes(value);
    });
    setDisplayedOptions(filtered);
  };

  useEffect(() => {
    scrollTriggeredRef.current = false;
  }, [options, loading]);

  const handleScroll = useCallback(() => {
    if (!paginated || !onLoadMore || loading || scrollTriggeredRef.current) return;
    const optionsElement = optionsRef.current;
    if (!optionsElement) return;

    const { scrollTop, scrollHeight, clientHeight } = optionsElement;
    const scrolledToBottom = scrollHeight - scrollTop <= clientHeight + 50;

    if (scrolledToBottom) {
      scrollTriggeredRef.current = true;
      onLoadMore();
    }
  }, [paginated, onLoadMore, loading]);

  useEffect(() => {
    const optionsElement = optionsRef.current;
    if (optionsElement && paginated && isOpen) {
      optionsElement.addEventListener('scroll', handleScroll);

      setTimeout(() => {
        if (optionsElement.scrollHeight <= optionsElement.clientHeight && !loading && paginated && onLoadMore) {
          onLoadMore();
        }
      }, 100);

      return () => {
        optionsElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [paginated, handleScroll, isOpen, loading, onLoadMore]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${width}`} ref={containerRef}>
      {label && (
        <label className={`text-xs text-body-text font-Montserrat mb-[5px] ${labelClassName || ''}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        onClick={() => (disabled ? setIsOpen(false) : setIsOpen(!isOpen))}
        className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} min-h-[38px] bg-white px-[14px] py-[7px] flex flex-wrap gap-[11px] items-center border ${
          hasError ? 'border-red-500' : 'border-border-input'
        } rounded-[6px] ${className} relative`}
      >
        {multi ? (
          Array.isArray(currentValue) && currentValue.length > 0 ? (
            currentValue.map((item) => (
              <div
                key={item.value}
                className="flex items-center bg-[#4DAAEC] text-white text-xs px-[6px] py-[3px] rounded-[3px]"
              >
                {item.label}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(item);
                  }}
                  className="ml-1 text-[10px] font-bold"
                >
                  <CustomX width={12} height={12} color="white" />
                </button>
              </div>
            ))
          ) : (
            <span className="text-xs text-gray-400">{placeholder}</span>
          )
        ) : (
          <div className="flex items-center w-full">
            {(currentValue as Option)?.label ? (
              <>
                <div className="flex items-center gap-3 flex-1 min-w-0 pr-8">
                  <span className="text-xs text-[#515759] font-Montserrat truncate">
                    {(currentValue as Option)?.label}
                  </span>
                  {currentValue && rank && (
                    <span className="text-xs font-semibold text-primary-500 border border-primary-500 rounded-full px-[9px] py-[1px] h-[18px] bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-semibold">
                        Rank:{' '}
                        <span className="text-primary-500">
                          {rank.label}/{rank.value}
                        </span>
                      </span>
                    </span>
                  )}
                </div>
              </>
            ) : (
              <span className="text-xs text-gray-400 pr-8">{placeholder}</span>
            )}
          </div>
        )}

        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="#6E6B7B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {hasError && errorMessage && <p className="text-red-500 text-xs mt-1 ml-1">{errorMessage}</p>}

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 bg-white border border-gray-300 rounded-md w-full ${optionStyle} shadow-lg`}
          style={{ maxHeight: '300px', display: 'flex', flexDirection: 'column' }}
        >
          {searchable && (
            <div
              className="sticky top-0 z-50 bg-white p-2 border-b border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className=" pr-2 py-1 w-full text-sm"
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <CustomSearch width={16} height={16} color="#6E6B7B" />
                </span>
              </div>
            </div>
          )}
          <div
            ref={optionsRef}
            className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent w-full"
            style={{ overflowY: 'auto', maxHeight: searchable ? 'calc(300px - 50px)' : '300px' }}
            onScroll={paginated ? handleScroll : undefined}
          >
            {displayedOptions.length > 0 ? (
              displayedOptions.map((option) => {
                const selected = isSelected(option);
                return (
                  <div
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`px-[18px] py-2 cursor-pointer flex items-center justify-between gap-2 w-full ${
                      selected ? 'bg-option-bg' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`text-sm font-Montserrat w-full ${selected ? 'text-secondary-500 ' : 'text-body-text'}`}
                    >
                      {option.label}
                    </span>
                    {selected && showTick && <CustomCheck height={16} width={16} color="#0185E4" />}
                  </div>
                );
              })
            ) : (
              <div className="px-[18px] py-2 text-sm text-gray-400">No options found</div>
            )}
            {loading && (
              <div className="p-2 flex justify-center">
                <Spinner size="small" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
