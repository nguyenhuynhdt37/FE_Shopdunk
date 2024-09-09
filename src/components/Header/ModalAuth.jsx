import { Link } from 'react-router-dom'

export const ModalAuthLogInOrRegister = () => {
  return (
    <div className="bg-white py-2">
      <ul className="p-0 m-0 text-black">
        <Link to="/register">
          <li className="px-6 py-4 hover:bg-zinc-100 border-b-1">
            Create new account
          </li>
        </Link>
        <Link to="/login">
          <li className="px-6 py-4 hover:bg-zinc-100">
            Log in to your account
          </li>
        </Link>
      </ul>
    </div>
  )
}
export const ModalAuthInfomaiton = () => {
  return (
    <div className="bg-white py-2">
      <ul className="p-0 m-0 text-black">
        <Link to="/register">
          <li className="px-6 py-4 hover:bg-zinc-100 pr-20 border-b-1">
            My account
          </li>
        </Link>
        <Link to="/logout">
          <li className="px-6 py-4 hover:bg-zinc-100 pr-20">Log out</li>
        </Link>
      </ul>
    </div>
  )
}
