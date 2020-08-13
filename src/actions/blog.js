import actionTypes from "./actionType"
import { getPosts } from "../service"

const startFetchBlogList = () => {
  return {
    type: actionTypes.START_FETCH_BLOG_LIST,
  }
}

const fetchBlogListSucess = (payload) => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
    payload,
  }
}
const fetchBlogListFailed = () => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_FAILED,
  }
}

export const fetchBlogList = () => (dispatch) => {
  dispatch(startFetchBlogList())
  getPosts()
    .then((resp) => {
      if (resp.status === 200) {
        dispatch(
          fetchBlogListSucess({
            list: resp.data,
          })
        )
      } else {
        dispatch(fetchBlogListFailed())
      }
    })
    .catch((err) => {
      console.log(err)
      dispatch(fetchBlogListFailed())
    })
}
