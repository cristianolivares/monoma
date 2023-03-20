import { Navigate, Route, Routes } from 'react-router-dom';

interface PrivateRouteProps {
  path: string;
  element: JSX.Element;
  user: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element, user }) => {
  const token = sessionStorage.getItem("token");

  if (user && token) {
    return (
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
  export default PrivateRoute;