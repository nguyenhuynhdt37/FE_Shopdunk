import { RxCaretRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const PageNavigation = () => {
  return (
    <ul className="list-url  flex py-4 text-1.5xl text-gray-700">
      <li className="url mr-2 flex items-center ">
        <Link to="/">Home</Link>
        <RxCaretRight className="w-10 ms-2" />
      </li>
      <li className="url  flex items-center">
        <Link to="/">iPhone</Link>
        <RxCaretRight className="w-10 ms-2" />
      </li>
    </ul>
  )
}

export default PageNavigation
