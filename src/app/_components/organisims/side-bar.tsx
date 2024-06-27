import CustomButton from '@/app/_components/atoms/buttons'

export default function SideBar(){
    return (
      <div className="flex h-full w-64 flex-col justify-between rounded-r-lg bg-primary p-4">
        {/* <!-- Top section with navigation buttons --> */}
        <div className="flex flex-col h-1/2 justify-center">
          <CustomButton buttonType="secondary">Community</CustomButton>
          <CustomButton buttonType="primary">My Store</CustomButton>
        </div>

        {/* <!-- Bottom section with Sign In button --> */}
        <div className="my-5 py-5">
          <CustomButton buttonType="accent">Sign In</CustomButton>
        </div>
      </div>
    );
}