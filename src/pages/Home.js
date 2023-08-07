import React from 'react'
import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import { ProductList } from '../components/ProductList'
import Pagination from '../components/Pagination'
const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <ProductList/>
      <Pagination/>
    </Fragment>
  )
}

export default Home
