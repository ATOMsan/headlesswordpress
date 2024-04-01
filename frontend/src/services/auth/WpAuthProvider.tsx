import { Loader } from 'components/Loader'
import React, {
  PropsWithChildren,
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

export const WpContext = createContext(null as any)

export const useWpAuthContext = () => useContext(WpContext)

export const WpAuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const user = {
    username: process.env.REACT_APP_API_USERNAME,
    password: process.env.REACT_APP_API_USERPASSWORD
  }

  const connectwp = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/wp-json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;'
          },
          body: JSON.stringify(user)
        }
      )
      const data = await response.json()
      setAuthUser(data)
    } catch (e) {
      console.error(e)
      throw e // Re-throwing the error to propagate it further if necessary
    }
  }

  useEffect(() => {
    if (!authUser) connectwp()
  }, [authUser])

  if (!authUser) <Loader />

  return <WpContext.Provider value={authUser}>{children}</WpContext.Provider>
}
