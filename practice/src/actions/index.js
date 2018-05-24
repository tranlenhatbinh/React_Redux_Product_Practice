import * as Type from './../constants/ActionTypes'
import callAPi from '../utils/apiCaller'

export const actFetchProductsRequest = () => {
  return dispatch => {
    return callAPi('products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data))
    })
  }
}

export const actFetchProducts = (products) => {
  return {
    type: Type.FETCH_PRODUCTS,
    products
  }
}

export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callAPi(`products/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(id))
    })
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Type.DELETE_PRODUCT,
    id
  }
}

export const actAddProductRequest = (product) => {
  return dispatch => {
    return callAPi('products', 'POST', product).then(res => {
      dispatch(actAddProduct(res.data))
    })
  }
}

export const actAddProduct = (product) => {
  return {
    type: Type.ADD_PRODUCT,
    product
  }
}

export const actGetProductRequest = (id) => {
  return dispatch => {
    return callAPi(`products/${id}`, 'GET', null).then(res => {
      dispatch(actGetProduct(res.data))
    })
  }
}

export const actGetProduct = (product) => {
  return {
    type: Type.EDIT_PRODUCT,
    product
  }
}

export const actUpdateProductRequest = (product) => {
  return dispatch => {
    return callAPi(`products/${product.id}`, 'PUT', product).then(res => {
      dispatch(actUpdateProduct(res.data))
    })
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: Type.UPDATE_PRODUCT,
    product
  }
}