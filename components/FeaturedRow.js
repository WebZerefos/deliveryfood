import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
	return (
		<View>
			<View className='mt-4 flex-row items-center justify-between px-4'>
				<Text className='font-bold text-lg'>{title}</Text>
				<ArrowRightIcon color='#00ccbb' />
			</View>
			<Text className='text-xs text-gray-500 px-4'>{description}</Text>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
				className='pt-4'
			>
				{/* RestaurantCard */}
				<RestaurantCard
					id='1'
					imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg'
					title='Hey Italian'
					rating='8.5'
					genre='Italian'
					address='123 Main St.'
					short_description='The best Italian food.'
					dishes={[]}
					long={200}
					lat={300}
				/>
				<RestaurantCard
					id='1'
					imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg'
					title='Hey Italian'
					rating='8.5'
					genre='Italian'
					address='123 Main St.'
					short_description='The best Italian food.'
					dishes={[]}
					long={200}
					lat={300}
				/>
				<RestaurantCard
					id='1'
					imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg'
					title='Hey Italian'
					rating='8.5'
					genre='Italian'
					address='123 Main St.'
					short_description='The best Italian food.'
					dishes={[]}
					long={200}
					lat={300}
				/>
			</ScrollView>
		</View>
	)
}

export default FeaturedRow
