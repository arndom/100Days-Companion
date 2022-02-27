import { createContext, FunctionComponent, useContext, useEffect, useReducer } from 'react';
import { Action, initialState, reducer } from './reducer';
import { useNavigate } from 'react-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const AuthContext = createContext<[IFirebaseUser, React.Dispatch<Action>]>([initialState, () => null]);

const AppWrapper: FunctionComponent = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, `users/user/${user.uid}`));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const currentUser = {
            name: data.name,
            email: data.email,
            count: data.count,
            milestones: data.milestones,
            photo: data.photo,
            stack: data.stack,
            notificationFrequency: data.notificationFrequency,
            startDate: data.startDate,
          };
          dispatch({
            type: 'CHECK_USER',
            payload: currentUser,
          });
          navigate('/');
        });
      } else {
        // User is signed out
        navigate('/landing');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
};

export default AppWrapper;

export const useAuthContext = () => useContext(AuthContext);
