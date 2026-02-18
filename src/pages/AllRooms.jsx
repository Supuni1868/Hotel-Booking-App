import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { roomsDummyData, assets, facilityIcons } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useState, useMemo } from 'react'

const Checkbox = ({label,selected = false, onChange = () => {} } )  => { 
    return (
        <label className = "flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type = "checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
            <span className = 'font-light selected-none'>{label}</span>
        </label>
    )
}


const RadioButton = ({label,selected = false, onChange = () => {} } )  => { 
    return (
        <label className = "flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type = "radio" name="sortOption" checked={selected} onChange={() => onChange(label)} />
            <span className = 'font-light selected-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [openFilters, setOpenFilters] = useState(false)

    // Get search parameters from URL
    const destination = searchParams.get('destination');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const guests = searchParams.get('guests');

    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Room",
        "Family Suite",
    ];

    const priceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000'
    ];

    const sortOptions = [
        'Price Low to High',
        'Price High to Low',
        'Newest First'

    ];

    // Filter rooms based on search criteria
    const filteredRooms = useMemo(() => {
        let filtered = [...roomsDummyData];

        // Filter by destination
        if (destination) {
            filtered = filtered.filter(room => 
                room.hotel.city.toLowerCase().includes(destination.toLowerCase()) ||
                room.hotel.name.toLowerCase().includes(destination.toLowerCase()) ||
                room.hotel.address.toLowerCase().includes(destination.toLowerCase())
            );
        }

        // Filter by guest count
        if (guests) {
            const guestCount = parseInt(guests);
            filtered = filtered.filter(room => {
                // Assuming rooms can accommodate based on their type
                if (room.type === 'Single Bed') return guestCount <= 1;
                if (room.type === 'Double Bed') return guestCount <= 2;
                if (room.type === 'Family Suite') return guestCount <= 4;
                if (room.type === 'Luxury Room') return guestCount <= 3;
                return true;
            });
        }

        return filtered;
    }, [destination, guests]);

    const hasSearchParams = destination || checkIn || checkOut || guests;
            
  return (
    
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      
    <div>
        <div className='flex flex-col items-start text-left'>
            <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.  </p>
        </div>

        {/* Search results info */}
        {hasSearchParams && (
            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6'>
                <p className='text-sm font-medium text-gray-700'>
                    Showing results for:
                    {destination && <span className='ml-2 text-blue-600'>📍 {destination}</span>}
                    {checkIn && <span className='ml-2 text-blue-600'>📅 Check-in: {checkIn}</span>}
                    {checkOut && <span className='ml-2 text-blue-600'>📅 Check-out: {checkOut}</span>}
                    {guests && <span className='ml-2 text-blue-600'>👥 {guests} guest(s)</span>}
                </p>
                <p className='text-sm text-gray-600 mt-1'>Found {filteredRooms.length} room(s)</p>
            </div>
        )}

        {filteredRooms.length === 0 ? (
            <div className='py-20 text-center'>
                <p className='text-xl text-gray-500'>No rooms found matching your search criteria.</p>
                <button 
                    onClick={() => navigate('/rooms')}
                    className='mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800'
                >
                    View All Rooms
                </button>
            </div>
        ) : (
            filteredRooms.map((room) =>(
            <div key={room._id} className = 'flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                <img onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                 src = {room.images[0]} alt="hotel-img" title='view Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
             
                <div className='md:w-1/2 flex flex-col gap-2'>
                    <p className = 'text-gray-500'>{room.hotel.city}</p>
                    <p onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                    className = 'text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>

                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm '>
                        <StarRating />
                        <p className = 'ml-2'>200+ reviews  </p>
                    </div>
                    <div>
                        <img src = {assets.locationIcon} alt= "location-icon"/>
                        <span>{room.hotel.address}</span>
                    </div>

                    {/*Room Amenities*/}
                    <div className = 'flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((amenity, index) => (
                            <div key={index} className= 'flex items-center gap-2 px-3 py-2 rounde-lg bg-[#F5F5FF]/70'>
                                <img src={facilityIcons[amenity]} alt={amenity}
                                className = 'w-5 h-5' />
                                <p className = 'text-xs'> {amenity}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/*Room Price per Night*/}
                    <p className = 'text-xl font-medium text-gray-700'>${room.pricePerNight} / night</p>
                </div>
            </div>
            
        ))
        )}
    </div>

     {/*Filters*/}
     <div className = 'bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16'>

        <div className = {`flex items-center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
            <p className = 'text-base font-medium text-gray-800'>FILTERS</p>
            <div className = 'text-xs cursor-pointer'>
                <span onClick = {() => setOpenFilters(!openFilters)}
                className = 'lg:hidden'>
                    {openFilters ? "HIDE" : "SHOW"}</span>
                <span className = 'hidden lg:block'>CLEAR</span> 
            </div>
        </div>

        <div className = {`${openFilters ? 'h-auto' : "h-0 lg:h-auto"}
        overflow-hidden transition-all duration-700`}>
            <div className = 'px-5 pt-5'>
                <p className = 'font-medium text-gray-800 pb-2'>Popular Filters</p>
                {roomTypes.map((room, index) => (
                    <Checkbox key = {index} label={room} />
                    ))}
             </div>

             <div className = 'px-5 pt-5'>
                <p className = 'font-medium text-gray-800 pb-2'>Price Range</p> 
                {priceRanges.map((range, index) => (
                    <Checkbox key = {index} label={`$ ${range}`} />
             ))}
             </div>


              <div className = 'px-5 pt-5 pb-7'>
                <p className = 'font-medium text-gray-800 pb-2'>Sort By</p> 
                {sortOptions.map((option, index) => (
                    <RadioButton key = {index} label={option} />
             ))}
             </div>


        </div>
     </div>
    <div>

    </div>
    
    </div>
  )
}

export default AllRooms
