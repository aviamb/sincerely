const IconBar = () => {
  return (
    <div className="inline-flex space-x-2 rounded-lg bg-[#f0f0f0] border-3 border-[#c7c7c7] p-2">
      <div className="w-6 h-6" title="Upload an image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox= "0 0 24 24" fill="none" stroke="#7f7f7f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
      </div>
      <div className="w-6 h-6" title="Link the music">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox= "0 0 24 24" fill="none" stroke="#7f7f7f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      </div>
      <div className="w-6 h-6" title="Add a link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox= "0 0 24 24" fill="none" stroke="#7f7f7f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8"/></svg>
      </div>
    </div>
  );
};

export default IconBar;