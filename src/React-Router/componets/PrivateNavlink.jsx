import React from 'react';
import { NavLink, matchPath, useResolvedPath } from 'react-router-dom';
import routePermissions from '../../../public/menupermission.json';

const PrivateNavlink = ({ to, children, ...rest }) => {
   
  const resolvedPath = useResolvedPath(to); // ✅ resolves relative paths
  const fullPath = resolvedPath.pathname;

  const user = JSON.parse(localStorage.getItem('user'));
  const roles = user?.roles || [];

  // Match the resolved fullPath against permission patterns
  const matchedRoute = Object.entries(routePermissions).find(([pattern]) => {
    return matchPath({ path: pattern, end: true }, fullPath);
  });

  if (matchedRoute) {
    const requiredRole = matchedRoute[1].role;
    if (!roles.includes(requiredRole)) {
      return null; // 🚫 No permission → hide link
    }
  }

  // ✅ Render if public or permitted
  return (
    <NavLink to={to} {...rest}>
      {children}
    </NavLink>
  );
};

export default PrivateNavlink;
