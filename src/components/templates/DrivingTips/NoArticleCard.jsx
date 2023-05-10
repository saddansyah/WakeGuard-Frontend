const NoArticleCard = () => {
    return (<>
        <div className='contact card flex flex-col gap-2 text-sm mb-3 h-fit w-full bg-gray-200 text-gray-500'>
            <p className="text-center font-semibold">You have no article(s) today</p>
        </div>
    </>);
}

export default NoArticleCard;