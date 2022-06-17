import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(eachPost => (
        <BlogItem key={eachPost.id} BlogItemDetails={eachPost} />
      ))}
    </ul>
  )
}
export default BlogList
