import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
	return (
		<ScrollView
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			<CategoryCard
				imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-1140x694.jpg'
				title='testing'
			/>
			<CategoryCard
				imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Olive-oil.jpg'
				title='testing'
			/>
			<CategoryCard
				imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Pizza.jpg'
				title='testing'
			/>
			<CategoryCard
				imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Pasta.jpg'
				title='testing'
			/>
			<CategoryCard
				imgUrl='https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Arancini.jpg'
				title='testing'
			/>
		</ScrollView>
	)
}

export default Categories
