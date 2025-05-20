export function UserProductInfo(isAuthor = false) {
    if(isAuthor){
        return (
            <div className="flex items-center gap-2 text-primary/80 text-sm">
                Ваш предмет
            </div>
        )
    }
    else{
        return (
            <div className="flex items-center gap-2 text-gray-100 text-sm">
                <img src="/assets/images/project/test_avatar.png" alt="avatar"  className="w-6 h-6 rounded-full"/>
                Бабайка
            </div>
        )
    }

}