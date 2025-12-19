import React, { useEffect, useState } from 'react';
import { iconComponents } from '@/utils/getIcons';
import { Avatar } from '../avatar/Avatar';
import { OrgLogo } from '../OrgLogo/OrgLogo';
import { SidebarProps, SidebarItem } from './type';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { CustomChevronDown, CustomChevronUp } from '@/assets/icons';

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed = false,
  mainItems,
  bottomItems = [],
  activeItem,
  onItemClick,
  user,
  profileMenuItems,
  showSearch = true,
  onToggleCollapse,
  orgName = 'Acme Corp',
  orgImageUri,
  orgImageWidthClassname,
  onSearch,
  collapsible = false,
  orgImageClassName,
  orgImageUriCollapsed,
  orgImageUriCollapsedClassName,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  const SearchIcon = iconComponents['search'];

  const handleSearchClick = () => {
    if (isCollapsed && onToggleCollapse) {
      onToggleCollapse();
    }
  };

  const handleBorderClick = () => {
    if (onToggleCollapse) {
      onToggleCollapse();
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  // Fuzzy search function
  const fuzzySearch = (text: string, query: string): boolean => {
    if (!query.trim()) return true;

    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();

    // Direct substring match (highest priority)
    if (textLower.includes(queryLower)) return true;

    // Fuzzy match: check if query characters appear in order in text
    let queryIndex = 0;
    for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
      if (textLower[i] === queryLower[queryIndex]) {
        queryIndex++;
      }
    }

    return queryIndex === queryLower.length;
  };

  // Filter only main items based on fuzzy search query
  const filteredMainItems = mainItems.filter((item) => fuzzySearch(item.label, searchQuery));

  // Keyboard shortcut for toggling sidebar
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + B to toggle sidebar
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        handleBorderClick();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderItem = (item: SidebarItem) => {
    const isActive =
      item.label === activeItem ||
      item.href === activeItem ||
      (item.href && activeItem && item.href.toLowerCase() === `/${activeItem.toLowerCase()}`) ||
      (item.href && activeItem && item.href.toLowerCase() === activeItem.toLowerCase());

    const Icon = iconComponents[item.icon];

    return (
      <button
        key={item.label}
        onClick={() => {
          onItemClick(item);
        }}
        className={`relative flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-4'} py-2 w-full text-sm
          ${
            isActive
              ? 'bg-secondary-50 text-secondary-500 font-semibold border-l-4 border-secondary-500'
              : 'text-gray-500 hover:bg-secondary-50 border-l-4 border-transparent'
          }
          opacity-100`}
        disabled={item.disabled}
      >
        {Icon && <Icon color={isActive ? '#0185E4' : '#6A7071'} />}
        {!isCollapsed && <span className="truncate">{item.label}</span>}
        {!isCollapsed && item.badgeCount && item.badgeCount > 0 && (
          <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
            {item.badgeCount}
          </span>
        )}
      </button>
    );
  };

  const handleProfileMenuItemClick = (item: SidebarItem) => {
    // First execute the item's action
    if (item.onClick) {
      item.onClick();
    }
    // Then close the profile menu
    setIsProfileMenuOpen(false);
  };

  return (
    <aside
      className={`h-screen bg-white border-r overflow-hidden border-gray-200 flex flex-col justify-between duration-300 relative ${
        isCollapsed ? 'w-[88px]' : 'w-[235px]'
      }`}
    >
      {/* Subtle clickable border - barely visible but functional */}
      {collapsible && (
        <div
          onClick={handleBorderClick}
          className="absolute right-0 top-0 w-1 h-full cursor-pointer hover:w-1 hover:bg-gray-100 transition-all duration-200 z-10"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        />
      )}
      <div className="flex flex-col gap-4 w-full overflow-y-hidden max-h-[calc(100vh-10px)]">
        <div className={`${isCollapsed ? 'text-center' : 'px-4'} pt-4 pb-2`}>
          <div
            onDoubleClick={handleBorderClick}
            className="cursor-pointer select-none"
            title="Double-click to toggle sidebar"
          >
            {isCollapsed ? (
              <div className="flex justify-center">
                <OrgLogo
                  orgName={orgName}
                  showText={!isCollapsed}
                  size="xl"
                  showPoweredBy={!isCollapsed}
                  imageUri={orgImageUriCollapsed}
                  imageClassName={orgImageUriCollapsedClassName}
                  imageWidth={orgImageWidthClassname}
                />
              </div>
            ) : (
              <OrgLogo
                orgName={orgName}
                showText={!isCollapsed}
                size="xl"
                showPoweredBy={!isCollapsed}
                imageUri={orgImageUri}
                imageClassName={orgImageClassName}
                imageWidth={orgImageWidthClassname}
              />
            )}
          </div>
          {showSearch && (
            <div className="relative mt-6">
              {!isCollapsed ? (
                <>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {SearchIcon && <SearchIcon color="#9C9FA1" height={20} width={20} />}
                  </div>
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="text-sm pl-10 pr-3 py-2 w-full border border-gray-100 rounded-md text-gray-500 font-medium focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500"
                    />
                  </form>
                </>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={handleSearchClick}
                    className="p-2 hover:bg-secondary-50 rounded-md w-10 h-10 flex items-center justify-center"
                    title="Search"
                  >
                    {SearchIcon && <SearchIcon color="#9C9FA1" />}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <nav className="flex flex-col gap-1">
          {filteredMainItems.length > 0
            ? filteredMainItems.map((item) => renderItem(item))
            : searchQuery.trim() !== '' && (
                <div className={`px-4 py-2 text-sm text-gray-400 ${isCollapsed ? 'text-center' : ''}`}>
                  No main items found
                </div>
              )}
        </nav>
        <hr className={`my-2 ${isCollapsed ? 'mx-2' : 'mx-4'} border-t border-gray-200`} />
        <div className="flex flex-col gap-1">{bottomItems.map((item) => renderItem(item))}</div>
      </div>

      <div className="w-full bg-white">
        {!isProfileMenuOpen && <hr className={`my-2 ${isCollapsed ? 'mx-2' : 'mx-4'} border-t border-gray-200`} />}
        <Accordion
          type="single"
          collapsible
          className="w-full bg-white relative z-30 pt-2 pb-4"
          value={isProfileMenuOpen ? 'profile-menu' : ''}
          onValueChange={(value) => setIsProfileMenuOpen(value === 'profile-menu')}
        >
          <AccordionItem value="profile-menu" className="border-0 bg-white">
            <AccordionTrigger
              triggerDirectionUp={false}
              className={`${isCollapsed ? 'justify-center' : 'gap-2 px-4'} py-2 w-full hover:no-underline bg-white relative z-30 ${isCollapsed ? '[&>svg]:hidden' : ''}`}
            >
              <div className="flex flex-col items-center gap-2">
                {isCollapsed && (
                  <div>
                    {!isProfileMenuOpen ? (
                      <CustomChevronUp color="#6E6B7B" height={20} width={20} />
                    ) : (
                      <CustomChevronDown color="#6E6B7B" height={20} width={20} />
                    )}
                  </div>
                )}

                <Avatar src={user?.avatarUrl} size={40} alt={user?.name || 'User'} />
              </div>
              {!isCollapsed && user && (
                <div className="flex-1 text-left overflow-hidden ml-2">
                  <p className="text-sm text-gray-500 font-medium truncate">{user.name}</p>
                  <p className="text-xs text-gray-300 font-medium truncate">{user.email}</p>
                </div>
              )}
            </AccordionTrigger>
            <AccordionContent className="py-2 border-t border-gray-100 bg-white relative z-30">
              {profileMenuItems.map((item) => {
                const Icon = iconComponents[item.icon];
                const isLogout = item.label.toLowerCase().includes('log out');

                return (
                  <button
                    key={item.label}
                    onClick={() => handleProfileMenuItemClick(item)}
                    className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-4'} py-2 w-full text-left text-sm hover:bg-secondary-50 transition-colors duration-200 ${
                      isLogout ? 'text-error' : 'text-gray-500'
                    }`}
                  >
                    {Icon && <Icon color={isLogout ? '#EA5455' : '#6B7280'} height={22} width={22} />}
                    {!isCollapsed && <span>{item.label}</span>}
                  </button>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {isProfileMenuOpen && (
        <div
          className="absolute inset-0 bg-charcoal-overlay duration-300 z-20"
          onClick={() => setIsProfileMenuOpen(false)}
        />
      )}
    </aside>
  );
};
