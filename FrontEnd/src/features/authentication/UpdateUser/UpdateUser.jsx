// import axios from "axios";
import AppLayouts from "../../../ui/AppLayouts"
import Wrapper from "../../../ui/Wrapper"
import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
import FormInput from '../../../ui/FormInput'
import useUpdateUser from "./useUpdate";
import useMe from "./useGetMe";
import Spinner from "../../../ui/Spinner";
import useUpdatePassword from "./useUpdatePassword";
import { useNavigate } from "react-router-dom";
import ButtonInput from "../../../ui/ButtonInput";
function UpdateUser() {
    const { prefetchMe, GetMe } = useMe()
    console.log(GetMe)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordCurrent, setpasswordCurrent] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');
    const [photo, setphoto] = useState('');

    const [password, setpassword] = useState('');
    const { UpdateData, isLoading: isUpdating } = useUpdateUser();
    const { UpdatePassword, isLoading } = useUpdatePassword()
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(photo)
        await UpdateData({ name, email, photo });
        await prefetchMe()
    }
    useEffect(() => {
        if (GetMe && GetMe.user) {
            setName(GetMe.user.name);
            setEmail(GetMe.user.email);
        }
    }, [UpdateData, GetMe]);
    async function UpdatePasswordUser(e) {
        e.preventDefault();
        await UpdatePassword({ passwordCurrent, password, passwordConfirm })
        navigate('/')
    }
    return (
        <div>
            <AppLayouts>
                <div className="flex flex-col gap-[1.6rem] mx-[50px] my-0">
                    <h1 className="text-[2rem] font-bold  mt-5">Update You account</h1>
                    <div>
                        <p className="font-bold  mb-3">Update user Data</p>
                        <Wrapper>
                            <form onSubmit={handleSubmit}>
                                <FormInput label="Email address" onChange={(e) => setEmail(e.target.value)} type="email" value={GetMe?.user.email} classnameI="border-solid border-[1px] bg-gray_0 border-gray_300 px-[1.2rem] py-[0.4rem] shadow-md text-[15px]" />
                                <FormInput label="Name" onChange={(e) => setName(e.target.value)} type="text" value={GetMe?.user.name} classnameI="border-solid border-[1px] bg-gray_0 border-gray_300 px-[1.2rem] py-[0.4rem] shadow-md text-[15px]" />
                                <FormInput label="Avatar image" onChange={(e) => setphoto(e.target.files[0])} type="file"  classnameI="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold  file:bg-violet-700 file:text-white hover:file:bg-white-100" accept="image/*" />
                                <ButtonInput textReset="Cancel" textUpdate={isUpdating ? <Spinner /> : 'Update account'} />
                            </form>
                        </Wrapper>
                    </div>
                    <div>
                        <p className="font-bold mb-3">Update Password</p>
                        <Wrapper>
                            <form onSubmit={UpdatePasswordUser} >
                                <div className="border-solid border-b-[1px] grid  min-[900px]:grid-cols-[24rem,1fr,1.2fr] gap-y-2.4 px-0 py-[1.2rem]   " style={{ WebkitBoxAlign: 'center', alignItems: 'center' }}>
                                    <label className="text-[1rem] font-bold max-[900px]:mb-5">Current Password</label>
                                    <input type="password" onChange={(e) => setpasswordCurrent(e.target.value)} placeholder=".............." className="border-solid border-[1px] bg-gray_0   border-gray_300 px-[1.2rem] py-[0.4rem] shadow-md text-[15px] " />
                                </div>
                                <div className="border-b border-solid grid  min-[900px]:grid-cols-[24rem,1fr,1.2fr] gap-y-2.4 px-0 py-[1.2rem] " style={{ WebkitBoxAlign: 'center', alignItems: 'center' }}>
                                    <label htmlFor="password" className="text-[1rem] font-bold max-[900px]:mb-5" >New Password</label>
                                    <input type="password" id="password" onChange={(e) => setpasswordConfirm(e.target.value)} placeholder=".............." className="border-solid border-[1px] bg-gray_0  border-gray_300 px-[1.2rem] py-[0.4rem] shadow-md text-[15px]" />
                                </div>
                                <div className="border-b border-solid grid  min-[900px]:grid-cols-[24rem,1fr,1.2fr] gap-y-2.4 px-0 py-[1.2rem]  " style={{ WebkitBoxAlign: 'center', alignItems: 'center' }}>
                                    <label htmlFor="passwordConfrim" className="text-[1rem] font-bold max-[900px]:mb-5" >Confirm Password</label>
                                    <input placeholder=".............." type="password" onChange={(e) => setpassword(e.target.value)} id="passwordConfrim" className="border-solid border-[1px] bg-gray_0  border-gray_300 px-[1.2rem] py-[0.4rem] shadow-md text-[15px]" />
                                </div>
                                <ButtonInput textReset="Cancel" textUpdate={isLoading ? <Spinner /> : "Update Password"} />
                            </form>
                        </Wrapper>
                    </div>
                </div>
            </AppLayouts>

        </div>
    )
}

export default UpdateUser
