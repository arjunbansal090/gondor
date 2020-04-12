import React from 'react';

const AppMenu = React.memo(({ children }) => (
  <div className="app-menu">
    <div className="scrollbar-container ps ps--active-y">
      <div className="p-4">{children}</div>
    </div>
  </div>
));

export default AppMenu;
