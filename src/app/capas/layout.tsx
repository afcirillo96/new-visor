import React from 'react';
import SubMenu from '../components/SubMenu';

export default function Layout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <SubMenu/>
            {children}
      </div>
    );
  }