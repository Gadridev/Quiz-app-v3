import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import useMe from "../features/authentication/UpdateUser/useGetMe";
import { useLogout } from "../hooks/useLogout";
function Header() {
    const { GetMe } = useMe()
    const navigate = useNavigate()
    const {Logout}=useLogout()
     function handelLogout(e) {
        e.preventDefault()
        Logout();
        navigate('/')
    }

    return (
        <div className="bg-gray flex justify-between items-center px-5 py-1 max[320px]:w-[100%] sticky top-0 z-100 ">
            <div>
                <img
                    className=" w-[5rem]"
                    src='/QuizPng.png'
                    alt="Your Company"
                />
            </div>
            <div className="flex gap-5 items-center">
                <p>{GetMe?.user.name}</p>
                <img
                    className=" w-[2.5rem] rounded-[50%]  "
                    src={`http://localhost:8080/img/users/${GetMe?.user.photo}`}
                    alt="Your Company"
                />
                <Link to='/Me'>
                    <CiUser className="h-10 w-[1.5rem] text-violet-800" />
                </Link>
                <IoIosLogOut className="h-10 w-[1.5rem] text-violet-800 cursor-pointer" onClick={handelLogout} />
                <CiDark className="h-10 w-[1.5rem] text-violet-800" />
            </div>
        </div>
    )
}

export default Header
