
import { SayHello } from './components/SayHello'
import { UsersList } from './components/UsersList'
import { WindowResize } from './components/WindowResize'

export const App = () => (
  <div>
    <h1>useEffect</h1>
    <SayHello />
    <UsersList />
    <WindowResize />
  </div>
)
