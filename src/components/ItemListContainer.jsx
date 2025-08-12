import { useState, useEffect } from 'react'
import { withLoading } from '../hoc/withLoading'
import { useParams } from 'react-router'
import { getItems, getItemsByCategory } from '../firebase/db'
import ItemList from './ItemList'

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName) {
            getItemsByCategory(categoryName)
                .then(res => setItems(res))
        } else {
            getItems().then(res => setItems(res))
        }
    }, [categoryName])

    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer