import {topDealUsers} from '../../../Data/data'

const TopDeals = () => {
    // id: 1,
    //   img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    //   username: "Elva McDonald",
    //   email: "elva@gmail.com",
    //   amount: "3.668",
    return (
        <div>
            <p className='text-2xl text-white font-bold'>Top Deals</p>
            {topDealUsers.map(user=>
            <div key={user.id} className='flex justify-between my-4'>

                <div className='flex items-center gap-5'>
                    <img src={user.img} alt="" className='w-8 h-8 object-cover rounded-full'/>
                    <div>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    </div>
                </div>

                <div>
                    <p>
                        {user.amount}
                    </p>
                </div>

            </div>
            )}
        </div>
    );
};

export default TopDeals;