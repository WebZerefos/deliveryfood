import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const Home = () => {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	})

	return (
		<SafeAreaView className='bg-white pt-5'>
			{/* header */}
			<View className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>
				<Image
					source={{
						uri: 'https://links.papareact.com/wru',
					}}
					className='h-7 w-7 bg-gray-300 p-4 rounded-full '
				/>
				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
					<Text className='font-bold text-xl'>
						Current Location
						<ChevronDownIcon
							size={20}
							color='#00ccbb'
						/>
					</Text>
				</View>
				<UserIcon
					size={35}
					color='#00ccbb'
				/>
			</View>
			{/* search */}
			<View className='flex-row items-center space-x-2 pb-2 mx-4 px-2'>
				<View className='flex-row flex-1 space-x-2 rounded-md bg-gray-200 p-3'>
					<MagnifyingGlassIcon
						color='gray'
						size={20}
					/>
					<TextInput placeholder='Your order' />
				</View>
				<AdjustmentsVerticalIcon />
			</View>

			{/* body */}
			<ScrollView className='bg-gray-100'>
				{/* categories */}
				<Categories />

				{/* featured */}
				<FeaturedRow
					id='12'
					title='featured'
					description='Paid placements from our partners'
				/>
				{/* Tasty discount */}
				<FeaturedRow
					id='123'
					title='Tasty discount'
					description='Paid placements from our partners'
				/>
				{/* Offers near you */}
				<FeaturedRow
					id='124'
					title='Offers near you'
					description='Paid placements from our partners'
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
