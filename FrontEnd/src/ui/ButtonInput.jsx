function ButtonInput({textReset,textUpdate}) {
    return (
        <div className="flex gap-5 justify-end mt-4">
        <button type="reset" className="border-[1px] rounded-[5px] shadow-sm text-sm  font-semibold py-3 px-5   text-white " >{textReset}</button>
        <button className="border-none rounded-[5px] shadow-sm text-sm  font-semibold py-3 px-4  text-white bg-violet-700">{textUpdate}</button>
    </div>
    )
}

export default ButtonInput
