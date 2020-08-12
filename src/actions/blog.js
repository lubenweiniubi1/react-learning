import actionTypes from "./actionType"

const startFetchBlogList = () => {
  return {
    type: actionTypes.START_FETCH_BLOG_LIST,
  }
}

const fetchBlogListSucess = () => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
  }
}
const fetchBlogListSucess = () => {
    return {
      type: actionTypes.FETCH_BLOG_LIST_FAILED,
    }
  }
  