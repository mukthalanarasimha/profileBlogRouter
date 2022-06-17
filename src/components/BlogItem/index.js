import './index.css'

const BlogItem = props => {
  const {BlogItemDetails} = props
  const {title, description, publishedDate} = BlogItemDetails

  return (
    <li>
      <div className="min_container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
