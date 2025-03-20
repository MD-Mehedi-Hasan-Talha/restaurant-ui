import { useAuth } from '../../context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  role?: string;
}

export function PrivateRoute({ children, role }: PrivateRouteProps) {
  const { state } = useAuth();
  
//   if (!state.isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
  
//   if (role && state.user?.role !== role) {
//     return <Navigate to="/" />;
//   }

  return <>{children}</>;
}