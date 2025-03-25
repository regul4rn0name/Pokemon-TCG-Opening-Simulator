function HomeLoading() {
    return (
        <div id="jajca" className='flex flex-wrap justify-center h-screen overflow-y-auto flex-grow text-white gap-x-5 gap-y-5 text-center bg-[rgb(29,29,29)]'>
            {[...Array(20)].map((_,index) => (
                <div key={index}>
                    <button className='md:w-[456px] md:h-[256px]  w-[456px] h-[256px] sm:h-[128px] sm:w-[233px] bg-no-repeat bg-contain bg-center animate-pulse bg-[rgb(65,67,73)] shadow-none rounded-2xl duration-25'


                    />
                </div>
            ))}
        </div>
    );
}
export default HomeLoading;