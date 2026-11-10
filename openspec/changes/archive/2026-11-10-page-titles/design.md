# Design
One `useEffect` in `Page` (the shared shell) that maps `useLocation().pathname` to a title via a small lookup built from the same route names as `menu.json`. Unknown paths render Home, so they get the Home title.
